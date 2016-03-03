/**
 * Tab 组件
 * @param {[type]} DOM     [容器DOM元素对象]
 * @param {[type]} options [description]
 */
function Tab(DOM, options) {
	this.element = DOM;
	
	this.init(options);
}

Tab.prototype = {

	// 默认配置
	default: {
		triggers: ".ui-tab-triggers", 			// 标签栏 的 CSS选择器
		content: ".ui-tab-content",				// 内容栏 的 CSS选择器
		triggerType: "mouseover",				// 事件类型
		activeIndex: 0,							// 当前索引值
		activeTriggerClass: "triggers-active",	// 当前标签栏添加的 className
		activeContentClass: "content-active",	// 当前内容栏添加的 className


		directionControl: false,				// 前后按钮功能 默认关闭

		// 前后按钮插入位置选择, 1为contanier, 2为trigger的父级, 其他默认在content的父级
		dirControl_parent: 3,					
		
		dir_pre: "ui-tab-pre",					// 为“向前”按钮添加 className
		dir_next: "ui-tab-next",				// 为“向后”按钮添加 className
		auto: false,							// 自动播放功能 默认关闭
		autoSpeed: 5000,						// 自动播放速度 默认5秒
		delay: 200,								// 鼠标离开后自动播放启动延迟时间 默认0.2秒


		// 切换功能函数  提供一个对象供调用
		// （非函数时 无效）
		// function({
		// 	index: index,			提供当前标签栏索引值index
		// 	count: count,			标签栏总数 count
		// 	triggers: triggers,		标签栏DOM数组集合 triggers
		// 	content: content		内容栏DOM数组集合 content
		// }) { body.........}
		// 
		onSwitch: null 							
	},

	// 初始化
	init: function(options) {
		var Default = this.default,
			key;

		// 配置的修改及初始化
		options = options || {};

		for ( key in Default) {
			options[key] = options[key] || Default[key];
		}

		// triggersType 格式检测
		if (options.triggersType != 'click') {
			options.triggersType = "mouseover";
		}

		// onSwitch 格式检测
		if (typeof options.onSwitch != 'function') {
			options.onSwitch = null;
		}

		// 设置tab
		this.setTab(options);

	},

	// 自动播放
	autoPlay: function(options) {
		var self = this,
			container = self.element,
			timeout = null;
			interval = null;

			function play(){
				options.activeIndex++;
				self.setActive(options);	
			}

			interval = setInterval(play, options.autoSpeed);

			// 鼠标移入 停止计时器
			addEvent(container, "mouseover", function(event) {
				clearTimeout(timeout);
				clearInterval(interval);
			});

			// 鼠标移出 延迟delay 重新启动计时器
			addEvent(container, "mouseout", function(event) {
				timeout = setTimeout(function(){
					interval = setInterval(play, options.autoSpeed);
				}, options.delay);
			});
		
	},
	
	// 切换效果
	setActive: function(options) {
		var container = this.element,
			triggers = container.querySelectorAll(options.triggers),
			content = container.querySelectorAll(options.content);

		var index = options.activeIndex,
			activeTrigger = options.activeTriggerClass,
			activeContent = options.activeContentClass,
			len = triggers.length,
			i;

		// 索引值溢出处理
		index = index > len-1 ? 0 : index;
		index = index < 0 ? len-1 : index;

		options.activeIndex = index;

		// default 默认功能
		// 移除所有元素的 activeClass
		for (i=0; i<len; i++) {
			removeClass(triggers[i], activeTrigger);
			removeClass(content[i], activeContent);
		}

		// 为当前索引对象添加 className
		addClass(triggers[index], activeTrigger);
		addClass(content[index], activeContent);


		// Customize function 自定义额外功能 
		if(options.onSwitch) {
			options.onSwitch.call(container, {
				index: index,
				count: len,
				triggers: triggers,
				content: content
			});
		
		} 

		
	},

	// 
	setTab: function(options) {
		
		var self = this;

		var container = self.element,
			triggers = container.querySelectorAll(options.triggers),
			content = container.querySelectorAll(options.content);

		var parent,
			pre = document.createElement("div"),
			next = document.createElement("div"),
			control_flag = options.directionControl;
			control_parent = options.dirControl_parent;
			
		var i,
			len = triggers.length;

		if (!container || !triggers || !content) {
				alert("DOM树参数不足！");
				return false;
		}


		if (len != content.length) {
			alert("标签数量与内容数量对不上");
			return false;
		}

		// 方向按钮控制功能开启
		if(control_flag) {
			// 按钮父级元素选择
			switch(control_parent) {
				case 1: 
					parent = container;
					break;
				case 2:
					parent = triggers[0].parentNode;
					break;
				default: 
					parent = content[0].parentNode;
			}

			// 设置按钮 className
			pre.className = options.dir_pre;
			next.className = options.dir_next;

			// 按钮插入DOM结构树
			parent.appendChild(pre);
			parent.appendChild(next);

		}

		for (i=0; i<len; i++) {
			triggers[i].index = i;
		}
		self.setActive(options);
		

		// 为标签元素 triggers 委托 options.triggerType 事件
		addEvent(container, options.triggerType, function(event) {
			var target, 
				index;

			event = event || window.event;
			target = event.target || event.srcElement;
			
			if (target.hasOwnProperty("index")) {
				index = target.index;
				if(options.activeIndex != index) {
					options.activeIndex = index;
					self.setActive(options);
				}
			} 
		});

		// 方向控制功能开启？
		if(control_flag) {
			// 委托按钮点击事件
			addEvent(container, "click", function(event) {
				var target, className;
				
				event = event || window.event;
				target = event.target || event.srcElement;

				className = target.className;
				if (className === pre.className ) {
					options.activeIndex--;
					self.setActive(options);
				}

				if( className === next.className) {
					options.activeIndex++;
					self.setActive(options);
				}
			});
		}

		// 自动播放功能开启
		options.auto ? self.autoPlay(options) : null;

	}
};