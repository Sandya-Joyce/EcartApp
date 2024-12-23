import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Grid2 } from "@mui/material";


function ProductCard() {
  const [data, setData] = useState([]);
  
  // Fetch data from JSON
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching JSON:", error));
      
  }, []);

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
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
}

export default ProductCard;
