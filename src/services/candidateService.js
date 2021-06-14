import axios from "axios";

export default class candidateService{
    getAllCandidate(){
        return axios.get("http://localhost:8080/api/candidates/getAll");
    }
}