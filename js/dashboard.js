import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getDatabase, ref, set, update, onValue,remove } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyA640v37n2QhxSRZJcPpFnSQqGIvUaMEkM",
    authDomain: "test-d9a94.firebaseapp.com",
    projectId: "test-d9a94",
    storageBucket: "test-d9a94.appspot.com",
    messagingSenderId: "54078532257",
    appId: "1:54078532257:web:643ff5aec7f6b3f8831ee0",
    databaseURL: "https://test-d9a94-default-rtdb.firebaseio.com/"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let index = 0;
// let dustbin_list = [];

let tbody = document.getElementById('tbody');
function AddItemToTable(location, floar, status) {
    let trow = document.createElement("tr");
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');

    dustbin_list.push([location, floar, status]);

    td1.innerHTML = ++index;
    td2.innerHTML = location;
    td3.innerHTML = floar;
    td4.innerHTML = status;

    td1.classList +="numberField";
    td2.classList +="locationField";
    td3.classList +="floarField";
    td4.classList +="statusField"

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);

    let controlDiv = document.createElement("div");
    controlDiv.innerHTML = '<button type="button" class="btn btn-primary my-2" data-toggle="modal" data-target="#exampleModalCenter" onClick="FillTboxes(null)">Add New Record</button>'
    controlDiv.innerHTML += '<button type="button" class="btn btn-primary my-2 ml-2" data-toggle="modal" data-target="#exampleModalCenter" onClick="FillTboxes('+index+')">Edit Record</button>'

    trow.appendChild(controlDiv);
    tbody.appendChild(trow);
}

function AddAllItemToTable(Dustbin) {
    index = 0;
    tbody.innerHTML = "";

    Dustbin.forEach(element => {
        AddItemToTable(element.location, element.floar, element.status);
    });
}

function GetAllDataRealtime() {
    let dbref = ref(db, "records");
    onValue(dbref, (snapshot) => {

        let dustbin = [];
        snapshot.forEach((childSnapshot) => {
            dustbin.push(childSnapshot.val());
            // ...
        });
        AddAllItemToTable(dustbin);
        
    })
}

AddModebtn.addEventListener('click',function(){
    if(validation()==false){
        return false;
    }
    console.log('add button');
    const reference = ref(db, 'records/'+ModLocation.value);
    set(reference, {
      location: ModLocation.value,
      floar: ModFloar.value,
      status: ModStatus.value
    });
    alert('Your Record is Added');
    GetAllDataRealtime();
    $("#exampleModalCenter").modal('hide');
})

updateModbtn.addEventListener('click',function(){
    if(validation()==false){
        return false;
    }
    console.log('update button');
    const reference = ref(db, 'records/' +ModLocation.value);
    update(reference, {
      location: ModLocation.value,
      floar: ModFloar.value,
      status: ModStatus.value
    });
    alert('Your Record is Updated');
    GetAllDataRealtime();
    $("#exampleModalCenter").modal('hide');
})

deleteModbtn.addEventListener('click',function(){
    if(validation()==false){
        return false;
    }
    console.log('delete button');
    const reference = ref(db, 'records/' +ModLocation.value);
    remove(reference);
    alert('Your Record is Deleted');
    GetAllDataRealtime();
    $("#exampleModalCenter").modal('hide');

})


window.onload = GetAllDataRealtime();

function validation(){
    
    let ModLocation = document.getElementById('LocationMod');
    let ModFloar = document.getElementById('FloarMod');
    let ModStatus = document.getElementById('StatusMod');

    if(ModLocation.value =="" || ModFloar.value=="" || ModStatus.value==""){
        alert("Please Fill the all fields");
        return false;
    }
}