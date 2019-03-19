/////////////////////////////////////////////////////           Memory             /////////////////////////////////////////////////
var counterAddInputFieldsForAdd=0 ,counterDisplayYourActivity = 0;
var counterAddInputFieldsSearchProduct = 0;
var counter =-1;
var changePage = 0;
var contorMainBtn = 6;                 // 0 --Vegetable    // 1 -- Fruit  // 2 -- alchDrings  //3-Juice    //4-Backery    //5-Food
var ifRunCalculatorReceipt = 0;
var runBtnSecond = 1;
var btnNext=0;
var stepBack=0;
var number=0;
var valueResizeReceipt =0;
var numberReceipt =1;
var clickBtnReceipt,counterRowReceipt;
var moreOk = 0;
var indexFormatNumber = 0; //function formatNumber
var salesData = [];
var receipt = []; 
var historyReceipts=[]; // Store all receipts
var totalCashColected =0;
var valueReceipt= 0 ;
var product={                                                                                                    
    name:["Tomatoes-0","Cucumbers-0","Carrot-0", "Garlic-0", "Onion-0","Eggplants-0","Olive-0","Apples-1","Oranges-1","Bananas-1","Kiwi-1","Vodka-2","Wiskey-2","Beer-2","CocaCola-3","Fanta-3","Sprite-3","Lipton-3","Prigat-3","Bread-4","Buns-4","Croissants-4","Biscuits-4","Bagels-4","Ciabatta-4","Salami-5","Yoghurt-5","Cheese-5","Fish-5","Milk-5"],         
    type:["Vegetable","Fruit","AlchDrings","Juice","Backery","Food"],         
    price:[1, 1, 0.5, 1, 1.2, 0.8, 2, 1, 1, 2, 2.3, 4, 5.5, 2, 1.7, 1.6, 1.6, 1.7, 1.8, 0.8, 0.2, 0.5, 0.8, 0.4, 0.6, 2, 1, 2, 3, 1],
    stoc:[30, 25, 20, 10, 15, 15, 30, 15, 10, 10, 15, 30, 30, 40, 40, 40, 40, 40, 40, 50, 100, 50, 25, 30, 30, 40, 25, 30, 45, 20]
}


///////////////////////////////////////////////////////////////        Show Pages        ///////////////////////////////////////////////

