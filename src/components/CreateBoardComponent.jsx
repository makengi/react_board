import React, { Component } from 'react'
import BoardService from '../service/BoardService';

class CreateBoardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            type:'',
            title:'',
            contents: '',
            author:''
        }
    }


    changeTypeHandler = (event) =>{
        this.setState({type: event.target.value});
    }

    changeTitleHandler = (event) =>{
        this.setState({title:event.target.value});
    }

    changeContentsHandler = (event)=>{
        this.setState({contents:event.target.value});
    }

    changeAuthorHandler = (event)=>{
        this.setState({author: event.target.value});
    }


    createBoard = (event) =>{

        event.preventDefault();
        console.log('@ create Board')
    
        let board = {
            type: this.state.type,
            title:this.state.title,
            contents: this.state.contents,
            author: this.state.author
        };

        console.log("board=>"+JSON.stringify(board));

        // Springboot 형식 
        const boardRequest = {
            title: this.state.title,
            content : this.state.contents,
            author: this.state.author
        };

        console.log('boardRequest =>: ', JSON.stringify(boardRequest));
        BoardService.createBoard(boardRequest).then(res=>{
            this.props.history.push('/board');
        });
    }

    cancel(){
        console.log('@ cancel board')
        this.props.history.push('/board');
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">새글을 작성해주세요</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Type</label>
                                        <select placeholder="type" name="type" className="form-control" value={this.state.type} onChange={this.changeTypeHandler}>
                                            <option value="1"> 자유 게시판</option>
                                            <option value="2">질문과 답변</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Title</label>
                                        <input type="text" placeholder="title" name="title" className="form-control" value={this.state.title} onChange={this.changeTitleHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>contents</label>
                                        <textarea placeholder="contents" name="contents" className="form-control" value={this.state.contents} onChange ={this.changeContentsHandler}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Author</label>
                                        <input type="text" placeholder="author" name="author" className="form-control" value={this.state.author} onChange={this.changeAuthorHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.createBoard}>Save</button>
                                    <button className="btn btn-danger" onClick={()=>this.cancel()} style={{marginLeft:"10px"}}>취소</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateBoardComponent