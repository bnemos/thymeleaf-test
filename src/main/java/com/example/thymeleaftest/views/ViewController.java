package com.example.thymeleaftest.views;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {

    @GetMapping("/")
    public String loginPage(){
        return "login";
    }

    @GetMapping("/main")
    public String main(){
        return "main";
    }


}