//Show on display of the Sales place , after click Sales word
function sales(){  
  document.getElementById("textSales").classList.add("resizeTextH3");
  setTimeout(function(){document.getElementById("textSales").classList.remove("resizeTextH3")},300);
  document.getElementById("textSales").style.color = "black";
  document.getElementById("textStorage").style.color=" gray";
if (changePage !== 0){
    document.querySelector("img").remove();
    var img='<img id="imgHeader" src="png/calculator.png" width="25px" height="25px"/>';
    document.querySelector('header').insertAdjacentHTML("afterbegin",img);

    document.querySelector('.storage').remove();
    var html='<div class="sales"><div class="mainButtons">';
    html=html + '<input type="submit" value="Vegetables" id="vegetable" onclick="showButtons(0)"/>';
    html=html + '<input type="submit" value="Fruits" id="fruits" onclick="showButtons(1)"/>';
    html=html + '<input type="submit" value="Juice" id="juice" onclick="showButtons(3)" />';
    html=html + '<input type="submit" value="Alch.Drings" id="alchDrinks" onclick="showButtons(2)"/>';
    html=html + '<input type="submit" value="Backery" id="backery" onclick="showButtons(4)"/>';
    html=html + '<input type="submit" value="Food" id="food" onclick="showButtons(5)"/>';
    html=html + '</div> <div class="secondButtons">';
    html=html +  '</div><div class="calc">';
    html=html +  '<div class="displayScreen">';
    html=html +  "<div class='screen'>";
    html=html +  '<div class="hour"><p><span id="h">15</span>:<span id="m">15</span>:<span id="s">15</span></p></div>';  
    html=html +  '<div class="date"><p><span id="d">10</span>/<span id="mm">08</span>/<span id="y">2019</span></p></div><br/>';
    html=html +  '<div class="shopping"><p id="elemDisplay">Bread x 3</p> <br/>';
    html=html + ' <p id="elem2Display"> Total Value = 1 $ </p></div></div>';
    html=html +  '</div><input type="submit" value = "x" id="btnx" onclick="more()"/>';
    html=html +   '<input type="submit" value = "C" id ="btnC" onclick="stepsBack()" />'
    html=html +   '<input type="submit" value = "1" id="btn1" onclick="formatNumber(1)"/>';
    html=html +   '<input type="submit" value = "2" id="btn2" onclick="formatNumber(2)"/>';
    html=html +   '<input type="submit" value = "3" id="btn3" onclick="formatNumber(3)"/>';
    html=html +  '<input type="submit" value = "4" id="btn4"  onclick="formatNumber(4)"/>';
    html=html +  '<input type="submit" value = "5" id="btn5"  onclick="formatNumber(5)"/>';
    html=html +  '<input type="submit" value = "6" id="btn6"  onclick="formatNumber(6)"/>';
    html=html +   '<input type="submit" value = "7" id="btn7" onclick="formatNumber(7)"/>';
    html=html +   '<input type="submit" value = "8" id="btn8" onclick="formatNumber(8)"/>';
    html=html +   '<input type="submit" value = "9" id="btn9" onclick="formatNumber(9)"/>';
    html=html +  ' <input type="submit" value = "0" id="btn0" onclick="formatNumber(0)"/>';
    html=html +  '<input type="submit" value = "receipt" id="btnReceipt" onclick="makeReceipt()"/>';
    html=html +  ' <input type="submit" value ="next product" id="btnNext" onclick="next()"/> ';
    html=html +   '<div class="outputReceipts">   </div>';
    html=html +  '<div class="receipts">';
    html=html +  '</div></div></div>' ;
    document.querySelector('.main').insertAdjacentHTML('afterbegin',html);
    typeBtnSecond();
    changePage=0;

    document.querySelector(".mainButtons").classList.add('border');
   
  }
  
 
} 

// Show on the display the Storage place, after click Storage word
function storage(){
    document.getElementById("textStorage").classList.add("resizeTextH3");
    setTimeout(function(){document.getElementById("textStorage").classList.remove("resizeTextH3")},300);
    document.getElementById("textSales").style.color = "gray";
    document.getElementById("textStorage").style.color="black";
  
if (changePage === 0){
        document.querySelector("img").remove();
        var img='<img id="imgHeader" src="png/warehouse.png" width="25px" height="25px"/>';
        document.querySelector('header').insertAdjacentHTML("afterbegin",img);
        
        document.querySelector('.sales').remove();
        var html='<div class="storage">';
    html = html + '<div class="table"><div class="rowTable">';
    html = html + '<div class="RT displayRT"><h4>Product</h4></div>';
    html = html + '<div class="RT displayRT"><h4>Type</h4></div>';
    html = html + '<div class="RT displayRT"><h4>Price</h4></div>';
    html = html + '<div class="RT displayRT"><h4>Stock</h4></div>';
    html = html + '</div></div>';
    html = html + '<div class="form"><h4> Choose the option:</h4>';
    html = html + '<select id="action" name="action">';
    html = html + '<option  selected > ----Select----</opttion>';
    html = html + '<option >Add new product.</option>';
    html = html + '<option >Total value of the products.</option>';
    html = html + '<option >Total number of the products.</option>';
    html = html + '<option >Check a product .</option></select>';
    html = html + '<input type="submit" id="ok" value="OK" onclick="chooseOption()"/><br/>';  
    html = html + '<div class="screenTable">';
    html = html + '<div class="hourSt"><p><span id="h">15</span>:<span id="m">15</span>:<span id="s">15</span></p></div>';  
    html = html + '<div class="dateSt"><p><span id="d">10</span>/<span id="mm">08</span>/<span id="y">2019</span></p></div>';
    html = html + '<h4>Your Activity:</h4>';
    html = html + '</div></div></div> ';
        document.querySelector('.main').insertAdjacentHTML('afterbegin',html);
      }
      
     changePage=1;
     makeTable();
     if (salesData.length > 0) {
      updateSaleDataToStorage();
      displayYourActivity('You gave '+ (numberReceipt-1) + ' receipts.');
      var valueTotal = Math.round(totalCashColected*100)/100;
      displayYourActivity('You sold '+ valueTotal + ' $.');
     }
}

