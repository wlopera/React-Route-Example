import { Link } from "react-router-dom";

import classes from "./NoQuotesFound.module.css";

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No se encontraron citas!</p>

      <Link className="btn" to="/new-quote">
        Agregar una cita
      </Link>
    </div>
  );
};

export default NoQuotesFound;
