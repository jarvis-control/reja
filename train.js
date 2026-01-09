// TASK F:

function findDoublers(str) {
  let seen = [];
  for (let i = 0; i < str.length; i++) {
    if (seen.includes(str[i])) {
      return true;
    } else {
      seen.push(str[i]);
    }
  }

  return false;
}

console.log(findDoublers("Hello"));



// TASK E:

// function getReverse(str) {
//   return str.split("").reverse().join("")
// }

// console.log(getReverse("Hello"));


// TAK D:

// function checkContent(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   const arr1 = str1.split("");
//   const arr2 = str2.split("");

//   const sorted1 = arr1.sort();
//   const sorted2 = arr2.sort();

//   const result1 = sorted1.join("");
//   const result2 = sorted2.join("");

//   return result1 === result2;
// }

// console.log(checkContent("mitgroup", "gmtiprou"));

// TASK C:

// const moment = require("moment");
// const data = moment().format("hh:mm");

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   qoldiq() {
//     console.log(`Hozir ${data} da ${this.non} ta non, ${this.lagmon} ta lagmon va ${this.cola} ta cola mavjud`);
//   }

//   sotish(product, amount) {
//     if (this[product] !== undefined) {
//       this[product] -= amount;
//       console.log(`${amount} ta ${product} sotildi`);
//     } else {
//       console.log("Bunday mahsulot yo'q");
//     }
//   }

//   qabul(product, amount) {
//     if (this[product] !== undefined) {
//       this[product] += amount;
//       console.log(`${amount} ta ${product} qabul qilindi`);
//     }
//   }
// }

// const shop = new Shop(4, 5, 2);

// shop.qoldiq();
// shop.sotish("lagmon", 1);
// shop.qabul("cola", 10);

// TASK B:
// function countDigits(digits) {
//   let count = 0;
//   for (let char of digits) {
//     if(char >= "0" && char <= "9") {
//         count++;
//     }
//   }
//   return count;
// }

// console.log(countDigits("1d2a54y799t0sfgb9"));

// TASK A:
// function countLetter(letter, word) {
//     let count = 0;
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countLetter("e", "engineer"));

// console.log("Jack Ma maslahatlari");
// const list = [
//   "Yaxshi talaba bo'ling", // 0–20
//   "To'g'ri boshliq tanlang...", // 20–30
//   "O'zingizga ishlaringizni boshlang", // 30–40
//   "Siz kuchli bo'lgan narsalarni qiling", // 40–50
//   "Yoshlarga investitsiya qiling", // 50–60
//   "Endi dam oling, endi foydasi yo'q", // 60+
// ];

// /* Define via Callback function: */
// function maslahatBering(a, callback) {
//     if(typeof a !== 'number') callback("Please, insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         // setTimeout(function () {
//         //     callback(null, list[4]);
//         // }, 5000);

//         /* Callback ni o'rni (20:17) */
//         setInterval(function () {
//             callback(null, list[5]);
//         }, 1000);
//     }
// }

// /* Call via Callback function: */
// console.log("passed here 0");

// maslahatBering(65, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log("maslahatni biri:", data);
//     }
// })

// console.log("passed here 1");

/* Define via Async function: */
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("Please, insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     /* Case 1: setTimeOut doesn't work with Async */
//     // setTimeout(function () {
//     //     return list[5];
//     // }, 5000);

//     /* Case 3: */
//     // return list[5];

//     /* Case 3: setTimeOut works with Async using Promise */
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }

/* Call via .then() & .catch(): */
// console.log("passed here 0");
// maslahatBering(25)
//   .then((data) => {
//     console.log("maslahatni biri:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

/* Call via async function (await): */
// async function run() {
//   let maslahat = await maslahatBering(65);
//   console.log(maslahat);
//   maslahat = await maslahatBering(31);
//   console.log(maslahat);
//   maslahat = await maslahatBering(41);
//   console.log(maslahat);
// }
// run();
