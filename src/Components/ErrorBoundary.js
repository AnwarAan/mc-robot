import { useEffect, useState } from "react";

const ErrorBoundary = (props) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  });

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
