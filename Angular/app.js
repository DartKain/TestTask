    let data = [{
      number: 1,
        customer: 'Иванова Ирина',
        manager: 'Петрова Полина',
        status: 'Выполнен',
        summ: 1500
      }, {
        number: 2,
        customer: 'Сидорова Алла',
        manager: 'Петрова Полина',
        status: 'В обработке',
        summ: 11000
      }, {
        number: 3,
        customer: 'Лукьянова Прасковья',
        manager: 'Смирнов Андрей',
        status: 'Отказ',
        summ: 15020
      }, {
        number: 4,
        customer: 'Гришин Сидор',
        manager: 'Смирнов Андрей',
        status: 'Выполнен',
        summ: 4500
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

