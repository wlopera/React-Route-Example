import React from "react";
import QuoteList from "../components/quotes/QuoteList";

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

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
