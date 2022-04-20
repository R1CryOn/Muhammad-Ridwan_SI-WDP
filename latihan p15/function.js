function compareNumbers(firstNumber, secodNumber) {
  if (firstNumber === secodNumber) {
    return -1;
  }
  // bandingkan parameter ke dua lebih besar dari parameter pertama
  return secodNumber > firstNumber;
}

console.log(compareNumbers(5, 8), `<===================  ==================`);
console.log(compareNumbers(5, 3), `<===================  ==================`);
console.log(compareNumbers(4, 4), `<===================  ==================`);
console.log(compareNumbers(3, 3), `<===================  ==================`);
console.log(compareNumbers(17, 2), `<===================  ==================`);

function reverseString(str) {
  // looping dari belakang string
  // lalu masukan char ke string baru
  // return string baru
  let reversedStr = "";
  for (i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

console.log(reverseString("John Doe"), `<===================  ==================`);

function sort(str) {
  // bisa pake method sort atau
  // ubah string ke array agar bisa tukar posisi by index
  // looping array (i)
  // looping array dalam looping (j)
  // buat temporary var untuk menyimpan char yang akan direplace nanti
  // compare apakah char ke j lebih besar dari char ke i
  // jika ya temporary diisi char ke i
  // lalu char ke i di replace dengan char ke j
  // dan char ke j diganti char ke i
  // return array yang sudah dijoin

  let splittedStr = str.split("");
  for (i = 0; i < splittedStr.length; i++) {
    // h
    for (j = 0; j < splittedStr.length; j++) {
      // h > h, a>h, l>h,o>h
      let temp = splittedStr[i];
      if (splittedStr[j] > splittedStr[i]) {
        splittedStr[i] = splittedStr[j];
        splittedStr[j] = temp;
      }
    }
  }
  return splittedStr.join("");
}

console.log(sort("halo"), `<===================  ==================`);
console.log(sort("qwerty"), `<===================  ==================`);

function isArithMetic(numbers) {
  let isRight = true;
  let diff = numbers[1] - numbers[0]; // dapet selisih
  for (i = 2; i < numbers.length - 1; i++) {
    let currentDiff = numbers[i + 1] - numbers[i];
    if (diff !== currentDiff) {
      isRight = false;
    }
  }
  return isRight;
}

console.log(isArithMetic([1, 2, 3, 4, 5, 6]), `<===================  ==================`);
console.log(isArithMetic([2, 4, 6, 12, 24]), `<===================  ==================`);
console.log(isArithMetic([2, 4, 6, 8]), `<===================  ==================`);
console.log(isArithMetic([2, 6, 18, 54]), `<===================  ==================`);

function threeStepAB(str) {
  // buat distance var 0
  /**
   * looping sepanjang string
   * jika distance bukan 3 maka
   * dapetin char a atau b
   * terus check apakah index di huruf a ditambah 4 itu sama dengan b? jika ya distance ubah ke 3
   * terus check apakah index di huruf b ditambah 4 itu sama dengan a? jika ya distance ubah ke 3
   * return distance
   */

  let distance = 0;
  for (i = 0; i < str.length; i++) {
    if (distance !== 3) {
      let char = str[i];
      let isCurrentA = char === "a";
      let isCurrentB = char === "b";

      if (isCurrentA && str[i + 4] === "b") {
        distance = 3;
      }

      if (isCurrentB && str[i + 4] === "a") {
        distance = 3;
      }
    }
  }
  return distance === 3;
}

console.log(threeStepAB("lane borrowed"), `<=================== ab ==================`);
console.log(threeStepAB("i am sick"), `<=================== ab ==================`);
console.log(threeStepAB("you are boring"), `<=================== ab ==================`);
console.log(threeStepAB("barbarian"), `<=================== ab ==================`);
console.log(threeStepAB("bacond and meat"), `<=================== ab ==================`);

function gcd(firstNumber, secodNumber) {
  /**
   * dapetin lowest Num antara 2 param, lalu simpan ke dalam var
   * looping dari lowest Num sampai 1
   * jika param1 dan param2 habis dibagi lowestNum maka itu nilainya
   * jika bukan terus looping sampai param1 dan param 2 habis dibagi lowest num
   */
  let highestNum = firstNumber;
  let result = 1;

  if (secodNumber > firstNumber) {
    highestNum = secodNumber;
  }

  for (i = highestNum; i >= 0; i--) {
    if (secodNumber % i === 0 && firstNumber % i === 0) {
      return i;
    }
  }
  return result;
}

console.log(gcd(12, 16), `<=================== gcd ==================`);
console.log(gcd(50, 40), `<=================== gcd ==================`);
console.log(gcd(22, 99), `<=================== gcd ==================`);
console.log(gcd(24, 36), `<=================== gcd ==================`);
console.log(gcd(17, 23), `<=================== gcd ==================`);

function isPrime(num) {
  /**
   * cari angka yang hanya habis dibagi dengan angkanya sendiri
   */
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return num > 1;
}

console.log(isPrime(1), `<=================== prime ==================`);
console.log(isPrime(3), `<=================== prime ==================`);
console.log(isPrime(7), `<=================== prime ==================`);
console.log(isPrime(6), `<=================== prime ==================`);
console.log(isPrime(23), `<=================== prime ==================`);
console.log(isPrime(33), `<=================== prime ==================`);

function listPrima(n1, n2) {
  let prima = [];
  for (let i = n1; i < n2; i++) {
    if (isPrime(i)) {
      prima.push(i);
    }
  }
  return prima;
}

console.log(listPrima(1, 5), `<=================== list prima ==================`);
console.log(listPrima(5, 10), `<=================== list prima ==================`);
console.log(listPrima(10, 20), `<=================== list prima ==================`);
console.log(listPrima(1, 1000), `<=================== list prima ==================`);