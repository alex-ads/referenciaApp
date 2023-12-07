
const form = document.getElementById('referenceForm');
const referenceType = document.getElementById('referenceType');
const generatedReference = document.getElementById('generatedReference');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nomeauthor = document.getElementById('nomeauthor').value;
    const sn = document.getElementById('sobrenome').value;
    const title = document.getElementById('title').value;
    const city = document.getElementById('city').value;
    const ano = document.getElementById('ano').value;
    const pg = document.getElementById('pg').value;


    let reference = '';

    reference = `${sn}, ${nomeauthor}. ${title}. ${city}, ${ano}. ${pg} p.`;

    generatedReference.innerHTML = `<h2>Referência Gerada:</h2><p>${reference}</p>`;
});