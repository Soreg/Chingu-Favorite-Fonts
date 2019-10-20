import React from "react";
import { connect } from 'react-redux';
import { Wrapper, TopContainer, InnerWrapper, Overlay } from "./styles.js";

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

    render() {
        const { selectedFonts } = this.props;
        const { containerOpen } = this.state;
        const fontsLength = selectedFonts.length;
    
        const status = containerOpen ? 'open' : fontsLength > 0 ? 'active' : null
    
        return (
            <>
                <Overlay active={containerOpen} />
                <Wrapper status={status}>
                    <TopContainer onClick={this.toggleContainer}>
                        <span>{fontsLength}</span>
                        Families Selected
                    </TopContainer>
                    <InnerWrapper>
                        
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