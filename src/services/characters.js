async function characters(search) {
    const url = `https://rickandmortyapi.com/api/character?page=1?name=${search}`
    const response = await fetch(url)
    return response.json()
}

export default characters