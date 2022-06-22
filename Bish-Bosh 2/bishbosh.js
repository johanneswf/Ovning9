function BishBosh() {
  let id = document.getElementById("input");
  let length = id.elements[0].value;
  let bish = id.elements[1].value;
  let bosh = id.elements[2].value;
  let result = "";

  for (let i = 1; i <= length; i++) {
    result += EvalBB(i, bish, bosh) + "<br>";
    document.getElementById("result").innerHTML = result;
  }
}

function EvalBB(i, bish, bosh) {
  if (i % bish === 0 && i % bosh === 0) return 'Bish-Bosh';
  else if (i % bish === 0) return 'Bish';
  else if (i % bosh === 0) return 'Bosh';
  else return i;
}