const  request = new XMLHttpRequest();
const phoneBookButton = document.getElementById('phoneBookBtn');
const createSubscriberButton = document.getElementById('createSubscriberBtn');

phoneBookButton.addEventListener('click', () => {
    console.log('open phone book');
});

createSubscriberButton.addEventListener('click', () => {
    // location.replace("/");
    console.log(location.pathname)
    location.pathname = '/subscriber-form'
});
