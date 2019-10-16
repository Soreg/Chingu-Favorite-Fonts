const colors = {
    primary: '#F95759',
    grey: '#CCC',
    darkgrey: '#666666'
}

const sizes = {
    maxWidth: '1700px'
}

const getColor = color => {
    return colors[color];
}

const getPageSize = size => {
    return sizes[size];
}

export { getColor, getPageSize };