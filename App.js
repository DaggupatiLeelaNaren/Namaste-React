const parent = React.createElement(
  "div",
  { id: "parent" },
  [  React.createElement("div",{id: "child"}, [
    React.createElement ("h1",{}," Welcome to Automobile Management System")
  ]),  
    React.createElement("div",{id: "child2"}, [
    React.createElement("h1", {},"login"),
    React.createElement ("a",{},"Singin")
  ])]
);



console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
