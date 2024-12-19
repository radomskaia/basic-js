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

  encrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }
    const length = str.length;
    const newStr = str.toUpperCase();
    let fullKey = key.repeat(Math.ceil(length / key.length)).slice(0, length).toUpperCase();
    let encryptedStr = '';
    for (let i = 0; i < length; i++) {
      if (newStr[i] < 'A' || newStr[i] > 'Z') {
        encryptedStr += newStr[i];
        fullKey = fullKey.substring(0, i) + newStr[i] + fullKey.substring(i);
        continue
      }
      let charCode = newStr.charCodeAt(i) + fullKey.charCodeAt(i) - 65;
      if (charCode > 'Z'.charCodeAt(0)) {
        charCode -= 26;
      }
      encryptedStr += String.fromCharCode(charCode);
    }
    return this.isDirect
      ? encryptedStr.toUpperCase()
      : encryptedStr.toUpperCase().split('').reverse().join('');
  }
  decrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!');
    }

    const length = str.length;
    const newStr = str.toUpperCase();
    let fullKey = key.repeat(Math.ceil(length / key.length)).slice(0, length).toUpperCase();
    let encryptedStr = '';
    for (let i = 0; i < length; i++) {
      if (newStr[i] < 'A' || newStr[i] > 'Z') {
        encryptedStr += newStr[i];
        fullKey = fullKey.substring(0, i) + newStr[i] + fullKey.substring(i);
        continue
      }
      let charCode = newStr.charCodeAt(i) - fullKey.charCodeAt(i) + 65;
      if (charCode < 'A'.charCodeAt(0)) {
        charCode += 26;
      }
      encryptedStr += String.fromCharCode(charCode);
    }
    return this.isDirect
      ? encryptedStr.toUpperCase()
      : encryptedStr.toUpperCase().split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
