const token = window.localStorage.getItem('token');

const redirect = () => {
    if(!token) {
       // document.write('<style type="text/undefined">')
        window.location.replace("index.html")
    }
}

redirect();