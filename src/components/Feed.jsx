import React from "react";
import { Box } from "@mui/material";

import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post imageURI={"https://picsum.photos/1000/800"} />
      <Post imageURI={"https://picsum.photos/900/800"} />
      <Post imageURI={"https://picsum.photos/950/800"} />
      <Post imageURI={"https://picsum.photos/925/800"} />
      <Post imageURI={"https://picsum.photos/910/800"} />
    </Box>
  );
};

export default Feed;
