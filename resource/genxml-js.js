$(function(){
	var jq = [
        'odd',
        'even',
        'gt',
        'lt',
        'header',
        'animated',
        'only-child',
        'last-child',
        'first-child',
        'nth-child',
        'callback',
        'url',
        'get',
        'post',
        'dataType',
        'beforeSend',
        'success',
        'error',
        'GET',
        'POST',
        'JSON',
        'json',
        'click(function(){})',
        'jQuery'
        ],
        customJS = [
        'hideFocus',
        'function(){}',
        'for(var i = 0, l = arr.length; i < l; i++){}',
        'for(var p in obj){}',
        'console.log()',
        'var self = this',
        'init',
        'e.preventDefault();',
        'return false;',
        'return true;',
        'charset'
        ],
        resultCon = $('#result');
        
    var finalArr = firefox
                   .concat(chrome)
                   .concat(ie)
                   .concat(opera)
                   .concat(safari)
                   .concat(jspros)
                   .concat(jq)
                   .concat(customJS);
    //var finalArr = jq.concat(customJS);
    
    
    
       
	//遍历jQuery对象
	for(var p in jQuery){
        //过滤掉数字以及私有变量
        if(isNaN(p) && p[0] !== '_'){
            if(typeof jQuery[p] == 'function'){
                finalArr.push(p+'()');
            }else{
                finalArr.push(p);
            }
        }
	}
    
    for(var p in resultCon){
        //过滤掉数字以及私有变量
		if(isNaN(p) && p[0] !== '_'){
            if(typeof resultCon[p] == 'function'){
                finalArr.push(p+'()');
            }else{
                finalArr.push(p);
            }
        }
	}
    
    
    
	var tempArr = [], tempObj = {};
	//去重
	for(var i = 0, l = finalArr.length; i < l; i++){
		if(!tempObj[finalArr[i]]){
			tempObj[finalArr[i]] = 1;
			tempArr.push(finalArr[i]);
		}
	}
	//不区分大小写排序
	tempArr.sort(function(a,b){return compareStr(a.toLowerCase(),b.toLowerCase());});
    
	var rStr = '&lt;?xml version="1.0" encoding="Windows-1252" ?&gt;&lt;NotepadPlus&gt;&lt;AutoComplete&gt;';
	for(var i = 0, l = tempArr.length; i < l; i++){
		rStr += getKeyItem(tempArr[i])+'<br/>';
	}
	rStr += '&lt;/AutoComplete&gt;&lt;/NotepadPlus&gt;';
	resultCon.html(rStr);
    console.log('共有'+tempArr.length+'项');
	//get items
	function getKeyItem(p){
		return '&lt;KeyWord name="'+p.replace(/"/g,'&amp;quot;')+'" /&gt;';
	}
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
});