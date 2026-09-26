const quizForm = document.getElementById("quizForm");

if (quizForm) {
    quizForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        const studentName = document.getElementById("studentName").value.trim();

        let score = 0;
        const total = 2;

        // Selected answers
        const q1 = document.querySelector('input[name="q1"]:checked').value;
        const q2 = document.querySelector('input[name="q2"]:checked').value;

        // Check answers
        if (q1 === "CSS") score += 1;
        if (q2 === "h1") score += 1;

        const scoreData = {
            studentName: studentName,
            score: score,
            total: total
        };

        try {
            // Backend API ko POST request
            const response = await fetch("/api/submit-score", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(scoreData)
            });

            const result = await response.json();

            // Result show karna
            const resultMessage = document.getElementById("resultMessage");

            resultMessage.innerHTML =
                `<strong>${result.message}</strong><br>
                 You scored ${score} out of ${total}.`;

            resultMessage.classList.remove("d-none");

            quizForm.reset();

        } catch (error) {
            console.log("Error:", error);
            alert("Something went wrong. Make sure MongoDB and backend server are running.");
        }
    });
}
