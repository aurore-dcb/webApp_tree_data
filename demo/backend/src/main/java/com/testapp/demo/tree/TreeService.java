package com.testapp.demo.tree;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TreeService {
    
    @Autowired
    private TreeRepository treeRepository;

    public List<TreeDTO> getTreeTypes() {
        return treeRepository.fetchTreeTypes();
    }
}