///////////////////////////////////////////////////////         Page Sales          ///////////////////////////////////////////////////////

//Add all Second Button and assign them with element of array product.name
function typeBtnSecond(){
  var html,newHtml;
  var l=product.name.length;
  var i,length;
  var name,ind;
    
   var itemRow = l/5;
  var itemRowRest = l%5;
  if (itemRow >= 1) {
    if (itemRowRest === 0) {
      document.querySelector('.secondButtons').style.height= (57* itemRow) + 'px';
     } else{
       itemRow++ ;
       document.querySelector('.secondButtons').style.height= (57*itemRow) + 'px';
     }
  } else{
    document.querySelector('.secondButtons').style.height = 57+"px";
  } 

   for(i=0;i<l;i++){
  length = product.name[i].length;
  ind = product.name[i].substr(length-1,length);
  name = product.name[i].substr(0,length-2);

  html = '<input type="submit" class="%class%" id="%name%" value="%name1%" name="secondBtns"/>'; ///>';
  newHtml = html.replace('%class%',product.type[ind]);
  newHtml = newHtml.replace('%name%',name);
  newHtml = newHtml.replace("%name1%",name);
  newHtml = newHtml.replace('%prod%',product.name[i]);  

  document.querySelector('.secondButtons').insertAdjacentHTML("beforeend",newHtml);
  document.getElementById(name).setAttribute('onclick',"chooseProduct('"+product.name[i]+"')");
  }
}

typeBtnSecond();

//Set green color to specify button, after click one button from main buttons
function showButtons(index){
    resetColorSecondButtons();
    contorMainBtn = index;
    document.querySelector(".mainButtons").classList.remove('border');
    document.querySelector(".secondButtons").classList.add('border');
    var array = document.getElementsByClassName(product.type[index]);
    for (var i=0;i<array.length;i++){
    array[i].style.background ='rgba(1, 146, 13, 0.726)';
   };
     
}

//Set red color to all Secound Button
function resetColorSecondButtons(){
  contorMainBtn = 6;
  var otherButtons= document.getElementsByName("secondBtns");
  for(var i=0;i<otherButtons.length;i++){
    otherButtons[i].style.background = 'rgba(201, 1, 1, 0.486)';
  }
}

//Show correct hour 
function showHourCorrect(){
 
  var fullDate = new Date();
  var hour = fullDate.getHours();
  var minute = fullDate.getMinutes();
  var second = fullDate.getSeconds();
  
  if (hour < 10){ hour = "0" + hour;}           
  if (minute < 10) {minute = "0" + minute;}
  if (second < 10) { second = "0" + second;}

 document.getElementById('h').innerHTML =  hour;
 document.getElementById('m').innerHTML =  minute;
 document.getElementById('s').innerHTML =  second;
  }

 
//Show correct date 
function showDateCorrect(){
  var fullDate = new Date();
  var date = fullDate.getDate();
  var month = fullDate.getMonth();
  var year = fullDate.getFullYear();
  month++;
  if (date < 10) {date = "0" + date;}
  if (month < 10) {month ="0" + month;}
  
  document.getElementById('d').innerHTML = date;
  document.getElementById('mm').innerHTML = month;
  document.getElementById('y').innerHTML = year;
}

//Set correct hour and displey on time
if (changePage === 0){
    setInterval(showHourCorrect,1000);
    setInterval(showDateCorrect,1000);
   }

