const colors = {
    primary: '#F95759',
    lightgrey: '#EDEDED',
    grey: '#CCC',
    darkgrey: '#666666',
    dark: '#262626',
    orange: '#eb6e0e'
}

const sizesRaw = {
    maxWidth: 1500,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1280,
}

const sizes = {
    maxWidth: `${sizesRaw.maxWidth}px`,
    sm: `${sizesRaw.sm}px`,
    md: `${sizesRaw.md}px`,
    lg: `${sizesRaw.lg}px`,
    xl: `${sizesRaw.xl}px`,
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

const breakpointsRaw = size => {
    return sizesRaw[size]
}

export { getColor, getPageSize, breakpoint, breakpointsRaw };