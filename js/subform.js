document.addEventListener("DOMContentLoaded", function () {
    const submitFormButton = document.getElementById("submit-form-btn");

    submitFormButton.addEventListener("click", async function () {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        const formData = {
            name,
            email,
            phone,
            message
        };

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log("Form submitted successfully!");
                // Add any success message or redirection logic here
            } else {
                console.error("Error submitting form:", response.statusText);
                // Add any error handling logic here
            }
        } catch (error) {
            console.error("Network error:", error.message);
            // Handle network errors
        }
    });
});