//After Click on second buttons
function chooseProduct(prod){
  var indexElem;
  var receiptElem=[]; 
  var lenght =prod.length;
  var index = prod.substr(lenght-1,lenght);


  if ((contorMainBtn == index)&&(runBtnSecond===1)) { 
       resetColorSecondButtons();
    document.querySelector(".secondButtons").classList.remove('border');
    document.querySelector(".calc").classList.add('border');
    
    receiptElem.push(prod);
    
    runBtnSecond++;
    btnNext=1;
    stepBack=1;
  
  var nameElement = prod.substr(0,lenght-2);
  
  indexElem = product.name.findIndex(function(el){ return el == prod  });
    priceElem = product.price[indexElem];
       
    receiptElem.push(nameElement);
    receiptElem.push(priceElem);
    receiptElem.push(1);
    receipt.push(receiptElem);
    counter++;
       
    document.querySelector('#elemDisplay').remove();
     var html = '<p id="elemDisplay">' + nameElement +' x  1</p>';
   document.querySelector('.shopping').insertAdjacentHTML('afterbegin',html);
       }
   
};

// Btn "x"
function more(){
  if (runBtnSecond===2){
  moreOk++;
  number=0;
  indexFormatNumber=0;
  
  document.querySelector('#elemDisplay').remove();
  var html = '<p id="elemDisplay">' + receipt[counter][1] +' x  </p>';
  document.querySelector('.shopping').insertAdjacentHTML('afterbegin',html);
  }  
};
  
//Btn 0,1,2,3,4,5,6,7,8,9;
function formatNumber(nr){

  if (moreOk===1){
     indexFormatNumber++;
    if (indexFormatNumber<=2){
      number = number*10 + nr;
      } 
   
  
   document.querySelector('#elemDisplay').remove();
   var html = '<p id="elemDisplay">' + receipt[counter][1] +' x '+ number + '</p>';
   document.querySelector('.shopping').insertAdjacentHTML('afterbegin',html);
   
   receipt[counter][3]= number;
    } 
  };
  
  //Show number on display
function showDisplayData(){
  var valueR= Math.round(100*valueReceipt)/100;
  document.querySelector('#elemDisplay').remove();
  var html = '<p id="elemDisplay">' + receipt[counter][1] +' x '+ receipt[counter][3]+'</p>';
  document.querySelector('.shopping').insertAdjacentHTML('afterbegin',html);
  document.querySelector('#elem2Display').remove();
  html ='<p id="elem2Display"> Total value:'+ valueR + '$</p>';
  document.querySelector('.shopping').insertAdjacentHTML('beforeend',html);
}

//Btn 'next Product'
function next(){
  var value;
 if (btnNext===1){ 
 runBtnSecond=1;
 moreOk=0;
 value= Math.round(( receipt[counter][2]*receipt[counter][3])*100)/100;
 valueReceipt = valueReceipt + value ;
 
 document.querySelector(".mainButtons").classList.add('border');
 document.querySelector(".calc").classList.remove('border');
 
 showDisplayData();

 btnNext=0;
 }
}

//Btn C
function stepsBack(){
  if (stepBack ===1){
  runBtnSecond=1;
  stepBack=0;
  document.querySelector(".mainButtons").classList.add('border');
  nameElement="";
  priceElem = "0";
  moreOk =0;
  number=0;
  indexFormatNumber=0;
  receipt.pop();
  counter=counter-1;
      }
};


