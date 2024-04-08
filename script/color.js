const colorPairs = [
  { bg: '#ffffff', text: '#313638' },
  { bg: '#0916f0', text: '#5cf7f5' },
  { bg: '#1b230d', text: '#ffd700' },
  // { bg: '#c68147', text: '#000000' },
  { bg: '#77f4a5', text: '#333333' },
  { bg: '#bb08c7', text: '#ffff00' },
  { bg: '#7227b4', text: '#00ff7f' },
  { bg: '#173df0', text: '#00ffff' },
  { bg: '#f9f23c', text: '#c91313' },
  { bg: '#33463b', text: '#a8fa80' },
  { bg: '#130346', text: '#b76d6f' },
  // { bg: '#213353', text: '#11d501' },
  { bg: '#5b1055', text: '#8ff258' },
  { bg: '#f7a7b4', text: '#0142b7' },
  { bg: '#b1e3c1', text: '#01449c' },
  { bg: '#5025ca', text: '#e5e113' },
  { bg: '#ce09c5', text: '#f9fcfd' },
  { bg: '#fcffd5', text: '#704aef' },
  // Add more color pairs as needed
];

// Keep track of the last three color combinations
const lastThreeColorPairs = [];

function getRandomPair() {
  let randomPair;
  do {
    randomPair = colorPairs[Math.floor(Math.random() * colorPairs.length)];
  } while (lastThreeColorPairs.some(pair => pair.bg === randomPair.bg && pair.text === randomPair.text));
  return randomPair;
}

function changeColors() {
  const { bg, text } = getRandomPair();
  document.documentElement.style.setProperty('--bg-color', bg);
  document.documentElement.style.setProperty('--text-color', text);
  console.log(`Background Color: ${bg}, Text Color: ${text}`);
  // Add the new color pair to the lastThreeColorPairs array
  lastThreeColorPairs.push({ bg, text });
  // If the lastThreeColorPairs array has more than three elements, remove the oldest one
  if (lastThreeColorPairs.length > 3) {
    lastThreeColorPairs.shift();
  }
}

function fadeInColors() {
  const body = document.querySelector('body');
  body.style.transition = 'background-color 3s, color 3s';
  setTimeout(() => {
    changeColors();
    setTimeout(() => {
      body.style.transition = 'background-color 2s, color 2s';
    }, 3000); // Pause for 3 seconds before fading into another random pair
  }, 2000); // Initial delay of 2 seconds
}

setTimeout(() => {
  fadeInColors();
  setInterval(() => {
    fadeInColors(); // Repeat every 6 seconds (3s pause + 3s transition)
  }, 6000);
}, 500); // Initial delay of 2 seconds
