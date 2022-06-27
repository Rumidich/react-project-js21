import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Box, Button, TextField, Typography } from "@mui/material";

const EditProduct = () => {
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
    console.log(newProduct);
  }

  return (
    <Container maxWidth="sm">
      <Box display={"flex"} flexDirection={"column"} marginTop={"30px"}>
        <Typography variant="h4">Edit Product</Typography>
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

export default EditProduct;
