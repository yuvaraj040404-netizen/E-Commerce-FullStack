package com.example.E_Commerce.ProductController;

import com.example.E_Commerce.Entity.Product;
import com.example.E_Commerce.ProductReopository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:4200") // Connect to Angular
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    @GetMapping("/low-stock")
    public List<Product> getLowStockAlerts() {
        return productRepository.findByQuantityLessThanEqual(10);
    }
}