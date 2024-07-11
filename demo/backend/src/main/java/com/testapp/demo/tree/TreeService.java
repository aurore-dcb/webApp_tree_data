package com.testapp.demo.tree;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TreeService {
    
    @Autowired
    private TreeRepository treeRepository;

    public List<TreeInDistrictsDTO> getTreeDistricts() throws Exception {
        try {
            return treeRepository.fetchTreeDistricts();
        } catch (Exception e) {
            throw new Exception("Error while fetching tree in districts data", e);
        } 
    }

    public List<TreeInTypesDTO> getTreeTypes() {
        return treeRepository.fetchTreeTypes();
    }
}
