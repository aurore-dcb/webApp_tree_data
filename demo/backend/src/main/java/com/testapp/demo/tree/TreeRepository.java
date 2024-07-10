package com.testapp.demo.tree;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class TreeRepository {
    
    public List<TreeDTO> fetchTreeTypes() {
        List<TreeDTO> treeTypes = new ArrayList<>();
        treeTypes.add(new TreeDTO("Oak"));
        treeTypes.add(new TreeDTO("Pine"));
        treeTypes.add(new TreeDTO("Maple"));
        return treeTypes;
    }
}
