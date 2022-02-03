let num = 266219;

//------------1й вариант------------
let numStr = String(num).split("").reduce(function(sum,item){return sum = sum * item},1);
let letRez = numStr ** 3;

console.log("Ответ первым способом:" + letRez.toString().slice(0,2));


//------------2й вариант------------
let numStr1 = String(num);
let rezult = 1;
for(let i = 0; i <= numStr1.length-1; i++){
  rezult = rezult * Number(numStr1[i]) 
};
let letRez1 = rezult ** 3;
console.log("Ответ вторым способом:" + String(letRez1).slice(0,2));