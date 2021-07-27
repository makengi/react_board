import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8080/api/v1/";

class UserService{

    signup(user){
        return axios.post(USER_API_BASE_URL +"signup", user);
    }
    signin(user){
        return axios.post(USER_API_BASE_URL +"signin",user);
    }
    getOne(id){
        return axios.get(USER_API_BASE_URL +"user", id);
    }
    getAllWithoutPaging(){
        return axios.get(USER_API_BASE_URL+"user/all"); 
    }
    

}
export default new UserService();