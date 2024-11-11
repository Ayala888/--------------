/* //Тапсырма А

let ai = +prompt("1-ден 12-ге дейін сан енгіз")

switch (ai) {
    case 1:
    case 2:
    case 12:
        alert("Winter")
        break;
    case 3:
    case 4:
    case 5:
        alert("Spring")
        break;
    case 6:
    case 7:
    case 8:
        alert("Summer")
        break;
    case 9:
    case 10:
    case 11:
        alert("Autumn")
        break;
    default:
        alert("1 жыл 12 айдан тұрады 1 - ден 12- ге дейін сан еңгіз")
        break;
}


//Тапсырма B

let a = +prompt("а санын еңгіз")
let b = +prompt("b санын еңгіз")

let ortashaMan = (a+b)/2

if (a>b){
    alert("a саны b санынан үлкен")
}else if(a<b){
    alert("a саны b санынан кіші")
}else if(a==b){
    alert("сандар тең")
}

alert("a саны b сандарының орташа мәні: " + ortashaMan) */


//Тапсырма C

let a = +prompt("Бірінші санды енгізіңіз:")
let b = +prompt("Екінші санды енгізіңіз:")
let c = +prompt("Үшінші санды енгізіңіз:")

let maxNum = Math.max(a, b, c);
let minNum = Math.min(a, b, c);

let aiyrma = maxNum - minNum;

alert("Ең үлкен және ең кішкентай санның айырмасы: " + aiyrma)