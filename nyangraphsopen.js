(function() {
	var sparkInt;
	$('head').append('<link rel="stylesheet" href="../nyangraphsopen.css">');
	$('body').css('background-color', '#0f4d8f').append('<div id="nyancat"> <img src="../nyancat.gif" /> <audio id="nyanaudio" loop="loop" src="../nyancat.mp3" type="audio/mpeg"> </audio></div>');
	$('#nyanaudio').get(0).play();

	//animating sparks
	function addSpark() {
		var $spark = $('<div/>', {
				class: (Math.random() > .5) ? 'spark' : 'spark alt',
				css: {
					top: Math.floor(Math.random() * 97) + '%',
					left: Math.floor(Math.random() * 97) + '%'
				}
			})
			.append('<div class="dot dot-1" />')
			.append('<div class="dot dot-2" />')
			.append('<div class="dot dot-3" />')
			.append('<div class="dot dot-4" />')
			.append('<div class="dot dot-5" />')
			.append('<div class="dot dot-6" />')
			.append('<div class="dot dot-7" />')
			.append('<div class="dot dot-8" />')
			.append('<div class="dot dot-9" />');
			if ( $('.spark').length < 15 ) {
	        $spark.one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(){
	        $(this).remove();
	      }).prependTo('body');
	    }
	}
  sparkInt = setInterval(addSpark, 100);


	//animating rainbow
	function addRainbow() {
		var $rainbow = $('<div/>', {
				class: 'rainbow'
			}),
			$rainbowCol = $('<div/>', {
				class: 'rainbow-col'
			}),
			i = 0,
			j = 0,
			rainbowInt,
			numCols = 15;

    //add rows
		while (i < 7) {
			$rainbowCol.append('<div class="rainbow-row"></div>');
			i++
		}

    //add cols
    while (j < numCols) {
      $rainbowCol.clone().appendTo($rainbow);
      j++;
    }
    $('#nyancat img').on('load', function(){
    	$rainbow.css('right', $('#nyancat img').position().left + 24).prependTo('#nyancat');
    });

    rainbowInt = setInterval(function(){
      $('.rainbow').toggleClass('shiftpos');
    }, 500);
	}
  addRainbow();
})();