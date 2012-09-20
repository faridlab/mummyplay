var randomRange = function(){
	var rand = 'mp' + Math.random();
	return parseInt(rand.substr(7,1));
};

$(function(){

	var dice = function(){
		var _dice = randomRange();
		if(_dice < 1 || _dice > 6) _dice = dice();
		return _dice;
	}

	$('#shakeDice').click(function(){
		var round = randomRange();
		if(round <= 3) round = 3;

		var i = 0;
		setInterval(function(){
			if(i < round){
				$('#diceNumber').text(dice());
				i++;
			}

			if(i == round){
				i++;
				var around = parseInt($('#diceNumber').text());
				clearInterval(this);				
				var turnPlayer = 'player';
				if(_turn == 'computer') turnPlayer = _turn;
				setInterval(function(){

					if(around > 0){
						player[_turn]['pos']++;
						$('#' + turnPlayer ).animate({
							"left"	: board_flow[player[_turn]['pos']]['left'],
							"top"	: board_flow[player[_turn]['pos']]['top']
						}, "slow");
						around--;

						if(player[_turn]['pos'] == 64){
							player[_turn]['pos'] -= around;
							$('#' + turnPlayer ).animate({
								"left"	: board_flow[player[_turn]['pos']]['left'],
								"top"	: board_flow[player[_turn]['pos']]['top']
							}, 1200);
							around = 0;
						}
					}

					if(around == 0){
						around--;
						clearInterval(this);

						if(shortcut[player[_turn]['pos']]){
							$('#' + turnPlayer ).animate({
								"left"	: shortcut[player[_turn]['pos']]['left'],
								"top"	: shortcut[player[_turn]['pos']]['top']
							}, "slow");
							player[_turn]['pos'] = shortcut[player[_turn]['pos']]['pos'];
						}

						turn();
						var nextTurnPlayer = 'player';
						if(_turn == 'computer') nextTurnPlayer = _turn;
						$('#turnName').text(nextTurnPlayer + "'s turn");

						if(_turn == 'computer'){
							setTimeout(function(){
								$('#shakeDice').click();
							},2000);
						}
						// do something again, later.
					}

				},1000);

			}
		},500);
	});

});