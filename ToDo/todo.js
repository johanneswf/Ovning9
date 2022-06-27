const newitem = document.querySelector('#newitem');
const btnadd = document.querySelector('#additem');
const itemlist = document.querySelector('#itemlist');
const btnmark = document.querySelector('#markall');
const divmark = document.querySelector('#divmark');
const divwarning = document.querySelector('#warning');

let btnMarkBool = false;

const btnMarked = function () {
  btnmark.className = 'btn btn-secondary';
  btnmark.innerText = 'Mark All';
  btnMarkBool = false;
}

const btnUnmarked = function () {
  btnmark.className = 'btn btn-outline-secondary marked';
  btnmark.innerText = 'Unmark All';
  btnMarkBool = true;
}

//Add items to list
btnadd.addEventListener('click', function () {
  if (newitem.value === '') {
    divwarning.classList.remove('hidden')
  }
  else {
    divwarning.classList.add('hidden')

    const btn = document.createElement('button');
    btn.id = 'removeitem';
    btn.className = 'btn btn-sm btn-danger float-end';
    btn.innerText = 'Remove';

    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerText = newitem.value;
    li.append(btn);

    itemlist.appendChild(li);
    btn.addEventListener('click', (e) => {
      e.target.parentNode.remove();
      if (!itemlist.hasChildNodes()) {
        divmark.classList.add('hidden');
        btnMarked();
      }
    });

    divmark.classList.remove('hidden');

    newitem.value = '';
  }
});

//Mark/Unmark individual items
itemlist.addEventListener('click', function (e) {
  e.target.classList.toggle('strike');
});

//Mark All/Unmark All button
btnmark.addEventListener('click', function () {
  if (btnMarkBool) {
    itemlist.querySelectorAll('li').forEach((li) => li.classList.remove('strike'));
    btnMarked();
  }
  else {
    itemlist.querySelectorAll('li').forEach((li) => li.classList.add('strike'));
    btnUnmarked();
  }
});