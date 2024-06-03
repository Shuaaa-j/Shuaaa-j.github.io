// Function to change the content based on the selected slider
function changeContent(sliderNumber) {
    // Array containing video links corresponding to each slider
    const videoLinks = [
        'https://www.youtube.com/embed/oJ09xdxzIJQ', // Dragons
        'https://www.youtube.com/embed/PKYVvPNhRR0', // Reunion
        'https://www.youtube.com/embed/sQfk5HykiEk', // Honor & Glory
        'https://www.youtube.com/embed/cPRRupAM4DI', // Hero
        'https://www.youtube.com/embed/Og5-Pm4HNlI', // Infiltration
        'https://www.youtube.com/embed/9acxn7qAST4', // Kiriko
        'https://www.youtube.com/embed/alJt9mdQKKc', // Calling
        'https://www.youtube.com/embed/8-nXN9ZMl8o', // Wastelander
        'https://www.youtube.com/embed/py_kGferDww', // A Great Day
        'https://www.youtube.com/embed/vaZfZFNuOpI'  // Doomfist
    ];

    // Get the video container element
    const videoContainer = document.getElementById('videoContainer');
    
    // Set the HTML content of the video container with an iframe to display the selected video and embedding it 
    videoContainer.innerHTML = `<iframe src="${videoLinks[sliderNumber - 1]}" frameborder="0" allowfullscreen></iframe>`;
    
    // Add a CSS class to the video container to enable fullscreen mode
    videoContainer.classList.add('fullscreen');
    
    // Display the video container
    videoContainer.style.display = 'block';

    // Show the close button
    document.getElementById('closeButton').style.display = 'block';

    // Update the active state of the sliders based on the selected one
    document.querySelectorAll('.slider').forEach((slider, index) => {
        if (index === sliderNumber - 1) {
            slider.classList.add('active');
        } else {
            slider.classList.remove('active');
        }
    });

    // Responsible for the background change
    const content = document.querySelector('.content');
    content.style.backgroundImage = `url('${("0" + sliderNumber).slice(-2)}.jpg')`;
}

// Function to close fullscreen mode
function closeFullscreen() {
    // Get the video container element
    const videoContainer = document.getElementById('videoContainer');
    
    // Remove the fullscreen class from the video container
    videoContainer.classList.remove('fullscreen');
    
    // Hide the video container
    videoContainer.style.display = 'none';

    // Hide the close button
    document.getElementById('closeButton').style.display = 'none';
}


