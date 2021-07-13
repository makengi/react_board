import React, { PureComponent } from 'react'
import BoardService from '../service/BoardService'

class ListBoardComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            boards : []
        }

        this.createBoard = this.createBoard.bind(this);
    }


    componentDidMount(){

        BoardService.getBoards().then(res=>this.setState({boards : res.data}));
    }


    readBoard(id){
        this.props.history.push(`/read/${id}`);
    }


    createBoard(){
        this.props.history.push('/create-board/');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Boards List</h2>

                <div className="row">
                    <button className="btn btn-primary" onClick={this.createBoard}>작성</button>
                </div>
                <div className="row">
                    <table className ="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>내용</th>
                                <th>작성자</th>
                                <th>만든시간</th>
                                <th>수정시간</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.boards.map(
                                    board=>
                                    <tr key = {board.id}>
                                        <td>{board.id}</td>
                                        <td> <a onClick = {() => this.readBoard(board.id)}>{board.title} </a></td>
                                        <td>{board.content}</td>
                                        <td>{board.author}</td>
                                        <td>{board.createdDate}</td>
                                        <td>{board.modifiedDate}</td>
                                        
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default ListBoardComponent