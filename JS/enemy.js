/* ========================================================
	Classe : enemy
	Autor: Jake the Dog and Finn the Human
	descrição: insert the enemies on the page and their animation.
		[incomplete] when it's shot this enemy disappear.
		If any enemy gets to hero the game stops.
=========================================================== */

function enemy() {
	this._naves = [];
	this.velocidade = 0.5;
	this.limite = false;
	this.insere = false;
	this.speedInc1 = false;
	this.aux = 1; //auxiliar do limite lateral (para que seja verdadeira apenas uma vez no loop)
	this.alive = true;

	this.insert = function() {
		this._naves = [{x:50, y:50, width: 30, height: 14}, // 1 : 1
					{x:50, y:100, width: 30, height: 14},   // 2 : 1
					{x:50, y:150, width: 30, height: 14},   // 3 : 1
					{x:130, y:50, width: 30, height: 14},   // 1 : 2
					{x:130, y:100, width: 30, height: 14},  // 2 : 2	
					{x:130, y:150, width: 30, height: 14},  // 3 : 2
					{x:210, y:50, width: 30, height: 14},   // 1 : 3
					{x:210, y:100, width: 30, height: 14},  // 2 : 3
					{x:210, y:150, width: 30, height: 14},  // 3 : 3
					{x:290, y:50, width: 30, height: 14},   // 1 : 4
					{x:290, y:100, width: 30, height: 14},  // 2 : 4
					{x:290, y:150, width: 30, height: 14},  // 3 : 4
					{x:370, y:50, width: 30, height: 14},   // 1 : 5
					{x:370, y:100, width: 30, height: 14},  // 2 : 5
					{x:370, y:150, width: 30, height: 14},  // 3 : 5
					{x:450, y:50, width: 30, height: 14},   // 1 : 6
					{x:450, y:100, width: 30, height: 14},  // 2 : 6
					{x:450, y:150, width: 30, height: 14},  // 3 : 6
					{x:530, y:50, width: 30, height: 14},   // 1 : 7
					{x:530, y:100, width: 30, height: 14},  // 2 : 7
					{x:530, y:150, width: 30, height: 14},  // 3 : 7
					{x:610, y:50, width: 30, height: 14},   // 1 : 8
					{x:610, y:100, width: 30, height: 14},  // 2 : 8
					{x:610, y:150, width: 30, height: 14},  // 3 : 8
					{x:690, y:50, width: 30, height: 14},   // 1 : 9
					{x:690, y:100, width: 30, height: 14},  // 2 : 9
					{x:690, y:150, width: 30, height: 14},  // 3 : 9
					{x:770, y:50, width: 30, height: 14},   // 1 : 10
					{x:770, y:100, width: 30, height: 14},  // 2 : 10
					{x:770, y:150, width: 30, height: 14},  // 3 : 10
		];
	};

	this.draw = function() { //desenha as naves
		var drawEnemy = document.getElementById("drawEnemy");
		for(var i=0; i<this._naves.length; i++){
			var ship = this._naves[i];
			ctx.drawImage(drawEnemy, ship.x, ship.y, ship.width, ship.height);
		}
		
	};

	this.update = function() {
		if(!this.insere){
			this.insert();
			this.insere = true;
		}
		for(var i = this._naves.length - 1; i >= 0; i--) {

			var ship = this._naves[i];

			if(ship.x > 840 && this.aux == 1) {  // limite direito
				this.limite = true;
				for(var j = this._naves.length - 1; j>=0; j--)
					this._naves[j].y += 10;
				//increases speed
				if (ship.y > 300) {
					this.velocidade = 4;
				}else if (ship.y > 200) {
					this.velocidade = 2;
				}else if (ship.y > 100) {
					this.velocidade = 1;
				}
				this.aux--;
			}
			if((ship.x + 30) < 60 && this.aux == 1){ //limite esquerdo
				this.limite = false;
				for(var j = this._naves.length - 1; j>=0; j--)
					this._naves[j].y += 10;
				this.aux --;
			}

			if (ship.x >= 0 && this.limite){ //movimento para a esquerda
				ship.x -= this.velocidade;
			}
			if(ship.x <= 900 && !this.limite){ //movimento para a direita
				ship.x += this.velocidade;
			}

			//it's shot
			for(var j=shot._shot.length-1; j>=0; j--){
				if(this._naves == null){
					break;
				}else if(
					shot._shot[j].y < this._naves[i].y + 14
					&& shot._shot[j].y > this._naves[i].y
					&& shot._shot[j].x > this._naves[i].x
					&& shot._shot[j].x < (this._naves[i].x + 30))
				{
					this._naves.splice(i, 1);
					shot._shot.splice(j, 1);
					for (var k = this._naves.length - 1; k >= 0; k--) {
						console.log(this._naves.indexOf(this._naves[k]));
					}
					console.log(" ");
					break;
				}
			}
			
			//hits the character (hero)
			if(ship.y + ship.height > 540) {
				this._naves = {};
			}

			

			//debug
			// debugger;
			// console.log(this._naves[0].x, this._naves[1].x);
		}
		this.aux = 1;
	};
}