import "./scroll-snap.css"

const ScrollSnap = () => {
  const updateDynamicHeight = () => {
    const vh = window.innerHeight;
    const vmin = Math.min(window.innerWidth, window.innerHeight);
    const ratio = Math.floor(vh / vmin);
    document.documentElement.style.setProperty('--divisor', `${ratio}`);
  }
  
  window.addEventListener('resize', updateDynamicHeight);
  updateDynamicHeight();
  return null;
}

export default ScrollSnap