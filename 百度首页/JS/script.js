
window.onload = function(){
	//顶部导航栏部分开始
	//设置栏
	var setting = document.getElementsByClassName('setting')[0]
	var setA = setting.firstElementChild;
	var option = document.getElementsByClassName('option')[0];
	
	setA.onmouseenter = function(){
		option.style.display = 'block';
	}
	setA.onmouseleave = function(){
		option.style.display = 'none';
	}
	option.onmouseenter = function(){
		this.style.display = 'block';
	}
	option.onmouseleave = function(){
		this.style.display = 'none';
	}
	//设置栏结束
	//更多产品栏
	var more = document.getElementsByClassName('more')[0];
	var aside = document.getElementsByClassName('aside')[0];
	var list = aside.children[1].children;
	more.onmouseenter = function(){
		aside.style.display = 'block';
	}
	more.onmouseleave = function(){
		aside.style.display = 'none';
	}
	aside.onmouseenter = function(){
		this.style.display = 'block';
	}
	aside.onmouseleave = function(){
		this.style.display = 'none';
	}
	//更多产品栏结束
	//顶部导航栏部分结束
	
	//百度联想词
	var input = document.getElementsByTagName('input')[0];
	var inwrap = document.getElementsByClassName('inwrap')[0];
	
	input.oninput = function(){
		var script = document.createElement('script');
		script.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=' + input.value + '&cb=callback';
		document.body.appendChild(script);
		document.body.removeChild(script);
	}
	
	input.onkeyup = function(){
		var val = this.value;
		keywords.style.display = val == ''?'none':'block';
	}
	input.onfocus = function(){
		inwrap.style.border = '1px solid #4791ff';
	}
	input.onblur = function(){
		inwrap.style.border = '1px solid #b6b6b6';
	}
	//百度联想词结束
	
	//登陆按钮功能开始
	
	var login = document.getElementById("login");
	login.onclick = function(){
	//	黑色幕布
		var layyer = document.createElement('div');
		document.body.appendChild(layyer);
		layyer.classList.add('layyer');
	//	登陆界面外层div
		var wrapLogin = document.createElement('div');
		document.body.appendChild(wrapLogin);
		wrapLogin.classList.add('wrapLogin');
	//  内层包裹div，用来相对定位
		var wrapInner = document.createElement('div');
		wrapLogin.appendChild(wrapInner);
		wrapInner.classList.add('wrapInner');
	//	关闭按钮
		var close = document.createElement('div');
		wrapInner.appendChild(close);
		close.classList.add('close');
		close.innerHTML = '+';
	//	扫码登陆
		var slogan = document.createElement('div');
		wrapInner.appendChild(slogan);
		slogan.classList.add('slogan');
		var img_logo = document.createElement('img');
		img_logo.src = './images/bd_logo1.png';
		slogan.appendChild(img_logo);
		img_logo.classList.add('img_logo');
		var slogan_span = document.createElement('span');
		slogan.appendChild(slogan_span);
		slogan_span.innerHTML = '扫码登陆';
	//	二维码
		var passCode = document.createElement('div');
		wrapInner.appendChild(passCode);
		passCode.classList.add('passCode');
		var hideDiv = document.createElement('div');
		passCode.appendChild(hideDiv);
		hideDiv.classList.add('hideDiv');
		var img_code = document.createElement('img');
		img_code.src = './images/code.png';
		hideDiv.appendChild(img_code);
		img_code.classList.add('img_code');
		var img_hide = document.createElement('img');
		img_hide.src = './images/qrcodeLoginGuide.png';
		hideDiv.appendChild(img_hide);
		img_hide.classList.add('img_hide');
	//请使用百度app扫码登陆
		var p1 = document.createElement('p');
		wrapInner.appendChild(p1);
		p1.classList.add('p1');
		var ls = document.createElement('span');
		p1.appendChild(ls);
		ls.classList.add('ls');
		ls.innerHTML = '请使用';
		var rs = document.createElement('span');
		p1.appendChild(rs);
		rs.classList.add('rs');
		rs.innerHTML = '扫码登陆';
		var app = document.createElement('a');
		app.href = '#';
		p1.insertBefore(app,rs);
		app.classList.add('app');
		app.innerHTML = '百度app';
	//	安全 高效 便捷
		var ulElement = document.createElement('ul');
		wrapInner.appendChild(ulElement);
		ulElement.classList.add('ulElement');
		ulElement.innerHTML = '<li><span class="iconfont icon-webicon203"></span>安全</li>' + '<li><span class="iconfont icon-lightning"></span>高效</li>' + '<li><span class="iconfont icon-Group-"></span>便捷</li>';
	// 注册
		var register = document.createElement('div');
		wrapInner.appendChild(register);
		register.classList.add('register');
		var bl = document.createElement('div');
		register.appendChild(bl);
		bl.classList.add('bl');
		bl.innerHTML = '<a href="#">用户名登陆</a><span class='+'seg'+'></span><span class="iconfont icon-qq"></span><span class="iconfont icon-xinlang"></span>';
		
		var br = document.createElement('a');
		br.href = '#';
		register.appendChild(br);
		br.classList.add('br');
		br.innerHTML = '立即注册';
	//  拖拽区域
		var move = document.createElement('div');
		wrapInner.appendChild(move);
		move.classList.add('move');
		move.onmousedown = function(e){
			var ev = window.event || e;
			var left = wrapLogin.offsetLeft;
			var top = wrapLogin.offsetTop;
			var mx = ev.clientX;
			var my = ev.clientY;
			wrapLogin.onmousemove = function(e){
				var ev = window.event || e;
				var newmx = ev.clientX;
				var newmy = ev.clientY;
				var dx = newmx - mx;
				var dy = newmy - my;
				var newleft = left + dx;
				var newtop = top + dy;
				if (newtop >= 638) {
					newtop =  638;
				}
				if (newtop <= 212) {
					newtop =  212;
				}
				if (newleft <= 179) {
					newleft =  179;
				}
				if (newleft >= document.body.clientWidth - 177) {
					newleft =  document.body.clientWidth - 177;
				}
				wrapLogin.style.left = newleft +'px';
				wrapLogin.style.top = newtop +'px';
			}
		}
		move.onmouseup = function(){
			wrapLogin.onmousemove = null;
		}
	//关闭按钮
		close.onclick = function(){
			layyer.remove();
			wrapLogin.remove();
		}
	}
	
	//登陆按钮功能结束
}


var keywords = document.getElementsByClassName('keywords')[0];
//联想词功能回调函数
function callback(data){
//	console.log(data.s)
	var html = '';
	data.s.forEach((item) => {
		html += '<li><a href="https://www.baidu.com/s?wd=' + item + '">' + item + '</li>';
		keywords.innerHTML = html;
	})
}