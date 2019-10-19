import { useSelector } from 'react-redux'

const colors = {
    primary: '#F95759',
    lightgrey: '#EDEDED',
    grey: '#CCC',
    darkgrey: '#666666'
}

const sizes = {
    maxWidth: '1500px'
}

const getColor = color => {
    const lightmode = useSelector(state => state.lightmode);
    return colors[color];
}

const getPageSize = size => {
    return sizes[size];
}

export { getColor, getPageSize };