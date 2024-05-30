document.addEventListener("DOMContentLoaded", function() {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const header = document.querySelector('#navbar');
    const scrollSection = document.querySelector('.scroll-section');
    const bottomImage = document.getElementById('bottom-image');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    const storyTitle = document.getElementById('story-title');
    const storyDescription = document.getElementById('story-description');
    const storyImages = document.getElementById('story-images');
    const damageButton = document.getElementById('damage-button');
    const tankButton = document.getElementById('tank-button');
    const supportButton = document.getElementById('support-button');

    setTimeout(() => {
        splashScreen.classList.add('hidden');
        header.style.display = 'block'; // Show header after splash screen hides
    }, 3000); // Display splash screen for 3 seconds

    setTimeout(() => {
        splashScreen.style.display = 'none';
        mainContent.style.display = 'flex';
        scrollSection.style.display = 'flex';
        startTypewriter();
    }, 4000); // Hide splash screen completely after 4 seconds

    function startTypewriter() {
        const text = "OVERWATCH";
        const speed = 25; // Adjust speed of typing in milliseconds
        const textArray = text.split('');
        const resultArray = textArray.map(char => `<span class="char">${char}</span>`).join('');
        document.getElementById("animated-text").innerHTML = resultArray;
        const charElements = document.querySelectorAll('.char');
        let indices = Array.from(textArray.keys());
        let index = 0;

        function getRandomIndex() {
            const randomPos = Math.floor(Math.random() * indices.length);
            const [randomIndex] = indices.splice(randomPos, 1);
            return randomIndex;
        }

        function typeWriter() {
            if (index < textArray.length) {
                const randomIndex = getRandomIndex();
                charElements[randomIndex].style.opacity = 1;
                index++;
                setTimeout(typeWriter, speed);
            }
        }

        typeWriter();
    }

    function fadeInImage() {
        const distanceFromTop = scrollSection.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        const imageOpacity = Math.max(0, 1 - ((distanceFromTop - viewportHeight) / viewportHeight));
        bottomImage.style.opacity = imageOpacity;
    }

    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 0) {
            navbar.classList.add('solid');
        } else {
            navbar.classList.remove('solid');
        }

        fadeInImage();
    });

    window.addEventListener('scroll', fadeInImage);

    function showCharacter(role) {
        const characterImage = document.getElementById('character-image');
        let imageUrl;
        switch (role) {
            case 'damage':
                imageUrl = 'damage.png';
                break;
            case 'tank':
                imageUrl = 'tank.jpg';
                break;
            case 'support':
                imageUrl = 'support.jpg';
                break;
            default:
                imageUrl = 'damage.png';
        }
        characterImage.src = imageUrl;
    }

    let isOverwatch = true;

    const overwatchContent = {
        title: "Overwatch",
        description: "This is a short description of the Overwatch story. You can add more details about the storyline here.",
        images: ["story1.jpg", "story2.jpg", "story3.jpg", "story4.jpg"],
        background: "image99.png" // Add background image for Overwatch
    };

    const blackwatchContent = {
        title: "Blackwatch",
        description: "This is a short description of the Blackwatch story. You can add more details about the storyline here.",
        images: ["b1.jpg", "b2.jpg", "b3.webp", "b4.webp"],
        background: "b1.png" // Add background image for Blackwatch
    };

    function updateStoryContent(content) {
        storyTitle.textContent = content.title;
        storyDescription.textContent = content.description;
        storyImages.innerHTML = content.images.map(src => `<img src="${src}" alt="${content.title} Image">`).join('');
        // Update background based on content
        const sectionWithImage = document.querySelector('.section-with-image');
        sectionWithImage.style.backgroundImage = `url('${content.background}')`;
    }
    
    
    leftArrow.addEventListener('click', function() {
        isOverwatch = !isOverwatch;
        updateStoryContent(isOverwatch ? overwatchContent : blackwatchContent);
    });

    rightArrow.addEventListener('click', function() {
        isOverwatch = !isOverwatch;
        updateStoryContent(isOverwatch ? overwatchContent : blackwatchContent);
    });

    damageButton.addEventListener('click', function() {
        showCharacter('damage');
    });

    tankButton.addEventListener('click', function() {
        showCharacter('tank');
    });

    supportButton.addEventListener('click', function() {
        showCharacter('support');
    });

    // Initially load Overwatch content
    updateStoryContent(overwatchContent);
});

let userCountElement = document.getElementById('user-count');
let userCount = 23315464;

setInterval(() => {
    userCount += Math.floor(Math.random() * 10) + 1; // Random increment between 1 and 10
    userCountElement.textContent = `${userCount.toLocaleString()}+ Users Playing Overwatch`;
}, 1000);

let reviews = document.querySelectorAll('.review');
let currentIndex = 0;

document.getElementById('prev-button').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateReviewHighlight();
    }
});

document.getElementById('next-button').addEventListener('click', () => {
    if (currentIndex < reviews.length - 1) {
        currentIndex++;
        updateReviewHighlight();
    }
});

function updateReviewHighlight() {
    reviews.forEach((review, index) => {
        if (index === currentIndex) {
            review.classList.add('active');
        } else {
            review.classList.remove('active');
        }
    });
}

// Initialize the first review as active
reviews[currentIndex].classList.add('active');



