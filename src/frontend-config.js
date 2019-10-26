const colors = {
    primary: '#F95759',
    lightgrey: '#EDEDED',
    grey: '#CCC',
    darkgrey: '#666666',
    dark: '#262626',
    orange: '#eb6e0e'
}

const sizes = {
    maxWidth: '1500px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1280px',
}

const getColor = color => {
    return colors[color];
}

const getPageSize = size => {
    return sizes[size];
}

const breakpoint = size => {
    return sizes[size];
}

export { getColor, getPageSize, breakpoint };