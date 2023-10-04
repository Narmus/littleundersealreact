import React, { Fragment } from "react";
import "./PostPage.css";

const PostPageView = () => {
  return (
    <div className="post-page">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
          <input
            placeholder="Type your question here..."
            className="question-box"
          ></input>
          <textarea placeholder="Description..." className="question-description-box"></textarea>
        <div className="post-area">
          <button className="question-post-btn" type="submit">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostPageView;
