const getElements = function() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let bmi = document.getElementById("bmi");
  let dietPlan = document.getElementById("dietPlan");
  return {
    weight,
    height,
    bmi,
    dietPlan
  };
};

const findHealthyNess = function(bmi) {
  let { dietPlan } = getElements();
  if (bmi < 18.5) {
    dietPlan.innerHTML = "<a href = 'dietInfo.js'>To Gain Weight</a>";
  }
  if (bmi > 18.5 && bmi < 25) {
    dietPlan.innerHTML = "You are healthy. Continue your current diet";
  }
  if (bmi > 25) {
    dietPlan.innerHTML = "<a href = 'dietInfo.js'>To Lose Weight</a>";
  }
};

const calculateBmi = function() {
  let { weight, height, bmi } = getElements();

  let finalBmi = weight / (((height / 100) * height) / 100);
  bmi.innerText = finalBmi;
  findHealthyNess(finalBmi);
};

const resetValues = function() {
  let { weight, height, bmi, dietPlan } = getElements();
  weight.value = null;
  height.value = null;
  bmi.innerText = "";
  dietPlan.innerText = "";
};
