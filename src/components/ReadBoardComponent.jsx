import React, { PureComponent } from 'react'
import BoardService from '../service/BoardService'

class ReadBoardComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.no,
            board:{}
        }
    }

    componentDidMount(){
        BoardService.getOne(this.state.id).then(res=>{
            this.setState({board: res.data});
        });
    }

    returnBoardType(typeNo){

        // let type = null;
        // if (typeNo == 1) {
        //     type = "자유게시판";

        // } else if (typeNo == 2 ) {
        //     type = "질문과 답변 게시판";

        // } else {
        //     type = "타입 미지정";
        // }
        const type = "자유게시판";
        return(
            <div className="row">
                <label> Board Type: </label> {type}
            </div>
        )
    }


    returnDate(cTime,uTime){
        return(
            <div className="row">
                <label>생성일: [{cTime}] / 최종 수정일: [{uTime}] </label>
            </div>
        )
    }

    getToList(){
        this.props.history.push('/board');
    }


    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Read Detail</h3>
                    <div className = "card-body">
                        {this.returnBoardType(1)}
                         <div className="row">
                             <label>Title</label> : {this.state.board.title}
                         </div>

                        <div className="row">
                            <label>Contents</label> :<br></br>
                            <textarea value={this.state.board.content} readOnly/>
                        </div>

                        <div className="row">
                             <label>MemberId</label> : {this.state.board.id}
                        </div>

                        <button className="btn btn-primary" onClick = {this.getToList.bind(this)} style={{marginLeft:"10px"}}>글 목록</button>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default ReadBoardComponent