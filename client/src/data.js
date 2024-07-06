import axios from 'axios';
export  default async function getMediaData() {


  const options = {
    method: 'GET',
    url: 'https://blogs-api1.p.rapidapi.com/get-blogs',
    params: {
      q: 'apple',
      from: '2024-03-09',
      to: '2024-03-09',
      sortBy: 'popularity'
    },
    headers: {
      'x-rapidapi-key': '6591fb0682msh4c5c25fab2bbea7p1b04acjsn28f88eb35d95',
      'x-rapidapi-host': 'blogs-api1.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    (response.data);
  } catch (error) {
    console.error(error);
  }
 
    
    
}