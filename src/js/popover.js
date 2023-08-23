export default function togglePopover(elem, title = '', text = '') {
  const popover = document.querySelector('.popover');
  if (!popover) { return ; }
  
  popover.querySelector('.popover_title').textContent = title || popover.querySelector('.popover_title').textContent;
  popover.querySelector('.popover_text').textContent = text || popover.querySelector('.popover_text').textContent;
  if (popover.style.display === 'inline-block') {
    popover.style.display = 'none';
  } else {
    const { left, top } = elem.getBoundingClientRect();
    popover.style.display = 'inline-block';
    popover.style.left = left + (elem.offsetWidth - popover.offsetWidth) / 2 + 'px';
    popover.style.top = top - popover.offsetHeight - 4 + 'px';
  }
}
