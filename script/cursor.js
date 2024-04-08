const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX-8}px`;
  cursor.style.top = `${e.clientY-8}px`;
});

// Add event listener for mouseover on links
// document.querySelectorAll('a').forEach(link => {
//   link.addEventListener('mouseover', () => {
//     cursor.classList.add('cursor-triangle'); // Change cursor to triangle shape
//     cursor.classList.remove('cursor');
//   });
//   link.addEventListener('mouseout', () => {
//     cursor.classList.remove('cursor-triangle'); // Revert back to circle shape
//     cursor.classList.add('cursor');
//   });
// });
