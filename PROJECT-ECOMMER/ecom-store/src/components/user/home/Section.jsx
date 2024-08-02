import React, { useEffect, useState } from "react";
import { productHome } from "../../../untils/mockup";
import ProductCard from "../common/ProductCard";
import axios from "axios";
import { url } from "../../../untils/variable";

const Section = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Call Api
  useEffect(() => {
    const getApi = async () => {
      try {
        // Du lieu dang duoc goi
        setIsLoading(true);
        const res = await axios.get(url);
        // Du lieu goi xong roi
        setData(res.data);
        setIsLoading(false);

      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, []);

  // console.log(React);

  // Check API call xong chua ?
  if(isLoading === true) return <p>Loading...</p>
  
  // Check san pham co ton tai hay khong
  if (data.length == 0) return <p>Khong ton tai san pham!</p>;

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {data.map((product) => {
            // console.log(product);
            return (
              <div key={product.id} className="col mb-5">
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section;


// Dependencies:
// TH1: -> Khong co gia tri gi: Logic useEffect se duoc call lien tuc. Gay ra tinh trang vong lap vo tan (call api)
// TH2:  -> Nhan vao mang rong []: Thuc hien logic useEffect duy nhat 1 lan khi load lai trinh duyet.
// TH3: -> Trong mang ton tai 1 gia tri(state, props): Thuc hien logic khi gia tri thay doi