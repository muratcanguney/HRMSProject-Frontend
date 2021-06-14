import axios from "axios";

export default class employerService {
    getAllEmployer() {
        return axios.get("http://localhost:8080/api/employers/getall");
    }
}