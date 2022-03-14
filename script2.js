var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("?");
let cartoona = `
<h1> Profile </h1>
<h3>Email = ${queries[0]}</h3>
<h3>Name = ${queries[1]}</h3>
<h3>Phone= ${queries[2]}</h3>
`;

document.getElementById("myRow").innerHTML = cartoona;
