// const cursorCircle = document.createElement('div');
// cursorCircle.classList.add('cursor-circle');
// document.body.appendChild(cursorCircle);
//
// const cursorSquare = document.createElement('div');
// cursorSquare.classList.add('cursor-square');
// document.body.appendChild(cursorSquare);
//
// const cursorTriangle = document.createElement('div');
// cursorTriangle.classList.add('cursor-triangle');
// document.body.appendChild(cursorTriangle);
//
// document.addEventListener('mousemove', (e) => {
//   cursorCircle.style.left = `${e.clientX}px`;
//   cursorCircle.style.top = `${e.clientY}px`;
//   cursorSquare.style.left = `${e.clientX}px`;
//   cursorSquare.style.top = `${e.clientY}px`;
//   cursorTriangle.style.left = `${e.clientX}px`;
//   cursorTriangle.style.top = `${e.clientY}px`;
// });
//
// document.addEventListener('mousedown', () => {
//   cursorCircle.style.backgroundColor = getInverseColor(getComputedStyle(cursorCircle).backgroundColor);
//   cursorSquare.style.backgroundColor = getInverseColor(getComputedStyle(cursorSquare).backgroundColor);
// });
//
// document.addEventListener('mouseup', () => {
//   cursorCircle.style.backgroundColor = getComputedStyle(document.body).getPropertyValue('--text-color');
//   cursorSquare.style.backgroundColor = getComputedStyle(document.body).getPropertyValue('--text-color');
// });
//
// function getInverseColor(color) {
//   // Assuming color is in hex format (#rrggbb)
//   return '#' + (0xFFFFFF - parseInt(color.replace('#', ''), 16)).toString(16).padStart(6, '0');
// }
