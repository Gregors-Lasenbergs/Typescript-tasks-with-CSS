const buttons = document.querySelectorAll('button');

const cubes :HTMLDivElement[] = Array.from(document.querySelectorAll('.cube'));

const body :HTMLBodyElement = document.querySelector('body');

const textArea :HTMLTextAreaElement = document.querySelector('.textArea');

const appearingText :HTMLDivElement = document.querySelector('.appearingText');

buttons[0].addEventListener('click', () => {
  cubes[0].classList.add('yellow');
});

const colors: string[] = ['color2', 'color3', 'color4', 'color5', 'color6'];

cubes[0].addEventListener('mouseenter', () => {
  cubes[0].classList.add('red');
});

cubes[0].addEventListener('mouseout', () => {
  cubes[0].classList.remove('red');
});

buttons[1].addEventListener('click', () => {
  cubes[1].innerText = 'SUCCESS';
});

buttons[2].addEventListener('click', () => {
  cubes[2].classList.add('invisible');
});

buttons[3].addEventListener('click', () => {
  if (cubes[3].classList.contains('invisible')) {
    cubes[3].classList.remove('invisible');
  } else {
    cubes[3].classList.add('invisible');
  }
});

let cube5ColorIndex = 0;

const nextAndPrevColor = () => {
  const prevColor = cube5ColorIndex;
  cube5ColorIndex += 1;
  if (cube5ColorIndex >= colors.length) {
    cube5ColorIndex = 0;
  }
  return [colors[cube5ColorIndex], colors[prevColor]];
};

buttons[4].addEventListener('click', () => {
  const usedColors = nextAndPrevColor();
  console.log(usedColors);
  cubes[4].classList.remove(usedColors[1]);
  cubes[4].classList.add(usedColors[0]);
});

let myInterval: NodeJS.Timeout;

let cube5Counter = 0;

cubes[4].addEventListener('mouseenter', () => {
  myInterval = setInterval(function () {
    if (cube5Counter === 10) clearInterval(this);
    else {
      cube5Counter++;
      cubes[4].innerText = cube5Counter.toString();
    }
  }, 500);
});

cubes[4].addEventListener('mouseout', () => {
  clearInterval(myInterval);
  cubes[4].innerText = '0';
  cube5Counter = 0;
});

buttons[5].addEventListener('click', () => {
  let i = 0;
  setInterval(function () {
    if (i === 10) clearInterval(this);
    else {
      i++;
      cubes[5].innerText = i.toString();
    }
  }, 3000);
});

buttons[6].addEventListener('click', () => {
  cubes.forEach((cube) => {
    cube.classList.remove('invisible');
    cube.classList.add('color7');
    body.classList.add('color8');
  });
});

textArea.addEventListener('change', () => {
  appearingText.innerText = textArea.value;
});
