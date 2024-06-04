const incrementButton= document.getElementById('increment');
const displayCount = document.getElementById('display-count');
let count = 0;

const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const submitButton = document.getElementById('submit-input');

const singleImageGrid = document.querySelectorAll('.grid-img');

incrementButton.addEventListener('click', function() {
    count++;
    console.log(count);
    displayCount.innerText = parseInt(count);
});

submitButton.addEventListener('click', function() {
    let name = nameInput.value.trim();
    let email = emailInput.value.trim();

    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    console.log('bo');
    if(name.length === 0 || !emailCheck.test(email)) {
        console.log('put valid name and email')
    } else console.log('yuhu')

    nameInput.value = "";
    email = emailInput.value = "";
});

singleImageGrid.forEach(image => {
    
    image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.5)';

    })

    image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
    })
})





