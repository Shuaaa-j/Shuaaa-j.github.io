// Array of character objects, each containing properties like name, role, description, abilities, and image
const characters = [
    {
    name: 'Genji',
    role: 'Damage',
    description: 'A cyborg ninja seeking redemption.',
    abilities: ['Shuriken', 'Deflect', 'Dragonblade'],
    image: 'img/damage.png'
},
{
    name: 'Ana',
    role: 'Support',
    description: 'A battle-scarred veteran who supports her allies from afar.',
    abilities: ['Biotic Rifle', 'Sleep Dart', 'Nano Boost'],
    image: 'img/ana.jpg'
},
{
    name: 'Zenyatta',
    role: 'Support',
    description: 'An omnic monk dedicated to healing the world.',
    abilities: ['Orb of Harmony', 'Orb of Discord', 'Transcendence'],
    image: 'img/zenyatta.jpg'
},
{
    name: 'Tracer',
    role: 'Damage',
    description: 'A time-jumping adventurer.',
    abilities: ['Blink', 'Recall', 'Pulse Bomb'],
    image: 'img/tracer.webp'
},
{
    name: 'Pharah',
    role: 'Damage',
    description: 'A rocket launcher-wielding aerial threat.',
    abilities: ['Hover Jets', 'Jump Jet', 'Barrage'],
    image: 'img/pharah.jpg'
},
{
    name: 'Roadhog',
    role: 'Tank',
    description: 'A ruthless killer with a well-earned reputation.',
    abilities: ['Scrap Gun', 'Chain Hook', 'Take a Breather'],
    image: 'img/roadhog.jpg '
},
{
    name: 'Mercy',
    role: 'Support',
    description: 'A guardian angel to those who come under her care.',
    abilities: ['Caduceus Staff', 'Resurrect', 'Valkyrie'],
    image: 'img/support.jpg'
},
{
    name: 'Reinhardt',
    role: 'Tank',
    description: 'A stalwart defender of the innocent.',
    abilities: ['Barrier Field', 'Charge', 'Fire Strike'],
    image: 'img/tank.jpg'
},
{
    name: 'Soldier: 76',
    role: 'Damage',
    description: 'A vigilante aiming to rid the world of villainy.',
    abilities: ['Heavy Pulse Rifle', 'Helix Rockets', 'Tactical Visor'],
    image: 'img/soldier.png'
},
{
    name: 'Winston',
    role: 'Tank',
    description: 'A genetically engineered gorilla scientist.',
    abilities: ['Tesla Cannon', 'Jump Pack', 'Barrier Projector'],
    image: 'img/winston.jpg'
},
{
    name: 'Brigitte',
    role: 'Support',
    description: 'A valiant squire protecting her allies.',
    abilities: ['Rocket Flail', 'Repair Pack', 'Rally'],
    image: 'img/brigitte.jpg'
},
{
    name: 'D.Va',
    role: 'Tank',
    description: 'A former professional gamer turned mech pilot.',
    abilities: ['Fusion Cannons', 'Defense Matrix', 'Self-Destruct'],
    image: 'img/dva.jpg'
},
{
    name: 'Moira',
    role: 'Support',
    description: 'A brilliant scientist seeking to unlock the secrets of life and death.',
    abilities: ['Biotic Grasp', 'Biotic Orb', 'Coalescence'],
    image: 'img/moira.jpg'
},
{
    name: 'McCree',
    role: 'Damage',
    description: 'A sharpshooter seeking justice.',
    abilities: ['Peacekeeper', 'Combat Roll', 'Deadeye'],
    image: 'img/OW2_McCree.webp'
},
{
    name: 'Ashe',
    role: 'Damage',
    description: 'The leader of the Deadlock Gang.',
    abilities: ['The Viper', 'Dynamite', 'B.O.B.'],
    image: 'img/ashe.png'
},
{
    name: 'Orisa',
    role: 'Tank',
    description: 'A guardian robot built to protect the innocent.',
    abilities: ['Fusion Driver', 'Protective Barrier', 'Supercharger'],
    image: 'img/orisa.jpg'
},
{
    name: 'Lucio',
    role: 'Support',
    description: 'An international celebrity who uses music to heal and inspire.',
    abilities: ['Sonic Amplifier', 'Crossfade', 'Sound Barrier'],
    image: 'img/lucio.jpg'
},
{
    name: 'Sigma',
    role: 'Tank',
    description: 'An eccentric astrophysicist who manipulates gravity.',
    abilities: ['Hyperspheres', 'Kinetic Grasp', 'Gravitic Flux'],
    image: 'img/sigma.jpg'
}
];
// Function to create the character list and append images to the character list container
function createCharacterList() {
    const characterList = document.querySelector('.character-list');
    characters.forEach((character, index) => {
        const img = document.createElement('img');
        img.src = character.image;
        img.alt = character.name;
        img.addEventListener('mouseenter', () => showPopup(index, img));
        img.addEventListener('mouseleave', hidePopup);
        characterList.appendChild(img);
    });
}

// Function to show the popup with character details when hovering over a character image
function showPopup(index, img) {
    const character = characters[index];
    const popup = document.getElementById('character-popup');
    const rect = img.getBoundingClientRect();
    popup.style.top = `${rect.bottom + window.scrollY}px`;
    popup.style.left = `${rect.left + window.scrollX}px`;
    document.getElementById('popup-name').innerText = character.name;
    document.getElementById('popup-role').innerText = `Role: ${character.role}`;
    document.getElementById('popup-description').innerText = character.description;
    const abilitiesList = document.getElementById('popup-abilities');
    abilitiesList.innerHTML = '';
    character.abilities.forEach(ability => {
        const li = document.createElement('li');
        li.innerText = ability;
        abilitiesList.appendChild(li);
    });
    popup.style.display = 'block';
}

// Function to hide the popup when the mouse leaves a character image
function hidePopup() {
    document.getElementById('character-popup').style.display = 'none';
}

// Event listener for the "previous" button to scroll the character list to the left
document.getElementById('prev-btn').addEventListener('click', () => {
    document.querySelector('.character-list').scrollBy({ left: -320, behavior: 'smooth' });
});

// Event listener for the "next" button to scroll the character list to the right
document.getElementById('next-btn').addEventListener('click', () => {
    document.querySelector('.character-list').scrollBy({ left: 320, behavior: 'smooth' });
});

// Event listener to initialize the character list when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    createCharacterList();
});

// Event listeners for filter buttons to filter characters based on their roles
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => filterCharacters(button.dataset.category));
});

// Function to filter characters based on selected category and update the character list
function filterCharacters(category) {
    const characterList = document.querySelector('.character-list');
    characterList.innerHTML = ''; // Clear existing character list

    // Filter characters based on category and append them to the character list
    if (category === 'all') {
        characters.forEach(character => appendCharacter(character));
    } else {
        const filteredCharacters = characters.filter(character => character.role.toLowerCase() === category);
        filteredCharacters.forEach(character => appendCharacter(character));
    }
}

// Function to append a character to the character list container
function appendCharacter(character) {
    const characterList = document.querySelector('.character-list');
    const img = document.createElement('img');
    img.src = character.image;
    img.alt = character.name;
    img.addEventListener('mouseenter', () => showPopup(characters.indexOf(character), img));
    img.addEventListener('mouseleave', hidePopup);
    characterList.appendChild(img);
}