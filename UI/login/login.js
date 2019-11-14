const form = document.querySelector('form');
const API_URL = 'http://localhost:3000/api/auth';

function jwtDecode(t) {
    let token = {};
    token.raw = t;
    token.header = JSON.parse(window.atob(t.split('.')[0]));
    token.payload = JSON.parse(window.atob(t.split('.')[1]));
    return (token.payload)
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');

    const data = {
        email,
        password
    };

    async function validate(data) {
        if (data.status === 400) {
            console.log(data.message);
        } else {
            localStorage.setItem('Token', data.token);
            console.log(jwtDecode(data.token));
        }
    }

    fetch(API_URL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(validate);
})

// [] The token should be gotten from the headers
// [] After login, the user should be directed to the home page
// [] The user should not be in position to click the the back button and go back to the login page.