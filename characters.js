const characters = [
    {
        name: 'Tracer',
        role: 'Damage',
        description: 'A time-jumping adventurer.',
        abilities: ['Blink', 'Recall', 'Pulse Bomb'],
        image: 'tracer.webp'
    },
    {
        name: 'Reinhardt',
        role: 'Tank',
        description: 'A stalwart defender of the innocent.',
        abilities: ['Barrier Field', 'Charge', 'Fire Strike'],
        image: 'tank.dfjpg'
    },
    {
        name: 'Mercy',
        role: 'Support',
        description: 'A guardian angel to those who come under her care.',
        abilities: ['Caduceus Staff', 'Resurrect', 'Valkyrie'],
        image: 'suppordst.jpg'
    },
    {
        name: 'Pharah',
        role: 'Damage',
        description: 'A rocket launcher-wielding aerial threat.',
        abilities: ['Hover Jets', 'Jump Jet', 'Barrage'],
        image: 'pharah.jpg'
    },
    {
        name: 'Roadhog',
        role: 'Tank',
        description: 'A ruthless killer with a well-earned reputation.',
        abilities: ['Scrap Gun', 'Chain Hook', 'Take a Breather'],
        image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/ecc77d68b6ed78f82c7d83c4ee6c0f4a3a1bb91c26d8280c70ed8fd3524d0c6d.png'
    },
    {
        name: 'Zenyatta',
        role: 'Support',
        description: 'An omnic monk dedicated to healing the world.',
        abilities: ['Orb of Harmony', 'Orb of Discord', 'Transcendence'],
        image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/da930d14f2c4b05ba60941d53d4d44e118df79c931072156689d4399a7fc57fc.png'
    },
    // Add more characters as needed
    {
        name: 'Soldier: 76',
        role: 'Damage',
        description: 'A vigilante aiming to rid the world of villainy.',
        abilities: ['Heavy Pulse Rifle', 'Helix Rockets', 'Tactical Visor'],
        image: 'soldier.png'
    },
    {
        name: 'Winston',
        role: 'Tank',
        description: 'A genetically engineered gorilla scientist.',
        abilities: ['Tesla Cannon', 'Jump Pack', 'Barrier Projector'],
        image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/013a0e0d28b282b8a4a09d6f3fbf61d5c23857b2d49f6361ff76a949d9254e39.png'
    },
    {
        name: 'Brigitte',
        role: 'Support',
        description: 'A valiant squire protecting her allies.',
        abilities: ['Rocket Flail', 'Repair Pack', 'Rally'],
        image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/1ebd4fde7860a5966e7e2411e8545cf33d889dd0a43bf21f54c17e9c0ab05143.png'
    },
    {
        name: 'Genji',
        role: 'Damage',
        description: 'A cyborg ninja seeking redemption.',
        abilities: ['Shuriken', 'Deflect', 'Dragonblade'],
        image: 'damage.png'
    },
    {
        name: 'D.Va',
        role: 'Tank',
        description: 'A former professional gamer turned mech pilot.',
        abilities: ['Fusion Cannons', 'Defense Matrix', 'Self-Destruct'],
        image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/92eb9c5d40c1cfd7e1791a73669db2146d778b509d0645e57558c9df44cdcb6c.png'
    },
    {
        name: 'Moira',
        role: 'Support',
        description: 'A brilliant scientist seeking to unlock the secrets of life and death.',
        abilities: ['Biotic Grasp', 'Biotic Orb', 'Coalescence'],
        image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/18158c6662d7e7867ebf7bc674b594dd42e0e6af5b70b17fb35e71d149c0ad78.png'
    },
    {
        name: 'McCree',
        role: 'Damage',
        description: 'A sharpshooter seeking justice.',
        abilities: ['Peacekeeper', 'Combat Roll', 'Deadeye'],
        image: 'OW2_McCree.webp'
    },
    {
        name: 'Ashe',
        role: 'Damage',
        description: 'The leader of the Deadlock Gang.',
        abilities: ['The Viper', 'Dynamite', 'B.O.B.'],
        image: 'ashe.png'
    },
    {
        name: 'Orisa',
        role: 'Tank',
        description: 'A guardian robot built to protect the innocent.',
        abilities: ['Fusion Driver', 'Protective Barrier', 'Supercharger'],
        image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/36d74a65089163c773bb0ec13d4c2d7f9e4f399c817a8d8484e22667cf1f9bb0.png'
    },
    {
        name: 'Sigma',
        role: 'Tank',
        description: 'An eccentric astrophysicist who manipulates gravity.',
        abilities: ['Hyperspheres', 'Kinetic Grasp', 'Gravitic Flux'],
        image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a158db22b1a03045dfcaec19d6e9dbf28f05ba1e40b0ef2b69b7b0e865f4fcf1.png'
    },
    {
        name: 'Ana',
        role: 'Support',
        description: 'A battle-scarred veteran who supports her allies from afar.',
        abilities: ['Biotic Rifle', 'Sleep Dart', 'Nano Boost'],
        image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/ce69e306e079f1db37239d8f5e5f8aa091f81a60d0b1b91a96a514d7f3cd7b15.png'
    },
    {
        name: 'Lucio',
        role: 'Support',
        description: 'An international celebrity who uses music to heal and inspire.',
        abilities: ['Sonic Amplifier', 'Crossfade', 'Sound Barrier'],
        image: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/35b1d3af934225e3560a9cfd8f53c44ef1ad45202df1741cd860268b937e1600.png'
    }
];

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

function hidePopup() {
    document.getElementById('character-popup').style.display = 'none';
}

document.getElementById('prev-btn').addEventListener('click', () => {
    document.querySelector('.character-list').scrollBy({ left: -300, behavior: 'smooth' });
});

document.getElementById('next-btn').addEventListener('click', () => {
    document.querySelector('.character-list').scrollBy({ left: 300, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', () => {
    createCharacterList();
});