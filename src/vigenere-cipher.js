const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  validateInput(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }
  }

  cryptographyProcess(str, key, isEnctypt = true) {
    const length = str.length;
    const newStr = str.toUpperCase();
    let fullKey = key.repeat(Math.ceil(length / key.length)).slice(0, length).toUpperCase();
    let encryptedStr = '';
    let multiplier = isEnctypt ? 1 : -1;
    for (let i = 0; i < length; i++) {
      if (newStr[i] < 'A' || newStr[i] > 'Z') {
        encryptedStr += newStr[i];
        fullKey = fullKey.substring(0, i) + newStr[i] + fullKey.substring(i);
        continue
      }
      let charCode = newStr.charCodeAt(i) + multiplier * (fullKey.charCodeAt(i) - 65);

      if (charCode > 'Z'.charCodeAt(0)) {
        charCode -= 26;
      }
      if (charCode < 'A'.charCodeAt(0)) {
        charCode += 26;
      }
      encryptedStr += String.fromCharCode(charCode);
    }
    return this.isDirect
      ? encryptedStr
      : encryptedStr.split('').reverse().join('');
  }

  encrypt(str, key) {
    this.validateInput(str, key);
    return this.cryptographyProcess(str, key);
  }
  decrypt(str, key) {
    this.validateInput(str, key);
    return this.cryptographyProcess(str, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
