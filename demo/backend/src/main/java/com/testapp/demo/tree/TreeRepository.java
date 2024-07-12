package com.testapp.demo.tree;

import org.springframework.stereotype.Repository;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;

@Repository
public class TreeRepository {

    private final String externApiBaseUrl;

    public TreeRepository(@Value("${EXTERN_API_BASE_URL}") String externApiBaseUrl) {
        this.externApiBaseUrl = externApiBaseUrl;
    }
    
    /** return a list of the number of trees for each district using the external API
     * @return list of TreeInDistrictsDTO objects
     */
    public List<TreeInDistrictsDTO> fetchTreeDistricts() {
        List<TreeInDistrictsDTO> treeDistricts = new ArrayList<>();
        BufferedReader in = null;

        try {
			URL url = new URL(externApiBaseUrl + "/records?select=count(*)&where=search(arrondissement%2C%20%22PARIS%22)&group_by=arrondissement&limit=20");
			URLConnection connection = url.openConnection();
			in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            JSONParser parser = new JSONParser();
            JSONObject jsonO = (JSONObject) parser.parse(in);
            JSONArray jsonArray = (JSONArray) jsonO.get("results");
            for (Object o : jsonArray) {
                JSONObject result = (JSONObject) o;
                String districts = (String) result.get("arrondissement");
                long count = (long) result.get("count(*)");
                treeDistricts.add(new TreeInDistrictsDTO(districts, count));
            }
		} catch (Exception e) {
            throw new TreeException("Error while fetching tree in districts data", e);
        }
        return treeDistricts;
    }

    /** return a list of the number of trees for each type of tree using the external API
     * @return list of TreeInTypesDTO objects
     */
    public List<TreeInTypesDTO> fetchTreeTypes() {
        List<TreeInTypesDTO> treeTypes = new ArrayList<>();
        BufferedReader in = null;
        try {
			URL url = new URL(externApiBaseUrl + "/records?select=count(*)&group_by=genre");
			URLConnection connection = url.openConnection();
			in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            JSONParser parser = new JSONParser();
            JSONObject jsonO = (JSONObject) parser.parse(in);
            JSONArray jsonArray = (JSONArray) jsonO.get("results");
            for (Object o : jsonArray) {
                JSONObject result = (JSONObject) o;
                String type = (String) result.get("genre");
                long count = (long) result.get("count(*)");
                treeTypes.add(new TreeInTypesDTO(type, count));
            }
		} catch (Exception e) {
			throw new TreeException("Error while fetching tree in types data", e);
		}
        return treeTypes;
    }
}
