var x = 5;

for (let i = 1; i <= x; i++) {

    for (let j = 1; j <= x - i; j++) {
        document.write("&nbsp;&nbsp;");
    }
    for (let k = 1; k <= i; k++) {
        document.write("*");
    }

    for (let l = 1; l <= i - 1; l++) {
        document.write("*");
    }

    document.write("<br/>");

}

// array 
var arr = [["ee1","ee2"],["ee3","ee4"],["ee5","ee6"]]
for (var i=0; i<arr.length; i++){
 document.write(arr[i] +"\n"+"<br>")
 for (var j =0; j<arr[i].length;j++){
    document.write("hello"+  arr[i][j] +"\n");
 }
}