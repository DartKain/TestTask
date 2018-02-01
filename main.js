 (function($) {
$.fn.sortAndChangePlugin = function () {
$("th").click(function (e) {
  let testTable = e.target.parentElement.parentElement.parentElement;
  sorttestTable(e.target.cellIndex, e.target.getAttribute('data-type'));
  function sorttestTable(colNum, type) {
  let tbody = testTable.getElementsByTagName('tbody')[0];
  let rowsArray = [].slice.call(tbody.rows);
  let compare;
  switch (type) {
    case 'number':
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      };
      break;
    case 'string':
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML;
      };
      break;
  }
  rowsArray.sort(compare);
  testTable.removeChild(tbody);
  for (let i = 0; i < rowsArray.length; i++) {
    tbody.appendChild(rowsArray[i]);
  }
  testTable.appendChild(tbody);
}
  
})

let formNumber = document.getElementById('test-form-Number');
let formCustomer = document.getElementById('test-form-Customer');
let formManager = document.getElementById('test-form-Manager');
let formStatus = document.getElementById('test-form-Status');
let formPrice = document.getElementById('test-form-Price');
let testForm = document.getElementById('testForm');
$("td").click(function (e) {
  let rowIndex = e.target.parentElement.rowIndex;
  let testBody = e.target.parentElement.parentElement;
  changePlaceholder(e.target.parentElement.rowIndex);


function changePlaceholder(rowI) {


  formNumber.value = testBody.rows[rowI - 1].cells[0].innerHTML;
  formCustomer.value = testBody.rows[rowI - 1].cells[1].innerHTML;
  formManager.value = testBody.rows[rowI - 1].cells[2].innerHTML;
  formStatus.value = testBody.rows[rowI - 1].cells[3].innerHTML;
  formPrice.value = testBody.rows[rowI - 1].cells[4].innerHTML;

}

  button.onclick = () => {
  testBody.rows[rowIndex - 1].cells[0].innerHTML = formNumber.value;
  testBody.rows[rowIndex - 1].cells[1].innerHTML = formCustomer.value;
  testBody.rows[rowIndex - 1].cells[2].innerHTML = formManager.value;
testBody.rows[rowIndex - 1].cells[3].innerHTML = formStatus.value;
testBody.rows[rowIndex - 1].cells[4].innerHTML = formPrice.value;
}
});

};
 })(jQuery);
$(onclick).sortAndChangePlugin();
