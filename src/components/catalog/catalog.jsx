import React, { Component } from "react";
import Navbar from './navbar.jsx';
import FontCard from './FontCard.jsx';
import { CardsList } from "./styles.js";

const INITIAL_STATE = {
    fontsAmount: 0,
    searchString: '',
    previewString: '',
    previewText: "She stared through the window at the stars.",
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
        this.onScroll = this.onScroll.bind(this);
    }

    componentDidUpdate(prevProps) {
        const { fonts } = this.props;
        if (fonts && prevProps.fonts === null) {
            this.getNextFonts();
            window.addEventListener('scroll', this.onScroll, true);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    onScroll() {
        const viewportHeight = window.pageYOffset + window.innerHeight
        const bodyHeight = document.getElementById('app').offsetHeight;

        if(viewportHeight >= bodyHeight - 300) {
            this.getNextFonts();
        }
    }

    getNextFonts() {
        const { fontsAmount } = this.state;
        const { fonts } = this.props;
        
        const newFontsAmount = fontsAmount + 24;
        const loadedFonts = fonts.slice(0, newFontsAmount);

        this.setState({
            fonts: loadedFonts,
            fontsAmount: newFontsAmount
        })
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
        const { searchString, previewString, fontSize, previewText, fonts } = this.state;
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
                        <FontCard key={font.family} font={font} text={previewText} fontSize={fontSize} />
                    ))}
                </CardsList>
            </>
        )
    }
}