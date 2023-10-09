// Creating h1 inside react
const heading = React.createElement(
"h1", 
{id: "heading"},
"Hello World from React inside it!");

console.log(heading);
// Creating root inside react
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root)

//render heading element inside root
 root.render(heading);

// Task-1
/*
<div id = "parent">
   <div id="child">
      <h1>Heading</h1>
      <h2>Heading2</h2>
    </div>
</div>

*/

const headingh1 = React.createElement(
    "h1",
    {},
    "Heading"
);
const childDiv = React.createElement(
    "div",
    {id:"child"},
    [ 
    headingh1,
    React.createElement(
        "h2",
        {id: "heading2"},
        "Heading 2"
    )
    ]
);

const parentDiv = React.createElement(
    "div",
    {id: "parent"},
    childDiv
);

// root.render will replace parentDiv inside div id root
root.render(parentDiv);