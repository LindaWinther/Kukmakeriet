package com.example.kukmakeriet;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    private static final Product DEMO_PRODUCT = new Product(
            "Skulptur No. 01",
            "Ett handformat objekt i mörk, glaserad stengodslera. Varje form får sitt eget uttryck " +
                    "och små variationer är en del av hantverket.",
            "650 kr",
            "Stengods · blank glasyr · unikt exemplar",
            "produktbild01.png"
    );

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("product", DEMO_PRODUCT);
        return "home";
    }

    @GetMapping("/produkt")
    public String product(Model model) {
        model.addAttribute("product", DEMO_PRODUCT);
        return "product";
    }

    public record Product(String name, String description, String price, String details, String image) {
    }
}
