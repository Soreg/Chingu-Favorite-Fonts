import React, { Component } from "react";
import Navbar from './navbar.jsx';

const INITIAL_STATE = {
    searchString: '',
    previewString: '',
    fontSize: '15px'
}


export default class Catalog extends Component {
    constructor(props) {
        super(props);

        this.state = INITIAL_STATE;

        this.onSearchTextChange = this.onSearchTextChange.bind(this);
        this.onPreviewTextChange = this.onPreviewTextChange.bind(this);
        this.onFontSizeChange = this.onFontSizeChange.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    onSearchTextChange(e) {
        const { value } = e.target;

        this.setState({
            searchString: value
        })
    }
    
    onPreviewTextChange(e) {
        const { value } = e.target;

        this.setState({
            previewString: value
        })
    }
    
    onFontSizeChange(e) {
        const { value } = e.target;

        this.setState({
            fontSize: value
        })
    }

    onReset() {
        this.setState(INITIAL_STATE)
    }

    render() {
        const { searchString, previewString, fontSize } = this.state;
        console.log(this.props);
        return (
            <>
                <Navbar
                    searchString={searchString}
                    previewString={previewString}
                    fontSize={fontSize}
                    onSearch={this.onSearchTextChange}
                    onPreviewChange={this.onPreviewTextChange}
                    onFontSizeChange={this.onFontSizeChange}
                    onReset={this.onReset}
                />
                <div>Catalog list</div>
            </>
        )
    }
}