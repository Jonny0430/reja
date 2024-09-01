// const { rejects } = require("assert");
// const { constants } = require("buffer");
// const { log } = require("util");

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yahshi talaba boling", //0-20
//     "togri boshliq tanlang va koproq xarakat qiling", // 30-40
//     "uzingizga ishlashingizni boshlang", //40-50
//     "siz kuchli bolgan narsalarni qiling", //40-50
//     "yoshlarga investitsiya qiling", //50-60
//     "endi dam oling, foydasi yoq endi", //60
// ];
// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("Insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(function () { //setTimeout
//         callback(null, list[5]);
//       }, 1000);
//     }
// }

// console.log("passed here 0");
// maslahatBering(70, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log(data);
//     }
// });
// console.log("passed here 1");


//ASYNC funcion
// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((reslove, rejects) => {
//         //  setTimeout(() => {
//           setInterval(() => {
//             reslove(list[5]);
//          }, 1000);
        
//            });
//     }
// }
// return list[5];
        //  setTimeout(function () {
        //     return list[5];
        //  }, 5000);

//call via then/catch
// console.log("passed here 0");
// maslahatBering(25)
// .then((data) => {
//     console.log("javob:", data);
// })
// .catch((err) => {
//     console.log("ERROR:", err);
// });
// console.log("passed here 1");

//call via asyn/await
//asyn/await
// async function run() {
//     let javob = await maslahatBering(67);
//     console.log(javob);
//     // javob = await maslahatBering(32);
//     // console.log(javob);
//     // javob = await maslahatBering(42);
//     // console.log(javob);
//     // javob = await maslahatBering(55);
//     // console.log(javob);
//     // javob = await maslahatBering(20);
//     // console.log(javob);
// }
// run();

// console.log('passed here 0');
// maslahatBering(65, (err, data) => {
//     if(err) console.log("ERROR:",err);
//     else {
//         console.log("javob:", data);
//     }
// });
// console.log('passed here 1');

// A-TASK: 
//Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
//MASALAN countLetter("e", "engineer") 3ni return qiladi.


//B-TASK
// function countLetter(letter, word) {
//     let count = 0; //Hisoblagichni ishga tushirish
//     for (let char of word) {
//         if (char === letter) {
//             count++; // Agar harf so'zdagi belgiga mos kelsa, hisoblagichni oshirish
//         }
//     }
//     return count; // Umumiy sonni qaytarish
// }

// // Foydalanish misoli
// const result = countLetter("e", "engineer");
// consongodb+/olesrv:.log(result); // Bu 3 chiqishi kerak


//B-TEKS:

// function countDigits(inputString) {
//         let count = 0;
//         for (let char of inputString) {
//             if (/\d/.test(char)) {
//                 count++;
//             }
//         }
//         return count;
//     }
    
//     // Example usage
//     const result = countDigits("ad2a54y79wet0sfgb9");
//     console.log(result);  // Output: 7




// C-TASK: 

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// function checkContent(str1, str2) {
//     // Ikkala qatordagi harflarni tartiblangan
//     const sortedStr1 = str1.split('').sort().join('');
//     const sortedStr2 = str2.split('').sort().join('');
    
//     //Satrlarning tartiblangan versiyalarini solishtirish
//     return sortedStr1 === sortedStr2;
// }

// // Tekshrish
// console.log(checkContent("mitgroup", "gmtiprou")); //  true
// console.log(checkContent("hello", "world"));       //  false


// D-TASK: 

// Shunday class tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!


// class Shop {
//     constructor(breads, lagmons, colas) {
//     // Mahsulot miqdorini ishga tushirish
//       this.products = { bread: breads, lagmon: lagmons, cola: colas };
//     }
  
//     // Joriy vaqtni 'HH:mm' formatida olish
//     _getCurrentTime() {
//       return new Date().toTimeString().slice(0, 5);
//     }
  
//  // Qolgan zaxiralarni ko'rsatish
//     remaining() {
//       const { bread, lagmon, cola } = this.products;
//       console.log(`Now at ${this._getCurrentTime()} there are ${bread} breads, ${lagmon} lagmons, and ${cola} colas!`);
//     }
  
//    // Mahsulotni sotish
//     sell(product, quantity) {
//       if (this.products[product] >= quantity) {
//         this.products[product] -= quantity;
//         console.log(`Sold ${quantity} ${product}(s) at ${this._getCurrentTime()}`);
//       } else {
//         console.log(`Cannot sell ${quantity} ${product}(s) - insufficient stock.`);
//       }
//     }
  
//     // Mahsulotning yangi zaxirasini olish
//     accept(product, quantity) {
//       this.products[product] += quantity;
//       console.log(`Received ${quantity} ${product}(s) at ${this._getCurrentTime()}`);
//     }
//   }
  
// // Foydalanish misoli
//   const shop = new Shop(4, 5, 2);  // Do'konni 4 ta non, 5 ta lag'mon va 2 ta kola bilan boshlash
//   shop.remaining();                // Jurnallar: Hozir [vaqt] 4 ta non, 5 ta lag'mon va 2 ta kola!
//   shop.sell('bread', 3);          // Jurnallar: 3 ta non sotilgan
//   shop.accept('cola', 4);          // Jurnallar: 4 ta kola olindi
//   shop.remaining();               // Jurnallar: Hozir 1 ta non, 5 ta lag'mon va 6 ta kola!

// E-TASK: 

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"


// function getReverse(a) {
//         return a.split("").reverse("").join("");
// };

// const a = "hello"
// console.log(getReverse(a));

// F-TASK: 

// Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
// MASALAN: getReverse("hello") return true return qiladi
function findDoublers(str) {
        const seenCharacters = new Set();
        for (let char of str) {
            if (seenCharacters.has(char)) {
                return true;
            }
            seenCharacters.add(char);
        }
        return false;
    }
    
    console.log(findDoublers("hello")); 
