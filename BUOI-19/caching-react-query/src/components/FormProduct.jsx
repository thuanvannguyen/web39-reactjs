import { useQueryClient } from "@tanstack/react-query";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { usePostProduct } from "../api/usePostProduct";

const FormProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Khai bao tanstack query
  const queryClient = useQueryClient();
  const {mutate, isLoading, isError} = usePostProduct();

  const onSubmit = (data) => {
    // Logic gui du lieu di
    mutate(data, {
      onSuccess: (res) => {
        // console.log("Tao thanh cong", res);
        queryClient.invalidateQueries("listing-product"); //Lam moi du lieu api voi key: listing-product

      },
      onError: (error) => {
        console.log("Error",error);
      }
    })
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Control type="text" placeholder="Enter title Product" {...register("title")} />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Enter Content Product" {...register("content")} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormProduct;
