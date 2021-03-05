const addUser = () => {
  
  const url = `http://fronttest.ekookna.pl/user`;

  const first_name = document
  const data = "first_name=Jacek&last_name=Placek&postal_code=12-02&street=Zwycięstwa&city=Majami&age=37";

  const firstName = document.querySelector('#firstName');
  const lastName = document.querySelector('#lastName');
  const postalCode = document.querySelector('#postalCode');
  const street = document.querySelector('#street');
  const city = document.querySelector('#city');
  const age = document.querySelector('#age');
  const userData = "first_name=" + firstName.value + 
  "&last_name=" + lastName.value + 
  "&postal_code=" + postalCode.value + 
  "&street=" + street.value +
  "&city=" + city.value +
  "&age=" + age.value;
  
  fetch(url, {
    method: 'POST',
    headers: 
    {
      'Content-Type': 'application/x-www-form-urlencoded'
    },  
    // mode: 'no-cors',
    body: userData
    }).then( response => {
      if(response.status !== 200){
        throw Error("Something went wrong!")
      } else {
        return  response.json()
      }
    }).then(data => {
      console.log('Success:', body);
    })
    .catch(err => console.log(err));
}

const addUserBtn = document.querySelector('#addUserBtn');
addUserBtn.addEventListener('click', addUser);