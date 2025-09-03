// Obtenemos referencias a los elementos canvas del HTML
const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

// Obtenemos el contexto 2D de cada canvas para poder dibujar en ellos
const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

// Definimos dimensiones fijas para cada canvas
canvasOOP.height = 200;
canvasOOP.width = 300;

canvasRandom.height = 200;
canvasRandom.width = 300;

canvasMultiple.height = 200;
canvasMultiple.width = 300;

// Definimos un color de fondo para cada canvas
canvasOOP.style.background = "#ff8";       // Amarillo claro
canvasRandom.style.background = "#e6f7f6"; // Verde agua claro
canvasMultiple.style.background = "#fcfb97"; // Amarillo pálido

// Definimos la clase Circle para crear objetos circulares
class Circle {
  constructor(x, y, radius, color, text, backcolor) {
    this.posX = x;          // Posición horizontal
    this.posY = y;          // Posición vertical
    this.radius = radius;   // Radio del círculo
    this.color = color;     // Color del borde
    this.text = text;       // Texto que se mostrará dentro del círculo
    this.backcolor = backcolor; // Color de relleno
  }

  // Método para dibujar el círculo en el canvas
  draw(context) {
    context.beginPath();
    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.backcolor;
    context.fill();

    context.lineWidth = 5;
    context.strokeStyle = this.color;
    context.stroke();

    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold 20px cursive";
    context.fillStyle = "white";
    context.fillText(this.text, this.posX, this.posY);

    context.closePath();
  }
}

// 🔹 Círculo centrado en canvasOOP
let miCirculo = new Circle(
  canvasOOP.width / 2,
  canvasOOP.height / 2,
  50,
  "red",
  "Tec",
  "rgb(66, 135, 245)"
);
miCirculo.draw(ctx);

// 🔹 Círculo aleatorio en canvasRandom (respetando bordes)
let maxRadiusRandom = Math.min(canvasRandom.width, canvasRandom.height) / 2;
let randomRadius = Math.floor(Math.random() * (maxRadiusRandom - 30) + 30);

let randomX = Math.random() * (canvasRandom.width - 2 * randomRadius) + randomRadius;
let randomY = Math.random() * (canvasRandom.height - 2 * randomRadius) + randomRadius;

let miCirculoRandom = new Circle(
  randomX,
  randomY,
  randomRadius,
  "green",
  "Tec",
  "rgb(83, 186, 52)"
);
miCirculoRandom.draw(ctxRandom);

// 🔹 Varios círculos aleatorios en canvasMultiple (respetando bordes)
let arrayCircle = [];

for (let i = 0; i < 15; i++) {
  let randomRadius = Math.floor(Math.random() * 10 + 20);

  let randomX = Math.random() * (canvasMultiple.width - 2 * randomRadius) + randomRadius;
  let randomY = Math.random() * (canvasMultiple.height - 2 * randomRadius) + randomRadius;

  let miCirculoMultiple = new Circle(
    randomX,
    randomY,
    randomRadius,
    "#9e500d",
    i + 1,
    "#f29a4e"
  );

  arrayCircle.push(miCirculoMultiple);
  arrayCircle[i].draw(ctxMultiple);
}
