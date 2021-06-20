import axios from "axios";

export default class jobTimeService {
    getAllJobTime() {
        return axios.get("http://localhost:8080/api/jobTimes/getall");
    }
}