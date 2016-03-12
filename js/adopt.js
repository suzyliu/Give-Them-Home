$(document).ready(function(){
    
    
    getparm();
    makelist();
});

function getparm() 
    { 
        var url=location.href; 
//        alert( "Test"+url);
        var something = document.getElementById("wrap");
        alert(something.title);
//        console.log(something.title);
    }
function makelist(){
                                
    // Establish the array which acts as a data source for the list
    var listData = [ 'Blue' ,3, 'Red' , 'White' , 'Green' , 'Black' , 'Orange',100];

   // Make a container element for the list - which is a <div>
   // You don't actually need this container to make it work
    var listContainer = document.createElement("div");
    // add it to the page
//    document.getElementsByTagName("div")[0].appendChild(listContainer);
    document.getElementById("list").appendChild(listContainer);
   // Make the list itself which is a <ul>
    var listElement = document.createElement("ul");
    // add it to the page
   listContainer.appendChild(listElement);

   // Set up a loop that goes through the items in listItems one at a time
   var numberOfListItems = listData.length;

   for( var i =  0 ; i < numberOfListItems ; ++i){
      // create a <li> for each one.
         var listItem = document.createElement("li");
       // add the item text
         listItem.innerHTML = listData[i];
         // add listItem to the listElement
         listElement.appendChild(listItem);
    }

}