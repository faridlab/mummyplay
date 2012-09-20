!function ($) {

  $(function(){
  	// hide playmodal at first
    $('#dice').hide();
  	$('#MummyplayPopover').popover({ placement : 'bottom'});

  	$('#playModal img').click(function(){
  		$('#playerNameSeleted').text($(this).attr('alt'));
  	});

    var randomPlayer = $('#playModal .modal-body').children();

  	$('#startGame').click(function(){

  		if($('#playerNameSeleted').text() == '?'){
  			alert('Choose your player please.');
  			return;
  		}

      var roundTime = 0;

  		setInterval(function(){

        if(roundTime < 10 ){
           $('#computerSelected').text(chooseComputerRandom($('#playerNameSeleted').text()));
            roundTime++;          
        }

        if(roundTime == 10 ) {
          player.human.name =  $('#playerNameSeleted').text().toLowerCase();
          player.computer.name =  $('#computerSelected').text().toLowerCase();
          $('#player').css({'background':'url(../'+ playerList[player.human.name].img+') no-repeat bottom right'});
          $('#computer').css({'background':'url(../'+ playerList[player.computer.name].img+') no-repeat bottom left'});
          $('#board').css({'background':"url(../img/board.jpg) no-repeat center center"});
          roundTime++;
        }
        if(roundTime == 11){
          $('#playModal').modal('hide');
          $('#dice').show();
          clearInterval(this);
        }
  		},500);

  	});

    var chooseComputerRandom = function(player){
      var computerPlayer = $(randomPlayer[randomRange()]).attr('alt');
      if(player == computerPlayer ) {
        var computerPlayer = chooseComputerRandom(player);
      }
      return computerPlayer;
    };

  });

}(window.jQuery);