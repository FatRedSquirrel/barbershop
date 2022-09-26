let layoutButtons = document.getElementsByClassName('layout-link');

for (let i = 0; i < layoutButtons.length; i++) {
  let button = layoutButtons[i];
  button.addEventListener('click', function(event) {
    for (let k = 0; k < layoutButtons.length; k++) {
      buttonNotCurrent = layoutButtons[k];
      buttonNotCurrent.classList.remove('layout-link-current');
    }
    event.target.classList.add('layout-link-current');
  });
}