package com.example.thymeleaftest.views;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {

    @GetMapping("/")
    public String loginPage(){
        return "login";
    }

    @GetMapping("/layout")
    public String layout(){
        return "layout";
    }


    @GetMapping("/main")
    public String main(){
        return "main";
    }


}
