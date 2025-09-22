
document.getElementById("calcForm").addEventListener("submit",e=>{
  e.preventDefault();
  const age=+age.value, h=+height.value, w=+weight.value;
  const isMale=gender.value==="Male";
  const bmr=(10*w)+(6.25*h)-(5*age)+(isMale?5:-161);
  const tdee=bmr*parseFloat(activity.value);
  const carbs=(tdee*0.5)/4, protein=(tdee*0.2)/4, fat=(tdee*0.3)/9;
  results.innerHTML=`<p>BMR: ${bmr.toFixed(0)} kcal</p>
    <p>TDEE: ${tdee.toFixed(0)} kcal</p>
    <p>Carbs: ${carbs.toFixed(0)} g | Protein: ${protein.toFixed(0)} g | Fat: ${fat.toFixed(0)} g</p>`;
});
document.querySelector(".hamburger").addEventListener("click",()=>{
  document.querySelector(".nav-links").classList.toggle("active");
});

document.getElementById("calcForm").addEventListener("submit",e=>{
  e.preventDefault();
  const age=+document.getElementById("age").value;
  const gender=document.getElementById("gender").value;
  const height=+document.getElementById("height").value;
  const weight=+document.getElementById("weight").value;
  const factor=parseFloat(document.getElementById("activity").value);

  const bmr = gender==="Male"
      ? 10*weight + 6.25*height - 5*age + 5
      : 10*weight + 6.25*height - 5*age - 161;

  const tdee = bmr * factor;
  const carbs = (tdee*0.5)/4;
  const protein = (tdee*0.2)/4;
  const fat = (tdee*0.3)/9;

  document.getElementById("results").innerHTML=`
    <p><strong>BMR:</strong> ${bmr.toFixed(0)} kcal</p>
    <p><strong>TDEE:</strong> ${tdee.toFixed(0)} kcal</p>
    <p>Carbs: ${carbs.toFixed(0)} g | Protein: ${protein.toFixed(0)} g | Fat: ${fat.toFixed(0)} g</p>
  `;
});
