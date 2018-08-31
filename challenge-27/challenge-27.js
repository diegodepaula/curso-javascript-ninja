(function ( win, doc ) {
	/*
	Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
	métodos semelhantes aos que existem no array, mas que sirvam para os
	elementos do DOM selecionados.
	Crie os seguintes métodos:
	- forEach, map, filter, reduce, reduceRight, every e some.

	Crie também métodos que verificam o tipo do objeto passado por parâmetro.
	Esses métodos não precisam depender de criar um novo elmento do DOM, podem
	ser métodos estáticos.

	Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
	no objeto, como nos exemplos abaixo:
	DOM.isArray([1, 2, 3]); // true
	DOM.isFunction(function() {}); // true
	DOM.isNumber('numero'); // false

	Crie os seguintes métodos para verificação de tipo:
	- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
	O método isNull deve retornar `true` se o valor for null ou undefined.
	*/

	function DOM ( string ) {
		this.element = doc.querySelectorAll( string );
		DOM.prototype.on = function ( event, callback ) {
			Array.prototype.forEach.call( this.get(), function ( elem ) {
				elem.addEventListener( event, callback, false );
			} );
		}

		DOM.prototype.off = function ( event, callback ) {
			Array.prototype.forEach.call( this.get(), function ( elem ) {
				elem.removeEventListenet( event, callback, false );
			} );
		}

		DOM.prototype.forEach = function forEach () {
			return Array.prototype.forEach.apply( this.get(), arguments );
		}

		DOM.prototype.map = function map() {
			return Array.prototype.map.apply( this.get(), arguments );
		}

		DOM.prototype.filter = function filter() {
			return Array.prototype.filter.apply( this.get(), arguments );
		}

		DOM.prototype.reduce = function reduce() {
			return Array.prototype.reduce.apply( this.get(), arguments );
		}

		DOM.prototype.reduceRight = function reduceRight() {
			return Array.prototype.reduceRight.apply( this.get(), arguments );
		}

		DOM.prototype.every = function every() {
			return Array.prototype.every.apply( this.get(), arguments );
		}

		DOM.prototype.some = function some() {
			return Array.prototype.some.apply( this.get(), arguments );
		}

		DOM.prototype.get = function get() {
			return this.element;
		}

		DOM.is =function is( obj ) {
			return Object.prototype.toString.call( obj )
		}

		DOM.isArray = function isArray( obj ) {
			return this.is( obj ) === '[object Array]';
		}

		DOM.isNumber = function isNumber( obj ) {
			return this.is( obj ) === '[object Number]';
		}

		DOM.isFunction = function isFunction( obj ) {
			return this.is( obj ) === '[object Function]';
		}

		DOM.isString = function isString( obj ) {
			return this.is( obj ) === '[object String]';
		}

		DOM.isBoolean = function isBoolean( obj ) {
			return this.is( obj ) === '[object Boolean]';
		}

		DOM.isNull = function isNull( obj ) {
			console.log(this.is( obj ))
			return this.is( obj ) === '[object Null]' || this.is( obj ) === '[object Undefined]';
		}
	}
	
})( window, document );