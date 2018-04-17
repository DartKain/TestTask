
let data = [{
      id: 1,
      number: 1,
      customer: 'Иванова Ирина',
      manager: 'Петрова Полина',
      status: 'Выполнен',
      summ: 1500
      }, {
      id: 2,
      number: 2,
      customer: 'Сидорова Алла',
      manager: 'Петрова Полина',
      status: 'В обработке',
      summ: 11000
      }, {
      id: 3,
      number: 3,
      customer: 'Лукьянова Прасковья',
      manager: 'Смирнов Андрей',
      status: 'Отказ',
      summ: 15020
      }, {
      id: 4,
      number: 4,
      customer: 'Гришин Сидор',
      manager: 'Смирнов Андрей',
      status: 'Выполнен',
      summ: 4500
    }];

    let type = [ {sortCol: 'number'
                 }, {
                   sortCol: 'customer'
                 }, {
                   sortCol: 'manager'
                 }, {
                   sortCol: 'status'
                 }, {
                   sortCol: 'summ'
                 }]

    var app = angular.module('sortApp', [])
    app.controller('sortController', ['$http', function ($http) {
      var sort = this;

      sort.orders = data;
      sort.order = undefined;

      sort.colType = type;

      sort.sortType = 'number';

      sort.sortOrder = false;

      sort.openOrder = function (order) {
        sort.order = order;
        console.log("123");
      };

      sort.cancel = function () {
        sort.order = undefined;
      };

      sort.add = function () {
        let order = {};
        //sort.orders.push(order);
        sort.order = order;
      };

      sort.remove = function (order){
        let index = sort.orders.indexOf(order);
        if (index > -1) {
       sort.orders.splice(index, 1);
        }
        console.log(order);
      };
    }]);
