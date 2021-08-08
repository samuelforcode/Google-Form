
//Hightlight inputs the way Googlers did.

var arr = document.querySelectorAll('.jsinput');
for (var i = 0; i < arr.length; i++) {
    arr[i].addEventListener('focus', function () {
        // firstly, remove all the active classes.
        for (var i = 0; i < arr.length; i++) {
            //Make the input in the active state if it is filled.
            if (arr[i].value.length > 0) {
                arr[i].classList.add("inputActive");
                arr[i].nextElementSibling.classList.add('labelActive');
            }
            else {
                arr[i].classList.remove("inputActive");
                arr[i].nextElementSibling.classList.remove('labelActive');
            }

        }
        // then add Active classses to the clicked one.
        this.classList.add("inputActive");
        this.nextElementSibling.classList.add('labelActive');

    });
}


// Highlight the input onclick event
var arr = document.querySelectorAll('.jsinput');
for (var i = 0; i < arr.length; i++) {
    arr[i].addEventListener('click', function (ev) {
        // firstly, remove all the active classes.
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].value.length > 0) {
                arr[i].classList.add("inputActive");
                arr[i].nextElementSibling.classList.add('labelActive');
            }
            else {
                arr[i].classList.remove("inputActive");
                arr[i].nextElementSibling.classList.remove('labelActive');
            }
        }
        // then add Active classses to the clicked one.
        this.classList.add("inputActive");
        this.nextElementSibling.classList.add('labelActive');
        ev.stopPropagation();
    });
}

// Shadow the checkbox when it is hovered

function hoverOverCheckbox() {
    var checkbox = document.querySelector('#checkboxinput');
    checkbox.addEventListener('mouseenter', function () {
        document.querySelector('.shadowForCheck').classList.add("shadowForCheckActive");
    });
    checkbox.addEventListener('mouseout', function () {
        document.querySelector('.shadowForCheck').classList.remove("shadowForCheckActive");
    });
}
hoverOverCheckbox();

// Shadow the checkbox when it is focused

function CheckboxFocused() {
    var checkbox = document.querySelector('#checkboxinput');
    checkbox.addEventListener('focus', function () {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].value.length > 0) {
                arr[i].classList.add("inputActive");
                arr[i].nextElementSibling.classList.add('labelActive');
            }
            else {
                arr[i].classList.remove("inputActive");
                arr[i].nextElementSibling.classList.remove('labelActive');
            }
        }
        document.querySelector('.shadowForCheck').classList.add("shadowForCheckActive");
    });

}
CheckboxFocused();

//when the show password has been checked then shows the password.




function hoverOverSignin() {
    document.querySelector('#signin').addEventListener('mouseenter', function () {
        document.querySelector('.shodowForSignin').classList.add("shodowForSigninActive");
    });
    document.querySelector('#signin').addEventListener('mouseout', function () {
        document.querySelector('.shodowForSignin').classList.remove("shodowForSigninActive");
    });
}
hoverOverSignin();

// let the checkbox hightlighted when it is checked
function CheckboxChecked() {
    document.querySelector('#checkboxinput').addEventListener('click', function (ev) {
        if (document.querySelector(".shadowForCheck").classList.contains("shadowForCheckOnclick")) {
            document.querySelector(".shadowForCheck").classList.remove("shadowForCheckOnclick");
        }
        else {
            document.querySelector(".shadowForCheck").classList.add("shadowForCheckOnclick");
        }
        ev.stopPropagation();
    });
}
CheckboxChecked();

// hightlight the botton when it is clicked
var Btn = document.querySelector('button');
function btnClicked() {
    // this block will be applied after 100ms.
    function removeActiveState() {
        document.querySelector('.btnFirstContainer').classList.remove("btnFirstContainerActive");
        document.querySelector('.btnSecondContainer').classList.remove("btnSecondContainerActive");
    }
    Btn.addEventListener("click", function () {
        document.querySelector('.btnFirstContainer').classList.add("btnFirstContainerActive");
        document.querySelector('.btnSecondContainer').classList.add("btnSecondContainerActive");
        setTimeout(removeActiveState, 100);
    });
}
btnClicked();


function disableActive() {
    window.addEventListener('click', function win() {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].value.length > 0) {
                arr[i].classList.add("inputActive");
                arr[i].nextElementSibling.classList.add('labelActive');
            }
            else {
                arr[i].classList.remove("inputActive");
                arr[i].nextElementSibling.classList.remove('labelActive');
            }
        }
    });
}
disableActive();


// to hightlight the first element immediately after the webpage loaded.

function HightlightTheFirstElement() {
    function a() {
        document.querySelector('input').classList.add('inputActive');
        document.querySelector('input').nextElementSibling.classList.add('labelActive');
    }
    window.addEventListener("load", function () {
        setTimeout(a, 200);

    });

}
HightlightTheFirstElement();

