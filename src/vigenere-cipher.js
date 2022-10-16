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
    constructor (arg){
        this.arg = arg;
     }
    encrypt(str,key) {
        if (typeof [...arguments][0] != 'string' 
        || typeof [...arguments][1] != 'string')  throw new Error('Incorrect arguments!');
        str = str.toLowerCase();
        key = key.toLowerCase();
        let res = [];
        let s=0;
        let k = 0;
        let n =1;

        for (let i in str){
            k = i-s;
      
            if ((k>key.length-1)) {
              
                if (( key.length*(n+1)+s ) <= i) { 
                   n++;
                           }
                 
                k = i - (key.length)*n -s;
                
                
            }
              
           
            if ( /\w/.test(str[i]) && !/\d/.test(str[i]) ) {
                
                if ( ((str[i].charCodeAt())+(key[k].charCodeAt()))>122 ){
                 
                    let temp = (( (str[i].charCodeAt()-97) + (key[k].charCodeAt()-97) ) % 26 )+97;
            
                    res.push(temp);
                } else {
                    console.log(str[i]);
                 res.push(str[i].charCodeAt()+key[k].charCodeAt());        
                }
            } else {
            res.push(str[i].charCodeAt());
                s++;
                
            }
         
        }
 if (this.arg===false) return String.fromCharCode(...(res.reverse())).toUpperCase();
        return String.fromCharCode(...res).toUpperCase();
      
      }
      decrypt(str,key) {
        if (typeof [...arguments][0] != 'string' 
        || typeof [...arguments][1] != 'string')  throw new Error('Incorrect arguments!');
        
        str = str.toLowerCase();
        key = key.toLowerCase();
        let strArr = [];
        let res = [];
        let s=0;
        let k = 0;
        let n =1;
        str.split('').forEach((el) => {
            res.push(el.charCodeAt());
        });
        for (let i in res){
      
            k = i-s;
            if ((k>key.length-1)) {
              
                if (( key.length*(n+1)+s ) <= i) { 
                   n++;
                           }
                 
                k = i - (key.length)*n -s;
                
                
            }
            if ( /\w/.test( String.fromCharCode(res[i]) ) && !/\d/.test( String.fromCharCode(res[i]) )) {
                 console.log(res[i]);
                    console.log(key[k].charCodeAt());
                if ( ( res[i]-key[k].charCodeAt() + 97 ) < 97 ){
                 
                    let temp = res[i]-key[k].charCodeAt() + 26 + 97;
            
                          console.log('temp=',temp);
                    strArr.push(temp);
                    
                } else {
              
                  strArr.push(res[i]-key[k].charCodeAt() + 97);
                }
            } else {
            strArr.push(res[i]);
                s++;
            }
      }
      if (this.arg===false) return String.fromCharCode(...(strArr.reverse())).toUpperCase();
        return String.fromCharCode(...strArr).toUpperCase();
      }
  }
  
  module.exports = {
    VigenereCipheringMachine
  };
 
  