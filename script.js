let allRecipes = [];

async function getRecipes() {
  let api = await fetch(
    `https://my-json-server.typicode.com/alaafathhyy/test/users`
  );
  allRecipes = await api.json();
  console.log(allRecipes);
  displayRecipes();
}
function displayRecipes() {
  let cartoona = ``;
  for (let i = 0; i < allRecipes.length; i++) {
    cartoona += `
       <div class="col-md-6 ">
     <div class="recipe">
    <button class="submit-btn" name="submit" onClick="myFunction(${i})"><h4>${allRecipes[i].name}</h4></button>
    </div>
   </div>;
    `;
  }
  document.getElementById("myRow").innerHTML = cartoona;
}
function myFunction(num) {
  var queryString = "? " + allRecipes[num].email+"?"+allRecipes[num].name+'?'+allRecipes[num].phone;
  window.location.href = "test1.html" + queryString;
}

