const container = document.getElementById('productScroll');
const scrollAmt = container.clientWidth * 0.8;

function scrollLeft() {
  container.scrollBy({ left: -scrollAmt, behavior: 'smooth' });
}
function scrollRight() {
  container.scrollBy({ left: scrollAmt, behavior: 'smooth' });
}

// Auto bounce every 2s
let direction = 1;
setInterval(() => {
  const maxScroll = container.scrollWidth - container.clientWidth;
  if (container.scrollLeft >= maxScroll - 5) direction = -1;
  if (container.scrollLeft <= 5) direction = 1;
  container.scrollBy({ left: direction * scrollAmt, behavior: 'smooth' });
}, 2000);
