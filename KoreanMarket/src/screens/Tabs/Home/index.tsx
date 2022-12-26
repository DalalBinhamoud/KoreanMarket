import { useEffect, useState } from "react";
import { View } from "react-native";
import { List } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "src/components/Layouts";
import { Product } from "src/models/Product";
import ProductService from "src/services/Product";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { getProducts } = ProductService();

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <SafeAreaView>
      <Header title="welcome" hasBackBtn={false} />
      <View>
        {products.map((product,index) => (
          <List.Item
            key={index}
            title={product.name}
            description={product.description}
            left={(props) => <List.Icon {...props} icon="file" />}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Home;
