function checkAnswers() {
    var score = 0;

    // Check answers for all questions
    if (document.querySelector('input[name="q1"]:checked')?.value === "c") score++;
    if (document.querySelector('input[name="q2"]:checked')?.value === "b") score++;
    if (document.querySelector('input[name="q3"]:checked')?.value === "a") score++;
    if (document.querySelector('input[name="q4"]:checked')?.value === "b") score++;
    if (document.querySelector('input[name="q5"]:checked')?.value === "b") score++;
    if (document.querySelector('input[name="q6"]:checked')?.value === "c") score++;
    if (document.querySelector('input[name="q7"]:checked')?.value === "c") score++;
    if (document.querySelector('input[name="q8"]:checked')?.value === "a") score++;
    if (document.querySelector('input[name="q9"]:checked')?.value === "b") score++;
    if (document.querySelector('input[name="q10"]:checked')?.value === "a") score++;

    // Disable all inputs after submission
    var inputs = document.querySelectorAll('input');
    inputs.forEach(function(input) {
        input.disabled = true;
    });

    // Display score
    document.getElementById('result').innerHTML = `<h3>Your score: ${score} / 10</h3>`;
    
    return false; // Prevent form submission
}
