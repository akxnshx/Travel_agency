// for targget the search button
var searchBtn = document.querySelector('#search-btn');
// for target the search bar whole container
var searchBar = document.querySelector('.search-bar-container');
// for target the userbutton
var userBtn = document.querySelector('#user-btn');
// for target the whole login form 
var formSection = document.querySelector('.login-form-container');
// for target the cross button of form 
var closeForm = document.querySelector('#form-close');
// for target the nav-bar container
var navBar = document.querySelector('.nav-bar');
// for target the three lines menu bar for toggle class
var menuBar = document.querySelector('#menu-bar');
// for target the video btn
var videoBtn = document.querySelectorAll('.vdo-btn');
 var userSection = document.querySelector('.userSection')
 var userButton = document.querySelector('.userSection>div>button');
 var userSectionLoginbutton= document.querySelector('.userSection .loginButton')
 var userSectionRegbutton= document.querySelector('.userSection .regButton')

var active = document.querySelectorAll('#scrool');

// var actives = document.querySelector('.solo');

const logincontainer = document.querySelector('.login-form-container');


const loginForm = document.querySelector('.login')

const registerForm = document.querySelector('.register')




function register() {
    registerForm.style.display = 'block'
    loginForm.style.display = 'none'
}

function login() {
    loginForm.style.display = 'block'
    registerForm.style.display = 'none'
}


registerForm.addEventListener('submit', async function (e) {

    try {
        e.preventDefault();

      const name = document.getElementById('name').value
      const email = document.getElementById('email').value
      const password= document.getElementById('password').value

      const data  = {"name":name,"email":email,"password":password}


        const request = await fetch('https://travelagency.cyclic.app/register', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
               
            },
            body:JSON.stringify(data)
        }
        )
        const response = await request.text();
        if(request.status==200){
            alert(response)
            loginForm.style.display = 'block'
            registerForm.style.display = 'none'
        }else{
            alert(response)
        }
    }
    catch {
        console.log('failed to send request')
    }
})






loginForm.addEventListener('submit', async function(e) {
    try {
        e.preventDefault();


      const email = document.getElementById('lemail').value
      const password= document.getElementById('lpassword').value

      const data  = {"email":email,"password":password}


        const request = await fetch('https://travelagency.cyclic.app/login', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }
        )
        const response = await request.json();

        if(request.status==200){
            alert(`welcome ${response.name}, ${response.message} `)

            userSection.innerHTML = `<p>${response.name}</p>
			<div>
				<button class="logout">Logout</button>
				
			</div>`

            formSection.classList.add('topu');
        }else{
            alert(response.message)
        }
    }
    catch {
        console.log('failed to send request')
    }
})




// window.onscroll = () =>{
//     // for change the search icon s
//     searchBtn.classList.remove('fa-times');
//     //  for toggle the input search part 
//     searchBar.classList.remove('active');
//     searchBar.classList.add('unactive');
//     // for the form section
//     formSection.classList.remove('topi');
//     formSection.classList.add('topu');
//     // for the menu bar
//     navBar.classList.remove('active');



// };
// for the search icon and search input
searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
    searchBar.classList.toggle('unactive');
});

// for the user button and form section
userBtn.addEventListener('click', () => {
    
userSection.classList.toggle('userSectionShow');

});

userSectionLoginbutton.addEventListener('click',()=>{
    formSection.classList.add('topi');
    formSection.classList.remove('topu');
    userSection.classList.remove('userSectionShow');
})



userSectionRegbutton.addEventListener('click',()=>{
    formSection.classList.add('topi');
    formSection.classList.remove('topu');
    userSection.classList.remove('userSectionShow');

    register() ;

})


// for close the form section with the help of croos buttton of form
closeForm.addEventListener('click', () => {
    formSection.classList.add('topu');
});
// for toglle the menubar
menuBar.addEventListener('click', () => {
    navBar.classList.toggle('active');
    navBar.classList.toggle('unuse');
});

// videoBtn.forEach(btl=>{
//     btl.addEventListener('click', ()=>{
//         document.querySelector('.controls .active').classList.remove('active');
//         btl.classList.add('active');
//         // let src = btl.getAttribute('data-src');
//         // document.querySelector('#video-slider').src= src;
//     });
// });


active.forEach(btl => {
    btl.addEventListener('click', () => {
        navBar.classList.add('unuse');
        navBar.classList.remove('active');
    });
});



