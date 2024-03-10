import { Dispatch } from "redux";
import axios from "../axios.config";
import { setCurrentProduct, setProducts } from "../slices/productSlice";
import { ProductEdit } from "@/interfaces/Products";

export const getAllProducts =
  () => async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`product/all`);
      console.log("estos son los productos", response.data)
      dispatch(setProducts(response.data));
    } catch (error) {
      console.error("Error fetching products by category:", error);
    }
  };

export const getProductById =
  (id: Number) => async (dispatch: Dispatch) => {
    try {
      const response = await axios.get(`product/${id}`);
      setCurrentProduct(response.data)
    } catch (error) {
      console.error("Error fetching products by category:", error);
    }
  };

export const addProduct =
  (productData: FormData, token: string) => async (dispatch: Dispatch) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };
      const response = await axios.post("/product/new", productData, config);
      return true;
    } catch (error) {
    }
  };

export const editProduct =
  (idProduct: number, productData: ProductEdit) => async (dispatch: Dispatch) => {
    try {
      productData.price = parseInt(productData.price.toString(), 10);
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.put(`/product/edit/${idProduct}`, productData, config);
      return true;
    } catch (error) {
      console.log("ESTE ES EL ERROR LA PUTA", error)
    }
  };

