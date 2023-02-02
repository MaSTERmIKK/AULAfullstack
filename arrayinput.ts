let arrayrisposte: any[] = ['ciao', true, 2, 'pippo', 5, 'caio', false, true, 6]

let arrayString: string[] = []
let arrayBool: boolean[] = []
let arrayNum: number[] = []

arrayrisposte.forEach(function (value) {

    switch(typeof(value)) { 
        case 'string': { 
           arrayString.push(value) 
           break; 
        } 
        case 'boolean': { 
            arrayBool.push(value)  
           break; 
        } 
        case 'number': { 
            arrayNum.push(value)  
            break; 
         } 
     } 
    
  }); 

console.log('Stringhe: ' + arrayString);
console.log('Booleani: '+arrayBool);
console.log('Numberi: '+ arrayNum);

  
