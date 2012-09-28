var playerList = {
	adoel : {
		name : 'Adoel',
		img : 'img/adoel.png'
	},
	alam : {
		name : 'Alam',
		img : 'img/alam.png'
	},
	alfath : {
		name : 'Alfath',
		img : 'img/alfath.png'
	},
	ali : {
		name : 'Ali',
		img : 'img/ali.png'
	},
	avesena : {
		name : 'Avesena',
		img : 'img/avesena.png'
	},
	dewi : {
		name : 'Dewi',
		img : 'img/dewi.png'
	},
	farid : {
		name : 'Farid',
		img : 'img/farid.png'
	},
	ganesha : {
		name : 'Ganesha',
		img : 'img/ganesha.png'
	},
	ichan : {
		name : 'Ichan',
		img : 'img/ichan.png'
	},
	putra : {
		name : 'Putra',
		img : 'img/putra.png'
	}
};

var _positionBoard = {
	x : ((parseInt($(document).width()) - parseInt($('#board').width())) / 2),
	y : (parseInt($(document).height() - ((parseInt($('.playerBoard').height()) * 2) + (2 * 20))))
};

var player = {
	human : {
		name : '', 
		pos : 1,
		step : 0, // count by dice
		shortcut : 0,
		trap : 0,
		pos_x : _positionBoard.x + 5,
		pos_y : _positionBoard.y - 60,
		turn : 1
	},
	computer : {
		name : '',
		pos : 1,
		step : 0,
		shortcut : 0,
		trap : 0,
		pos_x : _positionBoard.x,
		pos_y : _positionBoard.y - 60,
		turn : 0
	}
};

$('#player').css('left',player.human.pos_x);
$('#player').css('top',player.human.pos_y);
$('#computer').css('left',player.computer.pos_x);
$('#computer').css('top',player.computer.pos_y);

var _turn = 'human';
var turn = function(){

	var swap = player.human.turn;

	player.human.turn = player.computer.turn;
	player.computer.turn = swap;
	
	_turn = 'human';

	if(player.human.turn == 0) _turn = 'computer';
};