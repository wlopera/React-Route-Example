import { useState } from "react";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  return (
    <section className={classes.comments}>
      <h2>Comentarios del usuario</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Agregar un comentario
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      <p>Commentarios...</p>
    </section>
  );
};

export default Comments;
