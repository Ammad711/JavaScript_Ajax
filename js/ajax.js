console.log("Ajax tutorial in one video");


let fetchbtn=document.getElementById('fetchBtn');
fetchbtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){

    // Instantiate an xhr object
    console.log('You have clicked the fetchBtn');
    const xhr=new XMLHttpRequest();
    console.log('ready state is', xhr.readyState);

    // open the object
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
    //document.writeln("hello world");
    // USE THIS FOR POST REQUEST     
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('Content-type','application/json');


    console.log('ready state is', xhr.readyState);

    xhr.onreadystatechange = function(){
        //console.log('ready state is ',xhr.readyState);

    }

    // What to do on progress (optional)
    xhr.onprogress = function(){
        console.log('On Progress');
        console.log('ready state is', xhr.readyState);
    }

    // What to do when response is ready 
    xhr.onload=function(){
        if(this.status===200){
            console.log(this.responseText);
            console.log('ready state is', xhr.readyState);
        }
        else 
        {
            console.error("Some error occured in error");
            console.log("Some error occured in log");
        }
       
    }

    // Send the request
    params='{"name":"test@123","salary":"123","age":"23"}'; 
    xhr.send(params);

    console.log("We are done!");

}

let popBtn=document.getElementById('popBtn');
popBtn.addEventListener('click',popHandler);

function popHandler(){
     // Instantiate an xhr object
     console.log('You have clicked the pop Handler');
     const xhr=new XMLHttpRequest();
     console.log('ready state is', xhr.readyState);
 
     // open the object
     xhr.open('GET','https://dummy.restapiexample.com/api/v1/employees',true);
     //document.writeln("hello world");
     console.log('ready state is', xhr.readyState);
 
     // What to do when response is ready 
     xhr.onload=function(){
         if(this.status===200){
            //  console.log(this.responseText);
            //  console.log('ready state is', xhr.readyState);
            let obj=JSON.parse(this.responseText);
            console.log(obj);
            let list=document.getElementById('list');
            str="";
            for (key in obj.data){
                //str +=`<li>${obj[key].employee_name}</li>`;
                str += `<li>${obj.data[key].employee_name}</li>`;
            }
            list.innerHTML=str;
         }
         else 
         {
             console.error("Some error occured in error");
             console.log("Some error occured in log");
         }
        
     }
 
     // Send the request
    //  params='{"name":"test@123","salary":"123","age":"23"}'; 
     xhr.send();
 
     console.log("We are done fetching employees!!!");
}

