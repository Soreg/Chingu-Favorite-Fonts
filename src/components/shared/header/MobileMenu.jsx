import React from 'react';
import { withRouter } from "react-router-dom";
import { MenuOverlay, MenuWrapper, SectionHeadline, Section } from './styles';

class MobileMenu extends React.Component {
    constructor(props) {
        super(props);

        this.onLinkClick = this.onLinkClick.bind(this);
    }

    onLinkClick(target) {
        const { history, closeMenu } = this.props;

        history.push(target);
        closeMenu();
    }

    render() {
        const { open, closeMenu } = this.props;

        return (
            <>
                <MenuOverlay show={open} onClick={closeMenu} />
                <MenuWrapper show={open}>
                    <SectionHeadline>Navigation</SectionHeadline>
                    <Section onClick={() => this.onLinkClick('/catalog')}>Catalog</Section>
                    <Section onClick={() => this.onLinkClick('/featured')}>Featured</Section>
                    <Section onClick={() => this.onLinkClick('/articles')}>Articles</Section>
                    <Section onClick={() => this.onLinkClick('/about')}>About</Section>

                </MenuWrapper>
            </>
        )
    }
}

export default withRouter(MobileMenu)