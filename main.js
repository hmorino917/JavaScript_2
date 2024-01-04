let result = document.getElementById('result');
let is_calc = false;

function clearResult() {
    result.value = "0";
    is_calc = false;
}

function clickNumber(val) {
    if(is_calc) result.value = "0";
    is_calc = false;

    if(result.value =="0" && val == "0"){
        result.value = "0";
      }else if(result.value == "0" && val == "."){
        result.value = "0.";
      }else if(result.value == "0"){
        result.value = val;
      }else{
        if(val == "." && result.value.includes(".")){
        }else{
          result.value += val;
        }
      }
}

function clickOperator(val) {
    if(is_calc) is_calc = false;

    if(is_ope_last()){
        result.value = result.value.slice(0,-1) + val;
    }else {
        result.value += val;
    }
}

function calculateResult() {
    if(is_ope_last()) result.value = result.value.slice(0,-1);

    let temp = new Function("return " + result.value.replaceAll("×", "*").replaceAll("÷", "/"))();

    if(temp == Infinity || Number.isNaN(temp)) {
      result.value ="Error";
    }else{
      result.value = temp;
      is_calc = true;
    }
}

function is_ope_last(){
  return ["+","-","×","÷"].includes(result.value.toString().slice(-1));
}