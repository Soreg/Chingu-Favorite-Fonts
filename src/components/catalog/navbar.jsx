import React, { Component } from "react";
import { NavbarWrapper, NavSearchInput, NavSampleTextInput, NavSelect, NavReset, NavModeWrapper, NavModeButton } from './styles';
import ResetIcon from '../../assets/icons/reset.svg';

export default class Navbar extends Component {
    render() {
        const {
            searchString,
            previewString,
            fontSize,
            onSearch,
            onPreviewChange,
            onFontSizeChange,
            onReset
        } = this.props;

        const fontSizes = [
            "15px",
            "24px",
            "32px",
            "48px"
        ]
        
        return (
            <NavbarWrapper>
                <NavSearchInput placeholder='Search fonts' value={searchString} onChange={onSearch} />
                <NavSampleTextInput placeholder='Type sample text' value={previewString} onChange={onPreviewChange} />
                <NavSelect value={fontSize} onChange={onFontSizeChange}>
                    {fontSizes.map(size => (
                        <option key={size}>{size}</option>
                    ))}
                </NavSelect>
                <NavModeWrapper>
                    <NavModeButton dark />
                    <NavModeButton />
                </NavModeWrapper>
                <NavReset>
                    <ResetIcon width={25} onClick={onReset} />
                </NavReset>
            </NavbarWrapper>
        )
    }
}