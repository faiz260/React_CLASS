import React from "react";
import { Button, IconButton } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DeleteIcon from "@material-ui/icons/Delete";

function MaterialUiComponent() {
  return (
    <div>
      <Button variant="outlined">Click</Button>
      <br />
      <br />
      <br />
      <Button
        size="large"
        variant="contained"
        color="secondary"
        onClick={() => {
          alert("clicked");
        }}
      >
        <DeleteIcon />
        Delete
      </Button>
      <br />
      <br />
      <br />
      <IconButton color="primary" aria-label="add to shopping cart">
        <ShoppingCartIcon style={{color: 'green', fontSize: '28px'}} />
      </IconButton>
    </div>
  );
}

export default MaterialUiComponent;
