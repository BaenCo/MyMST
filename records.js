function loadNote(){
const dayNotes = localStorage.getItem(`dayNote`);
const dayNotesOb = JSON.parse(dayNotes);
console.log(dayNotesOb);

console.log(dayNotes);
const keys =  localStorage.getItem(`lskey`);

//const keyParse = JSON.parse(keys);
const keyCheck = localStorage.getItem(keys);
//const keyCheck = localStorage.getItem(keyParse);


const keyOb = JSON.parse(keyCheck);
const keyTest = localStorage.getItem(keys);
console.log(keyTest);
const KeytoOb = JSON.parse(keyTest);
console.log(KeytoOb);
console.log(keys);
console.log(keyCheck);
console.log(keyOb);

};
loadNote();