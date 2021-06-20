import axios from "axios";

export default class jobTypeService {
    getAllJobType() {
        return axios.get("http://localhost:8080/api/jobTypes/getall");
    }
}