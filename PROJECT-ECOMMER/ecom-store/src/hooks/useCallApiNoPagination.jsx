import axios from "axios";
import { useEffect, useState } from "react";

const useCallApiNoPagination = (url, initialPage = 1, itemsPerPage = 5) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(initialPage); //-> State để theo dõi trang hiện tại
  const [totalPages, setTotalPages] = useState(1); //-> State để lưu trữ tổng số trang

  const getApi = async () => {
    try {
      let params = `?_page=${currentPage}&_limit=${itemsPerPage}`;

      // Du lieu dang duoc goi
      setIsLoading(true);
      const res = await axios.get(url + params);
      // Du lieu goi xong roi
      setData(res.data);
      setIsLoading(false);

      // Tinh tong so trang Page listing
      let totalItems = parseInt(res.headers["x-total-count"]); //Tong SP trong db
      setTotalPages(totalItems / itemsPerPage);
    } catch (error) {
      console.log(error);
    }
  };

  // Call Api
  useEffect(() => {
    getApi(currentPage);
  }, [url, currentPage]);

  // Function to remove item from data
  const removeItem = (id) => {
    setData((oldData) => oldData.filter((item) => item.id !== id));
  };

  return {
    data,
    isLoading,
    removeItem,
    totalPages,
    setCurrentPage,
    currentPage,
  };
};

export default useCallApiNoPagination;
