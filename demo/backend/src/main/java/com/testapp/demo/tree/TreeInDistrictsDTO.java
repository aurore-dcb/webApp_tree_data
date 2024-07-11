package com.testapp.demo.tree;

public class TreeInDistrictsDTO {
    
    private String district;
    private Long count;
    
    public TreeInDistrictsDTO() {
    }
    
    public TreeInDistrictsDTO(String district, Long count) {
        this.district = district;
        this.count = count;
    }
    
    public String getDistrict() {
        return district;
    }

    public Long getCount() {
        return count;
    }
    
    public void setDistrict(String district) {
        this.district = district;
    }

    public void setCount(Long count) {
        this.count = count;
    }
}
