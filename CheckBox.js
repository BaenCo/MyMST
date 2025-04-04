

let inputs = document.getElementsByTagName("input");
let keys =  localStorage.getItem(`lskey`);
let keysP = JSON.stringify(keys);
let keyCheck = localStorage.getItem(keysP);
let keyOb = JSON.parse(keyCheck);      // //get note from local storage
console.log(keyCheck);
console.log(keyOb);
console.log(keys);



    const lsName = localStorage.getItem(keys);
console.log(lsName);
const parseName = JSON.parse(lsName);
const lsDate = JSON.parse(lsName);
console.log(lsDate)
console.log(lsDate.symptoms)
console.log(lsDate.notes)
readLS();

/*

     if (!keys){
        
        let dayNote = {
        date: `${name}`,
        symptoms: [],
        notes: [],
   };



console.log(dayNote);
console.log(keyOb);

     }else{}
     console.log(keys);


*/




keys =  localStorage.getItem(`lskey`);


  keyCheck = localStorage.getItem(keys);      
  keyOb = JSON.parse(keyCheck);              //load note

  
function readLS(){



/*
let dayNote = {
        date: `${name}`,
        symptoms: [],
        notes: [],
      };


*/




nameTest = localStorage.getItem(name);
nameCheck = JSON.parse(nameTest);
console.log(JSON.parse.nameCheck);








  
let keys =  localStorage.getItem(`lskey`);
let keyCheck = localStorage.getItem(keys);
let keyOb = JSON.parse(keyCheck);      // //get note from local storage
console.log(keyCheck);
console.log(keyOb);
console.log(keys);
keyParse = localStorage.getItem(keys);
console.log(keyParse);



    
    const dayNotes = localStorage.getItem(keys);
    const dayNotesOb = JSON.parse(dayNotes);
    console.log(dayNotesOb);   //stringify to store data in LocalStorage
    console.log(keyOb);
    console.log(keyOb.notes);
    console.log(keyOb.symptoms);
   document.getElementById("noteViewer").innerHTML = 
    keyOb.date + "<br/> " + "<br/>" +keyOb.symptoms + "<br/> " + "<br/>" + keyOb.notes ;
        /*
      if (inputs.name === keyOb.symptoms){
        this.input.checked
      }*/

/*
      for (let i = 0; keyOb.symptoms.length > i; i++){
        if (keyOb.symptoms.value === inputs.name) {

        }
        if (inputs[i].type === "checkbox" && inputs[i].checked){
              symptoms.push(inputs[i].value)
        }   
        };
        */




   const keyTest = localStorage.getItem(keys);
console.log(keyTest);
const KeytoOb = JSON.parse(keyTest);
console.log(KeytoOb);
console.log(keyOb.symptoms[0])
console.log(inputs[0].name)
console.log(keyOb.symptoms.length)
//recurse();
console.log(keyOb.notes)
if(keyOb.notes){
    document.getElementById('tArea').innerHTML = keyOb.notes;
}else{
    document.getElementById('tArea').innerHTML = ""
} 
keyOb.symptoms.forEach(recurse);
function recurse(){

for (let a = 0, i = 0,  ii = 0; keyOb.symptoms.length > ii && i < 6;){
    console.log(i)
    console.log(inputs[i].name)
    console.log(inputs[i].value)
    console.log(keyOb.symptoms[ii])
 //  let a = 0 
 //  let i = 0 
 //  let ii = 0;
        if (inputs[i].name == keyOb.symptoms[ii] && i < 6){
            while (inputs[i].name == keyOb.symptoms[ii] )
            console.log("firstbranch"), //a++, 
            inputs[i].checked = true, inputs[i].value = inputs[i].name, i++, ii++;
            // i++,
            //ii++,
            console.log(keyOb.symptoms[i]),
            console.log(keyOb.symptoms[ii]),
            console.log(inputs[i]),
            console.log(inputs[ii])//, recurse(keyOb.symptoms - 1)
         //   recurse();
        }else// if (inputs[i].name !== keyOb.symptoms[ii] && i > 5)
            {
            console.log(i),
            i++,
            console.log(i),
            console.log(ii),

            //a++
        //    recurse();
 //       }
       //     function recurse(){
       //         if (inputs[i].name === keyOb.symptoms[ii]){
                    console.log("firstbranch") 
          //          inputs[i].checked = true, a++
      //          }else if (inputs[i] !== keyOb.symptoms[ii] && ii > 5){
      //              ii++;
        //    }else{
               
                console.log("else " + inputs[i].name)
            };


   //// if(inputs[i].name === keyOb.symptoms[ii]){
     ////   inputs[i].checked = true, i++, ii++;



  ///  }else if (inputs[i].name !== keyOb.symptoms[ii]){
  ///      ii++,
  ///  recurse()
   /// }else{
        
   /// }
      //  while (inputs[i].name !== keyOb.symptoms[ii]){
      //      ii++,
      //      if()
        }
    }
}

//}


