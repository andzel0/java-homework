// var recipe = {
//     title: "Omlet",
//     serves: 1,
//     ingredients:["eggs","salt","cheese","shrooms"]
// }
// console.log(recipe.title);
// console.log(recipe.serves);
// console.log(recipe.ingredients[0]);
// console.log(recipe.ingredients[1]);
// console.log(recipe.ingredients[2]);
// console.log(recipe.ingredients[3]);


var programmingLanguages = ["Javascript","Python","PHP","Swift","Java","Ruby","Scala","TypeScript"];
console.log("the length of the array = "+programmingLanguages.length);

var removeLast = programmingLanguages.pop();
console.log("Remove the last item: " + removeLast + " - items remaining: " + programmingLanguages);

var removeThird = programmingLanguages.splice(2, 1, 'Vbasic');
console.log(programmingLanguages);