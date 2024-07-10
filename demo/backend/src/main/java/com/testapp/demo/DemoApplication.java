package com.testapp.demo;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URLConnection;
import java.net.URL;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
			
		try {
			URL url = new URL("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/les-arbres/");
			URLConnection connection = url.openConnection();
			try (BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream())))
			{
			    String line;
			    while ((line = in.readLine()) != null) {
			        System.out.println(line);
			    }
			}
		} catch (Exception e) {
			System.out.println(e);
		}

		SpringApplication.run(DemoApplication.class, args);
	}

}
