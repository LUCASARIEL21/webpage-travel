import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../home";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;