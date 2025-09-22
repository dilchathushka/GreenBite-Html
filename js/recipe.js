const recipes = [
  {
    title:"Avocado Salad",
    image:"assets/img/avocado-salad.jpg",
    ingredients:["2 ripe avocados","1 tomato","1 tbsp lime juice","Salt & pepper"],
    steps:["Dice avocado and tomato.",
           "Mix gently with lime juice.",
           "Season and serve immediately."],
    nutrition:{Calories:"250 kcal",Protein:"5 g",Carbs:"15 g",Fat:"18 g"}
  },
  {
    title:"Quinoa Veg Bowl",
    image:"assets/img/quinoa-veg-bowl.jpg",
    ingredients:["1 cup cooked quinoa","½ cup chickpeas","1 cup mixed veggies","Olive oil dressing"],
    steps:["Cook quinoa as per instructions.",
           "Sauté veggies lightly.",
           "Combine with chickpeas and drizzle dressing."],
    nutrition:{Calories:"320 kcal",Protein:"12 g",Carbs:"45 g",Fat:"10 g"}
  },
  {
    title:"Berry Smoothie",
    image:"assets/img/berry-smoothie.jpg",
    ingredients:["1 cup mixed berries","1 banana","1 cup almond milk","1 tsp honey"],
    steps:["Add all ingredients to blender.",
           "Blend until smooth.",
           "Serve chilled."],
    nutrition:{Calories:"180 kcal",Protein:"4 g",Carbs:"35 g",Fat:"3 g"}
  },
  {
    title:"Grilled Chicken Wrap",
    image:"assets/img/grilled-chicken-wrap.jpg",
    ingredients:["1 whole wheat tortilla","100 g grilled chicken","Lettuce & tomato","Yogurt sauce"],
    steps:["Lay tortilla flat.",
           "Add chicken and veggies.",
           "Roll with yogurt sauce and slice."],
    nutrition:{Calories:"350 kcal",Protein:"28 g",Carbs:"30 g",Fat:"12 g"}
  },
  {
    title:"Overnight Oats",
    image:"assets/img/overnight-oats.jpg",
    ingredients:["½ cup rolled oats","1 cup milk/alt milk","1 tbsp chia seeds","Fresh fruit topping"],
    steps:["Mix oats, milk, chia seeds in jar.",
           "Refrigerate overnight.",
           "Top with fruit before serving."],
    nutrition:{Calories:"280 kcal",Protein:"9 g",Carbs:"45 g",Fat:"7 g"}
  }
];

const container = document.getElementById("recipe-container");
const modal = document.getElementById("recipe-modal");
const closeBtn = document.getElementById("close");
const search = document.getElementById("search");

function displayRecipes(list){
  container.innerHTML="";
  list.forEach(r=>{
    const card=document.createElement("div");
    card.className="card";
    card.innerHTML=`<img src="${r.image}" alt="${r.title}">
                    <h3>${r.title}</h3>`;
    card.addEventListener("click",()=>openModal(r));
    container.appendChild(card);
  });
}

function openModal(r){
  document.getElementById("recipe-title").textContent=r.title;
  document.getElementById("ingredients").innerHTML=r.ingredients.map(i=>`<li>${i}</li>`).join("");
  document.getElementById("steps").innerHTML=r.steps.map(s=>`<li>${s}</li>`).join("");
  document.getElementById("nutrition").innerHTML=
    `<tr><th>Calories</th><td>${r.nutrition.Calories}</td></tr>
     <tr><th>Protein</th><td>${r.nutrition.Protein}</td></tr>
     <tr><th>Carbs</th><td>${r.nutrition.Carbs}</td></tr>
     <tr><th>Fat</th><td>${r.nutrition.Fat}</td></tr>`;
  modal.style.display="flex";
}

closeBtn.onclick=()=>modal.style.display="none";
window.onclick=e=>{if(e.target===modal) modal.style.display="none";};

search.addEventListener("input",e=>{
  const val=e.target.value.toLowerCase();
  displayRecipes(recipes.filter(r=>r.title.toLowerCase().includes(val)));
});

displayRecipes(recipes);
