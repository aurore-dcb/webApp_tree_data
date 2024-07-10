package com.testapp.demo.tree;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/tree")
public class TreeController {

    @Autowired
    private TreeService treeService;
    
    @GetMapping("/types")
    public List<TreeDTO> getTypes() {
        return treeService.getTreeTypes();
    }
}
