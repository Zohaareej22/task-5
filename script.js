function clearErrors() {
    // Get all elements with the class 'formerror' and clear their content
    var errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function seterror(id, error) {
    // Set error message inside the tag with the given id
    var element = document.getElementById(id);
    if (element) {
        var errorElement = element.nextElementSibling;
        if (errorElement && errorElement.classList.contains('formerror')) {
            errorElement.innerHTML = error;
        }
    }
}

function validateForm() {
    let returnval = true;
    clearErrors();

    // Perform validation and if validation fails, set returnval to false
    var name = document.forms['myForm']['fname'].value;
    if (name.length < 5) {
        seterror("fname", "*Length of name is too short!");
        returnval = false;
    }

    var email = document.forms['myForm']['femail'].value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        seterror("femail", "*Invalid email format!");
        returnval = false;
    }

    return returnval;
}

function myFunction(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

 function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
 }

     document.querySelector('.toggle-sidebar').addEventListener('click', function() {
            document.querySelector('.sidebar').classList.toggle('active');
        });

        