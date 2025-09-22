const workouts = {
    "Full Body": {
        "None": ["Burpees", "Jumping Jacks", "Mountain Climbers"],
        "Dumbbells": ["Dumbbell Thrusters", "Dumbbell Deadlift", "Renegade Rows"]
    },
    "Arms": {
        "None": ["Push Ups", "Tricep Dips", "Diamond Push Ups"],
        "Dumbbells": ["Bicep Curls", "Tricep Kickbacks", "Hammer Curls"]
    },
    "Legs": {
        "None": ["Squats", "Lunges", "Calf Raises"],
        "Dumbbells": ["Goblet Squats", "Weighted Lunges", "Dumbbell Step-Ups"]
    }
};

const generateBtn = document.getElementById("generate");
const bodypartSelect = document.getElementById("bodypart");
const equipmentSelect = document.getElementById("equipment");
const planDiv = document.getElementById("plan");

generateBtn.onclick = () => {
    const part = bodypartSelect.value;
    const equip = equipmentSelect.value;
    const list = workouts[part][equip];

    if (!list) {
        planDiv.textContent = "No workouts available for this selection.";
        return;
    }

    const w = list[Math.floor(Math.random() * list.length)];
    planDiv.textContent = `Today's ${part} workout (${equip}): ${w} – 30 secs each`;
};
