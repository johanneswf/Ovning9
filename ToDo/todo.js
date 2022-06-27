const newitem = document.querySelector('#newitem');
const btnadd = document.querySelector('#additem');
const itemlist = document.querySelector('#itemlist');

const itemAdd = function () {
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
}

const itemToggle = (e) => {
  if (e.id === 'unstrike') e.id = 'strike';
  else if (e.id === 'strike') e.id = 'unstrike';
}



btnadd.addEventListener('click', itemAdd);

itemlist.addEventListener('click', e => itemToggle(e.target));