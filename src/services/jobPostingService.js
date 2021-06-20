import axios from "axios";

export default class jobPostingService {
    getActiveJobPosting() {
        return axios.get("http://localhost:8080/getJobPostingWithActiveTrue");
    }

    addPost(jobPost) {
        return axios.post("http://localhost:8080/api/jobPostings/addJobPosting", jobPost);
    }

    getAdminWaitingJobPostingConfirm() {
        return axios.get("http://localhost:8080/api/jobPostings/getJobPostingWithAdminConfirmFalse");
    }
}