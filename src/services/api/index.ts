import { API_URL } from '../../constants/apiConstants';

// This fetched the letter from the API
export const fetchLetterFromAPI = async (
  checkboxNumber: number,
): Promise<string | null> => {
  try {
    const response = await fetch(`${API_URL}${checkboxNumber}`);
    const data = await response.json();
    if (data.letter && typeof data.letter === 'string') {
      return data.letter;
    } else {
      console.error('Invalid response from the API:', data);
      return null;
    }
  } catch (error) {
    console.error('Failed to fetch letter:', error);
    return null;
  }
};
