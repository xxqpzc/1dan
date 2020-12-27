var storage = window.localStorage;
var data = storage.data;
var night = storage.night;
var bg = storage.bg;
var closealert = storage.closealert;
var li = $('.sidenav-btn');
var blockquote = $('.blockquote');

if (storage.data != undefined) {
	data = data.split(',');
	$('#state a img').attr('src', data[0]);
	$('.submitButton').css('background-color', data[1]);
	$('#inputText').attr('placeholder', data[2]);
	$('#form').attr('action', data[3]);
	$('#inputText').attr('name', data[4]);
	$('#Select').css('color', data[1]);
	$('.span').css('background-color', data[1]);
}

if (storage.night != undefined) {
	night = night.split(',');
	console.log(night);
	$('#main').css('background-color', night[0]);
	$('#menu').css('background-color', night[1]);
	document.getElementById("night").innerHTML = night[2];
	li.css('background-color', night[3]);
	li.css('color', night[4]);
	blockquote.css('color', night[5]);
}
if (storage.bg != undefined) {
	bg = bg.split(',');
	$('#main').css('background-image', bg[0]);
}
if (storage.closealert != undefined) {
	closealert = closealert.split(',');
	if (closealert[0] == '4.0.9') {
		$('#alert').remove();
	}
}

function rgb2hex(rgb) {
	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

	function hex(x) {
		return ("0" + parseInt(x).toString(16)).slice(-2);
	}
	return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
$(function() {
	var bookmark = {
		data: [{
			name: '今日热榜',
			link: 'https://tophub.today/',
			icon: 'https://cdn.jsdelivr.net/gh/konghuaiqing/search4.0-cdn@latest/img/headline.png',
		}, {
			name: '知乎',
			link: 'https://www.zhihu.com/',
			icon: 'https://cdn.jsdelivr.net/gh/konghuaiqing/search4.0-cdn@latest/img/zhihulogo.png',
		}]
	}
	for (var i = 0; i < bookmark.data.length; i++) {
		var addList = '<li class="folder-item col-xs-3 col-sm-2"> <a href="' + bookmark.data[i].link +
			'"><div class="folder-item-box"><img class="folder-item-img" src="' + bookmark.data[i].icon + '" /><p>' + bookmark
			.data[i].name + '</p></div></a></li>'
		$('#folder ul').append(addList);
	}
})
$(function() {
	var search = {
		data: [{
			name: 'baidu',
			icon: 'https://cdn.jsdelivr.net/gh/konghuaiqing/search4.0-cdn@latest/img/baidu-xs.png',
			searchlink: 'https://www.baidu.com/s',
			searchname: 'wd',
			color: '#3245df',
			placeholder: '百度一下...'
		},{
			name: 'doge',
			icon: 'https://cdn.jsdelivr.net/gh/konghuaiqing/search4.0-cdn@latest/img/doge-xs.png',
			searchlink: 'https://www.dogedoge.com/results',
			searchname: 'q',
			color: '#ffca74',
			placeholder: '手动狗头.jpg'
		}]
	}
	for (var i = 0; i < search.data.length; i++) {
		var addList = '<li class="folder-item col-xs-3 col-sm-2"> <a href="#"> <div class="folder-item-box"> <img id="' +
			search.data[i].name + '" class="folder-item-img" src="' + search.data[i].icon + '" /> </div> </a> </li> '
		$('.nav ul').append(addList);
	}
	$(document).click(function(e) {
		var id = e.target.id;
		for (var i = 0; i < search.data.length; i++) {
			if (id == search.data[i].name) {
				document.getElementById("state").innerHTML = "<a href='folder://'><img style='width:300px;' src='img/" + search
					.data[i].name + ".png'></a>";
				$('#submitButton').css('background-color', search.data[i].color);
				$('#Select').css('color', search.data[i].color);
				$('#nav').css('display', 'none');
				$('#folder').css('display', 'block');
				document.getElementById("Select").innerHTML =
					"<hr>书签 <img src='https://cdn.jsdelivr.net/gh/konghuaiqing/search4.0-cdn@4.0/img/search-change.svg?v=2ae7ab8'>";
				$("#inputText").attr("placeholder", search.data[i].placeholder);
				$("#form").attr("action", search.data[i].searchlink);
				$("#inputText").attr("name", search.data[i].searchname);
				var searchPho = $('#state a img').attr("src");
				var color = rgb2hex($('.submitButton').css('background-color'));
				var searchL = $('#form').attr("action"); //searchlink
				var searchN = $('#inputText').attr("name"); //searchname
				var placeholder = $('#inputText').attr('placeholder');
				storage.data = [searchPho, color, placeholder, searchL, searchN]
				break;
			}
		}
	})
	$('#night').click(function() {
		if (rgb2hex($('#main').css('background-color')) == '#ffffff') {
			$('#main').css('background-color', '#2f2f33');
			$('#menu').css('background-color', '#5C5C5C');
			document.getElementById("night").innerHTML = "日间模式";
			li.css({
				"background-color": "#575757",
				"color": "#DBDBDB"
			});
			blockquote.css('color', '#DBDBDB');
		} else if (rgb2hex($('#main').css('background-color')) == '#2f2f33') {
			$('#main').css('background-color', '#ffffff');
			$('#menu').css('background-color', '#EDEDED');
			document.getElementById("night").innerHTML = "夜间模式";
			li.css({
				"background-color": "#E3E3E3",
				"color": "black"
			});
			blockquote.css('color', 'black');
		}
		var mainbg = rgb2hex($('#main').css('background-color'));
		var menubg = rgb2hex($('#menu').css('background-color'));
		var inner = document.getElementById("night").innerHTML;
		var libg = rgb2hex(li.css('background-color'));
		var lico = rgb2hex(li.css('color'));
		var blockquoteco = rgb2hex(blockquote.css('color'));
	})
	$('#closealert').click(function() {
		var version = '4.0.9';
		localStorage.closealert = [version];
	})
})
var width = $(document).width();
$('#bg').click(function() {
	width < 768 ? ($('#main').css('background-image') == 'none' ? ($('#main').css('background-image',
		'url(https://cdn.jsdelivr.net/gh/konghuaiqing/search4.0-cdn@4.0/mg/bg-xs.jpg)')) : ($('#main').css(
		'background-image', 'none'))) : $('#main').css('background-image') == 'none' ? ($('#main').css('background-image',
		'url(https://cdn.jsdelivr.net/gh/konghuaiqing/search4.0-cdn@4.0/img/bg.jpg)')) : ($('#main').css('background-image',
		'none'));
	var background = $('#main').css('background-image');
	storage.bg = [background];
})

function check() {
	var o = document.getElementById("inputText");
	var v = o.value;
	v = v.replace(/[ ]/g, "");
	if (v == '') {
		return false;
	}
}
var d = new Date();
var time = d.getHours();
if (time < 24) {
	document.getElementById("title").innerHTML = "Search | Good evening";
}
if (time < 18) {
	document.getElementById("title").innerHTML = "Search | Good afternoon";
}
if (time < 12) {
	document.getElementById("title").innerHTML = "Search | Good morning";
}
if (time < 5) {
	document.getElementById("title").innerHTML = "Search | Stay up late again";
}

function select() {
	$('#folder').css('display') == 'block' ? ($('#folder').css('display', 'none'), $('#nav').css('display', 'block'),
		document.getElementById("Select").innerHTML = "<hr>搜索引擎 <img src='img/search-change.svg?v=2ae7ab8'>") : ($('#nav').css(
			'display', 'none'), $('#folder').css('display', 'block'), document.getElementById("Select").innerHTML =
		"<hr>书签 <img src='img/search-change.svg?v=2ae7ab8'>");
}
(function(a, h, g, f, e, d, c, b) {
	b = function() {
		d = h.createElement(g);
		c = h.getElementsByTagName(g)[0];
		d.src = e;
		d.charset = "utf-8";
		d.async = 1;
		c.parentNode.insertBefore(d, c)
	};
	a["SeniverseWeatherWidgetObject"] = f;
	a[f] || (a[f] = function() {
		(a[f].q = a[f].q || []).push(arguments)
	});
	a[f].l = +new Date();
	if (a.attachEvent) {
		a.attachEvent("onload", b)
	} else {
		a.addEventListener("load", b, false)
	}
}(window, document, "script", "SeniverseWeatherWidget", "//cdn.sencdn.com/widget2/static/js/bundle.js?t=" + parseInt((
	new Date().getTime() / 100000000).toString(), 10)));
window.SeniverseWeatherWidget('show', {
	flavor: "bubble",
	location: "WX4FBXXFKE4F",
	geolocation: true,
	language: "auto",
	unit: "c",
	theme: "auto",
	token: "e14489a8-9a7e-477d-9c6c-b4b390175cca",
	hover: "enabled",
	container: "tp-weather-widget"
})
class searchHint {
	constructor() {
		this.search = inputText;
		this.list = list;
		this.body = document.body;
		this.init();
	};
	init() {
		this.watchInput();
	};
	watchInput() {
		this.search.onkeyup = () => {
			if (this.search.value.length == 0) {
				this.list.innerHTML = '';
				return;
			}
			const script = document.createElement('script');
			script.src = "https://www.baidu.com/su?wd=" + this.search.value + "&cb=jsonp.showMsg";
			this.body.appendChild(script);
			this.body.removeChild(script);
		}
	};
	showMsg(msg) {
		var href = $('#form').attr('action');
		var name = $('#inputText').attr('name');
		var v = $('#inputText').val();
		var str = '';
		for (var i = 0; i < msg.s.length; i++) {
			var sk = new Array();
			sk[i] = msg.s[i].replace(/\s*/g, '');
			str += '<a href=' + href + '?' + name + '=' + sk[i] + '><li><span>' + (i + 1) + '</span>' + msg.s[i] + '</li></a>';
		}
		this.list.innerHTML = str;
		if (str) {
			$('#searchlist').css("display", "block");
		}
		document.onkeydown = function(event) {
			if (event.keyCode == 8 && v.length == 1) {
				$('#searchlist').css("display", "none");
			}
		};
		$(document).click(function() {
			$('#searchlist').css("display", "none");
		});
	}
}
const jsonp = new searchHint();
