const API_KEY = process.env.REACT_APP_RAWG_API_KEY;
const BASE_URL = 'https://api.rawg.io/api';

export const getGames = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/games?key=${API_KEY}&page_size=20`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching games:', error);
    return [];
  }
};