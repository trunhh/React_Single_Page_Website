import axios from 'axios';
import { setLoading, resetLoading } from '../slices/loadingSlice';


export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL';
export const ORDER_PRODUCTS_SUCCESS= 'ORDER_PRODUCTS_SUCCESS';
export const ORDER_PRODUCTS_FAIL= 'ORDER_PRODUCTS_FAIL';


export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading("Đang tải sản phẩm..."));
    const response = await axios.get('https://crm.gtelcts.vn/admin/asm/GetAllProduct');
    const rawProducts = response.data.data;

    const processedProducts = rawProducts.map(product => ({
      ...product,
      img: `https://crm.gtelcts.vn/${product.img}`
    }));

    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: processedProducts
    });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_FAIL,
      payload: error.message || 'Something went wrong'
    });
  } finally {
    dispatch(resetLoading());
  }
};



export const orderProducts = (orderData) => async (dispatch) => {
    try {
      dispatch(setLoading('Đang tải dữ liệu...'));

      console.log(orderData)
      const response = await axios.post("https://crm.gtelcts.vn/admin/asm/CreateOrder", orderData, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "3g2jwehg3j432hjg423hj",
        },
      });

      console.log(response)

      dispatch({
        type: ORDER_PRODUCTS_SUCCESS,
        payload: response.data
      });

    } catch (error) {
      console.log(error)
      dispatch({
        type: ORDER_PRODUCTS_FAIL,
        payload: error.message
      });
    } finally {
      dispatch(resetLoading());
    }
};
