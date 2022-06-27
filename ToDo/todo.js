const newitem = document.querySelector('#newitem');
const btnadd = document.querySelector('#additem');
const itemlist = document.querySelector('#itemlist');
const btnmark = document.querySelector('#markall');
const divmark = document.querySelector('#divmark');

//Add items to list
btnadd.addEventListener('click', function () {
  if (newitem.value !== '') {
    const btn = document.createElement('button');
    btn.id = 'removeitem';
    btn.className = 'btn btn-sm btn-danger float-end';
    btn.innerText = 'Remove';

    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerText = newitem.value;
    li.append(btn);

    itemlist.appendChild(li);
    btn.addEventListener('click', e => e.target.parentNode.remove());

    newitem.value = '';
  }
});

//Mark/Unmark individual items
itemlist.addEventListener('click', function (e) {
  e.target.classList.toggle('strike');
});

//Mark All/Unmark All button
btnmark.addEventListener('click', function () {
  if (btnmark.classList.contains('marked')) {
    itemlist.querySelectorAll('li').forEach((li) => li.classList.remove('strike'));
    btnmark.className = 'btn btn-secondary';
    btnmark.innerText = 'Mark All';
  }
  else {
    itemlist.querySelectorAll('li').forEach((li) => li.classList.add('strike'));
    btnmark.className = 'btn btn-outline-secondary marked';
    btnmark.innerText = 'Unmark All';
  }
});

//Hides Mark All button until there are items in #itemlist
document.addEventListener('click', function () {
  if (itemlist.hasChildNodes()) divmark.classList.remove('hidden');
  else divmark.classList.add('hidden');
});