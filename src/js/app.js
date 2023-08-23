import togglePopover from "./popover";

const btn = document.querySelector('.btn');
btn.addEventListener('click', () => togglePopover(btn));
