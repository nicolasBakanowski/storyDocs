import { Dispatch } from "redux";
import axios from "../axios.config";
import { deleteProductFromState, setCurrentProduct, setProducts } from "../slices/productSlice";
import { ProductEdit, createProduct } from "@/interfaces/Products";

export const getAllProducts =
  () => async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`product/all`);
      dispatch(setProducts(response.data));
    } catch (error) {
      console.error("Error fetching products by category:", error);
    }
  };

export const getProductById =
  (id: Number) => async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`product/${id}`);
      dispatch(setCurrentProduct(response.data))
    } catch (error) {
      console.error("Error fetching products by category:", error);
    }
  };

export const addProduct =
  (productData: createProduct, token: string) => async (dispatch: Dispatch) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.post("/product/new", productData, config);
      return true;
    } catch (error) {
    }
  };

export const editProduct =
  (idProduct: number, productData: ProductEdit, token: string) => async (dispatch: Dispatch) => {
    try {
      productData.price = parseInt(productData.price.toString(), 10);
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.put(`/product/edit/${idProduct}`, productData, config);
      return true;
    } catch (error) {
      console.error("error al editar el producto", error)
    }
  };
export const deleteProduct = (idProduct: number, token: string) => async (dispatch: Dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.delete(`/product/delete/${idProduct}`, config)
    dispatch(deleteProductFromState(idProduct))
    return response.data;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw new Error('Error deleting product');
  }
};

