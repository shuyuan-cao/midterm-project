document.addEventListener("DOMContentLoaded", function () {
    const subscribeButton = document.querySelector("#cta-section .btn-cta");

    subscribeButton.addEventListener("click", async function (event) {
        event.preventDefault();

        const emailInput = document.getElementById("email-input").value;

        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email: emailInput })
            });

            if (response.ok) {
                // API call successful
                console.log("Subscription successful!");
            } else {
                // Handle error response
                console.error("Error subscribing:", response.statusText);
            }
        } catch (error) {
            // Handle network errors
            console.error("Network error:", error.message);
        }
    });
});
