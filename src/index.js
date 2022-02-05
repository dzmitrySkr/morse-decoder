const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let obj = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
    ' ': 's',
  }

  let miniarray = []
  let ss = []
  let array = result.split('');
  
  array.forEach(el => {
    
    ss = [];
    
   let a = obj[el];
   let b = a.split('')

   console.log(b);
   for(i=0; i< 10 - (b.length *2); i++){
     ss.push(0);
   }
   
   
   b.forEach(((elem, index) => {

  
    if (elem === '.'){
      ss.push(10)
      }
    if (elem === '-') {
      ss.push(11)
    } 

    if (elem === 's'){
      ss = ['**********']
      miniarray.push(ss)
    }else if(index === b.length-1){
      miniarray.push(ss)
    }
    
   }))
  });

 return miniarray.join('').split(',').join('');
}

module.exports = {
    decode
}
