import togglePopover from "../popover";

test('some test', () => {
  const div = document.createElement('div');
  div.textContent = 'Test';
  div.style.display = 'inline-block';
  div.style.margin = '100px 60px';
  document.body.appendChild(div);
  div.bindToDOM();
  togglePopover(div);
  const popover = document.querySelector('.popover');
  popover.bindToDOM();
  expect(popover.style.display).toEqual('inline-block');
});
