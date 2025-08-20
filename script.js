document.getElementById('toggle-ingredients').addEventListener('click', function() {
    const ingredientsList = document.getElementById('ingredients-list');
    ingredientsList.style.display = ingredientsList.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('toggle-steps').addEventListener('click', function() {
    const stepsList = document.getElementById('steps-list');
    stepsList.style.display = stepsList.style.display === 'block' ? 'none' : 'block';
});

let currentStep = 0;
const steps = document.querySelectorAll('.steps li');
const progressBar = document.getElementById('progress-bar');

document.getElementById('start-cooking').addEventListener('click', function() {
    if (currentStep < steps.length) {
        steps[currentStep].style.backgroundColor = '#d1ffd1'; // Highlight current step
        progressBar.style.width = ((currentStep + 1) / steps.length) * 100 + '%'; // Update progress bar
        currentStep++;
    } else {
        alert('You have completed all steps!');
    }
});
