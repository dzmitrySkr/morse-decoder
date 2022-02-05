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
    re=/(.{10}|.)/g
    re1=/(.{2}|.)/g
    let res = expr.match(re);
    let result = []
   
    for(let i = 0; i < res.length;i++){
      let a = res[i].match(re1);

      let b = a.filter((i) => i !== "00");

      let s = [];
      for(let j = 0; j < b.length;j++){
        if (b[j] === '10'){
          s.push('.');
        } else if (b[j] === '11'){
          s.push('-');
        } else {
          s.push(' ');
        }
      }
     
      if(Object.keys(MORSE_TABLE).indexOf(s.join('')) !== -1){
        for(let key in MORSE_TABLE){
          if(s.join('') === key){
            result.push(MORSE_TABLE[key])
          }
        }
      } else {
        result.push(' ');
      }
    }

    return result.join('')
}

module.exports = {
    decode
}
