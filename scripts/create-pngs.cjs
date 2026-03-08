const fs = require('fs');

const base64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAoMBgQcY2GsAAAAASUVORK5CYII=';
const data = Buffer.from(base64, 'base64');

const paths = [
  'src/assets/images/hero-bg.png',
  'src/assets/images/about-photo.png',
  'src/assets/images/gallery-1.png',
  'src/assets/images/gallery-2.png',
  'src/assets/images/gallery-3.png',
  'src/assets/images/gallery-4.png',
  'src/assets/images/gallery-5.png',
];

const members = [
  'alex-rivera',
  'caleb-nguyen',
  'daniel-kim',
  'ethan-chang',
  'isaiah-johnson',
  'jordan-parks',
  'liam-chen',
  'noah-patel',
  'noah-sullivan',
  'omar-ali',
  'rafael-gomez',
  'samuel-ortiz',
  'trey-williams',
];

paths.forEach((p) => fs.writeFileSync(p, data));
members.forEach((name) =>
  fs.writeFileSync(`src/assets/images/members/${name}.png`, data),
);

console.log('Created PNG placeholders.');
