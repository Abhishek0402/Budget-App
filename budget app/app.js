//module1. for data and budget controlling.
var budgetController = (function() {
    
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val) {
        var newItem,ID;
         
        //id= lastid+1;
        //create  new id 
        if(data.allItems[type].length >0) {
            ID = data.allItems[type][data.allItems[type].length -1].id +1;  //create new id
                                //for the last element of array
        }
       else {
           ID = 0;   
       }

                                  
        //create new item based on 'inc' or 'exp' type
        if(type === 'exp') {
            newItem = new Expense(ID, des, val);
        } else if(type === 'inc'){
            newItem = new Income(ID, des, val);
        }
          
        //Push it into our data structure   
        data.allItems[type].push(newItem);

        //return new element
         return newItem;
        },
        testing: function(){
            console.log(data);
        }
    };
 })();



// module 2. for ui controlling
 var UIController = (function() {
   
     var DOMstrings = {
         inputType: '.add__type',
         inputDescription: '.add__description',
         inputValue: '.add__value',
         inputBtn: '.add__btn'
     };
    return {
        getInput: function() {
            return {
                type : document.querySelector(DOMstrings.inputType).value,  //will be either inc or exp
                description : document.querySelector(DOMstrings.inputDescription).value,
                value :  document.querySelector(DOMstrings.inputValue).value

            };
         },
         getDOMstrings: function(){
             return DOMstrings;
         }
    };

 })();




//module 3. for connecting module 1 and 2 and also controlling tha whole app.
 var controller = (function(budgetCtrl,UICtrl) {
     
    var setupEventListeners = function(){
         var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);  //work when button clicked
       //keyboard events 
       document.addEventListener('keypress', function(event) {  // keyprss events works when any key is clicked on the keyboard. event is any variable passed as a argument to event listener function 
           if(event.KeyCode === 13 || event.which === 13){   //which is used bcoz some browsers do not supporrt KeyCode value
              //ctrlAddItem function
              ctrlAddItem();
           }
       });
    };

   
//a function to use when button is clicked
 var ctrlAddItem = function() {
 var input,newItem;
 //1. get input data as the button is clicked or enter key is pressed .ie key press event
        input = UICtrl.getInput();
  
      //2. add the input to budget controller
         newItem =  budgetCtrl.addItem(input.type, input.description, input.value);
       //3. add the items to the ui controller

      //4. calculate budget

      //5. display the budget(changes on the ui)
      

    };

  return {
      init: function() {
          console.log('started');
       setupEventListeners();
      }
  }

 })(budgetController, UIController);


 controller.init();
