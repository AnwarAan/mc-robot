import * as React from "react";
import { useEffect, useState } from "react";
import { IProps } from "../Containers/App";

const ErrorBoundary = (props: IProps) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, []);

  if (hasError === true) {
    return (
      <div>
        <h1>Something Error...</h1>
      </div>
    );
  } else {
    return <div>{props.children}</div>;
  }
};

export default ErrorBoundary;
