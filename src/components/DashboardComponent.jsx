import React, { PureComponent } from 'react'
import UserService from '../service/UserService'

class DashboardComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            users : []
        }
    }

    componentDidMount(){
        UserService.getAllWithoutPaging()
                    .then(result => this.setState({
                        users : result.data
                    })).catch(
                        error=>{
                            if(error.response.status === 403){
                                console.log('403 errr')
                                this.props.history.push('/login');
                            }      
                    });
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

export default DashboardComponent