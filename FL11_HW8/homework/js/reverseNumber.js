function reverseNumber(n){
    let str = "";
    let prefix = "";
    str = String(n);
    if(n < 0){
        prefix = "-"
        str = str.substring(1);
    } 
	return `${prefix}${+str.split("").reverse().join("")}`;
}

reverseNumber(-123);