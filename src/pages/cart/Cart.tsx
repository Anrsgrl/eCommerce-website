import './cart.scss';
import { cartsData } from '../../components/header/headerCartSlice';
import { useSelector } from 'react-redux';
import Banner from '../../components/banner/Banner';
import React from 'react';
import bannerBg from '../../assets/images/bannerBg.jpg';

export default function Cart() {
  const cartItems = useSelector(cartsData);
  return (
    <>
      <Banner title="Cart" pageName="Cart" coverPhoto={bannerBg} sliderExist={false} />
      <div className="cart-page-field">
        <div className="table-field">
          <table>
            <thead>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Product Quantity</th>
            </thead>
            {cartItems.map((item: any) => (
              <>
                <tr>
                  <td>
                    <img src={item.image} alt="itemImage" />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.cartQuantity}</td>
                </tr>
              </>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}
