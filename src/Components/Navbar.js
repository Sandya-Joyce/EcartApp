import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, TextField, InputAdornment, Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProfileIcon from '../Assets/ProfileIcon.jpg'

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState(5); // Sample cart items count

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
    const iconStyle = {
                     width: '40px',            // Icon size
                     height: '40px',
                     borderRadius: '50%',      // Circularicon
                     cursor: 'pointer',     
                    };
    

  return (
    <AppBar
      position="sticky" 
      sx={{
        backgroundColor: '#b34271', 
        zIndex: 1201, 
        width: "100%", // Ensure it takes the full width
        top: 0,
      }}
    >
      <Toolbar  >
        {/* Left Side: Navbar Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>

        {/* Search Bar with Icon */}
        <TextField
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
          sx={{
            backgroundColor: "#fff",
            borderRadius: 1,
            marginRight: 2,
            width: "400px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* Cart Icon with Badge */}
        <IconButton color="inherit">
          <Badge badgeContent={cartItems} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>

        <img src={ProfileIcon} alt="Profile Icon" style={iconStyle}  />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

