package com.example.kukmakeriet;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    private static final Product DEMO_PRODUCT = new Product(
            "Skulptur No. 01",
            "Ett handformat objekt i mörk, glaserad stengodslera – lekfullt, rått och precis lagom olämpligt. " +
                    "Varje form får sin egen personlighet och finns bara i ett exemplar.",
            "650 kr",
            "Stengods · blank glasyr · unikt exemplar",
            "produktbild01.png"
    );

    private static final Product DEMO_PRODUCT_TWO = new Product(
            "Skål No. 02",
            "En handbyggd skål med livlig glasyr. Beviset på att allt från verkstaden inte behöver vara djärvt – " +
                    "ibland behövs något som balanserar upp det hela.",
            "790 kr",
            "Stengods · effektglasyr · unikt exemplar",
            "produktbild02.png"
    );

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("product", DEMO_PRODUCT);
        model.addAttribute("productTwo", DEMO_PRODUCT_TWO);
        return "home";
    }

    @GetMapping("/produkt")
    public String product(Model model) {
        model.addAttribute("product", DEMO_PRODUCT);
        return "product";
    }

    @GetMapping("/produkter")
    public String products() {
        return "products";
    }

    public record Product(String name, String description, String price, String details, String image) {
    }
}
