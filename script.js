/* 
-----------------------------------------------------------------------------
* Просто калькулятор на JavaScript
---------------------------
*
* Автор скрипта: Grankin [mail.serzhant@yandex.ru]
* Дата: 12.06.15 {js}
*
-----------------------------------------------------------------------------
*/
calc.onclick = function() {
	var x = document.getElementById('one').value;
	var y = document.getElementById('two').value;
	var oper = document.getElementById('three').value;
		switch (oper) {
			case '/':
				var rez = +x / +y;
				oper = '/';
				break;
			case '-':
				var rez = +x - +y;
				oper = '-';
				break;
			case '+':
				var rez = +x + +y;
				oper = '+';
				break;
			case '*':
				var rez = +x * +y;
				oper = '*';
				break;
			default:
				var rez = +x + +y;
				oper = '+';
				break;
		}
		if (Number.isNaN(rez) != true ) {
			rezults.innerHTML = x +' '+ oper +' ' + y + ' = ' + rez; 
		}
		else
			rezults.innerHTML ='Произошла ошибка!';
}
equ.onclick = function() {
	var a = document.getElementById('A').value;
	var b = document.getElementById('B').value;
	var c = document.getElementById('C').value;
	if (Number.isNaN(a) != true && Number.isNaN(b) != true && Number.isNaN(c) != true) {
		var dis = Math.pow(+b,2)- 4* +a * +c;
		if (dis > 0 && a!=0 && b!=0) {
			var x1 = Math.round((- +b + Math.sqrt(dis))/2 * +a);
			var x2 = Math.round((- +b - Math.sqrt(dis))/2 * +a);
			rezults2.innerHTML = '<code>Решить уравнение: '+ a +'x<sup>2</sup> + '+ b + 'x + '+ c +' = 0 <br/>D = '+ b +'<sup>2</sup>-4&#215;'+ a + '&#215;'+ c + '='+ dis + '<br/>x<sub>1</sub>=' + x1 + '<br/>x<sub>2</sub>=' + x2 + '<br/>Ответ: '+ x1 +','+ x2 + '.</code>';
		} else if (dis < 0 && a!=0 && b!=0) {
			rezults2.innerHTML = 'Действительных корней нет, т.к. дискриминант равен '+ dis + '<br/><small>A в комплексном множетстве мы их искать не хотим.</small>';
		} else if (dis == 0 && a!=0 && b!=0) {
			var x = (-b)/2*a;
			rezults2.innerHTML = '<code>Решить уравнение: ' + a + 'x<sup>2</sup> + ' + b +'x + с = 0 <br/>D='+ b +'<sup>2</sup>- 4' + a +'&#215;' + c +'=' + dis + '<br/>x ='+ x +'<br/>Ответ: '+ x +'.</code>';

		} else {
			rezults2.innerHTML = 'Произошла ошибка!';
		}
	} else {
		rezults2.innerHTML = 'Произошла ошибка!';
	}
}
function toBIN(num) {
	var out = "", bit = 1;
	while( num >= bit ) {
		out = ( num & bit ? 1 : 0 ) + out;
		bit <<= 1;
	}
	return out || "0";
}
/*
 * Позаимствовал здеь http://pranet.ru/support/calculators/ip/
 */
function _checkIP(ip)
{
	var s = 0;
	var ipArray = ip.split(".");
	// проверяем каждую секцию ипа
	for (var i = 0; i < ipArray.length; i++)
	{
		// если это не число, возвратить ошибку
		if (isNaN(ipArray[i]) || ipArray[i] > 255 || ipArray[i] < 0 || ipArray[i].length == 0) 
			return false;
		s++; // увеличить кол-во секций
	}
	// если секций больше или меньше 4, возвратить ошибку
	if (s < 4 || s > 4)
		return false;
	return ip;
}
//--------------------------
//number of hosts = 2 ^ (32 - bitcount) - 2
//
//network class:
//0 - class A
//10 - Class B
//110 - Class C
//1110 - Class D
//11110 - Class E
//--------------------------
ipcalc.onclick = function() {
	var ip = document.getElementById('ip').value;
	if ( ip.length != 0 ) {
		if (_checkIP(ip) != false) {
			ip = toBIN(ip.substring(0,4));
			if (ip.substring(0,1)=="0") rezults3.innerHTML="Class A<br/>Маска: 255.0.0.0<br/>Стандартный класс";
			else if (ip.substring(0,2)=="10") rezults3.innerHTML="Class B<br/>Маска: 255.255.0.0<br/>Стандартный класс";
			else if (ip.substring(0,3)=="110") rezults3.innerHTML="Class C<br/>Маска: 255.255.255.0<br/>Стандартный класс";
			else if (ip.substring(0,4)=="1110") rezults3.innerHTML="Class D<br/>Маска: 224.0.0.0<br/>Многоадресатная рассылка";
			else if (ip.substring(0,5)=="11110") rezults3.innerHTML="Class E<br/>Экспериментальный класс";
			else rezults3.innerHTML="Class invalid";
		}
		else rezults3.innerHTML="Проверьте правильность ввода данных!";
	}

}
function view(n) {
	style = document.getElementById(n).style;
	if (style.display == 'none') {
		style.display = 'block';
	} else style.display = 'none';
}