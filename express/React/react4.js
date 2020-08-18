class CustomComponent extends React.Component {
    render () {
        var component=React.createElement("h1",null,"Hello my friends");
        return component
    }
}

var firstComponent=React.createElement(CustomComponent,null)
const div1=document.getElementById("QA")
ReactDOM.render(firstComponent,div1)