import "./App.css";
import React, { useState } from "react";

// don't change the Component name "App"
function App() {
  let content;
  const [alertBox, setBox] = React.useState();
  const onShow = () => {
    setBox(true);
  };
  const onHide = () => {
    setBox(false);
  };
  if (alertBox) {
    content = (
      <div id="alert">
        <h2>Are you sure?</h2>
        <p>These changes can't be reverted!</p>
        <button onClick={onHide}>Proceed</button>
      </div>
    );
  }
  return (
    <div>
      {content}
      <button onClick={onShow}>Delete</button>
    </div>
  );
}

export default App;
