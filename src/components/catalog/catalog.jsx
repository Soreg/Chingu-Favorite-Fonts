import React, { Component } from "react";
import Navbar from './navbar.jsx';
import FontCard from './FontCard.jsx';
import { CardsList } from "./styles.js";

const INITIAL_STATE = {
    searchString: '',
    previewString: null,
    previewText: "Lorem ipsum...",
    fontSize: '32px'
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
            previewString: value,
            previewText: value
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
        const { searchString, previewString, fontSize, previewText } = this.state;
        const { fonts } = this.props;
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
                <CardsList>
                    {fonts && fonts.map(font => (
                    <FontCard key={font.family} font={font} text={previewText} />
                    ))}
                </CardsList>
            </>
        )
    }
}