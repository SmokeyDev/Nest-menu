import Printers from "./printers.js";

$(document).ready(function() {
	let printers = new Printers();
	let printerList = printers.getList();
	let currId = false;

	printerList.forEach(function(element) {
		let name = element.name;
		let id = name.replace(/\s/g, "_").toLowerCase();
		element.id = id;
		$("#printers").append(`<button class="printer-button" id="${id}">${name}</button>`);
	});
	
	$('.printer-button').on('click', function() {
		let id = $(this).attr('id');
		if (currId && currId == id) {
			return;
		}
		let menus = false;
		for (let item of printerList) {
			if (item.id === id) {
				menus = [
					{
						"name": item.name,
						"menu": item.menu
					}
				];
				currId = id;
				break;
			}
		}
		if (menus) {
			function generateMenu(list, rec) {
				let html = '<ol>';
				if (!rec) {
					html = '<ol>';
				}
				for (let item of list) {
					let text = item.title || item.name;
					if (item.value) {
						text += ` (Wartość: ${item.value})`;
					}
					if (item.menu) {
						let menuInner = generateMenu(item.menu, true);
						if (rec) {
							html += `<li class="expandable hidden"><span>${text}</span></li>`;
							html += menuInner;
						} else {
							html += `<li class="expandable"><span>${text}</span></li>`;
							html += menuInner;
						}
					} else {
						html += `<li><span>${text}</span></li>`;
					}
					html += '</li>';
				}
				html += '</ol>';
				return html;
			}
			
			let menu = generateMenu(menus, false);
			$("#menus").html(menu);
		
			$(".expandable").on("click", function() {
				$(this).toggleClass("active");
			});
		}
	});
});