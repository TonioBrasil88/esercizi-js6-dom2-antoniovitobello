// Rubrica

// Cattura delle Wrapper 

let cardsWrapper = document.querySelector('#cardWrapper');

//cattura dei bottoni

let showContactsBtn = document.querySelector('#showContactsBtn');
let addContactBtn = document.querySelector('#addContactBtn');
let removeContactBtn = document.querySelector('#removeContactBtn');
let searchContactBtn = document.querySelector('#searchContactBtn');


// Cattura degli Input

let nameInput = document.querySelector('#nameInput');
let numberInput = document.querySelector('#numberInput');

// array della Rubrica con Contatti

const RUBRICA = {

contacts : [

    {name: 'Antonio', number: 3156489489},
    {name: 'Nicola', number: 85715421254},
    {name: 'Francesco', number: 5617186145},
    {name: 'Giovanni', number: 68714834363},
    {name: 'Pasquale', number: 5048123184},
    {name: 'Marcello', number: 30248618453},

    ],

    // Metodo mostra contatti

    showContacts : function(array){

        // Svuoto il contenitore ad ogni click sulle cards
        cardsWrapper.innerHTML = '';

        array.forEach((contact)=>{

            let div = document.createElement('div');

            div.classList.add('col-12', 'col-md-8', 'my-3');

            div.innerHTML = `

                    <div class="card-custom">
                        <p class="lead m-0">${contact.name}</p>
                        <p class="lead m-0">${contact.number}</p>
                        <i class="fa-solid fa-dumpster-fire fa-2x icon"></i>
                    </div>


            `;

            cardsWrapper.appendChild(div);

        })

        // Catturo le icone delle Cards

        let icons = document.querySelectorAll('.icon');

        console.log(icons);

        icons.forEach((icon, i)=>{

            icon.addEventListener('click', ()=>{

                let name = array[i].name;

                this.removeContact(name);

            });


        });


    },

    // Metodo aggiungi contatto

    addContact : function(newName, newNumber){

        this.contacts.push({name: newName, number: newNumber});
        this.showContacts(this.contacts);

    },

    // Metodo rimuovi contatto
    removeContact: function(removedName){

        let names = this.contacts.map((contact)=> contact.name.toLowerCase() );

        let index = names.indexOf(removedName.toLowerCase());

        if(index > -1){

            this.contacts.splice(index, 1);
            this.showContacts(this.contacts);
            showContactsBtn.innerHTML = 'Hide';

        } else {

            alert('Il Contatto non è presente in rubrica')

        }
    },


    // Metodo cerca Contatto

    searchContact : function(searchedName){

        let filtered = this.contacts.filter((contact)=>
            searchedName.toLowerCase() == contact.name.toLowerCase());

        if(filtered.length > 0){

            this.showContacts(filtered);
            showContactsBtn.innerHTML = 'Nascondi Rubrica';
            confirm = true;

        } else {

            alert('contatto non presente in rubrica');
            nameInput.value = '';

        }
       

    }

}


// Variabile d'appoggio

let confirm = false;

// Evento click sul bottone mostra contatti
showContactsBtn.addEventListener('click', ()=>{

    if(confirm == false){

        RUBRICA.showContacts(RUBRICA.contacts);
        confirm = true;
        showContactsBtn.innerHTML = 'Hide';

    } else {

        cardsWrapper.innerHTML = '';
        confirm = false;
        showContactsBtn.innerHTML = 'Show';

    }

});

// Evento click sul bottone "Add Contact"

addContactBtn.addEventListener('click', ()=>{

    if(nameInput.value != '' && numberInput.value != '' ){     // && numberInput.value.lenght == 10  da aggiungere se voglio dare una lunghezza massima di 10 numeri

        confirm = true;
        RUBRICA.addContact(nameInput.value, numberInput.value);
        showContactsBtn.innerHTML = 'Hide';

        nameInput.value = '';
        numberInput.value = '';

    } else {

        alert('Per favore, inserisci un nome e un numero di dieci cifre');

        numberInput.value = '';
    }

    
});


// Evento click sul bottone rimuovi contatto
removeContactBtn.addEventListener('click', ()=>{
    
    confirm = true;
    RUBRICA.removeContact(nameInput.value);
    nameInput.value = '';

});

// Evento click sul bottono mostra contatti
searchContactBtn.addEventListener('click', ()=>{

    RUBRICA.searchContact(nameInput.value);
    nameInput.value = '';

});




// Metodo indexOf() LO SCRIVO PER PROMEMORIA

// mi restituisce il valore dell'indice dell'elemento contenuto nell'array, se non c'è mi restituisce un -1
// se l'indice e' maggiore di -1, deve restituirci un messaggio di errore

// let arrNew = ['dino', 'sauro', 'bello'];

// let i = arrNew.indexOf('valerio');

// console.log(i);

// if( i > -1){

//     arrNew.splice(i, 1);

// } else {
//     console.log('contatto non presente');
// }

// console.log(arrNew);