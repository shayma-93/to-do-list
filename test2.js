let input=document.getElementById("todoText");
let items=document.getElementById("list-items");


let counter=0;

function add(){

     if (input.value ==="") {
        alert ('please enter your task')
     }
     else  {
        let container=document.createElement("div");//div for items and delbtns
        container.style.display="flex"
        container.style.width="90%"
        
       

        let li=document.createElement("li");
        li.innerText=input.value; //create item and give it value

        li.id=`li_${counter}`; //give id to items
        container.id=`cont_${counter}`; //give id to div

        li.style.marginRight="10px"
        li.style.borderRadius = "12px"; //style li
        li.style.width="100%"
        
        let checkbox = document.createElement('input'); ///create checkbox
        checkbox.type = 'checkbox';
        checkbox.id=`check_${counter}`; //give id to checkbox

        checkbox.style.marginRight="5px";

            
        checkbox.addEventListener('change', function() {

         if (checkbox.checked) {
             li.style.textDecoration = 'line-through';

         } else {
             li.style.textDecoration = 'none';
         }
     });

       
      
    

        let editbtn=document.createElement("editbtn"); //create editbtn
        editbtn.innerText="edit";
        editbtn.style.backgroundColor = "#fcb9d8";
        editbtn.style.color = "#6e5596";
        editbtn.style.fontFamily='"Poppins", sans-serif';
        editbtn.style.padding = "10px 20px";
        editbtn.style.fontSize = "20px";
        editbtn.style.border = "none";
        editbtn.style.borderRadius = "12px";
        editbtn.style.cursor = "pointer";
        editbtn.style.height = "50px";
        editbtn.style.marginRight="10px";//styling

        let delbtn=document.createElement("delbtn");
        delbtn.innerText="delete"; //create deltbtn
        delbtn.style.backgroundColor = "#fcb9d8";
        delbtn.style.color = "#6e5596";
        delbtn.style.fontFamily='"Poppins", sans-serif';
        delbtn.style.padding = "10px 20px";
        delbtn.style.fontSize = "20px";
        delbtn.style.border = "none";
        delbtn.style.borderRadius = "12px";
        delbtn.style.cursor = "pointer";
        delbtn.style.height = "50px";//styling

        container.appendChild(checkbox);
        container.appendChild(li); //append li to container
        container.appendChild(editbtn);//append delete delbtn to container
        container.appendChild(delbtn);//append delete delbtn to container
        items.appendChild(container);//append siv container to itemlList


        editbtn.setAttribute("onclick",`edit('${li.id}')`) //set onclick event to edit function
        delbtn.setAttribute("onclick",`del('${container.id}')`) //set onclick event to delete function

   


        counter++;
        onclick=input.value="";
     } 

}
function del(parameter){
    let element=document.getElementById(parameter);//call element to be deleted by id
    element.remove();

}
/*
function save(toEdit_id){
   let toEdit = document.getElementById(toEdit_id);
   let li = document.createElement("li");
   li.innerText = toEdit.value;
   li.id = toEdit.id ;
   
   li.setAttribute("onclick",`edit('${li.id}')`);

   li.style.marginRight="10px";
   li.style.borderRadius = "12px"; //style li
   li.style.width="100%";

   toEdit.replaceWith(li);

}*/


function edit(item_id){
   let li = document.getElementById(item_id);
   let toEdit=document.createElement("input"); //create input field
   toEdit.id = li.id;
   toEdit.value = li.textContent; //put content to be edited in field

   
   toEdit.style.marginRight="10px";
   toEdit.style.borderRadius = "12px"; //style li
   toEdit.style.width="100%";
   
   
   document.addEventListener("keydown", function(event)
   {
      if(event.key==="Enter"){
         li.innerText = toEdit.value;
         li.id = toEdit.id ;
         toEdit.replaceWith(li);

        
      } //save edited text
   })

   li.replaceWith(toEdit);

}



