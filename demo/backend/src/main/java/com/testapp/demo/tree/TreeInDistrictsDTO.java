package com.testapp.demo.tree;

public class TreeInDistrictsDTO {
    
    private String arrondissement;
    private Long count;
    
    public TreeInDistrictsDTO() {
    }
    
    public TreeInDistrictsDTO(String arrondissement, Long count) {
        this.arrondissement = arrondissement;
        this.count = count;
    }
    
    public String getArr() {
        return arrondissement;
    }

    public Long getCount() {
        return count;
    }
    
    public void setArr(String arrondissement) {
        this.arrondissement = arrondissement;
    }

    public void setCount(Long count) {
        this.count = count;
    }
}
