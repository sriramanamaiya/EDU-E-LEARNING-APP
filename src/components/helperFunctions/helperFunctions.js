const sortAlphaInAToZ = ( data ) => {
    const result = data.slice(0).sort((a,b) => (a.name > b.name) ? 1 : (b.name > a.name ) ? -1 : 0)
    return result
}

const sortAlphaInZToA = (data) => {
    const result = data.slice(0).sort((a,b) => (b.name > a.name) ? 1 : (a.name > b.name ) ? -1 : 0)
    return result
}

const searchFilter = (data, value) => {
    const result = data.filter((ele) => ele.name.toLowerCase().includes(value.toLowerCase()))
    return result
}

export { sortAlphaInAToZ, sortAlphaInZToA, searchFilter }