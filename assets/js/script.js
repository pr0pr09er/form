// let select = document.getElementById("genres");
// option = new Option("Классика", "classic");
// option.selected = true;
// select.add(option);

// let area = null;
// let view = document.getElementById("view");
// view.onclick = function () {
//   editStart();
// };
// function editStart() {
//   area = document.createElement("textarea");
//   area.className = "edit";
//   area.value = view.innerHTML;
//   area.onkeydown = function (event) {
//     if (event.key == "Enter") {
//       this.blur();
//     }
//   };
//   area.onblur = function () {
//     editEnd();
//   };
//   view.replaceWith(area);
//   area.focus();
// }
// function editEnd() {
//   view.innerHTML = area.value;
//   area.replaceWith(view);
// }

// let table = document.getElementById('bagua-table');
// let editingTd;
// table.onclick = function(event) {
//   // 3 возможных цели
//   let target = event.target.closest('.edit-cancel,.edit-ok,td');
//   if (!table.contains(target)) return;
//   if (target.className == 'edit-cancel') {
//     finishTdEdit(editingTd.elem, false);
//   } else if (target.className == 'edit-ok') {
//     finishTdEdit(editingTd.elem, true);
//   } else if (target.nodeName == 'TD') {
//     if (editingTd) return; // уже редактируется
//     makeTdEditable(target);
//   }
// };
// function makeTdEditable(td) {
//   editingTd = {
//     elem: td,
//     data: td.innerHTML
//   };
//   td.classList.add('edit-td'); // td в состоянии редактирования, CSS применятся к textarea внутри ячейки
//   let textArea = document.createElement('textarea');
//   textArea.style.width = td.clientWidth + 'px';
//   textArea.style.height = td.clientHeight + 'px';
//   textArea.className = 'edit-area';
//   textArea.value = td.innerHTML;
//   td.innerHTML = '';
//   td.appendChild(textArea);
//   textArea.focus();
//   td.insertAdjacentHTML("beforeEnd",
//     '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
//   );
// }
// function finishTdEdit(td, isOk) {
//   if (isOk) {
//     td.innerHTML = td.firstChild.value;
//   } else {
//     td.innerHTML = editingTd.data;
//   }
//   td.classList.remove('edit-td');
//   editingTd = null;
// }

// let form = document.forms.calculator;
// form.money.oninput = calculate;
// form.months.onchange = calculate;
// form.interest.oninput = calculate;
// function calculate() {
//   let initial = +form.money.value;
//   if (!initial) return;
//   let interest = form.interest.value * 0.01;
//   if (!interest) return;
//   let years = form.months.value / 12;
//   if (!years) return;
//   let result = Math.round(initial * (1 + interest) ** years);
//   let height = (result / form.money.value) * 100 + "px";
//   document.getElementById("height-after").style.height = height;
//   document.getElementById("money-before").innerHTML = form.money.value;
//   document.getElementById("money-after").innerHTML = result;
// }
// calculate();
