import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Hello World!");

const Title = () => {
  return (
    <h1 className="head" tabIndex="5">
      Hello World using JSX
    </h1>
  );
};

const FunctionalComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1 className="heading">Hello React using Functional Component!</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalComponent />);
