import axios from "axios";

const api = axios.create({
  baseURL: "http://80.211.3.196:3000/api"
});

export const getAllMovies = () => api.get(`/movies`);
export const getMovieById = id => api.get(`/movie/${id}`);
export const insertMovie = payload => api.post(`/movie`, payload);
export const updateMovieById = (id, payload) =>
  api.put(`/movie/${id}`, payload);
export const deleteMovieById = id => api.delete(`/movie/${id}`);

const apis = {
  getAllMovies,
  getMovieById,
  insertMovie,
  updateMovieById,
  deleteMovieById
};

export default apis;
