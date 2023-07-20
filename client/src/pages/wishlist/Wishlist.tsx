import './wishlist.scss';
import { addToCart } from '../../components/header/headerCartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { wishlistData } from './wishlistSlice';
import Banner from '../../components/banner/Banner';
import React from 'react';
import bannerBg from '../../assets/images/bannerBg.jpg';

export default function Wishlist() {
  const wishlistItems = useSelector(wishlistData);
  const dispatch = useDispatch();

  return (
    <>
      <Banner title="Wishlist" pageName="Wishlist" coverPhoto={bannerBg} sliderExist={false} />
      <div className="wishlist-page-field">
        <div className="table-field">
          <table>
            <thead>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th id="table-cart-button"></th>
            </thead>
            {wishlistItems.map((wishlistItem: any) => (
              <>
                <tr>
                  <td>
                    <img src={wishlistItem.image} alt="itemImage" />
                  </td>
                  <td>{wishlistItem.name}</td>
                  <td>${wishlistItem.price}</td>
                  <td>
                    <button
                      onClick={() => {
                        dispatch(addToCart(wishlistItem));
                      }}
                    >
                      ADD TO CART
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}
