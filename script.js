// Redirect to next page
function handleyesClick() {
    window.location.href = "yes.html";
}

function toggleMusic() {
    if (musicPlaying) {
        music.pause();
        musicPlaying = false;
        document.getElementById('music-toggle').textContent = '';
    } else {
        music.muted = false;
        music.play().catch(() => {});
        musicPlaying = true;
        document.getElementById('music-toggle').textContent = '';
    }
}
