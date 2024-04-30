let users = [];
let reg = document.getElementById('reg');

reg.addEventListener('click', () => {
    console.clear();
    let names = document.getElementById('name').value;
    let emails = document.getElementById('email').value;
    let password = document.getElementById('pass').value;

    let checkmail = users.find(items => items.mail === emails);
    let checkpassword = users.find(items => items.pass === password);

    if ((checkmail) && (checkpassword)) {
        alert(`This ${emails} and This pass ${password} already exist`);
        return
    }

    let userobject = {
        Name: names,
        mail: emails,
        pass: password
    };

    users.push(userobject);
    console.log(users);

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('pass').value = '';

});

// login Starts Here
let login = document.getElementById('login');
login.addEventListener('click', () => {
    let emails = document.getElementById('login-email').value;
    let password = document.getElementById('login-pass').value;

    let checkloginmail = users.find(items => items.mail === emails);
    if (!checkloginmail) {
        alert('user not found with this provided email please create an account first');
        return
    }

    if (checkloginmail.pass !== password) {
        alert('Incorrect Password please try again');
        return
    }
    alert(`Welcome Back ${checkloginmail.Name}`)
});
//Login Ends Here