import React from "react";
import { connect } from 'react-redux';
import { Wrapper, TopContainer, InnerWrapper, Overlay, InnerHeadline, InnerDescription, CodeContainer, SelectionContainer, ClearAllButton } from "./styles.js";

class FontContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            containerOpen: false
        }

        this.toggleContainer = this.toggleContainer.bind(this);
    }

    toggleContainer() {
        this.setState(prevState => ({
            containerOpen: !prevState.containerOpen
        }))
    }

    renderCodeSnippet() {
        const { selectedFonts } = this.props;
        const fontString = selectedFonts
            .map(font => font.family.replace(' ', '+'))
            .join('|')

        return fontString;
    }

    render() {
        const { selectedFonts } = this.props;
        const { containerOpen } = this.state;
        const fontsLength = selectedFonts.length;
        const codeSnippet = fontsLength > 0 ? this.renderCodeSnippet() : null;
    
        const status = containerOpen ? 'open' : fontsLength > 0 ? 'active' : null
    
        return (
            <>
                <Overlay active={containerOpen} onClick={this.toggleContainer} />
                <Wrapper status={status}>
                    <TopContainer onClick={this.toggleContainer}>
                        <span>{fontsLength}</span>
                        Families Selected
                    </TopContainer>
                    <InnerWrapper>
                        <SelectionContainer>
                            <InnerHeadline noMargin>Your Selection</InnerHeadline>
                            <ClearAllButton>Clear All</ClearAllButton>
                        </SelectionContainer>
                        <InnerHeadline>Embed Font</InnerHeadline>
                        <InnerDescription>To embed your selected fonts into a webpage, copy this code into the head of your HTML document.</InnerDescription>
                        {
                            codeSnippet && (
                                <CodeContainer>
                                    {'<link href="https://fonts.googleapis.com/css?family='}
                                    <span>{codeSnippet}</span>
                                    {'&display=swap" rel="stylesheet">'}
                                </CodeContainer>
                            )
                        }
                    </InnerWrapper>
                </Wrapper>
            </>
        )
    }
}

const mapStateToProps = state => ({
    selectedFonts: state.selectedFonts
});

export default connect(
    mapStateToProps,
    null
)(FontContainer)