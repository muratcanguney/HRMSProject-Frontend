import axios from "axios";

export default class jobTitleService {
    getAllJobTitle() {
        return axios.get("http://localhost:8080/api/jobtitles/getall");
    }
}