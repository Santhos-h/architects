let menu = document.getElementById("menu");
let bmenu = document.getElementById("bmenu");

function display() {
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

let name = document.getElementById("name")
let phone = document.getElementById("phone")
let email = document.getElementById("email")
let int = document.getElementById("int")
let msg = document.getElementById("msg")
let form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let errorMsg = "";

    if (name.value.trim() === "") {
        errorMsg += "Name is required.\n";
    }

    if (phone.value.trim() === "") {
        errorMsg += "Phone number is required.\n";
    } else if (!/^\d{10}$/.test(phone.value.trim())) {
        errorMsg += "Phone number must be 10 digits.\n";
    }

    if (email.value.trim() === "") {
        errorMsg += "Email is required.\n";
    } else if (!/\S+@\S+\.\S+/.test(email.value.trim())) {
        errorMsg += "Email is invalid.\n";
    }

    if (int.value.trim() === "") {
        errorMsg += "Interest is required.\n";
    }

    if (msg.value.trim() === "") {
        errorMsg += "Message is required.\n";
    }

    if (errorMsg !== "") {
        alert(errorMsg);
    } else {
        form.submit();
    }
});
