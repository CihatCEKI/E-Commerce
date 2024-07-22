import React from "react";
import Products from "../components/Layout/Products/Products";
import Campaigns from "../components/Layout/Campaigns/Campaigns";
//import Blogs from "../components/Layout/Blogs/Blogs";
import Brands from "../components/Layout/Brands/Brands";
import CampaigSingle from "../components/Layout/CampaigSingle/CampaigSingle";
import { Categories } from "../components/Layout/Categories/Categories";
import Slider from "../components/Layout/Slider/Slider";

const HomePage = () => {
  return (
    <React.Fragment>
      <Slider/>
      <Categories />
      <Products />
      <CampaigSingle />
      <Campaigns />
      {/* <Blogs /> */}
      <Brands />
      
    </React.Fragment>
  );
};

export default HomePage;
