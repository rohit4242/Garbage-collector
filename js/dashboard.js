import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getDatabase, ref, set,update,onValue} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";


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


let no = 0;
let tbody = document.getElementById('tbody');
function AddItemToTable(location,floar,no_dustbin,status){
    let trow = document.createElement("tr");
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let td5 = document.createElement('td');

    td1.innerHTML = ++no;
    td2.innerHTML = location;
    td3.innerHTML = floar;
    td4.innerHTML = no_dustbin;
    td5.innerHTML = status;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);

    tbody.appendChild(trow);
}

function AddAllItemToTable(Dustbin){
    no = 0;
    tbody.innerHTML = "";

    Dustbin.forEach(element => {
        AddItemToTable(element.location,element.floar,element.no_dustbin,element.status);
    });
}

function GetAllDataRealtime(){
    let dbref = ref(db,"records");

    onValue(dbref, (snapshot) => {

        let dustbin = [];
        snapshot.forEach((childSnapshot) => {
            dustbin.push(childSnapshot.val());
          // ...
        });
        AddAllItemToTable(dustbin);
    })
}

window.onload = GetAllDataRealtime();