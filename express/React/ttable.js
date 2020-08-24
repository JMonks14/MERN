class TimesTable extends React.Component{
    render(){
        // propers is the object which will recieve the custom properties
        // send while the element of this component is being created
        // so 
        // this.props.href
        // this.props.text
        console.log(this.props.range);
        
        var Components= [];
        for(var i=0;i<=this.props.range;i++){
            Components.push(React.createElement("h3",null,this.props.timestable +"x" + i +"=" + (this.props.timestable*i)));
        }
        var Result=React.createElement("h1",null,Components);
        return Result;
    }
}
var div1=document.getElementById("QA1");
var timestable=React.createElement(TimesTable,{timestable:67,range:100});
var linklist=React.createElement("div",null,timestable)
ReactDOM.render(linklist,div1)