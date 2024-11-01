import axios from 'axios';
const API_KEY = '34886676-216aa5272081537bbb6585f7b';

async function searchPictures(query, page) {
  const response = await axios.get(
    ` https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=15`
  );

  const images = response.data;

  return images;
}

export { searchPictures };
