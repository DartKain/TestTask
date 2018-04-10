    let data = [{
      number: 1,
      customer: "папрла"
    }];

    var app = angular.module('sortApp', [])
    app.controller('sortController', ['$http', function ($http) {
      var sort = this;

      sort.orders = data;
      sort.order = undefined;
      sort.openOrder = function (order){
        sort.order = order;
        console.log("123");
      };
 sort.cancel = function (){
   sort.order = undefined;
 };
      sort.add = function(){
        let order = {};
        sort.orders.push(order);
        sort.order = order;
      };
    }]);

