const emails = [
  'catalin15@gmail.com',
  'giocanni@gmail.com',
  'marco@gmail.com',
]

const Utente = 'catalin15@gmail.com';
let message;

if(emails.includes(Utente)){
  message = 'Puoi accedere'
}else{
  message = 'Non puoi accedere'
}

console.log(message);

