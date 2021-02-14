// IIFE = Imediately Invoked Function Expression -> função autoinvocada
// Segue uma ideia de não acessar o escopo global do document.

(function() {
    console.log('Será invocado na hora!');
    console.log('Foge do escopo mais abrangente!')
})()