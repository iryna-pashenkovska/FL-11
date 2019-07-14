function getMin() {
    let minValue = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
      if(arguments[i] < minValue){
        minValue = arguments[i];
      }
    }
    return minValue;
  }

getMin(1,2,3);