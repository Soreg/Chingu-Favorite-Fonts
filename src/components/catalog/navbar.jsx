import React from "react";
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../store/actions';
import { NavbarWrapper, NavSearchInput, NavSampleTextInput, NavSelect, NavReset, NavRightWrapper, NavThemeWrapper, NavThemeButton } from './styles';
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
    ];

    const dispatch = useDispatch();

    function onThemeChange(theme) {
        dispatch(changeTheme(theme))
    }


    return (
        <NavbarWrapper>
            <NavSearchInput placeholder='Search fonts' value={searchString} onChange={onSearch} />
            <NavSampleTextInput placeholder='Type sample text' value={previewString} onChange={onPreviewChange} />
            <NavRightWrapper>
                <NavSelect value={fontSize} onChange={onFontSizeChange}>
                    {fontSizes.map(size => (
                        <option key={size}>{size}</option>
                    ))}
                </NavSelect>
                <NavThemeWrapper>
                    <NavThemeButton onClick={() => onThemeChange('light')} />
                    <NavThemeButton dark onClick={() => onThemeChange('dark')} />
                </NavThemeWrapper>
                <NavReset>
                    <ResetIcon width={25} onClick={onReset} />
                </NavReset>
            </NavRightWrapper>
        </NavbarWrapper>
    )
}

export default Navbar;