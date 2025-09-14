"use strict";
// Адаптивность
function applyResponsiveStyles() {
    const width = window.innerWidth;
    const container = document.querySelector('.container');
    const headerH1 = document.querySelector('.header h1');
    const headerP = document.querySelector('.header p');
    const controls = document.querySelector('.controls');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const newsGrid = document.querySelector('.news-grid');
    const paginationButtons = document.querySelectorAll('.pagination button');
    if (!container || !headerH1 || !headerP || !controls)
        return;
    if (width <= 480) {
        container.style.padding = '15px';
        headerH1.style.fontSize = '1.8rem';
        headerP.style.fontSize = '1rem';
        controls.style.padding = '15px';
        categoryButtons.forEach(btn => {
            btn.style.padding = '8px 12px';
            btn.style.fontSize = '12px';
        });
        if (newsGrid)
            newsGrid.style.gridTemplateColumns = '1fr';
        paginationButtons.forEach(btn => {
            btn.style.padding = '10px 16px';
            btn.style.fontSize = '13px';
        });
    }
    else if (width <= 768) {
        container.style.padding = '15px';
        headerH1.style.fontSize = '2rem';
        headerP.style.fontSize = '1rem';
        controls.style.padding = '20px';
        categoryButtons.forEach(btn => {
            btn.style.padding = '10px 16px';
            btn.style.fontSize = '13px';
        });
        if (newsGrid)
            newsGrid.style.gridTemplateColumns = '1fr';
        paginationButtons.forEach(btn => {
            btn.style.padding = '10px 16px';
            btn.style.fontSize = '13px';
        });
    }
    else {
        container.style.padding = '20px';
        headerH1.style.fontSize = '2.5rem';
        headerP.style.fontSize = '1.1rem';
        controls.style.padding = '25px';
        categoryButtons.forEach(btn => {
            btn.style.padding = '12px 24px';
            btn.style.fontSize = '14px';
        });
        if (newsGrid)
            newsGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(350px, 1fr))';
        paginationButtons.forEach(btn => {
            btn.style.padding = '12px 20px';
            btn.style.fontSize = '14px';
        });
    }
}
// Вешаем обработчики
window.addEventListener('resize', applyResponsiveStyles);
window.addEventListener('DOMContentLoaded', applyResponsiveStyles);
