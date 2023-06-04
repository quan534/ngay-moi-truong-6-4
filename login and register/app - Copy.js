const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signupForm =document.getElementById("signupForm")

signupForm.addEventListener("submit",function(event){
	event.preventDefault()
	const username= document.getElementById("name").value;
	const password= document.getElementById("password").value;
	const email= document.getElementById("email").value;

	var user={
		username:username,
		password:password,
		email:email
	};

	localStorage.setItem("user",JSON.stringify(user));

	alert("dktc")
	document.getElementById("name").value=""
	document.getElementById("password").value=""
	document.getElementById("email").value=""

})

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

//signin
	const signinForm =document.getElementById("signinForm") 
	signinForm.addEventListener("submit",function(event){
	event.preventDefault()

	
	const email2 = document.getElementById("email2").value; 
	const password2 = document.getElementById("password2").value; 
	
	const a =localStorage.getItem("user")
	const storeduser=JSON.parse(a)

		if(email2 === storeduser.email  && password2 === storeduser.password){
			alert("dntc");
			window.location.href = "../shop/index.html"
		}
		else{
			alert("ten dang nhap hoac sdadas");
		}
		})

