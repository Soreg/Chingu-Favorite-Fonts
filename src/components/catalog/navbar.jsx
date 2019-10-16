import React, { Component } from "react";
import { NavbarWrapper, NavSearchInput, NavSampleTextInput, NavSelect, NavReset } from './styles';
import ResetIcon from '../../assets/icons/reset.svg';

export default class Catalog extends Component {
    render() {
        return (
            <NavbarWrapper>
                <NavSearchInput placeholder='Search fonts' />
                <NavSampleTextInput placeholder='Type sample text' />
                <NavSelect>
                    <option>15px</option>
                    <option>24px</option>
                    <option>32px</option>
                    <option>48px</option>
                </NavSelect>
                <NavReset>
                    <ResetIcon width={25} />
                </NavReset>
            </NavbarWrapper>
        )
    }
}