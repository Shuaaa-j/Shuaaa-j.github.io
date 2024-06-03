document.addEventListener("DOMContentLoaded", function() {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const header = document.querySelector('header');
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
    const logo = document.querySelector('.logo');
    const primaryNav = document.querySelector('.primary-nav');

    // Show the logo and nav links after the splash screen disappears
    setTimeout(() => {
        splashScreen.classList.add('hidden');
        header.style.display = 'block'; // Show header after splash screen hides
        logo.style.display = 'block'; // Show the logo
        primaryNav.style.display = 'flex'; // Show the nav links
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

    window.addEventListener('scroll', fadeInImage);

    function showCharacter(role) {
        const characterImage = document.getElementById('character-image');
        let imageUrl;
        switch (role) {
            case 'damage':
                imageUrl = 'img/damage.png';
                break;
            case 'tank':
                imageUrl = 'img/tank.jpg';
                break;
            case 'support':
                imageUrl = 'img/support.jpg';
                break;
            default:
                imageUrl = 'img/damage.png';
        }
        characterImage.src = imageUrl;
    }
    
    damageButton.addEventListener('click', function() {
        showCharacter('damage');
    });
    
    tankButton.addEventListener('click', function() {
        showCharacter('tank');
    });
    
    supportButton.addEventListener('click', function() {
        showCharacter('support');
    });
    
});

// Users Joining Overwatch
let userCountElement = document.getElementById('user-count');
let userCount = 23315464;

setInterval(() => {
    userCount += Math.floor(Math.random() * 10) + 1; // Random increment between 1 and 10
    userCountElement.textContent = `${userCount.toLocaleString()}+ Users Playing Overwatch`;
}, 1000);

let reviews = document.querySelectorAll('.review');
let currentIndex = 0;

// Buttons in the Reviews
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

// Highlight which Review
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

moreNewsButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    esportsSection.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('back-to-top-button').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});