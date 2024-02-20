
const parent = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child1"},
[React.createElement("h1",{},"i am h1"),
React.createElement("h2",{},"i am h2"),
React.createElement("p",{},"i ama lvs manoj")])],

React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"i am h1"),
React.createElement("h2",{},"i am h2"),
React.createElement("p",{},"i ama lvs manoj")]),
React.createElement("span",{},"i am red"))


// const heading =  React.createElement("h1", {id:"heading"}, "Hello World From React!")

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)
console.log(parent)