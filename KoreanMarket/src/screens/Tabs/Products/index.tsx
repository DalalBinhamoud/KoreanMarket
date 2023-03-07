import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native";
import { Button, List, Text, Divider } from "react-native-paper";
import { SafeAreaView } from "react-native";
import { IProduct } from "src/models/Product";
import ProductService from "src/services/Product";
import { ProductsStyle } from "./ProductsStyle";
import { IScreenNavigation } from "src/models/screen";
import GestureRecognizer from "react-native-swipe-gestures";

const Products = (props: IScreenNavigation) => {
  const { t } = useTranslation();
  const [products, setProducts] = useState<IProduct[]>([]);
  const { getProducts } = ProductService();

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });

    const willFocusSubscription = props.navigation.addListener("focus", () => {
      getProducts().then((res) => {
        setProducts(res.data);
      });
    });

    return willFocusSubscription;
  }, []);

  const createProduct = () => {
    props.navigation.navigate("product-details", {
      mode: "create",
      product: {
        name: "",
        description: "",
        category: "clothes",
        price: "1",
        unitsInStock: "0",
      },
    });
  };

  const viewProduct = (product: IProduct) => {
    props.navigation.navigate("product-details", { mode: "view", product });
  };

  const onSwipeLeft = (gestureState) => {
    console.log("You swiped left");
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <SafeAreaView>
      <ScrollView style={ProductsStyle.scrollViewHight}>
        {products.map((product, index) => (
          <>
            <GestureRecognizer
              onSwipeLeft={onSwipeLeft}
              config={config}
              style={{
                flex: 1,
                backgroundColor: "green",
              }}
            >
              <List.Item
                key={index}
                title={product.name}
                description={product.description}
                left={(props) => <List.Icon {...props} icon="file" />}
                onPress={() => viewProduct(product)}
              />
            </GestureRecognizer>
            <Divider key={`${index}_divider`} />
          </>
        ))}
      </ScrollView>
      <Button style={ProductsStyle.addBtn} onPress={createProduct}>
        <Text adjustsFontSizeToFit={true} style={ProductsStyle.plus}>
          {"+"}
        </Text>
      </Button>
    </SafeAreaView>
  );
};

export default Products;
