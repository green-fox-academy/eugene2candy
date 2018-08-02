const canvas = document.querySelector('.lifeContainer');
const context = canvas.getContext('2d');

const worldConfig = {
  width: 800,
  height: 800,
};

const getEmptyWorld = () => Array
  .from({ length: worldConfig.width })
  .map(() => Array.from({ length: worldConfig.height })
    .fill(0));

const random

console.log(getEmptyWorld);
