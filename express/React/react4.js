class CustomComponent extends React.Component {
    render () {
        var component=React.createElement("h1",null, " msg=Hello my friends");
        var component2=React.createElement("h1",null," postcode=NG9 2GS")
        var component3=React.createElement("h1",null," city=London")
        var div = React.createElement("div",null, [component,component2,component3])
        return div
    }
}

var firstComponent=React.createElement(CustomComponent,null)
const div1=document.getElementById("QA")
ReactDOM.render(firstComponent,div1)