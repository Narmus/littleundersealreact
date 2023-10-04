import React from "react";

import { PostPageContextProvider } from "./PostPageView";
import PostPageView from "./views/PostPage";

const PostPage = () => {
  return (
    <PostPageContextProvider>
      <PostPageView />
    </PostPageContextProvider>
  );
};

export default PostPage;
