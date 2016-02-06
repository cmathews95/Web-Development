	var suites = ["clubs", "diamonds", "hearts", "spades"];
	var special = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
	var chosen_cards = new Array();

		while(chosen_cards.length < 5) {
			var suite = suites[Math.ceil(Math.random() * 3)];
			var card = special[Math.ceil(Math.random() * 12)];
			var answer = card + "-" + suite + ".png"
			chosen_cards.push(answer);

			for(var i = 0; i < chosen_cards.length-1; i++)
				if(answer == chosen_cards[i]){
					chosen_cards.length--;
					console.log("Same");
				}
				
		}
		console.log("Answer: " + chosen_cards.toString(" "));

		// var answer = chosen_cards.toString(" ");
		// console.log(answer);
		
		// for(var i = 0; i < chosen_cards.length; i++){
		// 	var card = chosen_cards[i] + 1;
		// 	var suite = suites[Math.floor(card/13)];
		// 	var type = ((((card/13)%1)*13).toFixed(0));
		// 	if(type == 1) {type="ace";}
		// 	if(type > 10) {type = special[(type-11)];}
		// 	var x = type + "-" + suite + ".png";
		// 	cards.push(x);
		// }