// After click Button Receipt
function makeReceipt(){
    
    clickBtnReceipt =0;
    valueResizeReceipt=10;
    var value,valueR,value2,value3,html;;
    var index = receipt.length;
    
    var fullDate = new Date();
    var hour = fullDate.getHours();
    var minute = fullDate.getMinutes();
    var date = fullDate.getDate();
    var month = fullDate.getMonth();
    var year = fullDate.getFullYear();
    month++;
    if (date < 10) {date = "0" + date;}
    if (month < 10) {month ="0" + month;}
    if (hour < 10){ hour = "0" + hour;}           
    if (minute < 10) {minute = "0" + minute;}
  
  if (clickBtnReceipt===0){

     
   //Update last valueResize if button next product is not press
   if (btnNext===1){
    value= Math.round(( receipt[counter][2]*receipt[counter][3])*100)/100;
    valueReceipt = valueReceipt + value ;
    showDisplayData();
        }

    clickBtnReceipt=1; //(after one click and this let only one click)
    for(var i=-2;i<index;i++){
        if (i<0){
          if (i<-1){
            valueResizeReceipt+=18;
         
            valueR = Math.round(valueReceipt*100)/100;
            html='<h6> Total value  --- '+valueR+' $</h6>';
            document.querySelector('.receipts').insertAdjacentHTML('beforeend',html);
            document.querySelector('.receipts').style.height= valueResizeReceipt+"px"; 
          }else{
               valueResizeReceipt+=18;
               html='<h6>'+hour+':'+minute+' ------ '+date+'/'+month+'/'+year+'</h6>';
               document.querySelector('.receipts').insertAdjacentHTML('beforeend',html);
               document.querySelector('.receipts').style.height= valueResizeReceipt+"px";
              
               html='<h6> Number receipt  ------ '+numberReceipt+' </h6>';
               document.querySelector('.receipts').insertAdjacentHTML('beforeend',html);
               document.querySelector('.receipts').style.height= valueResizeReceipt +"px";
          }
        }else{
           valueResizeReceipt+=14;
          value=Math.round((receipt[i][2]*receipt[i][3])*100)/100;
          value2=receipt[i][1];
          value3=receipt[i][3];
          document.querySelector('.receipts').style.height = valueResizeReceipt + "px";
          html='<h6>'+value2+' x '+value3+' -- '+value+' $</h6>';
          document.querySelector('.receipts').insertAdjacentHTML('afterbegin',html);
      }
  }
  valueResizeReceipt =valueResizeReceipt+34;
   html='<h6>---___Magazine___---</h6>';
   document.querySelector('.receipts').insertAdjacentHTML('afterbegin',html);
   document.querySelector('.receipts').style.padding.top='8px';
   document.querySelector('.receipts').style.height=valueResizeReceipt;

   html= '<div class="btnTakeReceipt" value ="Take Receipt" onclick="takeReceipt()">Take Receipt</div>';
   document.querySelector('.calc').insertAdjacentHTML('afterbegin',html);  
 
   //Put valueReceipt in receipt array and initialize valueReceipt with 0;
   receipt.push(valueReceipt);
   valueReceipt=0;
 }
}


//after click Take Receipt :delete current receipt, delete btn take receipt and memorize data in salesData array;
function takeReceipt(){
var  html='<div class="receipts"></div>';   
  document.querySelector('.receipts').remove();
  document.querySelector('.calc').insertAdjacentHTML('beforeend',html);
  document.querySelector('.receipts').style.height="10px";
  document.querySelector('.btnTakeReceipt').remove();
//Update number receipt in header:
document.querySelector('header >h4').remove();
html='<h4>Number receipt :'+numberReceipt+' </h4>';
document.querySelector('header').insertAdjacentHTML('afterbegin',html);

  salesData.push(receipt);

  receipt=[];
  numberReceipt++;
  counter =-1;
  runBtnSecond=1; 
 
  sales();

  //Show on green Display:
  document.querySelector('#elemDisplay').remove();
  html = '<p id="elemDisplay">Next Product!</p>';
  document.querySelector('.shopping').insertAdjacentHTML('afterbegin',html);
  document.querySelector('#elem2Display').remove();
  html ='<p id="elem2Display">Blue button!</p>';
  document.querySelector('.shopping').insertAdjacentHTML('beforeend',html);
}

//////////////////////////////////////////////////////////// Storage //////////////////////////////////////////////////////////////////////

