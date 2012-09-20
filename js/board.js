var board_flow = new Array(64);

board_flow[0] = {
			left : player.human.pos_x,
			top : player.human.pos_y
		};

for (var i = 1; i <= 64; i++) {

	// 1
	
	if(i == 1) board_flow[i] = board_flow[0];

	// 2 - 8
	
	if( i > 1 && i < 9){

		board_flow[i] = {
			left : board_flow[ i - 1 ]['left'] + 127,
			top : board_flow[1]['top']
		};
	}

	// 9 - 15
	
	if( i > 8 && i < 16){

		board_flow[i] = {
			left : board_flow[8]['left'],
			top : board_flow[ i - 1 ]['top']  - 127
		};
	}

	// 16 - 22
	
	if( i > 15 && i < 23){

		board_flow[i] = {
			left : board_flow[ i - 1 ]['left']  - 127,
			top : board_flow[15]['top']
		};
	}

	// 23 - 28
	
	if( i > 22 && i < 29){

		board_flow[i] = {
			left : board_flow[22]['left'],
			top : board_flow[ i - 1 ]['top'] + 127
		};
	}

	// 29 - 34
	
	if( i > 28 && i < 35){

		board_flow[i] = {
			left : board_flow[ i - 1 ]['left'] + 127,
			top : board_flow[28]['top']
		};
	}

	// 35 - 39
	
	if( i > 34 && i < 40){

		board_flow[i] = {
			left : board_flow[34]['left'],
			top : board_flow[ i - 1 ]['top']  - 127
		};
	}

	// 40 - 44
	
	if( i > 39 && i < 45){

		board_flow[i] = {
			left : board_flow[ i - 1 ]['left']  - 127,
			top : board_flow[39]['top']
		};
	}

	// 45 - 48
	
	if( i > 44 && i < 49){

		board_flow[i] = {
			left : board_flow[44]['left'],
			top : board_flow[ i - 1 ]['top']  + 127
		};
	}

	// 49 - 52
	
	if( i > 48 && i < 53){

		board_flow[i] = {
			left : board_flow[ i - 1 ]['left']  + 127,
			top : board_flow[48]['top']
		};
	}

	// 53 - 55
	
	if( i > 52 && i < 56){

		board_flow[i] = {
			left : board_flow[52]['left'],
			top : board_flow[ i - 1 ]['top']  - 127
		};
	}

	// 56 - 58
	
	if( i > 55 && i < 59){

		board_flow[i] = {
			left : board_flow[ i - 1 ]['left']  - 127,
			top : board_flow[55]['top']
		};
	}

	// 59 - 60
	
	if( i > 58 && i < 61){

		board_flow[i] = {
			left : board_flow[58]['left'],
			top : board_flow[ i - 1 ]['top'] + 127	
		};
	}

	// 61 - 62
	
	if( i > 60 && i < 63){

		board_flow[i] = {
			left : board_flow[ i - 1 ]['left']  + 127,
			top : board_flow[60]['top']	
		};
	}

	// 63
	
	if( i == 63){

		board_flow[i] = {
			left : board_flow[62]['left'],
			top : board_flow[ i - 1 ]['top'] - 127	
		};
	}

	// 64
	
	if( i == 64){

		board_flow[i] = {
			left : board_flow[63]['left']  - 127,
			top : board_flow[63]['top']	
		};
	}
};

var shortcut = new Array();

shortcut[7] = board_flow[33];
shortcut[7]['pos'] = 33;
shortcut[12] = board_flow[38];
shortcut[12]['pos'] = 38;
shortcut[14] = board_flow[10];
shortcut[14]['pos'] = 10;
shortcut[17] = board_flow[41];
shortcut[17]['pos'] = 41;
shortcut[23] = board_flow[45];
shortcut[23]['pos'] = 45;
shortcut[29] = board_flow[49];
shortcut[29]['pos'] = 49;
shortcut[31] = board_flow[3];
shortcut[31]['pos'] = 3;
shortcut[42] = board_flow[56];
shortcut[42]['pos'] = 56;
shortcut[43] = board_flow[19];
shortcut[43]['pos'] = 19;
shortcut[47] = board_flow[27];
shortcut[47]['pos'] = 27;
shortcut[55] = board_flow[40];
shortcut[55]['pos'] = 40;
shortcut[62] = board_flow[34];
shortcut[62]['pos'] = 34;