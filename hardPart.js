//Не добавлял width, чтобы было схоже с картинкой вложенной в ТЗ(в ТЗ указан width, но при выходе готовой картинки width не меняется).
let paddingTop = "5px";
let paddingRight = "10px";
let paddingBottom = "15px";
let paddingLeft = "20px";
let button = document.getElementById("mainBtn");

//Создание дерева
let row1 = document.createElement("div");
row1.id = "row";
document.body.appendChild(row1);

let row2 = document.createElement("div");
row2.id = "row2";
document.body.appendChild(row2);

let row3 = document.createElement("div");
row3.id = "row3";
document.body.appendChild(row3);

let column1 = document.createElement("div");
column1.id = "column";
document.body.appendChild(column1);

let column2 = document.createElement("div");
column2.id = "column2";
document.body.appendChild(column2);


let firstImage = document.createElement("img");
    firstImage.setAttribute("src", "1.jpg");

let secondImage = document.createElement("img");
    secondImage.setAttribute("src", "2.jpg");

let thirdimage = document.createElement("img");
    thirdimage.setAttribute("src", "3.jpg");

let chetireimage = document.createElement("img");
    chetireimage.setAttribute("src", "4.jpg");

let fiveimage = document.createElement("img");
    fiveimage.setAttribute("src", "5.jpg");

let seximage = document.createElement("img");
    seximage.setAttribute("src", "6.jpg");

let sevenimage = document.createElement("img");
    sevenimage.setAttribute("src", "7.jpg");

let ROW = document.getElementById("row");
ROW.style.display = "flex";
ROW.style.flexDirection = "row";

let ROW1 = document.getElementById("row2");
ROW1.style.display = "flex";
ROW1.style.flexDirection = "row";

let ROW2 = document.getElementById("row3");
ROW2.style.display = "flex";
ROW2.style.flexDirection = "row";

let COLUMN1 = document.getElementById("column");
COLUMN1.style.display = "flex";
COLUMN1.style.flexDirection = "column";


let COLUMN2 = document.getElementById("column2");
COLUMN2.style.display = "flex";
COLUMN2.style.flexDirection = "column";


row1.appendChild(firstImage);
row1.appendChild(column1);
row1.appendChild(secondImage);

column1.appendChild(row2);
column1.appendChild(thirdimage);

row2.appendChild(chetireimage);
row2.appendChild(column2);

column2.appendChild(row3);
column2.appendChild(fiveimage);

row3.appendChild(seximage);
row3.appendChild(sevenimage);

let mainRowChilds = row1.children;

//Логика приложения

button.addEventListener("click", function(){
	drawStoryBoard(mainRowChilds, paddingTop, paddingRight, paddingBottom, paddingLeft);
});

function drawStoryBoard(mainRowChilds, paddingTop, paddingRight, paddingBottom, paddingLeft) {
	for (let i = 0; i < mainRowChilds.length; i++) {

		if (mainRowChilds[i].id == "column") {
			let childColumnChilds = mainRowChilds[i].children;

			for (let j = 0; j < childColumnChilds.length; j++) {

				if(childColumnChilds[j].id == "row2"){

					let secRowChilds = childColumnChilds[j].children;
						
						for (let k = 0; k < secRowChilds.length; k++) {	

							if (secRowChilds[k].tagName == 'IMG') {

								setElementPosition(secRowChilds[k], paddingTop, paddingRight, paddingBottom, paddingLeft);							
							}

							if (secRowChilds[k].id == "column2") {

								let secColumnChilds = secRowChilds[k].children;

								for (let p = 0; p < secColumnChilds.length; p++) {
									
									if (secColumnChilds[p].tagName == 'IMG') {

										setElementPosition(secColumnChilds[p], paddingTop, paddingRight, paddingBottom, paddingLeft);
									}

									if (secColumnChilds[p].id == "row3") {

										let thirdRowChilds = secColumnChilds[p].children;

										for (let m = 0; m < thirdRowChilds.length; m++) {

											setElementPosition(thirdRowChilds[m], paddingTop, paddingRight, paddingBottom, paddingLeft);	
										}
									}
								}
							}
						}							
				}

				if (childColumnChilds[j].tagName == 'IMG' && childColumnChilds[j].tagName != 'DIV') {

					setElementPosition(childColumnChilds[j], paddingTop, paddingRight, paddingBottom, paddingLeft);
				}							
			}
		}

		if (mainRowChilds[i].id != "column") {

			setElementPosition(mainRowChilds[i], paddingTop, paddingRight, paddingBottom, paddingLeft);
		}
	}
}

function setElementPosition(element, paddingTop, paddingRight, paddingBottom, paddingLeft) {
	element.style.paddingTop = paddingTop;
	element.style.paddingRight = paddingRight;
	element.style.paddingBottom = paddingBottom;
	element.style.paddingLeft = paddingLeft;
}