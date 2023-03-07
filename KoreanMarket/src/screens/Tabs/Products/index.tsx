import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, View } from "react-native";
import { Button, List, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { Product } from "src/models/Product";
import ProductService from "src/services/Product";
import { ProductsStyle } from "./ProductsStyle";

const Products = () => {
  const { t } = useTranslation()
  const [products, setProducts] = useState<Product[]>([]);
  const { getProducts } = ProductService();

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={ProductsStyle.scrollViewHight}>
        {products.map((product,index) => (
          <List.Item
            key={index}
            title={product.name}
            description={product.description}
            left={(props) => <List.Icon {...props} icon="file" />}
          />
        ))}
      </ScrollView>
      <Button style={ProductsStyle.addBtn}><Text adjustsFontSizeToFit={true} style={ProductsStyle.plus}> + </Text></Button>
    </SafeAreaView>
  );
};

export default Products;
