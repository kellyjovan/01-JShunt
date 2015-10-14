function convert(num){
    //I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1,000
  var convertedNum = "";
  while(num > 0){
      if(num >= 1000){
          num -= 1000;
          convertedNum += "M";
      } else if(num == 999){
          num -= 999;
          convertedNum += "CMXCIX";
      }else if(num >= 500){
          num -= 500;
          convertedNum += "D";
      } else if( num == 499){
          num -= 499;
          convertedNum += "CDXCIX";
      }else if(num >= 100){
          num -= 100;
          convertedNum += "C";
      } else if(num == 99){
          num -= 99;
          convertedNum += "XCIX";
      }else if(num >= 50){
          num -= 50;
          convertedNum += "L";
      } else if(num == 49){
          num -= 49;
          convertedNum += "XLIX";
      }else if(num >= 10){
          num -= 10;
          convertedNum += "X";
      } else if(num == 9){
          num -= 9;
          convertedNum += "IX";
      } else if(num >= 5){
          num -= 5;
          convertedNum += "V";
      } else if(num == 4){
          num -= 4;
          convertedNum += "IV";
      }else if(num >= 1){
          num -= 1;
          convertedNum += "I";
      }
  }
  console.log(convertedNum);
};