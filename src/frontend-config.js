const colors = {
    primary: '#F95759',
    lightgrey: '#EDEDED',
    grey: '#CCC',
    darkgrey: '#666666',
    dark: '#262626',
    orange: '#db5f00'
}

const sizes = {
    maxWidth: '1500px'
}

const getColor = color => {
    return colors[color];
}

const getPageSize = size => {
    return sizes[size];
}

export { getColor, getPageSize };