import React from "react";
import ProductSection from "../../components/user/detail/ProductSection";
import ProductRelated from "../../components/user/detail/ProductRelated";

const ProductDetail = () => {
  return (
    <>
      {/* Product section*/}
      <ProductSection/>

      {/* Related items section*/}
      <ProductRelated/>
    </>
  );
};

export default ProductDetail;
