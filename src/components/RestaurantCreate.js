import React, { Component } from 'react';
import { Button, Form, FormGroup } from 'react-bootstrap'
import NavaBarMenu from './NavaBarMenu';

class RestaurantCreate extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            email:null,
            rating:null,
            address:null,
        }
    }
    create(){
       fetch('http://localhost:3000/restaurant',{
           method:"POST",
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Restaurant Has Been Added")
            })
        })
    }
    render() {
        return (
            <div>

                <NavaBarMenu />
            <div className="App-header1">
                <h1>RestaurantCreate</h1>
                <div  >

                    {/* <input placeholder="Restaurtant Name" onChange={(event)=>{this.setState({name:event.target.value})}}></input><br/><br/>
                    <input placeholder="Restaurtant Email" onChange={(event)=>{this.setState({email:event.target.value})}}></input><br/><br/>
                    <input placeholder="Restaurtant Rating" onChange={(event)=>{this.setState({rating:event.target.value})}}></input><br/><br/>
                    <input placeholder="Restaurtant Location" onChange={(event)=>{this.setState({address:event.target.value})}}></input><br/><br/>
                    <button onClick={()=>{this.create()}}>Submit</button> */}
                    <Form>

                        <Form.Group className="mb-3" controlId="formBasicEmail" onChange={(event)=>{this.setState({name:event.target.value})}}>
                            <Form.Label>Restauranst Name</Form.Label>
                            <Form.Control type="text" placeholder="Restaurant Name Here" />
                            <Form.Text className="text-muted">
                            Please Enter The Registred Names Only.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail" onChange={(event)=>{this.setState({email:event.target.value})}}>
                            <Form.Label>Restaurant  Email</Form.Label>
                            <Form.Control type="email" placeholder="Restaurant Email Here" />
                            <Form.Text className="text-muted">
                                Email Are For Just For Verifaction.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword" onChange={(event)=>{this.setState({rating:event.target.value})}}>
                            <Form.Label>Restaurant Rating</Form.Label>
                            <Form.Control type="text" placeholder="Enter Ratings Here" />
                            <Form.Text className="text-muted">
                                Ratings Should Be Under 5.
                            </Form.Text>
                        </Form.Group>
                       

                        <Form.Group className="mb-3" controlId="formBasicPassword" onChange={(event)=>{this.setState({address:event.target.value})}}>
                            <Form.Label>Restaurant Location</Form.Label>
                            <Form.Control type="text" placeholder="Enter Location" />
                            <Form.Text className="text-muted">
                                Enter City Name Only.
                            </Form.Text>
                        </Form.Group>
                        

                        <Button variant="primary" type="submit" onClick={()=>{this.create()}}>
                            Add Restaurant
                        </Button>
                    </Form>

                </div>
            </div>
                    </div>
        );
    }
}

export default RestaurantCreate;