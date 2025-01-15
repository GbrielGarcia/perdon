const alternatives = [
    { text: "", images: "./images/cat-01.gif" },
    { text: "Mala como Malvavisco", images: "./images/cat-02.gif" },
    { text: "Piénsalo de nuevo", images: "./images/cat-03.gif" },
    { text: "Vamos, atrévete a decir que sí", images: "./images/cat-04.gif" },
    { text: "Que el miedo no te detenga", images: "./images/cat-05.gif" }
];
const ohyes = { text: "Sabía que aceptarías", images: "./images/cat-yes.gif" };

const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;

function updateDisplay(item) {
    console.log(item);
    cat.src = item.images;
    text.innerHTML = item.text;
}

errorButton.addEventListener('click', () => {
    count = 0;
    updateDisplay(alternatives[count]);
    buttons.forEach(btn => btn.style.display = 'inline-block');
    errorButton.style.display = 'none';
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'SÍ') {
            updateDisplay(ohyes);
            buttons.forEach(btn => btn.style.display = 'none');
            // Agregar mensaje y botón con URL
            const message = document.createElement('div');
            const linkButton = document.createElement('a');
            linkButton.href = "https://tunegocio.pro/lUEMl";
            linkButton.target = "_blank";
            linkButton.className = "button";
            linkButton.textContent = "TOCAME";
            linkButton.style.textDecoration = 'none';
            message.appendChild(linkButton);
            document.body.appendChild(message);
        }
        if (button.textContent === 'NO') {
            count++;
            if (count < alternatives.length) {
                updateDisplay(alternatives[count]);
            } else {
                count = 0; // Reinicia el contador para repetir el ciclo
                updateDisplay(alternatives[count]);
            }
        }
    });
});