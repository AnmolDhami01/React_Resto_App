import React, { Component } from 'react';
import { Container, Table, H1 } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import NavaBarMenu from './NavaBarMenu';

class RestaurantList extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }

    componentDidMount() {
        this.data();
    }

    data(){
        fetch('http://localhost:3000/restaurant').then((resp) => {
            resp.json().then((result) => {
                this.setState({ list: result })
                console.log(result)
            })
        })
    }

    delete(id) {
        fetch('http://localhost:3000/restaurant/' + id,
            {
                method: "DELETE",
                // headers: {
                //     'Content-Type': 'application/json'
                // },
            }).then((result) => {
                result.json().then((resp) => {
                    alert("Restaurant Has Been Deleted")
                    this.data();
                })
            })

    }

    render() {
        return (
            
            <div className="App-header">
                <NavaBarMenu />

                <h1 >RestauranstList</h1>
                {
                    this.state.list ?
                        <div>
                            <div class="container-fluid" >
                                <Table striped bordered hover bg="dark" variant="dark" expand="lg">
                                    <thead>
                                        <tr>
                                            <th>Sno.</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Rating</th>
                                            <th>Loction</th>
                                            <th>Operation</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            this.state.list.map((item, i) =>
                                                // <div className="list-wrapper">

                                                //         <span>{item.name}</span>
                                                //         <span>{item.email}</span>
                                                //         <span>{item.rating}</span>
                                                //         <span>{item.address}</span>
                                                //     </div>

                                                <tr>
                                                    <td>{i + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.rating}</td>
                                                    <td>{item.address}</td>
                                                    <td><Link to={"/update/" + item.id} ><FontAwesomeIcon icon={faEdit} color="white" /></Link>
                                                    <span className="App" onClick={() => this.delete(item.id)}><FontAwesomeIcon icon={faTrashAlt} color="red" /></span></td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        : <p>Please Wait...</p>
                }
            </div>
        );
    }
}

export default RestaurantList;