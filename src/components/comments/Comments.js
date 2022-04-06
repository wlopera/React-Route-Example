import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import NewCommentForm from "./NewCommentForm";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import CommentsList from "../comments/CommentsList";

import classes from "./Comments.module.css";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  let comments;

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && loadedComments && loadedComments.length > 0) {
    comments = <CommentsList comments={loadedComments} />;
  }

  if (
    status === "completed" &&
    (!loadedComments || loadedComments.length === 0)
  ) {
    comments = <p className="centered">No comentarios agregados todavía!</p>;
  }

  console.log(comments, status, loadedComments);
  return (
    <section className={classes.comments}>
      <h2>Comentarios del usuario</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Agregar un comentario
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm quoteId={quoteId} onAddedComment={addCommentHandler} />
      )}
      {comments}
    </section>
  );
};

export default Comments;
