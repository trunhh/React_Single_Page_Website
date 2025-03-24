import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  ORDER_PRODUCTS_SUCCESS,
  ORDER_PRODUCTS_FAIL,
} from '../actions/productActions';

import { useAlert } from '../../compoents/Alert';

const initialState = {
  products: [],
  message: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, message: null, products: action.payload };
    case FETCH_PRODUCTS_FAIL:
      return { ...state, message: action.payload };

    case ORDER_PRODUCTS_SUCCESS:
      return { 
        ...state, 
        message: {
          text: action.payload,
          type: "success",
          id: Date.now()
        }
        
      };
    case ORDER_PRODUCTS_FAIL:
      return { 
        ...state, 
        message: {
          text: action.payload,
          type: "danger",
          id: Date.now()
        }
      };
    default:
      return state;
  }
};

export default productReducer