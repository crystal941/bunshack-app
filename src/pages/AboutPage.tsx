import React from "react";
import Layout from "../components/Layout";
import { Box, Typography, Container } from "@mui/material";
import StandardImageList from "../components/ImageList";

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div style={{ backgroundColor: "black" }}>
        <Container>
          <Box
            sx={{
              textAlign: "center",
              p: { xs: 2, sm: 4 },
              "& h4": {
                fontWeight: "bold",
                my: { xs: 2, sm: 3 },
                fontSize: { xs: "1.5rem", sm: "2rem" },
                color: "white",
              },
              "& h4:hover": { color: "goldenrod" },
              "& p": {
                textAlign: "justify",
                fontSize: { xs: "0.875rem", sm: "1rem" },
                lineHeight: 1.6,
                mb: 3,
                color: "white",
              },
              "& p:hover": { color: "goldenrod" },
            }}
          >
            <Typography variant="h4">About Us</Typography>
            <StandardImageList />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                my: { xs: 1, sm: 2 },
              }}
            ></Box>
            <Typography component="p">
              Welcome to BunShack Breakfast, a family-owned breakfast restaurant
              nestled in the community of West Auckland. Our journey began with
              a simple mission: to provide our customers with the best authentic
              Chinese breakfast taste possible. The story of BunShack Breakfast
              is deeply rooted in our family's heritage and passion for
              authentic Chinese cuisine. Our founder, who grew up in a small
              town in Northern China, was surrounded by the aromas and flavors
              of homemade meals with love and tradition. When our family moved
              to New Zealand, we brought with us not only our cherished recipes
              but also the dream of sharing the warmth and taste of our Chinese
              hometown with our new community.
            </Typography>
            <Typography component="p">
              At BunShack Breakfast, we take pride in using the freshest
              ingredients and traditional cooking methods to create dishes that
              are bursting with flavor. From savory noodles and fluffy pancakes
              to comforting congee and delectable dumplings, our menu is crafted
              to bring you the true flavors of China. Our signature wonton soup,
              a crowd favorite, perfectly encapsulates our dedication to quality
              and taste, and is a cherished recipe passed down through
              generations. Whether you're craving a hearty breakfast to start
              your day or a light, flavorful meal to satisfy your morning
              hunger, BunShack Breakfast is here to serve you. Join us and
              discover why BunShack Breakfast is a beloved part of the West
              Auckland community. Your perfect breakfast is just a visit away!
            </Typography>
          </Box>
        </Container>
      </div>
    </Layout>
  );
};

export default AboutPage;
