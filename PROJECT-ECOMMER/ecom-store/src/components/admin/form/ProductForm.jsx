import React, { useState } from "react";
import ProductLabel from "./ProductLabel";
import { useForm } from "react-hook-form";
import axios from "axios";
import { url } from "../../../untils/variable";

const classInput = `block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`;

const ProductForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Khai bao react hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);

      // Tao moi san pham
      await axios.post(url, data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw new error;
    }
  };

  return (
    <form
      className="max-w-full mx-auto my-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="title"
          id="floating_email"
          className={classInput}
          placeholder=" "
          {...register("title")}
        />
        <ProductLabel htmlFor="floating_email" name="Title" />
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="category"
          id="floating_password"
          className={classInput}
          placeholder=" "
          {...register("category")}
        />
        <ProductLabel htmlFor="floating_password" name="Category" />
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="image"
          id="floating_repeat_password"
          className={classInput}
          placeholder=" "
          {...register("image")}
        />
        <ProductLabel htmlFor="floating_repeat_password" name="Image" />
      </div>
      <div className="grid md:grid-cols-1 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="price"
            id="floating_first_name"
            className={classInput}
            placeholder=" "
            required=""
            {...register("price")}
          />

          <ProductLabel htmlFor="floating_first_name" name="Price" />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Product Content
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Content Product..."
            name="content"
            {...register("content")}
          ></textarea>
        </div>
      </div>
      <button
        disabled={isLoading ? true : false}
        type="submit"
        className={`text-white ${isLoading ? "bg-dark" : "bg-blue-700"} hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
      >
        Save change
      </button>
    </form>
  );
};

export default ProductForm;

// data: bao gom tat du lieu nguoi dung nhap vao (Phai dang ky truoc bang register voi hook form)
// console.log("Gia tri nguoi dung nhap", data);
