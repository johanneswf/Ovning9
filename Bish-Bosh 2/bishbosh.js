const id = document.getElementById("input");

const BBrun = function () {
  const length = id.elements[0].value;
  const bish = id.elements[1].value;
  const bosh = id.elements[2].value;
  let result = "";

  for (let i = 1; i <= length; i++) {
    result +=
      (   i % bish === 0 && i % bosh === 0 ? 'Bish-Bosh'
        : i % bish === 0 ? 'Bish'
        : i % bosh === 0 ? 'Bosh'
        : i
      ) + "<br>"
    document.getElementById("result").innerHTML = result;
  }
}

/* const BBeval = function (i, bish, bosh) {
  //  if (i % bish === 0 && i % bosh === 0) return 'Bish-Bosh';
  //  else if (i % bish === 0) return 'Bish';
  //  else if (i % bosh === 0) return 'Bosh';
  //  else return i;

  return (i % bish === 0 && i % bosh === 0) ? 'Bish-Bosh'
    : (i % bish === 0) ? 'Bish'
      : (i % bosh === 0) ? 'Bosh'
        : i;
} */

document
  .querySelector("#btnBB")
  .addEventListener("click", BBrun);