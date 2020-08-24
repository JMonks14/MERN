

class CustomLink extends React.Component {
    render() {
        console.log(this.props);

        var Component = React.createElement("a",{href: this.props.T1},this.props.txt)
        return Component;
    }
}

const div1 = document.getElementById("QA")

const firstLink=React.createElement(CustomLink,{T1:"http://www.bbc.co.uk",txt:"BBC"})
const secondLink=React.createElement(CustomLink,{T1:"http://www.cnn.co.uk",txt:"CNN"})
const thirdLink=React.createElement(CustomLink,{T1:"http://www.google.co.uk",txt:"Google"})

const linklist=React.createElement("div",null, firstLink,secondLink, thirdLink)
ReactDOM.render(linklist,div1)