const app = () => {
    // Function to initialize the application
    const init = () => {
        console.log("Multimodal English Project is running.");
        setupEventListeners();
    };

    // Function to set up event listeners
    const setupEventListeners = () => {
        const button = document.getElementById("exampleButton");
        if (button) {
            button.addEventListener("click", handleButtonClick);
        }
    };

    // Function to handle button click
    const handleButtonClick = () => {
        alert("Button clicked! This demonstrates interactivity.");
    };

    // Start the application
    window.onload = init;
}; 

app();