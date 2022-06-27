const newitem = document.querySelector('#newitem');
const btnadd = document.querySelector('#additem');
const itemlist = document.querySelector('#itemlist');
const btnmark = document.querySelector('#markall');
const divmark = document.querySelector('.divmark');


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

itemlist.addEventListener('click', function (e) {
  e.target.classList.toggle('strike');
});

btnmark.addEventListener('click', function () {
  if (btnmark.classList.contains('marked')) {
    itemlist.querySelectorAll('li').forEach((li) => li.classList.remove('strike'));
    btnmark.classList.remove('marked');
  }
  else {
    itemlist.querySelectorAll('li').forEach((li) => li.classList.add('strike'));
    btnmark.classList.add('marked');
  }
});

document.addEventListener('click', function () {
  if (itemlist.hasChildNodes()) divmark.classList.remove('hidden');
  else divmark.classList.add('hidden');
})