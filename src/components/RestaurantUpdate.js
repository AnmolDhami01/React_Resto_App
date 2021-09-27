import React, { Component } from 'react';
import {Button} from 'react-bootstrap'
import NavaBarMenu from './NavaBarMenu';
class RestaurantUpdate extends Component {

    constructor(){
        super();
        this.state={
            name:null,
            email:null,
            rating:null,
            address:null,
            id:null
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/restaurant/'+this.props.match.params.id).then((resp) => {
            resp.json().then((result) => {
                console.log(result)
                this.setState({ 
                    name:result.name,
                    email:result.email,
                    id:result.id,
                    rating:result.rating,
                    address:result.address
                 })
            })
        })
    }

    update(){
        fetch('http://localhost:3000/restaurant/'+this.state.id,{
           method:"PUT",
           headers:{ 
               'Content-Type':'application/json'
           },
           body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Restaurant Has Been Updated")
            })
        })
    }

    render() {
        // console.warn(this.props.match.params.id);
        // console.warn(this.state)
        
        return (
            <div>
                <div className="App-header">
                <NavaBarMenu />
                <h1 >RestaurantUpdate</h1>
                    <input placeholder="Restaurtant Name" value={this.state.name} onChange={(event)=>{this.setState({name:event.target.value})}}></input><br/>
                    <input placeholder="Restaurtant Email" value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}}></input><br/>
                    <input placeholder="Restaurtant Rating" value={this.state.rating} onChange={(event)=>{this.setState({rating:event.target.value})}}></input><br/>
                    <input placeholder="Restaurtant Location" value={this.state.address} onChange={(event)=>{this.setState({address:event.target.value})}}></input><br/>
                    <Button onClick={()=>{this.update()}}>Submit</Button>
                </div>
            </div>
        );
    } 
}

export default RestaurantUpdate;