const bunga = ["🌸", "🌺", "🌹", "🌷", "💐", "🌼", "🌻", "🪷"];
const kataManis = [
    "Maafin aku ya sayangku 🥺",
    "Aku tau aku salah 💝",
    "Kamu segalanya buatku ✨",
    "I promise will be better! 💖",
    "Jangan marah lagi ya cantik 🌹",
    "You're my everything 💫",
    "Aku sayang kamu selamanya 💕",
    "Maaf sudah buat kamu kecewa 🥺",
    "I Love You More Than Yesterday 💗",
    "Kamu yang terbaik yang aku punya 💝"
];
let sudahDimaafkan = false;

function tampilkanBunga() {
    const container = document.getElementById('container');
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const bungaElem = document.createElement('div');
            bungaElem.className = 'bunga';
            bungaElem.textContent = bunga[Math.floor(Math.random() * bunga.length)];
            
            const size = Math.random() * (40 - 20) + 20;
            const rotation = Math.random() * 360;
            const duration = Math.random() * (6 - 3) + 3;
            const leftPos = Math.random() * 100;
            const delay = Math.random() * 2;
            
            bungaElem.style.cssText = `
                left: ${leftPos}vw;
                font-size: ${size}px;
                transform: rotate(${rotation}deg);
                animation: jatuhDanHilang ${duration}s linear ${delay}s forwards;
            `;
            
            document.body.appendChild(bungaElem);
            
            setTimeout(() => {
                bungaElem.remove();
            }, (duration + delay) * 1000);
        }, i * 100);
    }
}

function tampilkanKataManis() {
    const container = document.getElementById('kataManisContainer');
    container.innerHTML = '';
    let delay = 0;
    
    const gradients = [
        'linear-gradient(45deg, #ff9a9e, #fad0c4)',
        'linear-gradient(45deg, #ffd1ff, #fad0c4)',
        'linear-gradient(45deg, #a18cd1, #fbc2eb)',
        'linear-gradient(45deg, #ff9a9e, #fecfef)',
        'linear-gradient(45deg, #f6d365, #fda085)',
        'linear-gradient(45deg, #fbc2eb, #a6c1ee)',
        'linear-gradient(45deg, #84fab0, #8fd3f4)',
        'linear-gradient(45deg, #a6c0fe, #f68084)',
        'linear-gradient(45deg, #fccb90, #d57eeb)',
        'linear-gradient(45deg, #e0c3fc, #8ec5fc)'
    ];
    
    kataManis.forEach((kata, index) => {
        setTimeout(() => {
            const wrapper = document.createElement('div');
            wrapper.className = 'kata-wrapper';
            
            const kataElem = document.createElement('div');
            kataElem.className = 'kata-manis';
            kataElem.textContent = kata;
            
            // Gunakan gradien yang berbeda untuk setiap kata
            kataElem.style.background = gradients[index % gradients.length];
            kataElem.style.backdropFilter = 'blur(5px)';
            kataElem.style.border = '1px solid rgba(255, 255, 255, 0.2)';
            kataElem.style.color = 'white';
            kataElem.style.textShadow = '2px 2px 4px rgba(0,0,0,0.3)';
            
            wrapper.appendChild(kataElem);
            container.appendChild(wrapper);
            
            setTimeout(() => {
                kataElem.style.opacity = '1';
                kataElem.style.transform = 'translateY(0) scale(1)';
            }, 100);
        }, delay);
        delay += 1500;
    });
}

function menghindar(btn) {
    const dimaafinBtn = document.getElementById('dimaafin');
    const dimaafinRect = dimaafinBtn.getBoundingClientRect();
    const padding = 100; // Jarak maksimal pergerakan dari tombol dimaafin
    
    // Hitung posisi relatif dari tombol dimaafin
    const centerX = dimaafinRect.left + (dimaafinRect.width / 2);
    const centerY = dimaafinRect.top + (dimaafinRect.height / 2);
    
    // Hitung posisi random dalam radius tertentu dari tombol dimaafin
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * padding;
    
    let x = centerX + Math.cos(angle) * distance;
    let y = centerY + Math.sin(angle) * distance;
    
    // Pastikan tombol tidak keluar dari viewport
    x = Math.max(padding, Math.min(window.innerWidth - btn.offsetWidth - padding, x));
    y = Math.max(padding, Math.min(window.innerHeight - btn.offsetHeight - padding, y));
    
    btn.style.position = 'fixed';
    btn.style.left = (x - btn.offsetWidth / 2) + 'px';
    btn.style.top = (y - btn.offsetHeight / 2) + 'px';
    
    // Tambahkan animasi pergerakan
    btn.style.transition = 'all 0.3s ease-out';
}

function dimaafkan() {
    document.querySelector('.tombol-container').style.display = 'none';
    document.querySelector('h1').style.display = 'none';
    
    // Tambahkan link lagu ke body, bukan ke container
    const songLink = document.createElement('div');
    songLink.className = 'song-link';
    songLink.innerHTML = '<a href="https://youtu.be/NwFVSclD_uc?si=aZ1r2nxR4S2bHW6r" target="_blank">Coba deh klik 🎵</a>';
    document.body.appendChild(songLink);
    
    // Tampilkan hati di atas
    const hearts = document.getElementById('hearts');
    hearts.style.display = 'block';
    hearts.style.position = 'fixed';
    hearts.style.top = '20px';
    hearts.style.left = '0';
    hearts.style.right = '0';
    hearts.style.textAlign = 'center';
    hearts.style.zIndex = '1000';
    
    for (let i = 0; i < 7; i++) {
        const heart = document.createElement('span');
        heart.textContent = '❤️';
        heart.style.fontSize = '35px';
        heart.style.margin = '0 5px';
        heart.style.textShadow = '0 0 10px rgba(255, 0, 0, 0.3)';
        hearts.appendChild(heart);
    }

    // Efek confetti bertahap
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    let skew = 1;

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    (function frame() {
        const timeLeft = animationEnd - Date.now();
        const ticks = Math.max(200, 500 * (timeLeft / duration));
        skew = Math.max(0.8, skew - 0.001);

        confetti({
            particleCount: 2,
            startVelocity: 0,
            ticks: ticks,
            origin: {
                x: Math.random(),
                y: (Math.random() * skew) - 0.2
            },
            colors: ['#ff0000', '#ff69b4', '#ff1493', '#ff69b4', '#ff007f'],
            shapes: ['heart'],
            gravity: randomInRange(0.4, 0.6),
            scalar: randomInRange(0.8, 1.2),
            drift: randomInRange(-0.4, 0.4)
        });

        if (timeLeft > 0) {
            requestAnimationFrame(frame);
        }
    }());

    // Tampilkan kata-kata manis dengan interval
    tampilkanKataManis();
    setInterval(tampilkanKataManis, kataManis.length * 1500);
    
    // Efek bunga yang lebih banyak
    tampilkanBunga();
    setInterval(tampilkanBunga, 3000);
} 