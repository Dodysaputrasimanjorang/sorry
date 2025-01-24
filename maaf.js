const bunga = ["🌸", "🌺", "🌹", "🌷", "💐"];
let sudahDimaafkan = false;

function tampilkanBunga() {
    const container = document.getElementById('container');
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const bungaElem = document.createElement('div');
            bungaElem.className = 'bunga';
            bungaElem.textContent = bunga[Math.floor(Math.random() * bunga.length)];
            bungaElem.style.left = Math.random() * 100 + 'vw';
            document.body.appendChild(bungaElem);
            
            setTimeout(() => {
                bungaElem.remove();
            }, 4000);
        }, i * 200);
    }
}

function menghindar(btn) {
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    
    btn.style.position = 'absolute';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

function dimaafkan() {
    document.getElementById('pesanTerimaKasih').style.display = 'block';
    document.querySelector('.tombol-container').style.display = 'none';
    document.querySelector('h1').style.display = 'none';
    
    // Tambahkan efek confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Tambahkan confetti cannon dari kiri dan kanan
    setTimeout(() => {
        // Cannon dari kiri
        confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        // Cannon dari kanan
        confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });
    }, 500);
    
    tampilkanBunga();
    
    // Tambahkan efek hati
    const hearts = document.getElementById('hearts');
    hearts.style.display = 'block';
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            hearts.textContent += '❤️ ';
        }, i * 300);
    }
} 