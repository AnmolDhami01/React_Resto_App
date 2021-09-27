import React, { Component } from 'react';
import { Container, Table, H1, Form } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import NavaBarMenu from './NavaBarMenu';
class RestaurantSearch extends Component {
    constructor() {
        super();
        this.state = {
            searchData: null,
            noData: false,
            lastSearch: ""
        }
    }

    search(key) {
        console.warn(key)
        this.setState({ lastSearch: key })
        fetch("http://localhost:3000/restaurant?q=" + key).then((data) => {
            data.json().then((resp) => {
                console.warn("resp", resp)
                if (resp.length > 0) {
                    this.setState({ searchData: resp, noData: false })
                }
                else {
                    this.setState({ noData: true, searchData: null })
                }

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
                    this.search(this.state.lastSearch);
                })
            })

    }

    render() {
        return (
            <div className="App-header">
                <NavaBarMenu />
                <Container>
                <h1>RestaurantSearch</h1><br /><br />

                    <Form.Control className="mb-3" type="text" onChange={(event) => this.search(event.target.value)} placeholder="Enter Details About Which Restaurant Are You Looking For" />
                    <div>{
                        this.state.searchData ?
                        <div>
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
                                            this.state.searchData.map((item, i) =>
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
                    : ""
                    }
                    {
                        this.state.noData ? <h3>No Data Found</h3> : null
                    }

                    </div>
                    </Container>
            </div>
        );
    }
}

export default RestaurantSearch;