//Make table 
function makeTable(){ 
    var html;
    var newHtml;
    var index;
    var leng;
    var lengt;
    var name;
    var id;

    html = '<div class="rowTable1" name="%id%">';
    html= html + '<div class="RT displayRT"><h4>%product%</h4></div>';
    html= html + '<div class="RT displayRT"><h4>%type%</h4></div>';
    html= html + '<div class="RT displayRT"><h4>%price%</h4></div>';
    html= html + '<div class="RT displayRT"><h4>%stock%</h4></div>';
    html= html + '</div>';

    leng = product.name.length;
    for (var i=0;i<leng;i++){
      id=i;
      lengt = product.name[i].length;
      index = product.name[i].substr(lengt-1,lengt);
      name = product.name[i].substr(0,lengt-2);

      newHtml = html.replace("%id%",id);
      newHtml = newHtml.replace('%product%',name);
      newHtml = newHtml.replace('%type%',product.type[index]);
      newHtml = newHtml.replace('%price%',product.price[i]);
      newHtml = newHtml.replace('%stock%',product.stoc[i]);

      document.querySelector('.table').insertAdjacentHTML('beforeend',newHtml);
    }
}

function updateTable(){
  //Delete Table
  var elements = document.querySelectorAll(".rowTable1");
   var leng = elements.length;
 for (var i=0;i<leng;i++){
   elements[i].remove();
 }
 makeTable();//Make again a new table with the new data
}

//Display your activity
function displayYourActivity(activity){
  counterDisplayYourActivity++;

 if (counterDisplayYourActivity >= 19){
   var h= (counterDisplayYourActivity-18)*3.5;
   
    document.querySelector('.screenTable').style.height=(74+h)+'%';
  }
  var html =" <h4>"+ activity +" </h4>";
  document.querySelector('.screenTable').insertAdjacentHTML('beforeend',html);
}
      
// The selected option , after button OK:
function chooseOption(){
  var optiune = document.getElementById('action').selectedIndex;
   switch (optiune){
      case 0: 
      break;
      case 1:
       deleteInputFieldsSearchProduct();
       addInputFieldsAddNewProduct();
       break;
      case 2:
      deleteInputFieldsSearchProduct();
      deleteInputFieldsAddNewProduct();
      totalValueWhichAreNow();
      break;
      case 3:
      deleteInputFieldsSearchProduct();
      deleteInputFieldsAddNewProduct();
      totalValueOfStock();
      break;
      case 4:
      addInputFieldsSearchProduct();
      deleteInputFieldsAddNewProduct();
      break;
  }
} 

//Case 1-Add
function addInputFieldsAddNewProduct(){
  counterAddInputFieldsForAdd = 1;
 var html =' <div class="add"> ';
 html = html + '<div class="in" id="prodInput" ><input type="text" placeholder="Product..." class="input"/></div> ';
 html = html + '<div class="in" id="typeInput"><input type="number" placeholder="Type..." class="input" min="1" max="6"/></div>';
 html = html + '<div class="in" id="priceInput"><input type="number" placeholder="Price..." class="input"/></div>';
 html = html + '<div class="in" id="stocInput"><input type="number" placeholder="Stock..." class="input"/></div>';
 html = html + '<input type="submit" value="Add" class="btnAdd" onclick="addNewProduct()"/>'
 html = html + '<div class="informationAddType">To correctly add the type you are using: "1" for Vegetable, "2" for Fruit, "3" for Alcoholical Drings , "4" for Juice ,"5" for Backery and "6" for Food . Thanks you!</div></div>'
 document.querySelector('.form').insertAdjacentHTML('beforeend',html);
};

//Case 4-Search
function addInputFieldsSearchProduct(){
  counterAddInputFieldsSearchProduct = 1;
  var html ='<input type="text" class="enterSearchData" placeholder="Add product name...">';
  html = html + '<input type="submit" class="searchProduct" value="Search" onclick="searchProduct()">';
  document.querySelector('.form').insertAdjacentHTML('beforeend',html);
}

//Case 1,2,3
function deleteInputFieldsSearchProduct(){
  if (counterAddInputFieldsSearchProduct !== 0){
  document.querySelector('.enterSearchData').remove();
  document.querySelector('.searchProduct').remove();
  }
}

