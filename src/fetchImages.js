import axios from 'axios';

const key = '30575180-f51bf292afceb69c3d087b7fc';
const params =
  'per_page=40&orientation=horizontal&image_type=photo&safesearch=true';

export async function fetchImages(searchImages, page) {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=${key}&q=${searchImages}&${params}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
