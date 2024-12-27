import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Grid2, Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function ProductList() {
  const [data, setData] = useState([]);
  
  // Fetch data from JSON
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching JSON:", error));
      
  }, []);

  const onChangeHandler = (event) => {
    console.log("Add to Cart button clicked");
  };

  return (
    <Grid2 container spacing={5} sx={{ padding: 2 }}>
      {data.map((item) => (
        <Grid2 item xs={12} sm={6} md={4} key={item.id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={item.image}
              alt={item.title}
            />
            <CardContent style={{ alignContent: 'center' }}>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography>Rs.{item.price}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>

              <Button
                onClick={onChangeHandler}
                variant="contained"
                color="secondary"
                startIcon={<ShoppingCartIcon />}
                sx={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  padding: '8px 15px',
                  borderRadius: '6px',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#64128c', // Hover background color
                  },
                  '&:active': {
                    backgroundColor: '#5cd5e6', // Active background color
                  },
                }}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
}

export default ProductList;
