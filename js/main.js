/*
 * Author: Luis Camacho Jr.
 * Full Sail University
 * Course: ASD
 * Term: 1308
 * Project Week 1
 * Reference js from previous courses
 * refactor functions using jquery
 */

$('#pageOne').on('pageinit', function(){
    //code needed for home page goes here
    var submitDataForm = $("#submitDataForm");

});

$('#addItem').on('pageinit', function () {

});
/**
 * Created with JetBrains WebStorm.
 * User: Project31312
 * Date: 3/21/13
 * Time: 8:49 AM
 * To change this template use File | Settings | File Templates.
 */
/*   Author: Luis Camacho Jr.
 Full Sail University
 Course: MIU
 Term: 1302
 Project 4 Gold and Bronze: Feature, Search & Browse
 Implementation of jQuery Mobile and Aesthetic
 */


/*$('#pageOne').on('pageinit', function(){
 //code needed for home page goes here

 });
 */
/*var clientManagerStoredData = function(data){
 console.log(data);
 clientManagerStoredData(data)
 };*/


$('#addProject').on('pageinit', function () {
    var myForm = $('#projectData');
  //  var clientManagerErrors = $('#clientManagerErrors');


   /*myForm.validate({
        ignore:".ignore",

        invalidHandler: function (form, validator) {


            // As per video this is the code to create dialog for errors continue working on for project 4
             clientManagerErrors.click();
             var html = '';
             for(var key in validator.submitted){
             var label = $('label[for^="'+ key +'"]').not('[generated]');

             console.log(validator.submitted);
             var legend = label.closest('fieldset').find('.ui-controlgroup-label');
             var fieldName = legend.length ? legend.text() : label.text() : label.text();
             html += '<li>'+ fieldName +'</li>';
             };
             $("#errorDialog ul").html(html);
        },*/
        submitHandler: function (form) {
            var data = myForm.serializeArray();
            storeData(this.key);
            console.log(data);
        }






    });
    $('#errorDialog1').click(function (){
        //var ask = confirm("Are you sure you want to Reset Client Form?");
        //if(ask){
        //alert("Client Form Reset Complete!");
        location.reload();
        //}else{
        //alert("Client Form Reset Process Canceled.")
        //}
    });
    /* Working on advancing code and preparation for next course
     $('#clientManagerErrors1').click(function (){
     var ask = confirm("Are you sure you want to Exit Form?");
     if(ask){

     alert("Exiting Form Returning To Home Page!");
     location.replace("#pageOne");
     }else{
     alert("Client Form Exit Process Canceled.")
     }
     });*/




    //any other code needed for addItem page goes here
    //getElement by ID Function

    function g(e) {
        var theElement;
        theElement = document.getElementById(e);
        return theElement;
    }

    //Find value of selected radio button.

    function radioSelection() {
        //noinspection JSUnresolvedVariable
        var clientStatus = document.getElementById("clientManagerForm").client;
        for (var i = 0; i < clientStatus.length; i++) {
            if (clientStatus[i].checked) {
                status = clientStatus[i].value;
            }
        }
    }

    function checkSelection() {
        //noinspection JSUnresolvedVariable
        var checkBoxes = document.getElementById("clientManagerForm").caseType;
        var checkedBox = [];
        for (var i = 0; i < checkBoxes.length; i++) {
            if (checkBoxes[i].checked) {
                checkedBox.push(checkBoxes[i].value);
                selectedBox = checkedBox;
            }
        }
        console.log(checkedBox);
    }

    //Accessing and storing Declared Variables
    //localStorage is a Key Value pair.

    function storeData(key) {
        //key creation only if new item, then generate key.
        if (!key) {
            var id = Math.floor(Math.random() * 10000002);
            //retrieve all data form fields value and store in an object.
            //Object properties contain array with the form label and input value.
        } else {
            //Keep the same key value for editing contact item.
            //Key has been utilized throughout process. Key is from editSubmit event handler.
            //to validator function and then to function storeData.
            id = key;
        }
        radioSelection();
        checkSelection();
        var item = {};
        item.fname = ["First Name:", g('firstName').value];
        item.lname = ["Last Name:", g('lastName').value];
        item.ename = ["E-Mail Address:", g('email').value];
        item.pnumber = ["Phone Number:", g('phoneNumber').value];
        item.status = ["Client Status:", status];
        //item.type    = ["Case Type:", selectedBox];
        item.date = ["Consultation Date:", g('firstConsult').value];
        item.payment = ["Method of Payment:", g('payment').value];
        item.notes = ["Client Comments:", g('clientFeedback').value];
        //item.app     = ["Rate App:", g('ratingApp').value];
        //Save data to Local Storage: Use Stringify to convert our object to a string.
        //localStorage is a Key Value pair.
        //noinspection JSValidateTypes
        localStorage.setItem(id, JSON.stringify(item));
        alert("Saving Data! Coming Soon.. Select Display Data Link & Edit Data Link!");
        //console.log(selectedBox);
    }
    function getData(){
        //toggleControls("on");

        if (localStorage.length === 0) {
            alert("There is no Data in Local Storage. Test Data Being Loaded");
            //testData function utilizes json.js file to populate the form with Data.
            //For testing purposes.
            testData();
        }
        //Write Data from local storage to the browser.
        //toggleControls("on");
        var makeDiv = document.createElement('div');
        makeDiv.setAttribute("id", "items");
        var makeList = document.createElement('ul');
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
        //g('items').style.border = "block";
        for (var i = 0, len = localStorage.length; i < len; i++) {
            var makeli = document.createElement('li');
            var newLinksLi = document.createElement('li');
            makeList.appendChild(makeli);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            //convert the string from local storage value back to an object using JSON.parse()
            var obj;
            obj = JSON.parse(value);
            var makeSublist = document.createElement('ul');
            makeli.appendChild(makeSublist);
            clientStatus(obj.status[1], makeSublist);
            for (var n in obj) {
                var makeSubli = document.createElement('li');
                makeSublist.appendChild(makeSubli);
                //noinspection JSUnfilteredForInLoop
                makeSubli.innerHTML = obj[n][0] + " " + obj[n][1];
                makeSublist.appendChild(newLinksLi);
                //g('items').style.display = "block";
                console.log(key);
            }
            //Create our edit and delete buttons
            makeItemLinks(localStorage.key(i), newLinksLi);
            //Create horizontal rule to separate items in edit list
            var separate = document.createElement('hr');
            separate.setAttribute("id","editItemSeparator");
            makeSublist.appendChild(separate);
        }
    }
    //Get the image for the right client type
    function clientStatus(clientType,makeSublist){
        var imageLi = document.createElement('li');
        makeSublist.appendChild(imageLi);
        var newImg = document.createElement('img');
        newImg.setAttribute("src", "img/"+clientType+".png");
        imageLi.appendChild(newImg);
        console.log(clientType);
    }




});


//The functions below can go inside or outside the pageinit function for the page in which it is needed.

/*var autofillData = function (){

 };

 var getData = function(){

 };

 var storeData = function(data){

 };

 var	deleteItem = function (){

 };

 var clearLocal = function(){

 };
 */