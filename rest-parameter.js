// rest parameter er sathy onno parameter use kore onnpgu;a rest er age dite hobe.
function calculation(...numbers){
     let sum = 0;
     for(let i of numbers){
        sum = sum + i;
     }
     console.log(sum)

}

calculation(1,2,3,4,5,6,3,2)