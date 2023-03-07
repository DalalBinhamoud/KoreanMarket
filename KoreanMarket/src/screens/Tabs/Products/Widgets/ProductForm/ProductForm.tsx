import { Formik } from "formik";
import React from "react";
import { useTranslation } from "react-i18next";
import { SafeAreaView, View } from "react-native";
import { Text, Button } from "react-native-paper";
import CustomTextInput from "src/components/Inputs/CustomTextInput";
import Header from "src/components/Layouts/Header";
import { utilities } from "src/constants/Utilities";
import { IScreenNavigation } from "src/models/screen";
import { globalStyles } from "src/styles/global.style";
import { productForm } from "./Validation/ProductForm";
import { Picker } from "@react-native-picker/picker";
import { ProductsStyle } from "../../ProductsStyle";
import IncrementDecrementInput from "src/components/Inputs/IncrementDecrementInput";
import ProductService from "src/services/Product";

const ProductForm = (props: IScreenNavigation) => {
  const { t } = useTranslation();
  const { inputMaxLength, productCategories } = utilities;

  const { addProduct, updateProduct } = ProductService();

  const submitForm = (values) => {
    console.log(values);
    if (props.route.params.mode === "create") {
      addProduct(values).then((res) => {
        console.log("added successfully");
      });
    } else {
      updateProduct(values, values?.id).then((res) => {
        console.log("updated successfully");
      });
    }
  };

  return (
    <SafeAreaView>
      <Header
        title={`${t("crud.create")} ${t("product.index")}`}
        hasBackBtn={true}
        navigation={props.navigation}
      />
      <View style={globalStyles.centeredView}>
        <Formik
          initialValues={props.route.params.product}
          onSubmit={submitForm}
          validationSchema={productForm}
        >
          {({
            handleSubmit,
            handleChange,
            setFieldTouched,
            setFieldValue,
            touched,
            errors,
            values,
          }) => (
            <>
              <CustomTextInput
                testId="name"
                value={values?.name}
                label={t("product.name")}
                maxLength={inputMaxLength().name}
                keyboardType="default"
                touched={touched.name}
                error={errors.name}
                setFieldTouched={() => setFieldTouched("name")}
                handleChange={() => handleChange("name")}
              />

              <CustomTextInput
                testId="description"
                value={values?.description}
                label={t("product.description")}
                maxLength={inputMaxLength().description}
                keyboardType="default"
                touched={touched.description}
                error={errors.description}
                setFieldTouched={() => setFieldTouched("description")}
                handleChange={() => handleChange("description")}
              />

              <Text style={ProductsStyle.pickerText}>
                {t("product.category")}
              </Text>
              <Picker
                style={ProductsStyle.picker}
                selectedValue={values?.category}
                onValueChange={(itemValue, itemIndex) =>
                  setFieldValue("category", itemValue)
                }
              >
                {productCategories().map((item, index) => (
                  <Picker.Item label={item} value={item} key={index} />
                ))}
              </Picker>

              <IncrementDecrementInput
                testId="price"
                label={`${t("product.price")} (${t("currency.SR")})`}
                value={values?.price}
                setFieldValue={setFieldValue}
              />

              <IncrementDecrementInput
                testId="unitsInStock"
                label={t("product.unitsInStock")}
                value={values?.unitsInStock}
                setFieldValue={setFieldValue}
              />

              <Button
                onPress={handleSubmit}
                mode="contained"
                style={globalStyles.actionBtn}
              >
                {t("crud.create")}
              </Button>
            </>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default ProductForm;
