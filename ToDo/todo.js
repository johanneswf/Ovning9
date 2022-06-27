const newitem = document.querySelector('#newitem');
const btnadd = document.querySelector('#additem');
const itemlist = document.querySelector('#itemlist');
const btnmark = document.querySelector('#markall');


btnadd.addEventListener('click', () => {
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
});

itemlist.addEventListener('click', (e) => {
  e.target.classList.toggle('strike');
});

btnmark.addEventListener('click', () => {
  itemlist.querySelectorAll('li').forEach((li) => {
    li.classList.toggle('strike');
  })
});