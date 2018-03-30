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

    let show = false;

    var app = angular.module('sortApp', [])
    app.controller('mainController', function () {
      this.orders = Customers;
      this.showForm = show;
      this.editForm = function (index){
        this.showForm = true;
        console.log(index);
        let formNumber = document.getElementById('test-form-Number');
        let formCustomer = document.getElementById('test-form-Customer');
        let formManager = document.getElementById('test-form-Manager');
        let formStatus = document.getElementById('test-form-Status');
        let formPrice = document.getElementById('test-form-Price');
        let numValue = this.orders[index].number;
        let custValue = this.orders[index].customer;
        let manValue = this.orders[index].manager;
        let statValue = this.orders[index].status;
        let summValue = this.orders[index].summ;
        console.log(custValue);
        formNumber.value = numValue;
        formCustomer.value = custValue;
        formManager.value = manValue;
        formStatus.value = statValue;
        formPrice.value = summValue;

      };


    });
