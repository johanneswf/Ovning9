const inputlength = document.querySelector('#bblength');
const inputbish = document.querySelector('#bbbish');
const inputbosh = document.querySelector('#bbbosh');
const divresult = document.querySelector('#result');
const btn = document.querySelector('#btnBB');

const BBrun = function () {
  const length = inputlength.value;
  const bish = inputbish.value;
  const bosh = inputbosh.value;

  let result = '';
  for (let i = 1; i <= length; i++) {
    result +=
      '<li>' +
      ( i % bish === 0 && i % bosh === 0 ? 'Bish-Bosh'
      : i % bish === 0 ? 'Bish'
      : i % bosh === 0 ? 'Bosh'
      : i) + '</li>';
  }

  divresult.innerHTML = result !== '' 
    ? '<ul class="list-group-item-success rounded pb-2 pt-2">' + result + '</ul>'
    : '';
}

const nonegs = function () {
  if (this.value < 0) this.value = 0;
}


document.querySelectorAll('input')
  .forEach(input => input.addEventListener('input', nonegs, false))

btn.addEventListener('click', BBrun);