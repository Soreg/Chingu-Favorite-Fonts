import React from "react";
import { useDispatch } from 'react-redux';
import { setLightmode } from '../../store/actions';
import { NavbarWrapper, NavSearchInput, NavSampleTextInput, NavSelect, NavReset, NavModeWrapper, NavModeButton } from './styles';
import ResetIcon from '../../assets/icons/reset.svg';

const Navbar = props => {
    const {
        searchString,
        previewString,
        fontSize,
        onSearch,
        onPreviewChange,
        onFontSizeChange,
        onReset
    } = props;

    const fontSizes = [
        "15px",
        "24px",
        "32px",
        "48px"
    ]

    const dispatch = useDispatch();

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
                <NavModeButton dark onClick={() => dispatch(setLightmode(false))} />
                <NavModeButton onClick={() => dispatch(setLightmode(true))} />
            </NavModeWrapper>
            <NavReset>
                <ResetIcon width={25} onClick={onReset} />
            </NavReset>
        </NavbarWrapper>
    )
}

export default Navbar