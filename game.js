document.addEventListener("DOMContentLoaded", () => {
    const scrollRightButton = document.querySelector(".scroll-right");
    const draggableBg = document.querySelector(".draggable-bg");
    const images = draggableBg.querySelectorAll("img");
    const heroTitle = document.querySelector(".hero__title");
  
    let currentIndex = 0;
    let popup = null; // Initialize popup variable
  
    // Function to create and show popup
    const showPopup = (heading, info) => {
        // Remove existing popup if any
        if (popup) {
            popup.remove();
        }
        
        // Create new popup
        popup = document.createElement("div");
        popup.classList.add("popup");
        popup.innerHTML = `
            <h2>${heading}</h2>
            <p>${info}</p>
        `;
        document.body.appendChild(popup);
  
        // Event listener to remove popup when clicked
        popup.addEventListener("click", () => {
            popup.remove();
            popup = null; // Reset popup variable
        });
    };
  
    // Function to update hero title
    const updateHeroTitle = () => {
        // Get information for the current image
        const imageInfo = {
            "img/bg1.jpg": { 
                title: "ESCORT",
                subtext: "Shambali Monastery",
                subsubtext: "Get ready to defend/attack the payload with your team, while employing a variety of tactics!"
            },
            "img/vackground22.png": { 
                title: "HYBRID",
                subtext: "Midtown",
                subsubtext: "Combines elements of Assault and Escort; teams must capture a point before escorting a payload."
            },
            "img/bg3.jpg": { 
                title: "ASSAULT",
                subtext: "Hanamura",
                subsubtext: "One team attacks and tries to capture points on the map while the other team defends. Who will be victorious!?"
            },
            "img/bg4.jpg": { 
                title: "DEATHMATCH",
                subtext: "Malevento",
                subsubtext: "In a free-for-all format players strive to be the first to reach 20 eliminations, as to to be the sole champion!"
            },
            "img/bg5.jpg": { 
                title: "PUSH",
                subtext: "New Queen Street",
                subsubtext: "Battle fiercely to control a central objective and push it into enemy territory!"
            }
        };
  
        const currentImageSrc = images[currentIndex].getAttribute("src");
        const { title, subtext, subsubtext } = imageInfo[currentImageSrc];
        
        heroTitle.innerHTML = `
            <span>${title}</span>
            <span class="subtext">${subtext}</span>
            <span class="subsubtext">${subsubtext}</span>
        `;
    };
  
    // Function to show tip popup and update hero title
    const showTipAndHeroTitle = () => {
        // Get information for the current image
        const imageInfo = {
            "img/bg1.jpg": { heading: "TIPS & TRICKS", info: "Mic Up, Team Up: Communication is your secret weapon." },
            "img/vackground22.png": { heading: "TIPS & TRICKS", info: "Role Call: Know your role, play your part. " },
            "img/bg3.jpg": { heading: "TIPS & TRICKS", info: "Position Perfect: Stay smart, stay alive." },
            "img/bg4.jpg": { heading: "TIPS & TRICKS", info: "Ultimate Synergy: Time those ults right!" },
            "img/bg5.jpg": { heading: "TIPS & TRICKS", info: "Stay Lit, Stay Positive: Keep that morale sky-high." }
        };
  
        const currentImageSrc = images[currentIndex].getAttribute("src");
        const { heading, info } = imageInfo[currentImageSrc];
  
        // Show popup for the current image
        showPopup(heading, info);
  
        // Update hero title when map changes
        updateHeroTitle();
    };
  
    scrollRightButton.addEventListener("click", () => {
        const imageWidth = images[0].clientWidth;
        currentIndex = (currentIndex + 1) % images.length;
        draggableBg.scrollTo({ left: currentIndex * imageWidth, behavior: 'smooth' });
  
        // Show tip popup and update hero title when clicking next button
        showTipAndHeroTitle();
    });
  
    // Listen for scroll events and hide existing tip popup
    window.addEventListener("scroll", () => {
        // Hide existing popup if any
        if (popup) {
            popup.remove();
            popup = null; // Reset popup variable
        }
    });
  
    // Initial update of hero title
    updateHeroTitle();
  });
  
  
  function showHero(imageUrl, name, subtitle, description) {
    // Update big circular image
    var bigImage = document.querySelector('.hero-detail-img');
    bigImage.style.backgroundImage = `url('${imageUrl}')`;
  
    // Update hero details
    var heroName = document.querySelector('.hero-details h2');
    heroName.textContent = name;
  
    var heroSubtitle = document.querySelector('.hero-details .subtext');
    heroSubtitle.textContent = subtitle;
  
    var heroDescription = document.querySelector('.hero-details p');
    heroDescription.textContent = description;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const heroDetails = document.getElementById('hero-details'); // Display hero details
    const images = ['img/zenyatta.jpg', 'img/orisa.jpg', 'img/hanzo.png']; // Array of image URLs
    const descriptions = [
        { name: 'Zenyatta', subtitle: 'Support', description: 'Serene monk with powerful orbs.' },
        { name: 'Orisa', subtitle: 'Tank', description: 'Robotic protector with heavy firepower.' },
        { name: 'Hanzo ', subtitle: 'Damage', description: 'Deadly archer with pinpoint accuracy.' }
    ]; // Array of objects containing hero details
    let currentIndex = 0;
  
    // Function to update hero details
    const updateHeroDetails = () => {
        const imageIndex = currentIndex % images.length;
        const descriptionIndex = currentIndex % descriptions.length;
  
        const imageUrl = images[imageIndex];
        const { name, subtitle, description } = descriptions[descriptionIndex];
  
        const heroDetailImg = heroDetails.querySelector('.hero-detail-img'); //Display hero image
        heroDetailImg.style.backgroundImage = `url('${imageUrl}')`;
  
        const heroName = heroDetails.querySelector('h2'); // Hero name is displayed in an <h2> element
        heroName.textContent = name;
  
        const heroSubtitle = heroDetails.querySelector('.subtext'); // Hero subtitle is displayed in an element with class 'subtext'
        heroSubtitle.textContent = subtitle;
  
        const heroDescription = heroDetails.querySelector('p:last-child'); // Hero description is displayed in the last <p> element
        heroDescription.textContent = description;
  
        currentIndex++;
    };
  
    // Update hero details every 2 seconds
    setInterval(updateHeroDetails, 2000);
  });
  
  