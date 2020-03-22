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
    let separate = [];
    let decode = [];
    let result = '';
    for (let i = 0; i < (expr.length / 10); i++) {
        separate[i] = expr.slice(i * 10, (i + 1) * 10);
        decode[i] = '';
        for (let j = 0; j < 10; j += 2) {
            if (separate[i].slice(j, j + 2) === '10') {
            decode[i] += '.';
            } else if (separate[i].slice(j, j + 2) === '11') {
            decode[i] += '-';
            } else if (separate[i].slice(j, j + 2) === '**') {
            j += 8
            }
        }
    }
  
  
    for (let i = 0; i < decode.length; i++) {
        if (decode[i] === '') {
        result += ' '
        } else {
        result += MORSE_TABLE[decode[i]]
        }
    }
    return result
}

module.exports = {
    decode
}