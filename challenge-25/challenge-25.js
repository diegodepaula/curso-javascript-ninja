
(function(win,doc){
	/*
	Essa semana você terá dois desafios:
	1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
	tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
	ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
	o que não ficou tão claro das aulas anteriores.
	É essencial que você entenda todo o conteúdo que foi passado até aqui,
	para que possamos prosseguir para a parte mais avançada do curso :D

	2) Estudar eventos!
	Acesse a página do MDN:
	https://developer.mozilla.org/en-US/docs/Web/Events#Categories

	Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
	desafio os experimentos legais que você conseguir desenvolver :D
	*/
	var $inputFront = doc.querySelector( '[data-js=front]' );
	var $inputFrontFail = doc.querySelector( '[data-js=frontFail]' );
	var $inputMid = doc.querySelector( '[data-js=mid]' );
	var $inputMidFail = doc.querySelector( '[data-js=midFail]' );
	var $inputBack = doc.querySelector( '[data-js=back]' );
	var $inputBackFail = doc.querySelector( '[data-js=backFail]' );
	var $button = doc.querySelectorAll( '[data-js=button]' );
	var $timer = doc.querySelector( '[data-js=timer]' );
	var interval;
	var signal = false;

	function signalHandler () {
		if(!signal)
			startTimer();
	}

	function resetTimer () {
		stopTimer();
		$timer.value = '00:00:00';
	}

	function stopTimer () {
		clearTimeout(interval);
		signal = false;
	}

	function checkTime ( i ) {
		if( i < 10 && i !== '00')
			i = '0' + i;
		return i;
	}

	function counterToClock ( fullMatch, $1, $2, $3 ) {
		$1 = +$1;
		$2 = +$2;
		$3 = +$3;
		$3++;
		if( $3 === 60 ) {
			$2 = $2 + 1;
			$3 = '00';
		}
		if( $2 === 60 ) {
			$1 = $1 + 1;
			$2 = '00';
		}
		if( $1 === 24 ) {
			stopTimer();
		}
		
		return checkTime($1) + ':' + checkTime($2) + ':' + checkTime($3);
	}

	function startTimer () {
		$timer.value = $timer.value.replace( /(\d{2}):(\d{2}):(\d{2})/, counterToClock )
		interval = setTimeout( startTimer , 1000 );
		signal = true;
	}

	function sum( input ) {
		return input.value = +input.value + 1
	}

	function undo( input ) {
		if(input.value > 0)
			return input.value = +input.value - 1
	}

	function reset() {
		return $inputFront.value = $inputFrontFail.value = $inputMid.value = $inputMidFail.value = $inputBack.value = $inputBackFail.value = 0;
	}

	function initializeEvents () {
		Array.prototype.forEach.call( $button, function( item ) {
			item.addEventListener( 'click', caller.bind( null, item ), false )
		} );
	}

	function initialize () {
		initializeEvents();
	}

	function caller( button ) {
		switch( button.value ){
			case '0':
				undo( $inputFront ) ;
				break;
			case '1':
				undo( $inputFrontFail ) ;
				break;
			case '2':
				undo( $inputMid ) ;
				break;
			case '3':
				undo( $inputMidFail ) ;
				break;
			case '4':
				undo( $inputBack ) ;
				break;
			case '5':
				undo( $inputBackFail ) ;
				break;
			case '6':
				sum( $inputFront ) ;
				break;
			case '7':
				sum( $inputFrontFail ) ;
				break;
			case '8':
				sum( $inputMid ) ;
				break;
			case '9':
				sum( $inputMidFail ) ;
				break;
			case '10':
				sum( $inputBack ) ;
				break;
			case '11':
				sum( $inputBackFail ) ;
				break;
			case '12':
				reset();
				break;
			case '13':
				signalHandler();
				break;
			case '14':
				stopTimer();
				break;
			case '15':
				resetTimer();
				break;
		}
	}
	initialize();
})(window, document);
