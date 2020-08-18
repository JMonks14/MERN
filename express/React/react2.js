// {/* <a href="http://www.bbc.co.uk" target="_blank" title="BBC News">News</a> */}

var a = React.createElement("a",
{href: "http://www.bbc.co.uk",
target: "_blank",
title: "BBC News"
},
"_News");

var QA=document.getElementById("QA");
ReactDOM.render(a,QA)