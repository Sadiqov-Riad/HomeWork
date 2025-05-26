const stadium = document.querySelector('.stadium');
const ball = document.querySelector('.ball');

stadium.addEventListener('click', (event) => {
    // Координаты клика
    const clickX = event.clientX;
    const clickY = event.clientY;
    

    // Я решил еще сделать так чтобы мяч не мог вылезать за границы поля  
    const ballWidth = window.innerWidth * 0.1;
    const ballHeight = window.innerHeight * 0.16;
    
    const leftBorder = ballWidth / 2;
    const rightBorder = window.innerWidth - ballWidth / 2;
    const topBorder = ballHeight / 2;
    const bottomBorder = window.innerHeight - ballHeight / 2;
    
    const targetX = Math.max(leftBorder, Math.min(rightBorder, clickX));
    const targetY = Math.max(topBorder, Math.min(bottomBorder, clickY));

    // Плавное перемещение мяча
    ball.style.transition = 'all 0.8s ease';
    ball.style.left = targetX + 'px';
    ball.style.top = targetY + 'px';
    
});
