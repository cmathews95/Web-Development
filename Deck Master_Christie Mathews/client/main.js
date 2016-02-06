window.addEventListener("load",function(){
	var canvas = document.getElementById('canvas');
	var width = canvas.width;
	var height = canvas.height;
	var ctx = canvas.getContext("2d");
	var suites = ["clubs", "diamonds", "hearts", "spades"];
	var cards = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
	var chosen_cards = new Array();
	var card_width = 120/2.3;
	var card_height = 167/2.3

	//Give Canvas a background
	ctx.fillStyle= 'green';
	ctx.fillRect(0,0,500,500);

	//Create a deck of cards on canvas
	var stack = new Image();
	stack.src = "card-back.png";
	stack.onload = function(){
    	ctx.drawImage(stack, (width/2) - 25, 5, card_width/1.2, card_height/1.2);
    	ctx.drawImage(stack, (width/2) - 23, 3, card_width/1.2, card_height/1.2);
    	ctx.drawImage(stack, (width/2) - 21, 1, card_width/1.2, card_height/1.2);
    }

    document.getElementById('btn').addEventListener("click", function(){
    	//Algorithm To Pick Random Card with Check to make sure 
    	//the same card isn't picked twice.
    	chosen_cards.length=0;
    	while(chosen_cards.length < 5) {
			var suite = suites[Math.round(Math.random() * 3)];
			var card = cards[Math.round(Math.random() * 12)];
			var answer = card + "-" + suite + ".png"
			chosen_cards.push(answer);

			for(var i = 0; i < chosen_cards.length-1; i++)
				if(answer == chosen_cards[i]){
					chosen_cards.length--;
				}
				
		}
		// alert("Answer: " + chosen_cards.toString());
		//Display Images of Picked cards on Canvas
		var c1 = new Image(),
			c2 = new Image(),
			c3 = new Image(),
			c4 = new Image(),
			c5 = new Image();
		c1.src = 'cards/' + chosen_cards[0];
		c2.src = 'cards/' + chosen_cards[1];
		c3.src = 'cards/' + chosen_cards[2];
		c4.src = 'cards/' + chosen_cards[3];
		c5.src = 'cards/' + chosen_cards[4];

		var py = (height/2)-3;
		c1.onload = function() {
			ctx.drawImage(c1, 5 , py, card_width, card_height);	
		}
		c2.onload = function() {
			ctx.drawImage(c2, 65 , py, card_width, card_height);
		}
		c3.onload = function() {
			ctx.drawImage(c3, 125 , py, card_width, card_height);
		}
		c4.onload = function() {
			ctx.drawImage(c4, 185 , py, card_width, card_height);
		}
		c5.onload = function() {
			ctx.drawImage(c5, 245 , py, card_width, card_height);
		}
    }, false);
}, false);