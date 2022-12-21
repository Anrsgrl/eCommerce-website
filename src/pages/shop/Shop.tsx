import Banner from '../../components/Banner/Banner';
import ProductCard from '../../components/productCard/ProductCard';
import React from 'react';

export default function Shop() {
  return (
    <>
      <section className="Shop">
        <Banner
          title="Shop"
          pageName="Shop"
          coverPhoto="https://casona.familab.net/wp-content/uploads/2021/09/heading_bg_dark.jpg"
          sliderExist={true}
        />
      </section>
      <section className="products">
        <ProductCard />
      </section>
    </>
  );
}
