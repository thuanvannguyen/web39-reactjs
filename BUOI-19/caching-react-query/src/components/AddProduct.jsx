import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import FormProduct from "./FormProduct";

const AddProduct = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mb-4">
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add New Product</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FormProduct/>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default AddProduct;
