const tooltip = document.querySelector('.tooltip');

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    const text = btn.getAttribute('data-tooltip');
    tooltip.textContent = text;
    tooltip.style.display = 'block';

    const rect = btn.getBoundingClientRect();
    const tooltipWidth = tooltip.offsetWidth;
    const tooltipHeight = tooltip.offsetHeight;

    let top = rect.top - tooltipHeight - 8;
    let left = rect.left + rect.width / 2 - tooltipWidth / 2;

    if (top < window.scrollY) {
      top = rect.bottom + 8;
    }

    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
  });

  btn.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
});