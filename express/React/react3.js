const a1 = React.createElement("a",{href: "http://www.bbc.co.uk",target: "_blank", title: "BBC News"},"BBCNews");
const a2 = React.createElement("a",{href: "http://www.cnn.com",target: "_blank", title: "BBC News"},"CNN News")

const div1 = React.createElement("div", {"style":{"background-color":"red"}},[a1,a2])
const div2 = React.createElement("div", {"style":{"background-color":"green"}},[a1,a2])
const mainDiv = React.createElement("div",{"style":{"backgroundColor":"blue"}},[div1,div2])

const QA1=document.getElementById("QA")
ReactDOM.render(mainDiv,QA1)