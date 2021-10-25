import React from "react";

class Updating extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return <div className="container">
      
      <p>The componentShouldUpdate() method is called after the component is updated in the DOM.</p>
        <a href="https://www.w3schools.com/react/showreact.asp?filename=demo2_react_lifecycle_shouldcomponentupdate2" target="_blank">
        <button>Example</button>
        </a>
      </div>;
  }
}

export default Updating;
