import { Table } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../api/getProduct";

const ListingProduct = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["listing-product"],
    queryFn: () => getProduct(),
  });

  if (isLoading) return <p>Loading...</p>;
  // console.log(data);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name Product</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value) => {
          console.log(value);
          return (
            <tr key={value.id}>
              <td>{value.id}</td>
              <td>{value.title}</td>
              <td>{value.content}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ListingProduct;
