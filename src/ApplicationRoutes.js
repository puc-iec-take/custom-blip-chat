import React from "react";
import { Route } from "react-router-dom";
import Header from "./views/Header";



export const ApplicationRoutes = () => (
  <>
    <Route path="/header" exact component={Header} />
  </>
);
