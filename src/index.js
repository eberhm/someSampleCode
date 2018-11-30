function drawButton(height, width, isSquare, name, address, color) {
  var shape;
  var text = "";

  if (name) {
    text = name;
    if (address) {
      text = `${name} ${address}`;
    }
  } else {
    text = address;
  }

  if (isSquare) {
    shape = printSquare(width, text, color);
  } else {
    shape = printRectangle(height, width, text);
  }

  return shape;
}
