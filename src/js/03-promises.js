import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
console.log(form.delay.value);
form.addEventListener('submit', formSubmitter);

function formSubmitter(e) {
  e.preventDefault();

  let firstDelay = Number(form.delay.value);
  const stepDelay = Number(form.step.value);
  const promiseQuantity = Number(form.amount.value);

  for (let i = 0; i < promiseQuantity; i += 1) {
    const position = i + 1;
    createPromise(position, firstDelay)
      .then(resolve => Notify.success(resolve))
      .catch(reject => Notify.failure(reject));

    firstDelay += stepDelay;
  }
}
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
