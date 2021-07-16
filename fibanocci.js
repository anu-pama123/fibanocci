let InputArray=[2,5,3,7,8,9,15];
let i=0;
let j=0;
flag = true
while(true){
if(i==0){
console.log(InputArray[i]);
i = 1;
}else{
let t = i;
i = i+j;
if(flag){
flag= false;
}else{
j=t;
}
if(i<InputArray.length){
console.log(InputArray[i]);
}else{
break;
}
}
}
