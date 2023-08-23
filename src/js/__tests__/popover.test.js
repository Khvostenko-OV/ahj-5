import togglePopover from "../popover";

test('some test', () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  togglePopover(div);
  const popover = document.querySelector('.popover');
  popover.bindToDOM();
  expect(popover.style.display).toEqual('inline-block');
});
