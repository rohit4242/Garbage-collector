import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getDatabase, ref, onValue} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";


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

let root = document.querySelector(':root');
let main_div = document.getElementById('row');
let status_list = [];
function AddItemToTable(location,status) {
    let sub_div1 = document.createElement('div');
    let sub_div2 = document.createElement('div');
    let tital = document.createElement('p');
    sub_div1.classList = "sub_div";
    sub_div2.innerHTML = status;
    status_list.push([location,status]);
    // console.log(status_list);
    tital.innerText = location;
    sub_div2.classList ="box";
    tital.classList = "tital";
    sub_div1.appendChild(sub_div2);
    sub_div1.appendChild(tital);
    main_div.appendChild(sub_div1);
    // console.log(location);
    // console.log(root1.style);
    // console.log(root1);
    // var deg= rootStyles.getPropertyValue('--size');
    // console.log(deg); 
    // root.style.setProperty('--'+location,status);
    // let size = getComputedStyle(root).getPropertyValue('--size');
    // console.log(size);
    // root.style.setProperty('--size',status);
    // root1.style.setProperty('--'+location,status);
    // console.log(root.style.getPropertyValue('--'+location));
    // console.log(document.documentElement.style);
    // console.log(getComputedStyle(root))
}

function AddAllItemToTable(Dustbin) {
    main_div.innerHTML = "";

    Dustbin.forEach(element => {
        AddItemToTable(element.location, element.status);
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
        console.log("ok");
    })
}

window.onload = GetAllDataRealtime();
