let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let PosionedGrassArr = [];
let vochxarArr = [];
let matrix = [];

function matrixGen(n, gr, grEat, predator, posion) {
  for (let x = 0; x < n; x++) {
    matrix[x] = [];
    for (let y = 0; y < n; y++) {
      matrix[x][y] = 0;
    }
  }

  for (let i = 0; i < gr; i++) {
    let x = Math.floor(Math.random() * n);
    let y = Math.floor(Math.random() * n);

    if (matrix[x][y] == 0) {
      matrix[x][y] = 1;
    } else {
      i--;
    }
  }

  for (let i = 0; i < grEat; i++) {
    let x = Math.floor(Math.random() * n);
    let y = Math.floor(Math.random() * n);

    if (matrix[x][y] == 0) {
      matrix[x][y] = 2;
    } else {
      i--;
    }
  }
  for (let i = 0; i < predator; i++) {
    let x = Math.floor(Math.random() * n);
    let y = Math.floor(Math.random() * n);

    if (matrix[x][y] == 0) {
      matrix[x][y] = 3;
    } else {
      i--;
    }
  }
  for (let i = 0; i < posion; i++) {
    let x = Math.floor(Math.random() * n);
    let y = Math.floor(Math.random() * n);

    if (matrix[x][y] == 0) {
      matrix[x][y] = 4;
    } else {
      i--;
    }
  }

  return n;
}
var n;
matrixGen(25, 10, 30, 3, 2);
function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

let side = 25;
function setup() {
  createCanvas(matrix[0].length * side, matrix.length * side);
  frameRate(60);

  background("#2e4057");
  const mard = new Mard(0, 0);

  for (var x = 0; x < matrix.length; x++) {
    for (var y = 0; y < matrix[x].length; y++) {
      if (matrix[x][y] == 1) {
        let gr = new Grass(x, y);
        grassArr.push(gr);
      } else if (matrix[x][y] == 2) {
        let great = new GrassEater(x, y);
        grassEaterArr.push(great);
      } else if (matrix[x][y] == 3) {
        let small = new Predator(x, y);
        predatorArr.push(small);
      } else if (matrix[x][y] == 4) {
        let toxic = new PosionedGrass(x, y);
        PosionedGrassArr.push(toxic);
      } else if (matrix[x][y] == 5) {
        let bomba = new Vochxar(x, y);
        vochxarArr.push(bomba);
      }
    }
  }
  setInterval(() => {
    let x = Math.floor(Math.random() * n);
    let y = Math.floor(Math.random() * n);
    new Vochxar(x, y);
  }, 300);
}

function draw() {
  for (var x = 0; x < matrix.length; x++) {
    for (var y = 0; y < matrix[x].length; y++) {
      if (matrix[x][y] == 0) {
        fill("#acacac");
      } else if (matrix[x][y] == 1) {
        fill("green");
      } else if (matrix[x][y] == 2) {
        fill("yellow");
      } else if (matrix[x][y] == 3) {
        fill("red");
      } else if (matrix[x][y] == 4) {
        fill("brown");
      } else if (matrix[x][y] == 5) {
        fill("black");
      } else if (matrix[x][y] == 9) {
        fill("black");
      }
      ellipse(y * side + side / 2, x * side + side / 2, side, side);
    }
  }
  for (let i in grassArr) {
    grassArr[i].mul();
  }
  for (let i in grassEaterArr) {
    grassEaterArr[i].eat();
  }
  for (let i in predatorArr) {
    predatorArr[i].eat();
  }
  for (let i in PosionedGrassArr) {
    PosionedGrassArr[i].mul();
  }
  for (let i in PosionedGrassArr) {
    PosionedGrassArr[i].posion();
  }
  for (let i in vochxarArr) {
    vochxarArr[i].bomb();
  }
  for (let i in predatorArr) {
    predatorArr[i].die();
  }
}
