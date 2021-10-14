burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')
navList = document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-resp')
    rightNav.classList.toggle('v-class-resp')
    navList.classList.toggle('v-class-resp')

})

var btn = document.getElementById('btn');
            btn.addEventListener('click',submitFunc = ()=> {
         
                var firstname = document.getElementById("firstname").value || "";                      
                var lastname = document.getElementById("lastName").value || "";
                var phone = document.getElementById("phone").value || "";
                var email = document.getElementById("email").value || "";
              

                console.log({firstname, lastname, phone, email});

                webengage.user.login(email);
                webengage.user.setAttribute('we_first_name', firstname);
                webengage.user.setAttribute('we_last_name', lastname );
                webengage.user.setAttribute('we_phone', phone);
                webengage.user.setAttribute('we_email', email);
                
            })