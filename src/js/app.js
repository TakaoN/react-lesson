import '../css/style.scss';
import './hellowebpack';
import logo from '../img/logo.svg';

window.addEventListener('DOMContentLoaded',
	function(){
		let img = new Image();
		img.src = logo;
		document.body.appendChild(img);
	},false);
