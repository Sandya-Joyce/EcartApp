import React from "react";
import { Box, Typography, Link, Container, Grid2 } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#abdde0",
        padding: "20px 0",
        marginTop: "auto",
        boxShadow: "0 -1px 3px rgba(0,0,0,0.1)",
        width:"100%",
        bottom: '0',
        left:'0'
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={4}>
          {/* About Section */}
          <Grid2 item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              About
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are a company dedicated to delivering the best products and services.
              Our mission is to enhance customer satisfaction with innovative solutions.
            </Typography>
          </Grid2>

          {/* Contact Section */}
          <Grid2 item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: <Link href="mailto:contact@yourwebsite.com">contact@yourwebsite.com</Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: <Link href="tel:+1234567890">+1 234 567 890</Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Address: 123 Your Street, Your City, Your Country
            </Typography>
          </Grid2>

          {/* Quick Links */}
          <Grid2 item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2">
              <Link href="/about" underline="hover">
                About Us
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/contact" underline="hover">
                Contact Us
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/privacy" underline="hover">
                Privacy Policy
              </Link>
            </Typography>
          </Grid2>
        </Grid2>

        {/* Footer Bottom */}
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ marginTop: 3 }}
        >
          {"© "} {new Date().getFullYear()}{" "}
          <Link color="inherit" href="https://yourwebsite.com">
            Your Website
          </Link>{" "}
          | All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
