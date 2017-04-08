/* ========================================================
	Class : shot
	Autor: Jake the Dog and Finn the Human
	description: insert the shots into the page and "shift" them when it's out of the page.
		The minimum time to shot is 18ms.
		If debug is set to "true" there will have no limit time between shots.
=========================================================== */

function shot() {
	this._shot = [];
	this.tempoInsere = 0;
	this.debug = false;
	this.insert = function() {
		this._shot.push({
			y: 541,
			x: 0,
			width: 2,
			height: 10,
		});
		this.tempoInsere = 18;
		if(this.debug == true)
			this.tempoInsere = 0;
	};
	this.draw = function() {
		for(var i=0; i<this._shot.length; i++){
			var tiro = this._shot[i];
			ctx.fillStyle = "#8ee738";
			ctx.fillRect(tiro.x, tiro.y, tiro.width, tiro.height);
		}
	};
	this.update = function() {
		if(this.tempoInsere == 0){ //intervalo de tempo entre os tiros
			if(keys.up in teclas)
				this.insert();
		}
		else
			this.tempoInsere--;
		
		for(var i=0; i<this._shot.length; i++) {
			var tiro = this._shot[i];
			if(tiro.y >= hero.y)
				//desgruda do personagem somente quando o tiro ultrapassa-lo
				tiro.x = hero.x + 13; 
			tiro.y -= 8; //velocidade do tiro

			//retira o tiro caso esse atinja a borda superior
			if(tiro.y == 0){
				this._shot.shift(); 
				this._shot.length--;
				i--;
			}
		}
	};
}