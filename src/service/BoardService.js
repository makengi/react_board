import axios from 'axios';

const BOARD_API_BASE_URL = "http://localhost:8080/api/v1/posts";

class BoardService{

    getBoards(){
        return axios.get(BOARD_API_BASE_URL);
    }

    createBoard(board){
        return axios.post(BOARD_API_BASE_URL, board);
    }

    getOne(id){
        return axios.get(BOARD_API_BASE_URL+"/"+ id);
    }
}

export default new BoardService();