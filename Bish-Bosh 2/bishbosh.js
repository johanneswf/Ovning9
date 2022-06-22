const id = document.getElementById('input');

const BBrun = function () {
  const length = id.elements[0].value;
  const bish = id.elements[1].value;
  const bosh = id.elements[2].value;
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
  document.getElementById('result').innerHTML = result;
}

document
  .querySelector('#btnBB')
  .addEventListener('click', BBrun);