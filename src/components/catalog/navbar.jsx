import React from "react";
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../store/actions';
import { NavbarWrapper, NavSearchInput, NavSampleTextInput, NavSelect, NavReset, NavRightWrapper, NavThemeWrapper, NavThemeButton, NavDisplayWrapper, GridImg, ListImg, TestString } from './styles';
import ResetIcon from '../../assets/icons/reset.svg';
import ListIcon from '../../assets/icons/view_list.svg';
import GridIcon from '../../assets/icons/view_grid.svg';

const Navbar = props => {
    const {
        searchString,
        previewString,
        fontSize,
        listMode,
        onSearch,
        onPreviewChange,
        onFontSizeChange,
        onReset,
        onListModeChange
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
                <NavDisplayWrapper>
                    {listMode ? (
                        <GridIcon height={25} width={30} onClick={onListModeChange} />
                    ) : (
                        <ListIcon height={30} width={30} onClick={onListModeChange} />
                    )}
                </NavDisplayWrapper>
                <NavReset>
                    <ResetIcon width={25} onClick={onReset} />
                </NavReset>
            </NavRightWrapper>
        </NavbarWrapper>
    )
}

export default Navbar;