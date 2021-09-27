import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import NavaBarMenu from './NavaBarMenu';
class Login extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            password:""
        }
    }

    login(){
        console.warn(this.state)
        fetch("http://localhost:3000/login?q=" + this.state.name).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                if(resp.length>0){
                    localStorage.setItem('login', JSON.stringify(resp ))
                    console.warn(this.props.history.push('list'))
                }
                else{
                    alert("Please Check Username And Password")
                }
                

            })
        })

    }
    

    render() {
        return (
            <div>

                <NavaBarMenu />
            <div className="App-header1">
                <h1>Login Here</h1>
                <Container>
                    <input type="text" placeholder="Enter Username " name="user" onChange={(event)=>this.setState({name:event.target.value})}/><br/><br/>
                    <input type="password" placeholder="Enter Password " name="password" onChange={(event)=>this.setState({password:event.target.value})}/><br/><br/>
                    <Button onClick={()=>{this.login()}}>Login</Button>
                </Container>
            </div>
            </div>
        );
    }
}

export default Login;