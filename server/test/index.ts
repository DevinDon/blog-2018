import { readFileSync } from 'fs';

const file = readFileSync('C:/Project/app/blog/web/src/assets/image/favicon.png');

console.log(file.toString('base64'));
