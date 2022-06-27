import React, { useContext, useState } from "react";
import Container from "@mui/material/Container";
import { Box, Button, TextField, Typography } from "@mui/material";
import { productsContext } from "../../contexts/productsContext";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { createProduct } = useContext(productsContext);

  const navigate = useNavigate();

  // title, price, description, image
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleSave() {
    const newProduct = {
      title,
      price,
      description,
      image,
    };
    if (!title.trim("") || !description.trim("") || !image.trim("") || !price) {
      alert("Please complete all inputs!");
    } else {
      createProduct(newProduct);
      navigate("/products");
    }
  }

  return (
    <Container maxWidth="sm">
      <Box
        display={"flex"}
        flexDirection={"column"}
        marginTop={"30px"}
        // alignItems={"center"}
      >
        <Typography variant="h4">Add Product</Typography>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          type="number"
          label="Price"
          variant="outlined"
          value={price}
          onChange={e => setPrice(+e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Image"
          variant="outlined"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
        <Button onClick={handleSave} variant="contained" color="warning">
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default AddProduct;
