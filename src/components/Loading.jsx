import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

const Loading = ({ show = Boolean }) => {
  return (
    <BounceLoader
      color="white"
      loading={show}
      cssOverride={{
        margin: "auto",
      }}
    />
  );
};

export default Loading;
