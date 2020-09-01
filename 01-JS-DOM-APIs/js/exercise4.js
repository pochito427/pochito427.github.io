const randomNumber = Math.floor(Math.random()*4+1);

//Reference by http://youmightnotneedjquery.com/
function fadeIn(el) {
	
  el.style.opacity = 0;

  let last = +new Date();
  let tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
    last = +new Date();
    el.style.visibility = "visible"; 
    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}

window.onload = function(){

	let hidden = document.getElementsByClassName("hidden");
	fadeIn(hidden[0]);

	if(randomNumber == 1){
		let s = document.createElement("section");
		let h = document.createElement("h1");
		let th = document.createTextNode("GROUP A");
		h.appendChild(th);
		s.appendChild(h);
		let list = document.createElement("ul");
		let item1 = document.createElement("li");
		let ti1 = document.createTextNode("U.S.A.");
		item1.appendChild(ti1);
		list.appendChild(item1);
		let item2 = document.createElement("li");
		let ti2 = document.createTextNode("COLOMBIA");
		item2.appendChild(ti2);
		list.appendChild(item2);
		let item3 = document.createElement("li");
		let ti3 = document.createTextNode("COSTA RICA");
		item3.appendChild(ti3);
		list.appendChild(item3);
		let item4 = document.createElement("li");
		let ti4 = document.createTextNode("PARAGUAY");
		item4.appendChild(ti4);
		list.appendChild(item4);
		s.appendChild(list);
		document.getElementById("container").appendChild(s);
	}
	if(randomNumber == 2){
		let s = document.createElement("section");
		let h = document.createElement("h1");
		let th = document.createTextNode("GROUP B");
		h.appendChild(th);
		s.appendChild(h);
		let list = document.createElement("ul");
		let item1 = document.createElement("li");
		let ti1 = document.createTextNode("BRAZIL");
		item1.appendChild(ti1);
		list.appendChild(item1);
		let item2 = document.createElement("li");
		let ti2 = document.createTextNode("ECUADOR");
		item2.appendChild(ti2);
		list.appendChild(item2);
		let item3 = document.createElement("li");
		let ti3 = document.createTextNode("HAITI");
		item3.appendChild(ti3);
		list.appendChild(item3);
		let item4 = document.createElement("li");
		let ti4 = document.createTextNode("PERU");
		item4.appendChild(ti4);
		list.appendChild(item4);
		s.appendChild(list);
		document.getElementById("container").appendChild(s);
	}
	if(randomNumber == 3){
		let s = document.createElement("section");
		let h = document.createElement("h1");
		let th = document.createTextNode("GROUP C");
		h.appendChild(th);
		s.appendChild(h);
		let list = document.createElement("ul");
		let item1 = document.createElement("li");
		let ti1 = document.createTextNode("MEXICO");
		item1.appendChild(ti1);
		list.appendChild(item1);
		let item2 = document.createElement("li");
		let ti2 = document.createTextNode("URUGUAY");
		item2.appendChild(ti2);
		list.appendChild(item2);
		let item3 = document.createElement("li");
		let ti3 = document.createTextNode("JAMAICA");
		item3.appendChild(ti3);
		list.appendChild(item3);
		let item4 = document.createElement("li");
		let ti4 = document.createTextNode("VENEZUELA");
		item4.appendChild(ti4);
		list.appendChild(item4);
		s.appendChild(list);
		document.getElementById("container").appendChild(s);
	}
 	if(randomNumber == 4){
 		let s = document.createElement("section");
		let h = document.createElement("h1");
		let th = document.createTextNode("GROUP D");
		h.appendChild(th);
		s.appendChild(h);
		let list = document.createElement("ul");
		let item1 = document.createElement("li");
		let ti1 = document.createTextNode("ARGENTINA");
		item1.appendChild(ti1);
		list.appendChild(item1);
		let item2 = document.createElement("li");
		let ti2 = document.createTextNode("CHILE");
		item2.appendChild(ti2);
		list.appendChild(item2);
		let item3 = document.createElement("li");
		let ti3 = document.createTextNode("PANAMA");
		item3.appendChild(ti3);
		list.appendChild(item3);
		let item4 = document.createElement("li");
		let ti4 = document.createTextNode("BOLIVIA");
		item4.appendChild(ti4);
		list.appendChild(item4);
		s.appendChild(list);
		document.getElementById("container").appendChild(s);
 	}


}

