(function () { // Same as document.addEventListener("DOMContentLoaded"...
'use strict';


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

//Buy List Controller

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {
    var buyList = this;

    buyList.items = ShoppingListCheckOffService.getItemsBuy();

    buyList.addItemBought = function($index) {

    ShoppingListCheckOffService.addItemBought($index);
    }

    buyList.checkempty = function(){



    return ShoppingListCheckOffService.checkempty(buyList.items);

    }


}

//Bought List Controller


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getItemsBought();

  boughtList.checkempty = function(){

  return ShoppingListCheckOffService.checkempty(boughtList.items);

  }

}



function ShoppingListCheckOffService() {

  var service = this;
  var List1 = [
  {
    name: "cookies",
    quantity: 10
  },
  {
    name: "cookies",
    quantity: 20
  },
  {
    name: "cookies",
    quantity: 50
  },
  {
    name: "cookies",
    quantity: 200
  }
  ];

  var List2 = [];

  service.buyList = List1;
  service.boughtList = List2;
  service.checkList = [];

  service.addItemBought = function ($index) {

    service.boughtList.push(service.buyList[$index]);

    service.buyList.splice($index,1);


  };

  service.getItemsBuy = function () {
    return service.buyList;
  };

  service.getItemsBought = function () {
    return service.boughtList;
  };

  service.checkempty = function (items) {
    return angular.equals([], items);
  };


}

})();
