var DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', function DemoController($scope) {
  $scope.dataGridOptions = {
    dataSource: employees,
    keyExpr: "ID",
    paging: {
      enabled: false
    },
    editing: {
      mode: "form",
      allowUpdating: true
    },
    columns: [
      {
        dataField: "Number",
        caption: "№",
        width: 50
            }, {
        dataField: "Customer",
        width: 250
      },     {
        dataField: "Manager",
        width: 250
      }, {
        dataField: "Status",
        width: 170

            }, {
        dataField: "Summ",
        dataType: "number",
        width: 100
            }
        ]
  };

});
