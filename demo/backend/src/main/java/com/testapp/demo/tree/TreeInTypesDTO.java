package com.testapp.demo.tree;

public class TreeInTypesDTO {
    
    private String type;
    private Long count;

    public TreeInTypesDTO() {
    }
    
    public TreeInTypesDTO(String type, Long count) {
        this.type = type;
        this.count = count;
    }
    
    public String getType() {
        return type;
    }

    public Long getCount() {
        return count;
    }
    
    public void setType(String type) {
        this.type = type;
    }

    public void setCount(Long count) {
        this.count = count;
    }
}
