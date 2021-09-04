import React from 'react';

function Homepage() {

    window.localStorage.removeItem("playbook");
    window.localStorage.removeItem("background");
    window.localStorage.removeItem("drive");

    return (
        <div className="content info-page">
            <h2 className="homepage-title">Welcome to Stonetop Beyond!</h2>
            <h2 className="homepage-title">Read below to find out more about the game, or create a character after you've logged in!</h2>
            <div className="info-container">
                <div className="info">
                    <h2>The Premise</h2>
                    <p>You play the heroes of <strong>Stonetop</strong>, an isolated village near the edge of the known world. Adventures focus on dealing with threats to the village, seizing opportunities for the village, or pursuing personal goals. Months or years might pass between adventures.</p>
                </div>
                <div className="info">
                    <h2>The Village Itself...</h2>
                    <p><strong>…is home to around 300 folks.</strong> It’s a nice place, though poor. People look out for each other, here.</p>
                    <p><strong>…is built around a massive standing stone of unknown origin</strong>, carved with faint runes. Lightning strikes the Stone often.</p>
                    <p><strong>…stands at the edge of the Great Wood.</strong> Villagers hunt and trap but—per a compact with the Forest Folk—never fell a living tree.</p>
                </div>
                <div className="info">
                    <h2>Neighbors</h2>
                    <p><strong>The Forest Folk</strong> disappeared ten years ago, and no one knows why.</p>
                    <p>Horrid little <strong>crinwin</strong> lurk in the Great Wood. They’ve grown bolder and more numerous since the Forest Folk left.</p>
                    <p><strong>Gordin's Delve</strong> is a rugged mining village a few days to the west.</p>
                    <p><strong>The Hillfolk</strong> are nomads of the Steplands to the south and the Flats to the west; they have beef with Gordin's Delve.</p>
                    <p><strong>Marshedge</strong> is a sizable town about 10 days's march south and west.</p>
                    <p><strong>Barrier Pass</strong> is a few days north in the mountains; stoic, grim, unwelcoming.</p>
                    <p>There’s no empire, no kings or nobles—at least not around here. More “civilized” towns and cities lie farther to the south.</p>
                </div>
                <div className="info">
                    <h2>The Makers</h2>
                    <p>The Makers are long gone, but their ruins (many sized for giants) remain. <strong>Stonetop is built on Maker-ruins:</strong> an ancient cistern, the crumbling Old Wall, some old foundations. <strong>The Ruined Tower</strong> is about a day from town. <strong>The West Road</strong> stretches from Stonetop to Gordin’s Delve. <strong>The Highway</strong> crosses the West Road a few miles from town, stretching from Barrier Pass to Marshedge and beyond.</p>
                </div>
                <div className="info">
                    <h2>Other Things of Note</h2>
                    <p><strong>The PCs are all human.</strong> Strange peoples (like the <strong>Forest Folk</strong> or <strong>the fae</strong> or the mask-wearing <strong>Ustrina</strong> from beyond Gordin's Delve) are known of but poorly understood.</p>
                    <p>Sages whisper of the <strong>Things Below</strong>, primeval entities of darkness, corruption, and ruin. Their power taints all that it touches.</p>
                    <p><strong>People are terrified of deep water.</strong> Evil dwells there. Evil that will drag you to your doom. Everyone knows this.</p>
                    <p><strong>Magic is not common, nor easy, nor safe.</strong> It can be borrowed from spirits or gods or Things Below or wrested from the forgotten lore of the Makers. But it is not to be trifled with.</p>
                    <p><strong>Iron</strong> is the most commin metal. Good steel is hard to find. <strong>Bronze</strong> tools and weapons are common enough, but old-fashioned and dripping with superstition.</p>
                </div>
            </div>
        </div>
    )
}

export default Homepage;