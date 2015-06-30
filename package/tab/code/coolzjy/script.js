var tab=(function(d){
	var currentTabIndex = 0,
		elementClass = "newtab", triggerClass = "triggers", contentClass = "contents",
		activeTabClass = "ui-tab-active", switchType = "click",
		tabs, contents;
	
	/**
	 * 初始化方法
	 * 用来初始化 Tabs
	 *
	 * @param {DOM Element} Tabs 的 DOM 容器
	 * @param {object} 初始化配置
	 * 
	 * 可选配置：
	 * element {string} Tabs 容器的类名 默认为 newtab
	 * triggers {string} Tabs 的类名 默认为 triggers
	 * contents {string} Tab 页的类名 默认为 contents
	 * activeIndex {int} 初始化后初始的 Tab 默认为 0
	 * activeTriggerClass {string} 激活的 Tab 标签的类名 默认为 ui-tab-active
	 * triggerType {string} 激活 Tab 的事件类型 默认为 click
	 * onSwitch {function} 切换 Tab 后的回调方法
	 */
	function init(pEle, pOption){
		var i, element, trigger, content;
		
		if(!pEle){
			throw new TypeError("init: need a DOM Element parameter");
		}
		if(typeof pOption !== "undefined" && typeof pOption !== "object"){
			throw new TypeError("init: only object parameter allowed!");
		}
		// 读取配置
		if(pOption){
			elementClass = pOption.element || elementClass;
			triggerClass = pOption.triggers || triggerClass;
			contentClass = pOption.contents || contentClass;
			currentTabIndex = pOption.activeIndex || currentTabIndex;
			activeTabClass = pOption.activeTriggerClass || activeTabClass;
			switchType = pOption.triggerType || switchType;
		}
		
		element = pEle;
		element.className = elementClass;
		
		tabs = element.querySelectorAll("span");
		contents = element.querySelectorAll("div");
		
		for(i = 0; i < tabs.length; i++){
			tabs[i].className = triggerClass;
			contents[i].className = contentClass;
		}
		
		// 设置初始 Tab
		tabs[currentTabIndex].className += " " + activeTabClass;
		contents[currentTabIndex].className += " ui-tab-current";
		
		// 绑定事件
		for(i = 0; i < tabs.length; i++){
			tabs[i].addEventListener(switchType, function(){
				var tabIndex = i;
				return function(){
					switchTab(tabIndex)
					if(pOption.onSwitch){
						pOption.onSwitch(tabIndex, tabs.length);
					}
				}
			}());
		}

	}
	
	// 切换 tab
	function switchTab(pTabIndex){
		if(pTabIndex === currentTabIndex) return;
		tabs[currentTabIndex].className = tabs[currentTabIndex].className
				.replace(new RegExp("\\s?" + activeTabClass), "");
		tabs[pTabIndex].className += " " + activeTabClass;
		contents[currentTabIndex].className = contents[currentTabIndex].className
				.replace(new RegExp("\\s?" + "ui-tab-current"), "");
		contents[pTabIndex].className += " " + "ui-tab-current";
		currentTabIndex = pTabIndex;
	}
	
	return init;
})(document);

tab(document.querySelector("#test"), {element:"tab",triggers:"tri",contents:"cont",
		activeIndex:1,activeTriggerClass:"ui-tab-active",triggerType:"click",
		onSwitch: function(i,c){alert(i + "/" + c + " is actived!")}});