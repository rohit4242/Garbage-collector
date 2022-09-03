
let ModLocation = document.getElementById('LocationMod');
let ModFloar = document.getElementById('FloarMod');
let ModDustbin = document.getElementById('NoDustbinMod');
let ModStatus = document.getElementById('StatusMod');

let AddModebtn = document.getElementById('addModbtn');
let updateModbtn = document.getElementById('updateModbtn');
let deleteModbtn = document.getElementById('deleteModbtn');
let dustbin_list = [];

function FillTboxes(index)
{
    console.log(index);
    if (index == null) {
            ModLocation.value = "";
            ModFloar.value = "";
            ModDustbin.value = "";
            ModStatus.value = "";
            AddModebtn.style.display = 'inline-block';
            updateModbtn.style.display = 'none';
            deleteModbtn.style.display = 'none';

        }
        else {
            --index;
            ModLocation.value = dustbin_list[index][0];
            ModFloar.value = dustbin_list[index][1];
            ModDustbin.value = dustbin_list[index][2];
            ModStatus.value = dustbin_list[index][3];

            AddModebtn.style.display = 'none';
            updateModbtn.style.display = 'inline-block';
            deleteModbtn.style.display = 'inline-block';

        }
}
