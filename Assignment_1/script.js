function showGreeting() {
  const greetings = [
    "Welcome to my profile!",
    "Hey there! Glad to see you.",
    "Namaste! Here's who I am.",
    "Wishing you a productive day!",
    "Dive in and explore my world!"
  ];
  const index = Math.floor(Math.random() * greetings.length);
  document.getElementById("greeting").textContent = greetings[index];
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

let expanded = false;
function toggleReadMore() {
  const skills = document.getElementById("skillsList");
  if (!expanded) {
    skills.innerHTML += `
      <ul>
        <li>Courses: Linear Algebra, Statistical Computing, Theory of Statistics</li>
        <li>Tools: Pandas, Matplotlib, Jupyter, Numpy</li>
        <li>Electronics, Stochastic Processes, Statistical Computing</li>
      </ul>
    `;
  } else {
    skills.innerHTML = `
      <ul>
        <li>C, C++, Python, HTML, JavaScript</li>
        <li>R, LATEX, GitHub, MS Excel</li>
        <li>Courses: Data Science Lab, Probability, Real Analysis</li>
      </ul>
    `;
  }
  expanded = !expanded;
}

function editSkills() {
  const newContent = prompt("Enter updated skills and courses (HTML allowed):");
  if (newContent) {
    document.getElementById("skillsList").innerHTML = `<p>${newContent}</p>`;
    expanded = true;
  }
}
