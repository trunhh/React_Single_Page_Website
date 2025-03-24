import { useDispatch, useSelector } from 'react-redux';
import { formatVND } from '../Utillities/CurrencyFormater';
import NumberInput from "./NumberInput";
import { updateNumber, removeFromCart } from '../redux/slices/cartSlice';
import { FaWindowClose } from 'react-icons/fa';

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleNumberChange = (value) => {
    dispatch(updateNumber({ code: product.code, number: value }));
  };

  return (
    <tr>
      <td className="w-0 align-middle">
        <button 
          className="border-0 bg-transparent text-danger fs-4"
          onClick={()=>dispatch(removeFromCart(product.code))}
        >
          <FaWindowClose/>
        </button>
      </td>
      <td className="w-auto align-middle">
        <img className="w-2 h-2 object-fit-contain" src={product.img} alt={product.name} />
        <span>{product.name}</span>
      </td>
      <td className="w-0 align-middle">{formatVND(product.price)}</td>
      <td className="w-0 align-middle">
        <NumberInput min={1} value={product.number} onChange={handleNumberChange} />
      </td>
      <td className="w-0 align-middle">{formatVND(product.price * product.number)}</td>
    </tr>
  );
};

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Sản phẩm</th>
          <th>Đơn giá</th>
          <th>Số lượng</th>
          <th>Thành tiền</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {cartItems.map((item, index) => (
          <CartItem key={index} product={item}/>
        ))}
      </tbody>
    </table>
  );
};

export default Cart;
