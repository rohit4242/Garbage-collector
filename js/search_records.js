let searchbar = document.getElementById("SearchBar");
let searchBtn = document.getElementById("search");
let category = document.getElementById("CategorySelected");

let tbody = document.getElementById("tbody");

function SearchTable(Category){
    let filter = searchbar.value.toUpperCase();
    let tr = tbody.getElementsByTagName("tr");
    let found;

    for(let i=0 ;i < tr.length; i++){

        let td = tr[i].getElementsByClassName(Category);

        for(let j = 0; j < td.length; j++){
            if(td[j].innerHTML.toUpperCase().indexOf(filter) > -1){
                found = true;
            }
        }

        if(found){
            tr[i].style.display = "";
            found = false;
        }
        else{
            tr[i].style.display = "none";
        }
    }
}


function SearchTableByExactValues(Category){
    let filter = searchbar.value.toUpperCase();
    let tr = tbody.getElementsByTagName("tr");
    let found;

    for(let i=0;i<tr.length;i++){
        let td = tr[i].getElementsByClassName(Category);

        for(let j=0;j<td.length;j++){
            if(td[j].innerHTML.toUpperCase() == filter){
                found = true;
            }
        }

        if(found){
            tr[i].style.display = "";
            found = false;
        }
        else{
            tr[i].style.display="none";
        }
    }
}

searchBtn.onclick = function(){
    console.log("ok");
    if(searchbar.value ==""){
        SearchTable("numberField");

    }
    else if(category.value==1){
        SearchTableByExactValues("numberField");
    }
    else if(category.value==2){
        SearchTable("locationField");
    } 
    else if(category.value==3){
        SearchTable("floarField");
    } 
    else if(category.value==4){
        SearchTableByExactValues("dustbinField");
    }
    else if(category.value==5){
        SearchTable("statusField");
    }
}