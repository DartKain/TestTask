    // таблица
var Customers = [
      {
        number: '1',
        customer: 'Иванова Ирина',
        manager: 'Петрова Полина',
        status: 'Выполнен',
        summ: 1500,
      }, {
        number: '2',
        customer: 'Сидорова Алла',
        manager: 'Петрова Полина',
        status: 'В обработке',
        summ: 11000,
      }, {
        number: '3',
        customer: 'Лукьянова Прасковья',
        manager: 'Смирнов Андрей',
        status: 'Отказ',
        summ: 15020,
      }, {
        number: '4',
        customer: 'Гришин Сидор',
        manager: 'Смирнов Андрей',
        status: 'Выполнен',
        summ: 4500,
       }];
var show = false;
angular.module('sortApp', [])
  .controller('mainController', function () {
    this.orders = Customers;
    this.showForm = show;
  }
  )
