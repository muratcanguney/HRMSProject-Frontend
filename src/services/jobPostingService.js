import axios from "axios";

export default class jobPostingService {
    getActiveJobPosting() {
        return axios.get("http://localhost:8080/getJobPostingWithActiveTrue");
    }
}