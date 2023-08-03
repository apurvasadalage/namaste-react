{/*
*
<div id="parent">
    <div id="child">
        <h1>Hello World h1</h1>
        <h2>Hello World h2</h2>
    </div>
    <div id="child2">
        <h1>Hello World h1</h1>
        <h2>Hello World h2</h2>
    </div>
</div> 
*
* ReactElement(Object) => HTML(Browser Understands)
*/}



const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "Hello World h1"),
        React.createElement("h2", {}, "Hello World h2")
        ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "Hello World h1"),
        React.createElement("h2", {}, "Hello World h2")
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);
