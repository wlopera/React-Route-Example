import React, { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "William Lopera",
    text: "Aprender React es divertido!",
  },
  {
    id: "q2",
    author: "Andrés Lopera",
    text: "Aprender React es grandioso!",
  },
];

const QueryDetails = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((item) => item.id === params.quoteId);

  if (!quote) {
    return <p>No se encontró la cita!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${quote.id}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QueryDetails;
