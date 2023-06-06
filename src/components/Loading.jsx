import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

const Loading = ({ isLoading = Boolean }) => {
  return (
    <BeatLoader
      color="var(--blue-v1)"
      loading={isLoading}
      margin={5}
      cssOverride={{
        display: "flex",
        justifyContent: "center",
      }}
    />
  );
};

export default Loading;
