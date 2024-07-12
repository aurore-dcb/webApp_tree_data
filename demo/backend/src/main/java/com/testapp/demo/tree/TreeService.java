package com.testapp.demo.tree;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.ArrayList;
import java.util.Comparator;

@Service
public class TreeService {
    
    @Autowired
    private TreeRepository treeRepository;

    /** sort the given list of TreeInDistrictsDTO objects
     * @param list list to be sorted
     * @return sorted list
    */
    public List<TreeInDistrictsDTO> sortList(List<TreeInDistrictsDTO> list) {
        List<TreeInDistrictsDTO> res = new ArrayList<>();
        for (int i = 0; i < list.size(); i++) {
            String[] words = list.get(i).getDistrict().split("\\s+");
            if (words.length > 1) {
                String suff = "";
                if (words[1].replaceAll("[^0-9]", "").equals("1"))
                    suff = "er";
                else
                    suff = "e";
                res.add(new TreeInDistrictsDTO("Paris " + words[1].replaceAll("[^0-9]", "") + suff, list.get(i).getCount()));
            }
        }
        res.sort(Comparator.comparingInt(o -> Integer.parseInt(o.getDistrict().split("\\s+")[1].replaceAll("[^0-9]", ""))));
        return res;
    }

    /** get a TreeInDistrictsDTO objects list from Repository 
     * @return sorted list of TreeInDistrictsDTO objects
    */
    public List<TreeInDistrictsDTO> getTreeDistricts() throws Exception {
        try {
            List<TreeInDistrictsDTO> list = treeRepository.fetchTreeDistricts();
            list = sortList(list);
            return list;

        } catch (Exception e) {
            throw new Exception("Error while fetching tree in districts data", e);
        } 
    }

    /** get a TreeInTypesDTO objects list from Repository 
     * @return sorted list of TreeInDistrictsDTO objects
    */
    public List<TreeInTypesDTO> getTreeTypes() {
        return treeRepository.fetchTreeTypes();
    }
}
