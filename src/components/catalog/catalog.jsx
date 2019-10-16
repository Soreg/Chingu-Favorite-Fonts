import React, { Component } from "react";
import Navbar from './navbar.jsx';

const INITIAL_STATE = {
    searchString: '',
    previewString: '',
    fontSize: 32
}

export default class Catalog extends Component {
    constructor(props) {
        super(props);

        this.state = INITIAL_STATE;
    }

    render() {
        return (
            <>
                <Navbar />
                <div>Catalog list</div>
            </>
        )
    }
}