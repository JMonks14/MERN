class CustomComponent extends React.Component {
    
    constructor() {
        super()
        this.name="James"
        this.address="Nottingham"
    }
    tax(salary) {
        return salary*25/100
    }
    
    render () {
        var component=React.createElement("h1",null, `Name=${this.name}`);
        var component2=React.createElement("h1",null," postcode=NG9 2GS")
        var component3=React.createElement("h1",null,` city=${this.address}`)
        var component4=React.createElement("h1",null, `Tax= ${this.tax(15000)}`)
        var div = React.createElement("div",null, [component,component2,component3], component4)
        return div
    }
}

var firstComponent=React.createElement(CustomComponent,null)
const div1=document.getElementById("QA")
ReactDOM.render(firstComponent,div1)