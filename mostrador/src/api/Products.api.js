import axios from "axios";
const productApi = axios.create({
  baseURL: "http://localhost:8080/productos/api/v1/productos",
});

export const getAllProducts = () => productApi.get("/");

export const getProduct = (id) => productApi.get(`/${id}/`);

export const createProduct = (product) => productApi.post("/", product);

export const deleteProduct = (id) => productApi.delete(`/${id}`);

export const updateProduct = (id, product)=> productApi.put(`/${id}/`, product)