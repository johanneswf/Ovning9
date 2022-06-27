const newitem = document.querySelector('#newitem');
const btnadd = document.querySelector('#additem');
const itemlist = document.querySelector('#itemlist');


btnadd.addEventListener('click', () => {
  const btn = document.createElement('button');
  btn.id = 'removeitem';
  btn.className = 'btn btn-sm btn-danger float-end';
  btn.innerText = 'Remove';

  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.innerText = newitem.value;
  li.id = 'unstrike';
  li.append(btn);

  itemlist.appendChild(li);
  btn.addEventListener('click', e => e.target.parentNode.remove());
});

itemlist.addEventListener('click', (e) => {
  if (e.target.id === 'unstrike') e.target.id = 'strike';
  else if (e.target.id === 'strike') e.target.id = 'unstrike';
});