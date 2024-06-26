export const getFilmsStarWars = async () => {
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();
    return data;
}
export const getStarShipsStarWars = async () => {
    const response = await fetch('https://swapi.dev/api/starships');
    const data = await response.json();
    return data;
}
export const getCharactersStarWars = async () => {
    const response = await fetch('https://swapi.dev/api/people');
    const data = await response.json();
    return data;
}

export const getStarShipsStarWarsById = async (id) =>   {
    const response = await fetch(`https://swapi.dev/api/starships/${id}`);
    const data = await response.json();
    return data;
}

export const getCharactersStarWarsById = async (id) => {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    const data = await response.json();
    return data;
}

export const getFilmsStarWarsById = async (id) => {
    const response = await fetch(`https://swapi.dev/api/films/${id}`);
    const data = await response.json();
    return data;
}