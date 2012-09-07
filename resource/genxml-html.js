!function(){
	//html tags refer:http://www.w3school.com.cn/tags/index.asp
	var htmlTags = [
        '!DOCTYPE',
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
        '!--...--',
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
    ],
    htmlAttributes = [
        //core attributes
        'class=""',
        'id=""',
        'style=""',
        'title=""',
        //language attributes
        'dir=""',
        'lang=""',
        'xml:lang=""',
        //keyboard attributes
        'accesskey=""',
        'tabindex=""',
        //event
        'onload=""',
        'onunload=""',
        'onchange=""',
        'onsubmit=""',
        'onreset=""',
        'onselect=""',
        'onblur=""',
        'onfocus=""',
        'onabort=""',
        'onkeydown=""',
        'onkeypress=""',
        'onkeyup=""',
        'onclick=""',
        'ondblclick=""',
        'onmousedown=""',
        'onmousemove=""',
        'onmouseout=""',
        'onmouseover=""',
        'onmouseup=""',
        'onmouseup=""',
        //
        'type=""',
        'name=""',
        'alt=""',
        //http://www.w3school.com.cn/xhtml/xhtml_syntax.asp
        'compact="compact"',
        'checked="checked"',
        'declare="declare"',
        'readonly="readonly"',
        'disabled="disabled"',
        'selected="selected"',
        'defer="defer"',
        'ismap="ismap"',
        'nohref="nohref"',
        'noshade="noshade"',
        'nowrap="nowrap"',
        'multiple="multiple"',
        'noresize="noresize"'
    ],
    html5Tags = [
        'article',
        'aside',
        'audio',
        'canvas',
        'command',
        'datalist',
        'details',
        'embed',
        'figcaption',
        'footer',
        'header',
        'hgroup',
        'keygen',
        'mark',
        'meter',
        'nav',
        'output',
        'progress',
        'rp',
        'rt',
        'ruby',
        'section',
        'source',
        'summary',
        'time',
        'video'
    ],
    html5Attributes = [
        'contenteditable=""',
        'contextmenu=""',
        'data-yourvalue=""',
        'draggable=""',
        'hidden=""',
        'item=""',
        'itemprop=""',
        'spellcheck=""',
        'subject=""',
        //events
        'onafterprint=""',
        'onbeforeprint=""',
        'onbeforeonload=""',
        'onerror=""',
        'onhaschange=""',
        'onmessage=""',
        'onoffline=""',
        'ononline=""',
        'onpagehide=""',
        'onpageshow=""',
        'onpopstate=""',
        'onredo=""',
        'onresize=""',
        'onstorage=""',
        'onundo=""',
        'onunload=""',
        'oncontextmenu=""',
        'onformchange=""',
        'onforminput=""',
        'oninput=""',
        'oninvalid=""',
        'ondrag=""',
        'ondragend=""',
        'ondragenter=""',
        'ondragleave=""',
        'ondragover=""',
        'ondragstart=""',
        'ondrop=""',
        'onmousewheel=""',
        'onscroll=""',
        'oncanplay=""',
        'oncanplaythrough=""',
        'ondurationchange=""',
        'onemptied=""',
        'onended=""',
        'onerror=""',
        'onloadeddata=""',
        'onloadedmetadata=""',
        'onloadstart=""',
        'onpause=""',
        'onplay=""',
        'onplaying=""',
        'onprogress=""',
        'onratechange=""',
        'onreadystatechange=""',
        'onseeked=""',
        'onseeking=""',
        'onstalled=""',
        'onsuspend=""',
        'ontimeupdate=""',
        'onvolumechange=""',
        'onwaiting=""'
    ],
    customHtml = [
        //html5 shortcut
        'audio autoplay="" controls="" loop="" preload="" src=""></audio>',
        'cavas width="" height=""></cavas>',
        'command checked="" disabled="" icon="url();" label="" radiogroup="" type=""></command>',
        'datalist><option value=""></option></datalist>',
        'details open=""></details>',
        'embed height="" width="" src="" type=""></embed>',
        'keygen autofocus="" challenge="" disabled="" form="" keytype="" name=""></keygen>',
        'meter high="" low="" max="" min="" optimum="" value=""></meter>',
        'output for="" form="" name=""></output>',
        'progress max="" value=""></progress>',
        'section cite=""></section>',
        'source media="" src="" type=""></source>',
        'time datetime=""></time>',
        'video autoplay="" controls="" height="" width="" loop="" preload="" src=""></video>',
        //others
        'javascript',
        'over',
        'clr',
        'hide',
        'mod-',
        'debug',
        'input name="" />',
        'input type="button" name="" />',
        'input type="text" name="" />',
        'input type="submit" name="" />',
        'input type="checkbox" name="" />',
        'input type="radio" name="" />',
        'input type="image" name="" />',
        'div class="" id=""></div>',
        'iframe class="" id="" name="" target=""></iframe>',
        'form class="" id="" name="" action="" target=""></form>',
        'style type="text/css"></style>',
        'link rel="stylesheet" href="" />',
        'label for=""></label>',
        'img src="" alt="" title="" />',
        'a href="" title=""></a>',
        'a href="" title="" target="_blank"></a>',
        'a href="" title="" target="_parent"></a>',
        'a href="" title="" target="_self"></a>',
        'a href="" title="" target="_top"></a>',
        'meta charset="utf-8" />',
        'meta charset="gb2312" />'
    ];
    
	var finalArr = htmlTags.concat(htmlAttributes).concat(html5Tags).concat(html5Attributes).concat(customHtml);
    
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
		rStr += '<br/>'+getKeyItem(tempArr[i]);
	}
	rStr += '<br/>'+'&lt;/AutoComplete&gt;&lt;/NotepadPlus&gt;';
	$('#result').html(rStr);
	//get items
	function getKeyItem(p){
		return '&lt;KeyWord name="'+p.replace(/&/g,'&amp;').replace(/"/g,'&amp;quot;').replace(/</g,'&amp;lt;').replace(/>/g,'&amp;gt;')+'" /&gt;';
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
}();