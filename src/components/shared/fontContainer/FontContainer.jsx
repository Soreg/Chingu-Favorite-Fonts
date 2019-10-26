import React from "react";
import { connect } from 'react-redux';
import { clearFonts } from '../../../store/actions'
import { Wrapper, TopContainer, InnerWrapper, Overlay, InnerHeadline, InnerDescription, CodeContainer, SelectionContainer, ClearAllButton, LinkButton, LinkButtonWrapper, Divider, CodeSnippetLine } from "./styles.js";

class FontContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            containerOpen: false,
            snippetType: 'standard'
        }

        this.toggleContainer = this.toggleContainer.bind(this);
        this.onClearFonts = this.onClearFonts.bind(this);
        this.setSnippetType = this.setSnippetType.bind(this);
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

    renderCssSnippet() {
        const { selectedFonts } = this.props;

        const arr = selectedFonts.map(font => {
            const { family, category } = font;
            const type = category === 'handwriting' ? 'cursive' : category;
            return `font-family: '${family}', ${type};`
        })

        return arr;
    }

    onClearFonts() {
        const { clearFonts } = this.props;

        clearFonts();
        this.setState({
            containerOpen: false
        })
    }

    setSnippetType(type) {
        const { snippetType } = this.state;

        if (snippetType !== type) {
            this.setState({
                snippetType: type
            })
        }
    }

    render() {
        const { selectedFonts } = this.props;
        const { containerOpen, snippetType } = this.state;
        const fontsLength = selectedFonts.length;
        const codeSnippet = fontsLength > 0 ? this.renderCodeSnippet() : null;
        const cssSnippet = this.renderCssSnippet();
    
        const status = containerOpen ? 'open' : fontsLength > 0 ? 'active' : null
    
        return (
            <>
                <Overlay active={containerOpen} onClick={this.toggleContainer} />
                <Wrapper status={status}>
                    <TopContainer onClick={this.toggleContainer}>
                        <span>{fontsLength}</span>
                        {fontsLength === 1 ? (
                            `Family selected`
                        ) : (
                            `Families selected`
                        )}
                    </TopContainer>
                    <InnerWrapper>
                        <SelectionContainer>
                            <InnerHeadline noMargin>Your Selection</InnerHeadline>
                            <ClearAllButton onClick={this.onClearFonts}>Clear All</ClearAllButton>
                        </SelectionContainer>
                        <InnerHeadline>Embed Font</InnerHeadline>
                        <InnerDescription>To embed your selected fonts into a webpage, copy this code into the head of your HTML document.</InnerDescription>

                        <LinkButtonWrapper>
                            <LinkButton active={snippetType === 'standard'} onClick={() => this.setSnippetType('standard')}>Standard</LinkButton>
                            <LinkButton active={snippetType === 'import'} onClick={() => this.setSnippetType('import')}>@Import</LinkButton>
                        </LinkButtonWrapper>
                        
                        {
                            codeSnippet && (
                                snippetType === 'standard' ? (
                                    <CodeContainer>
                                        {'<link href="https://fonts.googleapis.com/css?family='}
                                        <span>{codeSnippet}</span>
                                        {'&display=swap" rel="stylesheet">'}
                                    </CodeContainer>
                                ) : (
                                    <CodeContainer>
                                        <div>{'<style>'}</div>
                                        {"@import url('https://fonts.googleapis.com/css?family="}
                                        <span>{codeSnippet}</span>
                                        {"&display=swap');"}
                                        <div>{'</style>'}</div>
                                    </CodeContainer>
                                )
                            )
                        }
                        <Divider />

                        <InnerHeadline>Specify in CSS</InnerHeadline>
                        <InnerDescription>Use the following CSS rules to specify these families:</InnerDescription>

                        <CodeContainer>
                            {cssSnippet && cssSnippet.map(snippet => (
                                <CodeSnippetLine key={snippet}>{snippet}</CodeSnippetLine>
                            ))}
                        </CodeContainer>
                    </InnerWrapper>
                </Wrapper>
            </>
        )
    }
}

const mapStateToProps = state => ({
    selectedFonts: state.selectedFonts
});

const mapDispatchToProps = {
    clearFonts
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FontContainer)