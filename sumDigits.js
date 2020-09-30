function sumDigits(num) {
  let addDigits = true;
  while(addDigits){
    if(num > 10){
      let digits = (num +"").split("");
      num = 0;
      for(let i = 0; i < digits.length; i++){
        num += parseInt(digits[i]);
      }
    }else{
      addDigits = false;
    }
  }
  return num;
}