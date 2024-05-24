export const getFilmsStarWars = async () => {
    const response = await fetch('http https://swapi.dev/api/films');
    const data = await response.json();
    return data;
}
export const getStarShipsStarWars = async () => {
    const response = await fetch('http https://swapi.dev/api/starships');
    const data = await response.json();
    return data;
}
export const getCharactersStarWars = async () => {
    const response = await fetch('http https://swapi.dev/api/people');
    const data = await response.json();
    return data;
}