const form = document.querySelector('#input');
const divresult = document.querySelector('#result');
const btn = document.querySelector('#btnBB');

const BBrun = function () {
  const length = form.elements[0].value;
  const bish = form.elements[1].value;
  const bosh = form.elements[2].value;
  let result = '';

  for (let i = 1; i <= length; i++) {
    result += 
      '<li>' + (   
          i % bish === 0 && i % bosh === 0 ? 'Bish-Bosh'
        : i % bish === 0 ? 'Bish'
        : i % bosh === 0 ? 'Bosh'
        : i
      ) + '</li>';
  }
  result = '<br>' + result + '<br>';
  divresult.innerHTML = result;
}

btn.addEventListener('click', BBrun);