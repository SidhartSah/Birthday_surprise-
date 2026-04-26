let musicPlaying = false; 
                        
window.addEventListener('load', () => {
    const music = document.getElementById('bg-music');

    // play music safely
    const playPromise = music.play();
    if (playPromise !== undefined) {
        playPromise.catch(() => {
            document.body.addEventListener('click', () => {
                music.play();
            }, { once: true });
        });
    }

    // staged reveal
    setTimeout(() => {
        document.querySelector('.yes-title').classList.add('show');
    }, 200);

    setTimeout(() => {
        document.querySelector('#cat-gif').classList.add('show');
    }, 900);

    setTimeout(() => {
        document.querySelector('.yes-message').classList.add('show');
    }, 1500);

    setTimeout(() => {
        launchConfetti();
    }, 2200);
});

function launchConfetti() {
    const duration = 4000;
    const end = Date.now() + duration;

    const isLowPower = window.innerWidth < 768;

    const interval = setInterval(() => {
        if (Date.now() > end) {
            clearInterval(interval);
            return;
        }

        confetti({
            particleCount: isLowPower ? 10 : 20,
            spread: 70,
            origin: {
                x: Math.random(),
                y: Math.random() * 0.5
            }
        });

    }, 400);
}

    function toggleMusic() {
    const music = document.getElementById('bg-music')
    if (musicPlaying) {
        music.pause()
        musicPlaying = false
        document.getElementById('music-toggle').textContent = '🔇'
    } else {
        music.play()
        musicPlaying = true
        document.getElementById('music-toggle').textContent = '🔊'
    }
}
const card = document.querySelector('.container');

const isDesktop = window.innerWidth >= 768;

if (isDesktop && card) {

    // Tilt effect
    document.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 20;
        const rotateY = (x - centerX) / 20;

        card.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    // Cursor light
    document.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        card.style.setProperty('--x', x + '%');
        card.style.setProperty('--y', y + '%');
    });

}
