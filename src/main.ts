const canvas = document.getElementById("root") as HTMLCanvasElement;
canvas.style.border = "2px solid white";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

ctx.fillRect(100, 100, 50, 200);
ctx.fillRect(200, 100, 50, 200);
ctx.fillRect(300, 100, 50, 200);
