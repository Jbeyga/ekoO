const getUsers = (e) => {
  e.preventDefault();
  
  const url = `http://fronttest.ekookna.pl/`;
  
  fetch(url)
    .then( res => {
      if(res.status !== 200){
        throw Error("Something went wrong!")
      } else {
        return res.json()
      }
    })
    .then(json => {showUser(json.users);
    })
    .catch(err => console.log(err))
}   

// filtrowanie
const ageMin = document.querySelector('#ageMin');
const ageMax = document.querySelector('#ageMax');
const searchBtn = document.querySelector('#searchBtn');


// function showUser
function showUser(users) {
  // reset div
  document.querySelector('.container').innerHTML = "";
  // catch container
  const printData = document.querySelector('.container');
  
  // check inputs
  const lastNameSearch = document.querySelector('#lastNameSearch').value;
  // const ageMin = document.querySelector('#ageMin').value;
  // const ageMax = document.querySelector('#ageMax').value;
  
  if(lastNameSearch !== ""){
      users.forEach(user => {
      if(user.last_name.toLowerCase() === lastNameSearch) {
        const item = document.createElement('div');
        item.className = 'user';
        item.innerHTML = `
        <div class="user__first">${user.first_name.toUpperCase()}</div>
        <div class="user__last">${user.last_name.toUpperCase()}</div>
        <div class="user__postal">${user.postal_code}</div>
        <div class="user__street">${user.street}</div>
        <div class="user__city">${user.city}</div>
        <div class="user__age">${user.age}</div>
        <div class="user__id">${user.id}</div>
        `;
        printData.appendChild(item);
    }}); 
  } else {
    users.forEach(user => {
       const item = document.createElement('div');
       item.className = 'user';
       item.innerHTML = `
       <div class="user__first">${user.first_name.toUpperCase()}</div>
       <div class="user__last">${user.last_name.toUpperCase()}</div>
       <div class="user__postal">${user.postal_code}</div>
       <div class="user__street">${user.street}</div>
       <div class="user__city">${user.city}</div>
       <div class="user__age">${user.age}</div>
       <div class="user__id">${user.id}</div>
       `;
       printData.appendChild(item);
   }); 
  }
}


// create
searchBtn.addEventListener('click', getUsers)
window.addEventListener('load', getUsers)