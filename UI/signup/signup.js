const form = document.querySelector('form');
const API_URL = 'http://localhost:3000/api/users';

function jwtDecode(t) {
    token = {};
    token.raw = t;
    token.header = JSON.parse(window.atob(t.split('.')[0]));
    token.payload = JSON.parse(window.atob(t.split('.')[1]));
    return token.payload;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const password = formData.get('password');

    const data = {
        firstName,
        lastName,
        email,
        password
    }

    async function validate(data) {
        if (data.status === 400) {
            console.log(data.status)
        } else {
            //bug: not returning token. the token should
            //returned from header.
            localStorage.setItem('token', data.token);
            console.log(jwtDecode(data.token))
        }
    };

    fetch(API_URL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(validate);

    //window.location('../articles/articles')
})

// my checklist
// [] should know how to get the token from header
// [] should redirect after login or sign up to the home page/default page.
// [] After login the user should not be in position to go back to the login and signup page.
// [] Elements on the nav bar should appear or not appear based on the login status of the user.
