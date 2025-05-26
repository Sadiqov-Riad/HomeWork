let current = 1; // 0=красный, 1=желтый, 2=зеленый
const lights = ['red', 'yellow', 'green'];

function next() {
    document.getElementById(lights[current]).classList.remove('active');
    current = (current + 1) % 3;
    document.getElementById(lights[current]).classList.add('active');
}
