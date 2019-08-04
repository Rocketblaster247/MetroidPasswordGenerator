var abc = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz?-".toString();
abc[0xFF] = " ";
var getBin = function (v) {
  return v.toString(2);
};
24 * 6
var x = 0;
var bits = [
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, /*Shift*/0, 0,
  0, 0, 0, 0, /*CS*/0, 0,
  0, 0, 0, 0, 0, 0,
  
];
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
  cs ++;
  for (var i = 0; i < 136; i ++) {
    cs += bits[i];
  }
  setByte(136, getBin(cs));
};
formatCS();
var printPassword =  function () {
  formatCS();
  for (var i = 0; i < bits.length; i += 6) {
    var code = "";
    for (var e = 0; e < 6; e ++) {
      code += bits[i+e].toString();
    }
    console.log(getChar(code));
  }
};
/*
  Bit 0: Maru Mari Taken
  Bit 1: Missile Container (Brinstar)
  Bit 2: Red Door (Long Beam)
  Bit 3: Red Door (Tourian Bridge)
  Bit 4: Energy Tank (Brinstar)
  Bit 5: Red Door (Bombs)
  Bit 6: Bombs Taken
  Bit 7: Red Door (Ice Beam Brinstar)
  
  Bit 8: Missile Container (Brinstar)
  Bit 9: Energy Tank (Brinstar)
  Bit 10: Red Door (Varia)
  Bit 11: Varia Taken
  Bit 12: Energy Tank (Brinstar)
  Bit 13: Missile Container (Norfair)
  Bit 14: Missile Container (Norfair)
  Bit 15: Red Door (Ice Beam Norfair)
  
  Bit 16: Missile Container (Norfair)
  Bit 17: Missile Container (Norfair)
  Bit 18: Missile Container (Norfair)
  Bit 19: Missile Container (Norfair)
  Bit 20: Missile Container (Norfair)
  Bit 21: Missile Container (Norfair)
  Bit 22: Missile Container (Norfair)
  Bit 23: Red Door (High Jump Boots)
  
  Bit 24: High Jump Boots Taken
  Bit 25: Red Door (Screw Attack)
  Bit 26: Screw Attack Taken
  Bit 27: Missile Container (Norfair)
  Bit 28: Missile Container (Norfair)
  Bit 29: Red Door (Wave Beam)
  Bit 30: Energy Tank (Norfair)
  Bit 31: Missile Container (Norfair)
  
  Bit 32: Red Door (Kraid's Lair)
  Bit 33: Missile Container (Kraid's Lair)
  Bit 34: Missile Container (Kraid's Lair)
  Bit 35: Red Door (Kraid's Lair)
  Bit 36: Energy Tank (Kraid's Lair)
  Bit 37: Red Door (Kraid's Lair)
  Bit 38: Red Door (Kraid's Lair)
  Bit 39: Missile Container (Kraid's Lair)
  
  Bit 40: Missile Container (Kraid's Lair)
  Bit 41: Red Door (Kraid's Room)
  Bit 42: Energy Tank (Kraid's Room)
  Bit 43: Missile Container (Ridley's Lair)
  Bit 44: Red Door (Ridley's Lair)
  Bit 45: Energy Tank (Ridley's Lair)
  Bit 46: Missile Container (Ridley's Lair)
  Bit 47: Yellow Door (in Ridley's Room)
  
  Bit 48: Energy Tank (Room Behind Ridley)
  Bit 49: Missile Container (Ridley's Lair)
  Bit 50: Yellow Door (Tourian)
  Bit 51: Red Door (Tourian)
  Bit 52: Red Door (Tourian)
  Bit 53: Zebetite 1 Killed
  Bit 54: Zebetite 2 Killed
  Bit 55: Zebetite 3 Killed
  
  Bit 56: Zebetite 4 Killed
  Bit 57: Zebetite 5 Killed
  Bit 58: Mother Brain Killed
  Bit 59: Unknown
  Bit 60: Unknown
  Bit 61: Unknown
  Bit 62: Unknown
  Bit 63: Unknown
  
  Bit 64: Start in Norfair
  Bit 65: Start in Kraid's Lair
  Bit 66: Start in Ridley's Lair
  Bit 67: Reset
  Bit 68: Unknown
  Bit 69: Unknown
  Bit 70: Unknown
  Bit 71: Samus in Swimsuit
  
  Bit 72: Samus Has Bombs
  Bit 73: Samus Has High Jump Boots
  Bit 74: Samus Has Long Beam
  Bit 75: Samus Has Screw Attack
  Bit 76: Samus Has Maru Mari
  Bit 77: Samus Has Varia
  Bit 78: Samus Has Wave Beam
  Bit 79: Samus Has Ice Beam
  
  Bit 80: Missile Count (+1 Missile)
  Bit 81: Missile Count (+2 Missiles)
  Bit 82: Missile Count (+4 Missiles)
  Bit 83: Missile Count (+8 Missiles)
  Bit 84: Missile Count (+16 Missiles)
  Bit 85: Missile Count (+32 Missiles)
  Bit 86: Missile Count (+64 Missiles)
  Bit 87: Missile Count (+128 Missiles)
  
  Bit 88: Game Age (32-bit Value -- Low Bit)
  Bit 89: ...
  Bit 90: ...
  Bit 91: ...
  Bit 92: ...
  Bit 93: ...
  Bit 94: ...
  Bit 95: ...
  
  Bit 96: ...
  Bit 97: ...
  Bit 98: ...
  Bit 99: ...
  Bit 100: ...
  Bit 101: ...
  Bit 102: ...
  Bit 103: ...
  
  Bit 104: ...
  Bit 105: ...
  Bit 106: ...
  Bit 107: ...
  Bit 108: ...
  Bit 109: ...
  Bit 110: ...
  Bit 111: ...
  
  Bit 112: ...
  Bit 113: ...
  Bit 114: ...
  Bit 115: ...
  Bit 116: ...
  Bit 117: ...
  Bit 118: ...
  Bit 119: Game Age (32-bit Value -- High Bit)
  
  Bit 120: Unknown
  Bit 121: Unknown
  Bit 122: Unknown
  Bit 123: Unknown
  Bit 124: Ridley Killed
  Bit 125: Ridley Statue Raised
  Bit 126: Kraid Killed
  Bit 127: Kraid Statue Raised
*/



