var abc = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz?-".toString();
abc[0xFF] = " ";
var getBin = function (v) {
  return v.toString(2);
};
24 * 6
var x = 0;
var disPassword = function (bits) {
  
var bits = bits || [
  1,    // Maru Mari Taken
  1,    // Brinstar Missle Container
  1, 1,                   // Red Door
  1, 1,
  1,                      // Brinstar Energy Tank
  1,                      // Red Door 
  1,                      // Bombs Taken
  1,                      // Red Door
  1,                      // Brinstar Missle Container
  1,                      // Brinstar Energy Tank
  1,                      // Red Door
  1,                      // Varia Taken
  1,                      // Brinstar Energy Tank
  1, 1,                   // Norfair Missle Container
  1,                      // Red Door
  1, 1, 1, 1, 1, 1, 1,    // Norfair Missle Container
  1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1,
  
  1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 0, 0,
  
  //Reset Bit
  0,
  
  1, 1, 1, 1, 1,
  
  1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 
  
  //Timer
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  
  0, 0, 0, 0, /*Shift*/0, 0,
  0, 0, 0, 0, /*CS*/0, 0,
  0, 0, 0, 0, 0, 0,
  
];
console.log(bits);
var getChar = function (x) {
  return abc.toString()[parseInt(x, 2)];
};
var setByte = function (x, y) {
  for (var i = 0; i < y.toString().length; i ++) {
    if (y.toString()[i] == "1") {
      bits[x + i] = 1;
    } else {
      bits[x + i] = 0;
    }
  }
};
var formatCS = function () {
  var cs = 0;
  for (var i = 0; i < 136; i ++) {
    cs += bits[i];
  }
  console.log(cs);
  setByte(bits.length-8, getBin(cs));
};
formatCS();
var printPassword =  function () {
  formatCS();
  var p = "";
  for (var i = 0; i < bits.length; i += 6) {
    var code = "";
    for (var e = 0; e < 6; e ++) {
      code += bits[i+e].toString();
    }
    p += (getChar(code));
  }
  console.log(p);
};
printPassword();
};
