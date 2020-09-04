import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const div = document.querySelector('.cards');
axios.get('https://api.github.com/users/starullo').then(response=>{
  div.appendChild(cardCreator(response.data));
  // return response;
})/* stretch 
.then(response=>{
Array.from(response.data.followers_url).forEach(follower=>{
  axios.get(`${follower}`)
  .then(response=>{
    div.appendChild(cardCreator(response.data))
  })
})
});
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];
followersArray.forEach(userName=>{
  axios.get(`https://api.github.com/users/${userName}`)
  .then(response=>{
    div.appendChild(cardCreator(response.data));
  })
});
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardCreator({avatar_url, name, login, location, html_url, followers, following, bio, blog, company, email}) {

  /* creating elements */
  const cont = document.createElement('div');
  const img = document.createElement('img');
  const cardInfo = document.createElement('div');
  const h3 = document.createElement('h3');
  const nameP = document.createElement('p');
  const locationP = document.createElement('p');
  const profileP = document.createElement('p');
  const a = document.createElement('a');
  const followersP = document.createElement('p');
  const followingP = document.createElement('p');
  const bioP = document.createElement('p');

  /* STRETCH*/
  /* creating additional elements*/
  const expand = document.createElement('div');
  const button = document.createElement('button');
  const blogH5 = document.createElement('h5');
  const compH5 = document.createElement('h5');
  const emailH5 = document.createElement('h5');
  const blogP = document.createElement('p');
  const compP = document.createElement('p');
  const emailP = document.createElement('p');

  /* STRETCH styling/adding content for additional elements */
  expand.classList.add('hidden');
  expand.classList.add('card');
  button.style.height = '50px';
  button.style.width = '70px';
  button.style.backgroundColor = 'pink';
  button.style.color = 'white';
  button.textContent = 'Additional Info';
  emailH5.textContent = 'Email Address:';
  if (email === null) {
    emailP.textContent = `${name} has not entered an email address`;
  } else {
    emailP.textContent = email;
  }
  blogH5.textContent = 'Blog:';
  if (blog) {
    blogP.textContent = blog;
  } else {
    blogP.textContent = `${name} has not entered a blog url`;
  }
  compH5.textContent = 'Company:';
  if (company === null) {
    compP.textContent = `${name} has not entered a company`;
  } else {
    compP.textContent = company;
  }



  /* STRETCH event listener */
  button.addEventListener('click', obj=>{
    expand.classList.toggle('hidden');
  })

  /* adding classes */
  cont.classList.add('card');
  cardInfo.classList.add('card-info');
  h3.classList.add('name');
  nameP.classList.add('username');

  /*adding content */
  img.src = avatar_url;
  h3.textContent = name;
  nameP.textContent = login;
  locationP.textContent = `Location: ${location}`;
  profileP.textContent = `Profile: `
  a.href = html_url;
  a.textContent = html_url;
  followersP.textContent = `Followers: ${followers}`;
  followingP.textContent = `Following: ${following}`;
  if (bio) {
  bioP.textContent = `Bio: ${bio}`;
  } else {
    bioP.textContent = `${name} hasn't entered a bio`;
  }
  /*structuring*/
  cont.appendChild(img);
  cont.appendChild(cardInfo);
  cardInfo.appendChild(h3);
  cardInfo.appendChild(nameP);
  cardInfo.appendChild(locationP);
  cardInfo.appendChild(profileP);
  profileP.appendChild(a);
  cardInfo.appendChild(followersP);
  cardInfo.appendChild(followingP);
  cardInfo.appendChild(bioP);
  cardInfo.appendChild(button);
  cardInfo.appendChild(expand);
  expand.appendChild(emailH5)
  expand.appendChild(emailP);
  expand.appendChild(blogH5);
  expand.appendChild(blogP);
  expand.appendChild(compH5);
  expand.appendChild(compP);

  return cont;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
