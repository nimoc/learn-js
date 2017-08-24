(function(d){
	/**
	 * 初始化对话框
	 *
	 * @param {Object} 配置
	 *
	 * 可选配置：trigger {string} Dialog 的触发器（选择器形式）
	 *			zIndex {int} Dialog 的显示层级，即 css 的 z-index 属性
	 *			title {string} Dialog 的标题
	 *			content {string|Object} Dialog 的内容，允许文本 HTML元素或 jquery元素
	 *			effectShow effectHide {function} 弹出、关闭的特效，整个 dialog 对象
	 *					作为参数传入
	 */
	function init(pOptions){
		return (function(){
			var dialog = {}, // 要返回的对象
				effectShow, effectHide, trigger, onClose,
				dialogWrapper = d.createElement("div"), // 对话框
				dialogTitle = d.createElement("section"), // 标题
				dialogContent = d.createElement("section"), // 内容
				triggers, i;
			
			// 对话框
			dialogWrapper.className = "zv-dialog";
	
			// 标题
			dialogTitle.className = "zv-dialog-title";
			dialogTitle.innerHTML = "<h2></h2><div class=\"zv-dialog-close\">×</div>";
			
			// 内容
			dialogContent.className = "zv-dialog-content";;
			
			// 组合
			dialogWrapper.appendChild(dialogTitle);
			dialogWrapper.appendChild(dialogContent);
			d.body.appendChild(dialogWrapper);
			
			dialog.open = function(){
				// 没有定义显示特效
				if(typeof effectShow === "undefined"){
					dialogWrapper.style.display = "block";
				}
				// 定义了显示特效
				else if(typeof effectShow === "function"){
					effectShow(dialogWrapper);
				}
			};
			
			dialog.close = function(){
				// 没有定义关闭特效
				if(typeof effectHide === "undefined"){
					dialogWrapper.style.display = "none";
				}
				// 定义了关闭特效
				else if(typeof effectHide === "function"){
					effectHide(dialogWrapper);
				}
				if(typeof onClose !== "undefined"){
					onClose(dialogWrapper);
				}
			};
			
			// 关闭
			dialogTitle.querySelector(".zv-dialog-close").addEventListener("click",
					dialog.close)
			
			dialog.config = function(pOptions){
				
				// trigger
				if(typeof pOptions.trigger !== "undefined" &&
						typeof pOptions.trigger === "string"){
					// 解绑旧的 trigger
					if(trigger){
						triggers = d.querySelectorAll(trigger);
						for(i = 0; i < triggers.length; i++){
							triggers[i].removeEventListener("click", dialog.open);
						}
					}
					triggers = d.querySelectorAll(pOptions.trigger);
					for(i = 0; i < triggers.length; i++){
						triggers[i].addEventListener("click", dialog.open);
					}
					trigger = pOptions.trigger;
				}
				
				// zIndex
				if(typeof pOptions.zIndex !== "undefined" &&
						typeof pOptions.zIndex === "number"){
					dialogWrapper.style.zIndex = pOptions.zIndex;
				}
				
				// title
				if(typeof pOptions.title !== "undefined" &&
						typeof pOptions.title === "string"){
					dialogTitle.querySelector("h2").innerText = pOptions.title;
				}
				
				// content
				if(typeof pOptions.content !== "undefined"){
					// 清空
					dialogContent.innerHTML = "";
					// 文本及html字符串
					if(typeof pOptions.content === "string"){
						dialogContent.innerHTML = pOptions.content;
					}
					if(typeof pOptions.content === "object"){
						// HTMLElement
						if(pOptions.content instanceof HTMLElement){
							dialogContent.appendChild();
						}
						// jQuery Element
						if(pOptions.content instanceof jQuery){
							for(i = 0; i < pOptions.content.length; i++){
								dialogContent.appendChild(pOptions.content[i]);
							}
						}
					}
				}
				
				// showEffect & hideEffect
				effectShow = pOptions.effectShow;
				effectHide = pOptions.effectHide;
				
				// onclose
				onClose = pOptions.onClose;
				
			}
			dialog.config(pOptions);
			
			return dialog;
		})()
	}
	
	window.dialog = init;
})(document)