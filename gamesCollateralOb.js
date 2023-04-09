//Christen Shubaly

const games = [
    {
        img: "/pics/games/destiny-2.jpg",
        name: 'Destiny 2',
        genre: 'First-person shooter, multiplayer',
        price: 'Free-to-play with in-game purchases'
    },
    {
        img: "/pics/games/rust.jpg",
        name: 'Rust',
        genre: 'Survival',
        price: '$39.99 USD'
    },
    {
        img: "/pics/games/Red-Dead-Redemption-2.jpeg",
        name: 'Red Dead Redemption 2',
        genre: 'Action-adventure',
        price: '$59.99 USD'
    },
    {
        img: "/pics/games/Grand-Theft-Auto-V.jpg",
        name: 'Grand Theft Auto V',
        genre: 'Action-adventure',
        price: '$29.99 USD'
    },
    {
        img: "/pics/games/Beat-Saber.jpg",
        name: 'Beat Saber',
        genre: 'Virtual reality, rhythm',
        price: '$29.99 USD'
        },
    {
        img: "/pics/games/Tekken-7.jpg",
        name: 'Tekken 7',
        genre: 'Fighting',
        price: '$39.99 USD'
    },
    {
        img: "/pics/games/Black-Desert.png",
        name: 'Black Desert',
        genre: 'MMORPG',
        price: 'Free-to-play with in-game purchases'
    },
    {
        img: "/pics/games/Sea-Of-Thieves.jpg",
        name: 'Sea Of Thieves',
        genre: 'Action-adventure, multiplayer',
        price: '$39.99 USD'
    },
    {
        img: "/pics/games/Fall-Guys.png",
        name: 'Fall Guys',
        genre: 'Battle royale',
        price: '$19.99 USD'
    },
    {
        img: "/pics/games/Atomic-Heart.jpg",
        name: 'Atomic Heart',
        genre: 'Action RPG',
        price: '$59.99 USD'
    },
    {
        img: "/pics/games/warframe.jpg",
        name: 'Warframe',
        genre: 'Action RPG, multiplayer',
        price: 'Free-to-play with in-game purchases'
    },
    {
        img: "/pics/games/Elden-Ring.jpg",
        name: 'Elden Ring',
        genre: 'Action RPG',
        price: '$59.99 USD'
    },
    {
        img: "/pics/games/Apex-Legends.jpg",
        name: 'Apex Legends',
        genre: 'Battle royale, multiplayer',
        price: 'Free-to-play with in-game purchases'
    },
    {
        img: "/pics/games/smite.jpg",
        name: 'Smite',
        genre: 'MOBA',
        price: 'Free-to-play with in-game purchases'
    },
    {
        img: "/pics/games/Dragon-age-Inquisition.jpg",
        name: "Dragons' age: Inquisition",
        genre: 'Action RPG',
        price: '$19.99 USD'
    },
    {
        img: "/pics/games/Terraria.jpg",
        name: 'Terraria',
        genre: 'Sandbox, action-adventure',
        price: '$9.99 USD'
    },
    {
        img: "/pics/games/Shadow-of-the-Colossus.jpg",
        name: 'Shadow of the Colossus',
        genre: 'Action-adventure',
        price: '$19.99 USD'
    },
    {
        img: "/pics/games/The-last-of-us-Part-II.jpg",
        name: 'The last of us: Part II',
        genre: 'Action-adventure',
        price: '$19.99 USD'
    },
    {
        img: "/pics/games/Guardians_of_the_Galaxy.jpg",
        name: 'Guardians Of Galaxy',
        genre: 'Action-adventure',
        price: '$59.99 USD'
    },
    {
        img: "/pics/games/wildhearts.png",
        name: 'Wild Hearts',
        genre: 'Rhythm',
        price: '$12.99 USD'
    },
    {
        img: "/pics/games/ARK-Survival-Ascended.jpg",
        name: 'Ark: Survival Ascended',
        genre: 'Survival',
        price: '$49.99 USD'
    },
    {
        img: "/pics/games/Hitman 3.jpg",
        name: 'Hitman 3',
        genre: 'Stealth',
        price: '$59.99 USD'
    },
    {
        img: "/pics/games/Monster Hunter Rise.jpeg",
        name: 'Monster Hunter: Rise',
        genre: 'Action RPG',
        price: '$59.99 USD'
    },
    {
        img: "/pics/games/Titanfall 2.jpg",
        name: 'Titanfall 2',
        genre: 'First-person shooter',
        price: '$19.99 USD'
    },
    {
        img: "/pics/games/Bioshock Infinte.jpg",
        name: 'Bioshock: Infinte',
        genre: 'First-person shooter',
        price: '$19.99 USD'
    },
    {
        img: "/pics/games/Hades.jpg",
        name: "Hades",
        genre: "Roguelike, action RPG",
        price: "$24.99 USD"
    },
    {
        img: "/pics/games/God of WarRagnorok.jpg",
        name: "God of War: Ragnarok",
        genre: "Action-adventure",
        price: "$59.99"
    },
    {
        img: "/pics/games/Amoung us.jpg",
        name: "Among Us",
        genre: "Party, social deduction",
        price: "$4.99 USD"
    },
    {
        img: "/pics/games/Final Fantasy XIV.jpg",
        name: "Final Fantasy XIV",
        genre: "MMORPG",
        price: "Free trial up to level 60, then $14.99/month subscription"
    },
    {
        img: "/pics/games/Wo Long Fallen Dynasty.png",
        name: "Wo Long: Fallen Dynasty",
        genre: "Action RPG",
        price: "$59.99"
    },
    {
        img: "/pics/games/Lost Ark.jpg",
        name: "Lost Ark",
        genre: "MMORPG",
        price: "Free-to-play with in-game purchases"
    },
    {
        img: "/pics/games/Borderlands 3.jpg",
        name: "Borderlands 3",
        genre: "First-person shooter, action RPG",
        price: "$59.99 USD"
    },
    {
        img: "/pics/games/Lost In Random.png",
        name: "Lost In Random",
        genre: "Action-adventure, RPG",
        price: "$29.99 USD"
    },
    {
        img: "/pics/games/Paladins.jpg",
        name: "Paladins",
        genre: "FPS, MOBA",
        price: "Free-to-play with in-game purchases"
    },
    {
        img: "/pics/games/The Binding of IsaacRebirth.jpg",
        name: "The Binding of Isaac: Rebirth",
        genre: "Roguelike",
        price: "$14.99 USD"
    },
    {
        img: "/pics/games/Slime Rancher 2.jpg",
        name: "Slime Rancher 2",
        genre: "Life simulation, adventure",
        price: "$33.99 USD"
    },
    {
        img: "/pics/games/Splitgate.jpg",
        name: "Splitgate",
        genre: "Action-adventure",
        price: "$19.99 USD"
    },
    {
        img: "/pics/games/Wobbledogs.jpg",
        name: "Wobbledogs",
        genre: "Simulation, Indie",
        price: "$19.99 USD"
    },
    {
        img: "/pics/games/Dead Space.png",
        name: "Dead Space",
        genre: "Survival horror",
        price: "Not available for purchase"
    },
    {
        img: "/pics/games/The Elder Scrolls VSkyrim VR.jpg",
        name: "The Elder Scrolls V: Skyrim VR",
        genre: "Action role-playing",
        price: "$59.99 USD"
    },
    {
        img: "/pics/games/Metro Exodus.jpg",
        name: "Metro Exodus",
        genre: "First-person shooter",
        price: "$39.99 USD"
    },
    {
        img: "/pics/games/Little Nightmares 2.png",
        name: "Little Nightmares 2",
        genre: "Puzzle-platformer, horror",
        price: "$29.99 USD"
    },
    {
        img: "/pics/games/A Way Out.jpg",
        name: "A Way Out",
        genre: "Action-adventure",
        price: "$29.99 USD"
    },
    {
        img: "/pics/games/Century Age of Ashes.jpg",
        name: "Century: Age of Ashes",
        genre: "Multiplayer dragon combat",
        price: "Free-to-play with in-game purchases"
    },
    {
        img: "/pics/games/SuSubnauticaBelow Zero.jpg",
        name: "Subnautica: Below Zero",
        genre: "Survival, adventure",
        price: "$29.99 USD"
    },
    {
        img: "/pics/games/Conan Exiles.jpg",
        name: "Conan Exiles",
        genre: "Survival",
        price: "$39.99 USD"
    },
    {
        img: "/pics/games/cult of the lamb.jpg",
        name: "Cult of the Lamb",
        genre: "Action",
        price: "$19.99"
    },
    {
        img: "/pics/games/necrocity.jpg",
        name: "NecroCity",
        genre: "Action, RPG",
        price: "Free-to-play"
    },
    {
        img: "/pics/games/High on Life.jpg",
        name: "High on Life",
        genre: "Exploration, platformer",
        price: "$51.00 USD"
    },
    {
        img: "/pics/games/Trinity Fusion.png",
        name: "Trinity Fusion",
        genre: "Action, RPG",
        price: "$59.99 USD"
    },
    {
        img: "/pics/games/SIFU.jpg",
        name: "SIFU",
        genre: "Action, beat 'em up",
        price: "$39.99 USD"
    },
    {
        img: "/pics/games/Gotham Knights.jpg",
        name: "Gotham Knights",
        genre: "Action role-playing",
        price: "$59.99"
    },
    {
        img: "/pics/games/MADNESS Project Nexus.jpg",
        name: "MADNESS: Project Nexus",
        genre: "Action, beat 'em up",
        price: "$9.99 USD"
    },
    {
        img: "/pics/games/Redfall.jpg",
        name: "Redfall",
        genre: "Open-world shooter",
        price: "59.99"
    },
    {
        img: "/pics/games/SpiderManRemastered.jpg",
        name: "Spider-Man: Remastered",
        genre: "Action-adventure",
        price: "Included with Marvel's Spider-Man: Miles Morales Ultimate Edition"
    },
    {
        img: "/pics/games/Overwatch 2.jpg",
        name: "Overwatch 2",
        genre: "First-person shooter",
        price: "Free to play with in-game purchases"
    },
    {
        img: "/pics/games/HorizonForbiddenWest.jpg",
        name: "Horizon Forbidden West",
        genre: "Action role-playing",
        price: "$66.53 USD"
    },
    {
        img: "/pics/games/injustice 2.jpg",
        name: "Injustice 2",
        genre: "Fighting",
        price: "$49.99 USD"
    },
    {
        img: "/pics/games/Totally Accurate Battle Simulator.jpg",
        name: "Totally Accurate Battle Simulator",
        genre: "Simulation, strategy",
        price: "$19.99 USD"
    },
    {
        img: "/pics/games/League Of Legends.jpg",
        name: "League of Legends",
        genre: "MOBA",
        price: "Free-to-play with in-game purchases"
    }
]

const $container = document.getElementById('container')
const container = []
if ($container) {
    for (let game in games) {
        container.push(`
            <div class="game">
                <h2>${games[game].name}</h2>
                <img src="${games[game].img}" alt="${games[game].name}">
                <div class="info">
                    <p>${games[game].genre}</p>
                    <p>${games[game].price}</p>
                    <button class="buy" type="submit" value="">Buy now</button>
                </div>
            </div>
        `)  
    }
    
    $container.innerHTML = container.join('')
}
