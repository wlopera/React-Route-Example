import React, { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import Comments from "../components/comments/Comments";

const QueryDetails = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>QueryDetails</h1>
      <p>{params.quoteId}</p>
      <hr />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QueryDetails;
