package spring.spring.controller;

import spring.spring.entity.Product;
import spring.spring.services.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    public ProductService productService;

    @GetMapping("/product")
    public List<Product> getProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/product/{productid}")
    private Product getProducts(@PathVariable("productid") Long productid) {
        return productService.getProductById(productid).get();
    }

    @PostMapping("/product")
    private Long saveProduct(@RequestBody Product product) {
        productService.createOrUpdateProduct(product);
        return product.getId();
    }

    @DeleteMapping("/product/{productid}")
    private void deleteProduct(@PathVariable("productid") Long productid) {
        productService.deleteByProductId(productid);
    }

    @PutMapping("/product")
    private Product updateProduct(@RequestBody Product product){
        productService.createOrUpdateProduct(product);
        return product;
    }


}
