import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../contants';
import { RootState } from '../../store/store';
import '../productCard/productCard.scss';
import { loadProducts } from './productCardSlice';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';

import { AiOutlineSearch } from 'react-icons/ai';



export default function ProductCard() {
    const productCardState = useSelector((state: RootState) => state.productCard);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`${baseUrl}/product`)
            .then((response) => response.json())
            .then((data) => dispatch(loadProducts({ products: data })));
    }, []);
    return (
        <>
            <div className='container'>
                <div className="product-list">
                    <div className="product-item row d-flex justify-content-between align-items-center">
                        {
                            productCardState.products.map((product, index) => (
                                <div className='col-12 col-sm-6 col-md-3 col-3 col-lg-3 col-xl-3 col-xxl-3 overflow-hidden' key={index}>
                                    <Link to={`product/${product.id}`}>
                                        <div className="Card">
                                            <div className="image">
                                              <img src={product.image} alt="" />
                                             </div>
                                            
                                            <div className="cardContent">
                                                <Link to={`product/${product.id}`}><p className='proName'>{product.name}</p></Link>
                                                {
                                                    product.discountPrice && (
                                                        <span>{product.discountPrice}</span>
                                                    )
                                                }
                                                <span className='price'>${product.price}</span>
                                                <h1></h1>
                                            </div>
                                            <div className="buttonsGroup">
                                                <button className='wishlish'>
                                                    <FiShoppingCart className='icon' />

                                                </button>
                                                <button className='addtocart'>
                                                    <FiHeart className='icon' />
                                                </button>
                                                <button className='search'>
                                                    <AiOutlineSearch className='icon' />
                                                </button>
                                            </div>

                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}