import React from "react";
import { Categories } from "../components/Layout/Categories/Categories";
import Products from "../components/Layout/Products/Products";
import CampaigSingle from "../components/Layout/CampaigSingle/CampaigSingle";

const ShopPage = () => {
  return (
    <React.Fragment>
      <Categories />
      <Products />
      <CampaigSingle />
      
    </React.Fragment>
  );
};

export default ShopPage;