//Case 2,3,4
function deleteInputFieldsAddNewProduct(){
  if (counterAddInputFieldsForAdd !==0){
  document.querySelector('.add').remove();
  counterAddInputFieldsForAdd = 0; 
 }
}

//After btn "Add"
function addNewProduct(){
  const input_produs= document.querySelector('#prodInput > input').value;
  const input_type= document.querySelector('#typeInput > input').value;
  const input_price= document.querySelector('#priceInput > input').value;
  const input_stoc= document.querySelector('#stocInput > input').value;
  
  //Verifity  input
  if(Math.abs(input_produs) !== NaN && Math.abs(input_type) !== 0 && Math.abs(input_price)!== 0 && Math.abs(input_stoc)!== 0 ){
   if ((input_type<7)&&(input_type>0)){
    var fields,fieldsArr;
    fields = document.querySelectorAll('#prodInput > input , #typeInput > input , #priceInput > input , #stocInput > input');
    fieldsArr = Array.prototype.slice.call(fields);
    fieldsArr.forEach(function(cur,i,arr){
        cur.value = "";
    });
    fields[0].focus();
    
    var name = input_produs;
    var type = input_type;
    var price = input_price;
    var stoc =input_stoc;
    memoryInputDataInProductObject(name,type,price,stoc);
  } else{alert('Hello! You did not add the correct type, please read the instructions that are a little down and change! Thank you! ')}
     }else{alert('Hello! Did not add something correctly, please check again! Thank you!')}
      
}

//Update Data
function memoryInputDataInProductObject(name,type,price,stock){
   var numeElem = [];
   numeElem.push(name);
   numeElem.push(type-1);
   var nameElem = numeElem.join("-");
   product.name.push(nameElem);
   product.price.push(price);
   product.stoc.push(stock);
   updateTable();
   var message="You added the "+name+" product.";
   displayYourActivity(message);
   };

  //Case 2
  function totalValueWhichAreNow(){
    var i,message;
    var valueTot=0;
    var l=product.price.length;
    for(i=0;i<l;i++){
        valueTot += (product.price[i]*product.stoc[i]);
  };
  message =" The total value is "+ valueTot + " $."
  displayYourActivity(message);
}
  
//Case 3
function totalValueOfStock(){
  var valTotStoc = product.stoc.reduce((a,c)=>{return a+c;},0);
  var message = 'There are '+ valTotStoc +' pieces.' ;
  displayYourActivity(message);
};

//Case 4
function searchProduct(){
  var search = document.querySelector('.enterSearchData').value;
  var indexSearch = product.name.findIndex(function(item){
        var leng = item.length;
        return  search ===item.substr(0,leng-2)});
       
  var l=product.name.length;
  var found = 0,leng,name;

if  (indexSearch === -1){
  displayYourActivity("This product is not founded.")
} else{
  for (var i=0;i<l;i++){
       leng = product.name[i].length;
       name = product.name[i].substr(0,leng-2);
       if (name === search){
           found++;
      }
  }
  if (found === 1){
  var message = search + ' exist and has price per pieces of ' + product.price[indexSearch] +' $';
  displayYourActivity(message);
  }  else { 
      message =   "There are " + found + ' '+ search; 
      displayYourActivity(message);
  }
} 
}

//Sync function - Sales <-> Storage
function updateSaleDataToStorage(){
 var leng = salesData.length;
 var leeng = product.name.length;
 
 for (var i=0;i<leng;i++){   // to scroll through the elements
     var lengt= salesData[i].length;
      historyReceipts.push(salesData[i]); 
    for (var j=0;j<lengt;j++){              // for each item
      if (j < lengt-1){
      for (var y=0; y<leeng;y++){
        if (salesData[i][j][0] === product.name[y]){
           product.stoc[y] = product.stoc[y]-salesData[i][j][3];
        }
      }
    }else {totalCashColected += salesData[i][j]}
   }
 }
 salesData = [];
 receipt=[];
 updateTable();
}