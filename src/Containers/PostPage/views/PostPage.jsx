import React, { useContext } from "react";
import "./PostPage.css";
import { PostPageContext } from "../PostPageView";

const PostPageView = () => {
  const { onInput, postQuestion, queryValidation } =
    useContext(PostPageContext);

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
          className={
            queryValidation.question ? "question-box" : "question-box invalid"
          }
          onChange={onInput}
        ></input>
        {!queryValidation.question && (
          <span className="invalid-warning">
            Question should be atleast 10 characters long...
          </span>
        )}
        <textarea
          name="query_description"
          placeholder="Description..."
          className={
            queryValidation.description
              ? "question-description-box"
              : "question-description-box invalid"
          }
          onChange={onInput}
        ></textarea>
        {!queryValidation.description && (
          <span className="invalid-warning">
            Descripion should be atleast 10 characters long...
          </span>
        )}
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
