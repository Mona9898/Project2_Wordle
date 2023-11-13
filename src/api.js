import axios from 'axios';

const apiKey = 'application_8212359'; 

export const isWordValid = async (word) => {
  try {
    const apiUrl = `https://wordsapiv1.p.rapidapi.com/words/${word}`;
    
    const response = await axios.get(apiUrl, {
      headers: {
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
        'X-RapidAPI-Key': '27263620cdmshe6fd6515fbb1ce1p1b3b73jsn8e8326d839c9',
      },
    });
    
    if (response.data && response.data.word) {
      return true; 
    } else {
      return false; 
    }
  } catch (error) {
    console.error('Error checking word validity:', error);
    return false; 
  }
};
