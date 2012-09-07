window.onload = function(){
    //Javascript Global Objects
    var jGlobalObj = [
        'Object',
        'Function',
        'Array',
        'String',
        'Boolean',
        'Number',
        'Math',
        'Date',
        'RegExp',
        'JSON',
        'Error',
        'EvalError',
        'RangeError',
        'ReferenceError',
        'SyntaxError',
        'TypeError',
        'URIError'
    ],
    //Javascript Function's method and properies
    jFunctionPros = [
        'call()',
        'apply()',
        'length'
    ],
    //Javascript Array's method and properies
    jArrayPros = [
        'concat()',
        'every()',
        'filter()',
        'forEach()',
        'indexOf()',
        'join()',
        'lastIndexOf()',
        'map()',
        'pop()',
        'push()',
        'reduce()',
        'reduceRight()',
        'reverse()',
        'shift()',
        'slice()',
        'some()',
        'sort()',
        'splice()',
        'unshift()',
        'length'
    ],
    //Javascript String's method and properies
    jStringPros = [
        'charAt()',
        'charCodeAt()',
        'concat()',
        'indexOf()',
        'lastIndexOf()',
        'localeCompare()',
        'match()',
        'replace()',
        'search()',
        'slice()',
        'split()',
        'substr()',
        'substring()',
        'toLocaleLowerCase()',
        'toLocaleUpperCase()',
        'toLowerCase()',
        'toUpperCase()',
        'trim()',
        'length'
    ],
    //Javascript Number's method and properies
    jNumberPros = [
        'Number.MAX_VALUE',
        'Number.MIN_VALUE',
        'Number.NaN',
        'Number.NEGATIVE_INFINITY',
        'Number.POSITIVE_INFINITY',
        'toFixed()',
        'toExponential()',
        'toPrecision()'
    ],
    //Javascript Math's method and properies
    jMathPros = [
        'Math.E',
        'Math.LN2',
        'Math.LN10',
        'Math.LOG2E',
        'Math.LOG10E',
        'Math.PI',
        'Math.SQRT1_2',
        'Math.SQRT2',
        'Math.abs()',
        'Math.acos()',
        'Math.asin()',
        'Math.atan()',
        'Math.atan2()',
        'Math.ceil()',
        'Math.cos()',
        'Math.exp()',
        'Math.floor()',
        'Math.log()',
        'Math.max()',
        'Math.min()',
        'Math.pow()',
        'Math.random()',
        'Math.round()',
        'Math.sin()',
        'Math.sqrt()',
        'Math.tan()'
    ],
    //Javascript Date's method and properies
    jDatePros = [
        'getDate()',
        'getDay()',
        'getFullYear()',
        'getHours()',
        'getMilliseconds()',
        'getMinutes()',
        'getMonth()',
        'getSeconds()',
        'getTime()',
        'getTimezoneOffset()',
        'getUTCDate()',
        'getUTCDay()',
        'getUTCFullYear()',
        'getUTCHours()',
        'getUTCMilliseconds()',
        'getUTCMinutes()',
        'getUTCMonth()',
        'getUTCSeconds()',
        'getYear()',
        'setDate()',
        'setFullYear()',
        'setHours()',
        'setMilliseconds()',
        'setMinutes()',
        'setMonth()',
        'setSeconds()',
        'setTime()',
        'setUTCDate()',
        'setUTCFullYear()',
        'setUTCHours()',
        'setUTCMilliseconds()',
        'setUTCMinutes()',
        'setUTCMonth()',
        'setUTCSeconds()',
        'setYear()',
        'toDateString()',
        'toGMTString()',
        'toISOString()',
        'toJSON()',
        'toLocaleDateString()',
        'toLocaleFormat()',
        'toLocaleString()',
        'toLocaleTimeString()',
        'toString()',
        'toTimeString()',
        'toUTCString()',
    ],
    //Javascript RegExp's method and properies
    jRegExpPros = [
        'exec()',
        'test()',
        'compile()',
        'global',
        'ignoreCase',
        'lastIndex',
        'multiline',
        'source'
    ],
    //Javascript JSON's method and properies
    jJSONPros = [
        'stringify()',
        'parse()'
    ],
    //http://www.w3schools.com/jsref/default.asp
    //JavaScript Global Properties
    jGlobalPros = [
        'Infinity',
        'NaN',
        'undefined'
    ],
    //JavaScript Global Functions
    jGlobalFuncs = [
        'decodeURI()',
        'decodeURIComponent()',
        'encodeURI()',
        'encodeURIComponent()',
        'escape()',
        'eval()',
        'isFinite()',
        'isNaN()',
        'Number()',
        'parseFloat()',
        'parseInt()',
        'String()',
        'unescape()'
    ],
    //Javascript Reserved Words
    jReservedEWords = [
        'break',
        'delete',
        'function',
        'return',
        'typeof',
        'case',
        'do',
        'if',
        'switch',
        'var',
        'catch',
        'else',
        'in',
        'this',
        'void',
        'continue',
        'false',
        'instanceof',
        'throw',
        'while',
        'debugger',
        'finally',
        'new',
        'true',
        'with',
        'default',
        'for',
        'null',
        'try',
        'abstract',
        'double',
        'goto',
        'native',
        'static',
        'boolean',
        'enum',
        'implements',
        'package',	
        'super',
        'byte',
        'export',
        'import',
        'private',	
        'synchronized',
        'char',
        'extends',
        'int',
        'protected',
        'throws',
        'class',
        'final',
        'interface',
        'public',
        'transient',
        'const',
        'float',
        'long',
        'short',
        'volatile'
    ],
    jOthers = [
        'toSource()',
        'toString()',
        'toLocaleString()',
        'valueOf()',
        'constructor',
        'prototype',
        'typeof'
    ]
    //
    var finalGlobals = jGlobalObj
                       .concat(jFunctionPros)
                       .concat(jArrayPros)
                       .concat(jStringPros)
                       .concat(jNumberPros)
                       .concat(jMathPros)
                       .concat(jDatePros)
                       .concat(jRegExpPros)
                       .concat(jJSONPros)
                       .concat(jGlobalPros)
                       .concat(jGlobalFuncs)
                       .concat(jReservedEWords)
                       .concat(jOthers);
    var arr = [];
    for(var i = 0, l = finalGlobals.length; i < l; i++){
        arr.push(finalGlobals[i]);
    }
    var tempArr = [], tempObj = {};
	//去重
	for(var i = 0, l = arr.length; i < l; i++){
		if(!tempObj[arr[i]]){
			tempObj[arr[i]] = 1;
			tempArr.push(arr[i]);
		}
	}
	//不区分大小写排序
	tempArr.sort(function(a,b){return compareStr(a.toLowerCase(),b.toLowerCase());});
    function compareStr(a,b){
		if(a === b) return 0;
		var i = 0;
		while(true){
			if(a.charAt(i) && b.charAt(i)){
				if(a.charCodeAt(i) === b.charCodeAt(i)){
					i++;
				}else{
					return a.charCodeAt(i) > b.charCodeAt(i) ? 1 : -1;
				}
			}else{
				if(a.charAt(i)){
					return 1;
				}else{
					return -1;
				}
			}
		}
	}
    
    document.getElementById('result').innerHTML = '共有'+tempArr.length+'个属性<br/>\''+tempArr.join('\',<br/>\'')+"'";
}