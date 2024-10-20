document.getElementById('home-link').addEventListener('click', function() {
    document.getElementById('content-area').innerHTML = `
        <div id="main-content">
            <h1>Crosshair Games</h1>
            <h2>Indie VHS Horror</h2>
            <button id="show-games-btn">Show Games</button>
        </div>
    `;

    // Re-attach the 'Show Games' button event
    document.getElementById('show-games-btn').addEventListener('click', function() {
        loadGamesPage();
    });
});

document.getElementById('games-link').addEventListener('click', loadGamesPage);

function loadGamesPage() {
    document.getElementById('content-area').innerHTML = `
        <div class="games-grid">
            <div class="game-card">
                <img src="game1.png" alt="Game 1">
                <h3>HELLCAM</h3>
                <p>Free</p>
                <button class="store-button" onclick="window.location.href='https://store.steampowered.com/app/3222490/HELLCAM/'">Go to Store</button>
            </div>
            <div class="game-card">
                <img src="game2.png" alt="Game 2">
                <h3>Blackwater Creek</h3>
                <p>Free</p>
                <button class="store-button" onclick="window.location.href='https://crosshairgame.itch.io/blackwater-creek'">Go to Store</button>
            </div>
            <div class="game-card">
                <img src="game3.png" alt="Game 3">
                <h3>TRAPPER</h3>
                <p>Free</p>
                <button class="store-button" onclick="window.location.href='https://crosshairgame.itch.io/trapper'">Go to Store</button>
            </div>
            <div class="game-card">
                <img src="comingsoon.png" alt="Game 4">
                <h3>TBD</h3>
                <p>Free</p>
                <button class="store-button" onclick="window.location.href='https://crosshairgame.itch.io/'">Coming soon...</button>
            </div>
        </div>
    `;
}

document.getElementById('about-link').addEventListener('click', function() {
    document.getElementById('content-area').innerHTML = `
        <div id="main-content">
            <h1>About Us</h1>
            <h2>Crosshair Games is an Australian indie studio creating horror games inspired by the classic thrillers of the 80s VHS era. Crosshair Games is run by a 16 year old solo developer.</h2> <!-- Added the subtitle here -->
            <p>Learn more about us here.</p>
        </div>
    `;
});


// Show games button functionality
document.getElementById('show-games-btn').addEventListener('click', loadGamesPage);
