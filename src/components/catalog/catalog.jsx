import React, { Component } from "react";
import { debounce } from 'debounce';
import Navbar from './navbar.jsx';
import FontCard from './FontCard.jsx';
import { CardsList, BackToTop } from "./styles.js";

const INITIAL_STATE = {
    fontsAmount: 0,
    searchString: '',
    previewString: '',
    fontSize: '32px',
    displayToTop: false
}


export default class Catalog extends Component {
    constructor(props) {
        super(props);

        this.state = INITIAL_STATE;

        this.fontsAmountPerTime = 24;

        this.onSearchTextChange = this.onSearchTextChange.bind(this);
        this.onPreviewTextChange = this.onPreviewTextChange.bind(this);
        this.onFontSizeChange = this.onFontSizeChange.bind(this);
        this.onReset = this.onReset.bind(this);
        this.onScroll = this.onScroll.bind(this);
        this.doSearch = debounce(this.doSearch.bind(this), 300)
    }

    componentDidMount() {
        const { fonts } = this.props;
        
        window.addEventListener('scroll', this.onScroll, true);
        if (fonts) {
            this.getNextFonts();
        }
    }

    componentDidUpdate(prevProps) {
        const { fonts } = this.props;
        if (fonts && prevProps.fonts === null) {
            this.getNextFonts();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    onScroll() {
        const { displayToTop } = this.state;
        const viewportHeight = window.pageYOffset + window.innerHeight
        const bodyHeight = document.getElementById('app').offsetHeight;

        if(viewportHeight >= bodyHeight - 400) {
            this.getNextFonts();
        }

        if (window.pageYOffset >= 400 && !displayToTop) {
            this.setState({
                displayToTop: true
            })
        } else if(window.pageYOffset < 400 && displayToTop) {
            this.setState({
                displayToTop: false
            })
        }
    }

    getNextFonts() {
        const { fontsAmount, searchString } = this.state;
        const { fonts } = this.props;

        const newFontsAmount = fontsAmount + this.fontsAmountPerTime;
        let loadedFonts = [];
        if (searchString) {
            loadedFonts = fonts
                .filter(font => font.family.toLowerCase().includes(searchString.toLowerCase()))
                .slice(0, newFontsAmount);
        } else {
            loadedFonts = fonts.slice(0, newFontsAmount)
        }

        this.setState({
            fonts: loadedFonts,
            fontsAmount: newFontsAmount
        })
    }

    onSearchTextChange(e) {
        const { value } = e.target;

        this.setState({
            searchString: value
        }, () => {
            this.doSearch(value.toLowerCase());
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
        const { fonts } = this.props;
        const newFonts = fonts.slice(0, this.fontsAmountPerTime);
        
        this.setState({
            ...INITIAL_STATE,
            fonts: newFonts
        })
    }

    doSearch(value) {
        const { fonts } = this.props;

        if (value) {
            const filtered = fonts
                .filter(font => font.family.toLowerCase().includes(value))
                .slice(0, this.fontsAmountPerTime);
            this.setState({
                fonts: filtered
            })
        } else {
            // Reset
            const original = fonts.slice(0, this.fontsAmountPerTime);
            this.setState({
                fonts: original
            })
        }
    }

    scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    render() {
        const { searchString, previewString, fontSize, fonts, displayToTop } = this.state;
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
                        <FontCard key={font.family} font={font} text={previewString} fontSize={fontSize} />
                    ))}
                    <BackToTop show={displayToTop} onClick={this.scrollToTop} />
                </CardsList>
            </>
        )
    }
}