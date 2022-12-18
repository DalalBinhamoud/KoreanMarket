package spring.spring.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.spring.entity.Product;
import spring.spring.repository.ProductRepository;

@Service
public class ProductService {
    
    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts(){
        List<Product> products = new ArrayList<Product>();
        productRepository.findAll().forEach(product -> products.add(product));
        return products;
        
    }

    public Optional<Product> getProductById(Long id) {
        return productRepository.findById(id);
    }

    public Product createOrUpdateProduct(Product product) {
        System.out.print("test=1=");
        System.out.print(product);
        productRepository.save(product);
        return product;
    }

    public void deleteByProductId(Long productId) {
       productRepository.deleteById(productId);
    }
}
