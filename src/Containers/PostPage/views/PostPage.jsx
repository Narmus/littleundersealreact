import React, { Fragment, useContext } from "react";
import "./PostPage.css";
import { PostPageContext } from "../PostPageView";

const PostPageView = () => {
  const { onInput, postQuestion } = useContext(PostPageContext);

  return (
    <div className="post-page">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          name="query_question"
          placeholder="Type your question here..."
          className="question-box"
          onChange={onInput}
        ></input>
        <textarea
          name="query_description"
          placeholder="Description..."
          className="question-description-box"
          onChange={onInput}
        ></textarea>
        <div className="post-area">
          <button
            onClick={() => postQuestion()}
            className="question-post-btn"
            type="submit"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostPageView;
