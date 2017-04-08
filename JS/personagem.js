/* ========================================================
	Classe : hero
	Autor: Jake the Dog and Finn the Human
	descrição: classe hero (personagem) e seus atributos
=========================================================== */

function Hero(x,y,width,height,speed) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.speed = speed;
	this.drawHero = document.getElementById("drawHero");
	this.draw = function() {
		ctx.drawImage(drawHero, this.x, this.y, this.width, this.height);
	};
	this.move = function() {
		if(keys.left in teclas && this.x > 10) //limita o movimento até 10px da borda
			this.x -= this.speed;
		if(keys.right in teclas && (this.x+this.width) < WIDTH - 10)
			this.x += this.speed;
	};
}