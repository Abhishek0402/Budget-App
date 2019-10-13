/*#######  MODULE 1. FOR DATA AND BUDGET CONTROLLING. ###### */
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




 /* ####### MODULE 2. FOR UI CONTROLLING ########### */
 var UIController = (function() {
      var DOMstrings = {
         inputType: '.add__type',
         inputDescription: '.add__description',
         inputValue: '.add__value',
         inputBtn: '.add__btn',
         incomeContainer: '.income__list',
         expensesContainer: '.expenses__list'
     };
    return {
        getInput: function() {
            return {
                type : document.querySelector(DOMstrings.inputType).value,  //will be either inc or exp
                description : document.querySelector(DOMstrings.inputDescription).value,
                value : parseFloat(document.querySelector(DOMstrings.inputValue).value) 
               };
         },
         addListItem: function(obj, type) {
            var html,newHtml; 
            //create HTML strings with place holder text
            if(type === 'inc'){
              element = DOMstrings.incomeContainer; 
              html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
             }
               else if(type === 'exp'){  
                  element = DOMstrings.expensesContainer;      
                  html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                }

           //Replace the placeholder text with some actual data
          newHtml = html.replace('%id%', obj.id);
          newHtml = newHtml.replace('%description%', obj.description);
          newHtml = newHtml.replace('%value%', obj.value);

            //Insert the HTML into the DOM // we are going to insert json html method
             document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
         },


         clearFields: function() {
             var fields,fieldsArr;

         fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue); //this line returns a list but there is a problem as of how can we use this list as a array , so overcome this next line is writtent

            //array from list also we know that array is a window or predefined object and we use its method
        fieldsArr = Array.prototype.slice.call(fields);  //list is converted to array and so now we can loop over the array

        //clear the html field
            fieldsArr.forEach(function(current, index, array) {
                  current.value = "";
            });
          fieldsArr[0].focus();
        },
        
        getDOMstrings: function(){
             return DOMstrings;
         }
    };

 })();




/* ####### MODULE 3. FOR CONNECTING MODULE 1 AND 2 AND ALSO CONTROLLING THE WHOLE APP. ########## */

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


var updateBudget = function() {
//1. calculate budget
 
//2. return the budget

//3. display the budget on the ui
      
};
   
//a function to use when button is clicked
 var ctrlAddItem = function() {
         var input,newItem;
        //1. get input data as the button is clicked or enter key is pressed .ie key press event
        input = UICtrl.getInput();
  
        if(input.description !== "" && !isNaN(input.value) && input.value > 0)
        {

       //2. add the input to budget controller
         newItem =  budgetCtrl.addItem(input.type, input.description, input.value);
       //3. add the items to the ui controller
         UICtrl.addListItem(newItem, input.type);
        //4. clear the html fields after submit
            UICtrl.clearFields();

        //5. calculate and update budget
         updateBudget();
      }

};

  return {
      init: function() {
          console.log('started');
       setupEventListeners();
      }
  }

 })(budgetController, UIController);


 controller.init();
