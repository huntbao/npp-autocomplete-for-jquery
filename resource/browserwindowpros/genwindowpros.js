window.onload = function(){
    var arr = [], o = window, n;
    for(var p in o){
        if(isNaN(p) && p[0] !== '_'){
            try{
                var a = o[p];
                if(typeof o[p] == 'function'){
                    arr.push(p+'()');
                }else{
                    if(typeof o[p] === 'object'){
                        for(var pp in o[p]){
                            if(isNaN(pp) && pp[0] !== '_'){
                                if(typeof o[p][pp] == 'function'){
                                    arr.push(pp+'()');
                                }else{
                                    arr.push(pp);
                                }
                            }
                        }
                    }else if(isNaN(p) && p[0] !== '_'){
                        arr.push(p);
                    }
                }
            }catch(e){
                arr.push(p);
            }
        }
    }
    
    var nodes = [
        'html',
        'body',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'br',
        'hr',
        //block
        'b',
        'font',
        'i',
        'em',
        'big',
        'strong',
        'small',
        'sup',
        'sub',
        'bdo',
        'u',
        //block
        'pre',
        'code',
        'tt',
        'kbd',
        'var',
        'dfn',
        'samp',
        'xmp',
        //block
        'acronym',
        'abbr',
        'address',
        'blockquote',
        'center',
        'q',
        'cite',
        'ins',
        'del',
        's',
        'strike',
        //block
        'a',
        'link',
        //block
        'frame',
        'frameset',
        'noframes',
        'iframe',
        //block
        'form',
        'input',
        'textarea',
        'button',
        'select',
        'optgroup',
        'option',
        'label',
        'fieldset',
        'legend',
        'isindex',
        //block
        'ul',
        'ol',
        'li',
        'dir',
        'dl',
        'dt',
        'dd',
        'menu',
        //block
        'img',
        'map',
        'area',
        //block
        'table',
        'caption',
        'th',
        'tr',
        'td',
        'thead',
        'tbody',
        'tfoot',
        'col',
        'colgroup',
        //block
        'style',
        'div',
        'span',
        //block
        'head',
        'title',
        'meta',
        'base',
        'basefont',
        'script',
        'noscript',
        'applet',
        'object',
        'param'
    ]
    for(var i = 0, l = nodes.length; i < l; i++){
        var node = document.createElement(nodes[i]);
        for(var p in node){
            try{
                if(isNaN(p) && p[0] !== '_'){
                    if(typeof node[p] == 'function'){
                        arr.push(p+'()');
                    }else{
                        arr.push(p);
                    }
                }
            }catch(e){
                arr.push(p);
                console.log(p);
                console.log(nodes[i]);
            }
        }
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