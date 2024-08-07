package com.testapp.demo.tree;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/trees")
public class TreeController {

    @Autowired
    private TreeService treeService;
    
    /**
     * Get a list of the number of trees in each district
     * @return List of TreeInDistrictsDTO
     */
    @GetMapping("/districts/count")
    public List<TreeInDistrictsDTO> getNbTreeDistricts() {
        try {
            return treeService.getTreeDistricts();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error while fetching tree in districts data", e);
        }
    }

    /**
     * Get a list of the number of trees for each type of tree
     * @return List of TreeInTypesDTO
     */
    @GetMapping("/types/count")
    public List<TreeInTypesDTO> getNbTreeTypes() {
        return treeService.getTreeTypes();
    }
}