/*function setLS(){ console.log( "set clicked ")

let keys =  localStorage.getItem(`lskey`);

let keyCheck = localStorage.getItem(keys); //get note from local storage  was keyParse, as i was storing namekeys in JSON, but now use simple string for namekey
let keyOb = JSON.parse(keyCheck);
console.log(keyCheck);
console.log(keyOb);
console.log(keys);

    const dayNotes = localStorage.getItem(keys);     //was keyParse
    const dayNotesOb = JSON.parse(dayNotes);
    console.log(dayNotesOb);   //stringify to store data in LocalStorage
    console.log(keyOb);
    console.log(keyOb.notes);
    console.log(keyOb.symptoms);
   document.getElementById("noteViewer").innerHTML = keyOb.date + "<br/> " + "<br/>" +keyOb.symptoms + "<br/> " + "<br/>" + keyOb.notes;


   let nameSt = JSON.stringify(keys);   ////was keyParse
   console.log(nameSt);
    keySt = JSON.stringify(keyOb);
    localStorage.setItem(nameSt, keySt);
    pullTest = localStorage.getItem(nameSt);
    console.log(pullTest);


let keySet = JSON.stringify(keyOb);
console.log(keySet);
localStorage.setItem(keys, keySet);   /// keys was keyParse


   console.log(keyCheck); 

};*/



function toggle(){
if (this.name != this.value){
    this.value = this.name,
    console.log(this.name)
}else{
this.value = ""
}
//cBoxCheck();
test();/////////////// JANKY WORKAROUND TO DYNAMICALLY DISPLAY SYMPTOMS//////////////////
//test();///////////////  I AM WEIRDLY PROUD OF IT  /////////////////////////////////
///////////////////////  FIXED BUT LEAVING FOR LEGACY  //////////////////////////


//textPush();
//document.getElementById('noteViewer')
}
/*
function textPush(){
  document.getElementById("noteViewer").innerHTML = 
  keyOb.date + "<br/> " + "<br/>" +keyOb.symptoms + "<br/> " + "<br/>" + keyOb.notes;
}; */

function test(){









const keys =  localStorage.getItem(`lskey`);
const keyCheck = localStorage.getItem(keys); // was keyParse
const keyOb = JSON.parse(keyCheck);
console.log(keyCheck);
console.log(keyOb);
const book = localStorage.getItem(keys); // was keyParse
const bookOb = JSON.parse(book);
let symptoms = []
let icons = []
Array.from(document.querySelectorAll("input[type=checkbox][name=type]:checked"), el => el.value);

   
for (let i = 0; inputs.length > i; i++){
    if (inputs[i].type === "checkbox" && inputs[i].checked){
          symptoms.push(inputs[i].value),
          icons.push(inputs[i].id)
          
    }   
    };






//    console.log(bookOb);

//    console.log(keyCheck);

console.log(icons)
    bookOb.symptoms = symptoms
    bookOb.icons = icons
    const input = document.getElementById("tArea");
    const inputValue = input.value;


//    console.log(symptoms);
//    console.log(bookOb);




//console.log(bookOb);
//console.log(bookOb.symptoms);
console.log(icons)
console.log(inputValue);
    bookOb.notes = inputValue;
console.log(bookOb.notes);

    console.log(bookOb);
   let bookSt = JSON.stringify(bookOb);
   console.log(`${keys}`); //was keyParse
   console.log(bookSt);
    localStorage.setItem(`${keys}`, bookSt);  // keys was keyParse

   console.log(JSON.parse(bookSt));
   console.log(bookOb)
    document.getElementById("noteViewer").innerHTML = 
    bookOb.date + "<br/> " + "<br/>" + bookOb.symptoms + "<br/> " + "<br/>" + bookOb.notes;

    console.log(inputs[0].name)
    console.log(bookOb.symptoms.length)


/*
    for (let i = 0; inputs.length > i; i++){
        if (inputs[i].type === "checkbox" && inputs[i].checked){
              symptoms.push(inputs[i].value)
        }   
        };
*/
     
/*
   inputs = document.getElementsByTagName("input");

for (let i = inputs.length -1 ; i>= 0; i--){
    if (inputs[i].type === "checkbox" && inputs[i].checked){
          symptoms.push(inputs[i].value)
        console.log(symptoms);
  
    document.getElementById("noteViewer").innerHTML = 
    keyOb.date + "<br/> " + "<br/>" +keyOb.symptoms + "<br/> " + "<br/>" + keyOb.notes; 
}; */
//let symp = Array.from(document.querySelectorAll("input[type=checkbox][name=type]:checked"), e => e.value);
//for(let i = 0; i < symp.length; i++) {
 // console.log(symp);
}
//}

//}

function noteIt() {
    
let classes = document.getElementsByClassName("checkbox"); // Do not use a period here!
let values = Array.prototype.map.call(classes, function(el) {
return(el.value),
console.log(el.value);
});};
 
    const data = localStorage.getItem(`lskey`);
    console.log("data: ", localStorage.getItem(data));

/*
function cBoxCheck(){
let keys =  localStorage.getItem(`lskey`);
let keyCheck = localStorage.getItem(keys); //get note from local storage // keys was keyParse
let keyOb = JSON.parse(keyCheck);
console.log(keyCheck);
console.log(keyOb);
console.log(keys);

let classes = document.getElementsByClassName("checkbox"); // Do not use a period here!
let values = Array.prototype.map.call(classes, function(el) {
//return(el.value)


document.getElementById("noteViewer").innerHTML = keyOb.date + "<br/> " + "<br/>" +keyOb.symptoms + "<br/> " + "<br/>" + keyOb.notes;

}
)
;};
*/