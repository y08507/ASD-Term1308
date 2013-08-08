/**
 * Created with JetBrains WebStorm.
 * User: Project31312
 * Date: 5/16/13
 * Time: 12:01 PM
 * To change this template use File | Settings | File Templates.
 * Reference js from previous courses
 * refactor functions using jquery
 */

$('#addProject').on('pageinit', function (){

    var radioSelection = function () {
        //noinspection JSUnresolvedVariable
        var globalizeStatus = $("#projectData").get(0).globalize;
        for (var i = 0; i < globalizeStatus.length; i++) {
            if (globalizeStatus[i].checked) {
                status = globalizeStatus[i].value;
            }
        }
    };

    var storeData = function (key) {
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

        var item = {};
        item.category = ["Category:", $('#category').val()];
        item.newProject = ["New Project or Idea:", $('#newProject').val()];
        item.newNote = ["New Note:", $('#newNote').val()];
        item.startDate = ["Start Date:", $('#startDate').val()];
        item.status = ["Globalize Status:", status];
console.log(item.category);

        //Save data to Local Storage: Use Stringify to convert our object to a string.
        //localStorage is a Key Value pair.

        localStorage.setItem(id, JSON.stringify(item));
        alert("Saving Data! Coming Soon.. Select Display Data Link & Edit Data Link!");
        //console.log(selectedBox);
    };


    $("#saveProjectData").on("click", function(){
        storeData();
    })

});



$('#addProject').on('pageinit', function (){


    function getData(){
        toggleControls("on");

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
        g('items').style.border = "block";
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
    }
}
});

/*var saveProjectData = $("#saveProjectData");
var storedProjectData;
storedProjectData = function () {
    var newStoredData;
    newStoredData = {'_id': $("#category").val().toLowerCase()};
    newStoredData.category = $("#category").val();
    newStoredData.newProject = $("#newProject").val();
    newStoredData.newNote = $("#newNote").val();
    newStoredData.startDate = $("#startDate").val();
    console.log(newStoredData);

};*/

