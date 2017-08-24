function contain(parent, target) {
	if(parent.contains) {
		return parent.contains(target);

	} else if (parent.compareDocumentPosition) {

		return !!parent.compareDocumentPosition(target) & 16;
	}
}
function hasClass(target, name) {
    
    
    var pattern = new RegExp("\\b"+name+"\\b"); 
    
    return pattern.test(target.className);
       
    
}

function removeClass(target, name) {
	
    var pattern = new RegExp("\\b"+name+"\\b");

    if(hasClass(target, name)) {
    	target.className = target.className.replace(pattern, '');
    }
}

function addClass(target, name) {

    if(!hasClass(target, name)) {
    	target.className += " "+name;
	}
}

function toggleClass(target, name) {
	
	hasClass(target, name) ? removeClass(target, name) : addClass(target, name);

}

function getByClass(oParent, name) {
    var elems = oParent.getElementsByTagName("*");
    var result = [];
    var check = false;
    var pattern = new RegExp("\\b"+name+"\\b"); 
    for (var i=0; i< elems.length; i++) {
        
        check = pattern.test(Elems[i].className);
       
        if (check === true) {
            result.push(elems[i]);
        }
    }
    return result;
}

function getStyle(obj, name) {

    if (obj.currentStyle) {
        return obj.currentStyle[name];

    } else if(window.getComputedStyle){

        
        return getComputedStyle(obj, null)[name];

    }
    alert("无法获取 "+obj+" 的样式");
}

function move(obj, Style, callback) {

	// 缓存样式列表
		var oBegin = {},
			oChange = {},
			begin,
			change,
			key;

		for (key in Style) {
				begin = parseFloat(getStyle(obj, key));
			if (key === 'opacity') {
				begin = begin * 100;
				
				// 未设置 opacity 在 IE Chrome 会导致 begin === auto
				if( isNaN(begin)) {
					obj.style.opacity = 1;
					obj.style.filter = 'alpha(opacity=100)';
					begin = 100;
				} else {
					obj.style.opacity = begin/100;
					obj.style.filter = 'alpha(opacity='+begin+')';
				}
			} 
			change = Style[key] - begin;

			if(change) {
				oChange[key] = change;
				oBegin[key] = begin;
			}
		}
		
	    clearInterval(obj.timer);
	    obj.timer = setInterval(function  () {

	    	var curr,
	    		speed,
	    		difference,
	    		attr,
	    		stop;
	    
	        stop = true;

	        for(attr in oChange)  {
	            
	            curr = oBegin[attr];
	           
	            speed = oChange[attr]/5;
	            speed = speed > 0? Math.ceil(speed) : Math.floor(speed);
	        	
	            curr = curr + speed;
	            if (attr === 'opacity'){
	                obj.style.filter = 'aplha(opacity:'+ curr + ')';
	                obj.style.opacity = curr/100;
	            } else {
	                obj.style[attr] = curr + "px";
	            }
	            
	            difference = Style[attr] - curr;

	            if(difference) {
	            	oChange[attr] = difference;
	            	oBegin[attr] = curr;
	            }
	            
	            if (Style[attr] != curr) {
	                stop = false;
	            }
	        }

	        if(stop) {
	            clearInterval(obj.timer);
	            if(callback) {
	                callback.call(obj);
	            }
	        }

	    }, 30);
}

function animation(obj) {
	// 动画的DOM元素对象
	var ele  = obj.ele,
	// 动画列表
		style = obj.style,
	// 持续时间
		duration = obj.duration || 700,
	// 回调函数
		callback = obj.callback || null;

	// 将DOM元素属性保存在变量上，减少动画中属性查询的性能消耗
	var oBegin = {},
		oChang = {};

		oChang.length = 0;

	var attr, 
		opacityValue, 
		begin, 
		change, 
		time, 
		nInterval;

	for (attr in style) {
		if (attr === 'opacity') {
			opacityValue = parseFloat(getStyle(ele, attr));

			// 当ele的opacity的没有css预设值，取值为undefined ,需要初始化
			if (!opacityValue) {

				ele.style.opacity = 1;
				ele.style.filter= 'alpha(opacity=100)';
				opacityValue = 1;
			} else {
				ele.style.opacity = opacityValue;
				ele.style.filter = 'alpha(opacity='+opacityValue*100+')';
			}
			begin = opacityValue*100;
			change = style[attr] - begin;

		} else {
			// 起始值
			begin = parseFloat(getStyle(ele, attr));
			
			// 总的改动值
			change = style[attr] - begin;
		}
		// 改动值不为〇，说明当前属性attr需要改动
		if (change) {
			oBegin[attr] = begin;
			oChang[attr] = change;
			oChang.length++;
		}
	}

	time = 0;
	if(document.all) {
		//IE
		 nInterval = 15;
	} else {
		nInterval = 13;
	}

	doMove();

	function doMove() {
		var current;

		clearTimeout(ele.timer);

		if(time < duration && oChang.length > 0) {
			time += nInterval;

			if(time/duration >= 1) {
				time = duration;
			} 

			for (attr in oBegin) {

				current = liner(time, oBegin[attr], oChang[attr], duration);

				if (attr === 'opacity') {
					ele.style[attr] = current/100;
					ele.style.filter = 'alpha(opacity=' +current+')';
				} else {
					ele.style[attr] = current + 'px';
				}
			}
			ele.timer = setTimeout(doMove, nInterval);

		} else {
			if (callback) {
				callback.call(ele);
				
			}
		}
	}

	function liner(t, b, c ,d) {
		return c*t/d + b;
	}
}

function addEvent(ele, type, handler, bubb) {
	if (ele.addEventListener) {

		ele.addEventListener(type, handler, bubb || false);
	} else {
		ele.attachEvent.apply(ele, ["on"+type, handler]);
	}
}

function removeEvent(ele, type, handler, bubb) {
	if (ele.removeEventListener) {
		ele.removeEventListener(type, handler, bubb || false);
	} else {
		ele.deattachEvent.apply(ele, ["on"+type, handler]);
	}
}

// module.exports = {
// 	contain: contain,
// 	hasClass: hasClass,
// 	addClass: addClass,
// 	removeClass: removeClass,
// 	getStyle: getStyle,
// 	getByClass: getByClass,
// 	addEvent: addEvent,
// 	move: move

// };