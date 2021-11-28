/*Uppgiften är mycket intressant, men jag hade inte tillräckligt 
med tid för en djupare övervägande av ämnet, så uppgiften var 
begränsad till minimikraven. Alla data som jag fick från bokningsformuläret 
skrev jag in i konsolen. Jag kontrollerade även formuläret så att fälten 
var ifyllda, att formatet för att fylla i dessa fält var lämpligt och 
att avresedatumet var tidigare än ankomstdatumet. Jag tittade på kodexempel 
på Internet, men jag försökte använda bara den kod som jag förstod och 
förstod hur den fungerar och sen anpassade den efter mina behov.*/

let form = document.querySelector('.js-form');
let formInputs = document.querySelectorAll('.js-input');
let inputEmail = document.querySelector('.js-input-email');
let inputPhone = document.querySelector('.js-input-phone');
let inputCountry = document.querySelector('land');
let headBtn=document.querySelector('#submit');

let inputDateStart=document.querySelector('#start');
let inputDateFinish=document.querySelector('#finish');

//E-postvalidering

function validateEmail(email) 
{
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Telefonnummervalidering

function validatePhone(phone) 
{
    let re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    return re.test(String(phone));
}

//Möjlighet att visa valet av destinationsland

let landSelect=form.land;
function changeOptions()
{
    let selection = document.getElementById("selection");
    let selectedOption = landSelect.options[landSelect.selectedIndex];  
    if (selectedOption.value==="Välj land") 
    {
        alert("Välj land!!");        
    }   
}

landSelect.addEventListener("change", changeOptions);


form.onsubmit = function () 
{
    let emailVal = inputEmail.value;
    let phoneVal = inputPhone.value,       
    emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function (input) 
    {
    if (input.value === '') 
    {
        input.classList.add('error');

    } 
    else 
    {
        input.classList.remove('error');      
        
    }    
    console.log(input.value);
});

if (emptyInputs.length !== 0) 
{
    console.log('inputs not filled');
    return false;
}

if(!validateEmail(emailVal))
{
    console.log('email not valid');
    inputEmail.classList.add('error');
    return false;
} 
else 
{
    inputEmail.classList.remove('error');
}

if (!validatePhone(phoneVal)) 
{
    console.log('phone not valid');
    inputPhone.classList.add('error');
    return false;
} 
else 
{
    inputPhone.classList.remove('error');
}
//Validering av destinationsland

function ValidateCountry(country)
{
    let re=/^[a-zA-Z]+$/;
    return re.test(String(country));
}



if (inputDateStart.value<inputDateFinish.value) 
{
    console.log(inputDateStart.value);
    console.log(inputDateFinish.value);
}
else
{
    alert('Ankomstdatum kan inte infalla tidigare än avresedatumet!!');
    console.log('Data not valid');
}
   
} 
headBtn.onclick=form.onsubmit;





