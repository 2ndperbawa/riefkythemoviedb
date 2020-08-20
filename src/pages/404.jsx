import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <h2>Page Not Found</h2>
      <Link className="toHome" to="/riefkythemoviedb/">
        {" "}
        back to home{" "}
      </Link>{" "}
    </div>
  );
};

export default NotFound;
