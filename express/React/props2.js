class SalaryCalulations extends React.Component {
    
    
    render () {

        console.log(this.props);
        if (this.props.salary<1000) {
            var tax=0
        } else {
            var tax =this.props.salary*20/100;
        }
        var componentName=React.createElement("h1",null, `Name=${this.props.name}`);
        var componentSalary=React.createElement("h2",null,` city=${this.props.salary}`)
        var componentTax=React.createElement("h3",null, `Tax= ${tax}`)
        var div = React.createElement("div",null, [componentName,componentSalary,componentTax])
        return div
    }
}

var firstComponent=React.createElement(CustomComponent,null)
const div1=document.getElementById("QA")
ReactDOM.render(firstComponent,div1)
