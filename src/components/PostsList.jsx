import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

function PostsList({isPosting, onStopPosting}) {
  const [enteredBody, setEnteredBody] = useState("");
  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  const [enteredAuthor, setEnteredAuthor] = useState("");
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Emmy" body="Check out my page!" />
      </ul>
    </>
  );
}

export default PostsList;
