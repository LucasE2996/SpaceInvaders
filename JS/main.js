/* ========================================================
	function : main()
	Author: Lucas Rosa
	description: instance "personagem()", and calls it self with "main()"
=========================================================== */

var teclas = [];
//as teclas digitadas são salvas em teclas[]
document.addEventListener("keydown", function(e) {
	teclas[e.keyCode] = true;
	e.preventDefault();
});
//limpa a tecla apertada
document.addEventListener("keyup", function(e) {
	delete teclas[e.keyCode];
});

var canvas,
	ctx,
	WIDTH,
    HEIGHT;

var lose = false,
	win = false,
	playing = false;

var keys = { //mapeamento do teclado
	right: 39,
	left: 37,
	up: 38,
	enter: 13
};

var hero = new Hero(275, 540, 30, 20, 6);
var nave = new enemy(12);
var shot = new shot();


function main() {

	WIDTH = window.innerWidth; //pega largura do navegador
	if(WIDTH >= 500) {
		HEIGHT = 600;
		WIDTH = 900;
	}
	canvas = document.getElementById("canvas"); //cria canvas
	canvas.width = WIDTH; //largura da tela
	canvas.height = HEIGHT; //altura da tela
	ctx = canvas.getContext("2d"); //contexto da canvas sera em 2d
	document.body.appendChild(canvas); //atribui a canvas ao corpo
	canvas.style.border = "1px solid #000";

	run();//chama a função run()

}

function run() {
	draw();//chama a  função draw()
	update();//chama a função update()

	setTimeout(run, 1000/60); //a função run() se repetirá à uma taxa de 60 FPS
}

function update() {

	if(keys.enter in teclas){
			this.playing = true;
			document.getElementById("press-txt").style.display = "none";
	}
	if(playing){
		hero.move();//chama a movimentação do personagem
		nave.update();
		shot.update();
	}
}

function draw() {

	var bg = document.getElementById("backGround");
	ctx.drawImage(bg,0,0,900,600);


	nave.draw();
	hero.draw(); //desenha o personagem
	shot.draw(); //desenha o tiro

}

main(); //chama a função principal (executa o jogo)
