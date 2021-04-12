fetch("http://localhost:3000/books")
.then(response=>response.json())
.then(data=>{
    console.log(data);
    if(data.length>0){
        var temp= "";
        data.forEach((u) => {
            temp +="<tr>";
            temp +="<td>"+u.isbn+"</td>";
            temp +="<td>"+u.title+"</td>";
            temp +="<td>"+u.author+"</td>";
            temp +="<td>"+u.pages+"</td>";
            temp +="<td>"+u.price+"</td>";
            temp +="<td>"+u.rating+"</td>";
            temp +="<td>"+u.tags+"</td>";
            temp +="<td>"+u.series+"</td>";
            temp +="<td>"+u.votes+"</td>";
            temp +="<td onclick='onDelete()'>"+ '<button class="delete">delete</button>'+"</td>";
            temp +="<td onclick='details()'>"+ '<a href="./bookDetails.html"><button class="details">Details</button></a>'+"</td></tr>";
        })

   document.getElementById("data").innerHTML=temp;
    }
})


const tableEl=document.querySelector("#data");
function onDelete(e){
    if(!e.target.classList.contains("delete")){
        return;
    }
    const btn=e.target;
    btn.closest("tr").remove();
}
tableEl.addEventListener("click",onDelete);


const searchFun= () =>{
    let filter=document.getElementById('myInput').value;

    let myTable=document.getElementById('tab');

    let tr=myTable.getElementsByTagName('tr');
    for(var i=0;i<tr.length;i++){
        let td=tr[i].getElementsByTagName('td')[2];
        if(td){
            let textvalue=td.textContent || td.innerHTML;
            if(textvalue.indexOf(filter)>-1)
            {
                tr[i].style.display="";
            }else{
                tr[i].style.display="none";
            }
        }
    }
}

