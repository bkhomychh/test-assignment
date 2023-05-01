import axios from 'axios';
import { BASE_URL } from 'utils';

axios.defaults.baseURL = BASE_URL;

export const getItemReviews = async id => {
  const res = await axios.get('/comments', { params: { postId: id } });
  return res.data;
};
