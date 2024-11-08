let myBtn=document.getElementById("btn");
myBtn.addEventListener("click", () =>{

const userName=[{ fName: "ali" , lName:"ahmadi",age:32, city:"mashhad"}, { fName: "reza" , lName:"saeedi",age:22, city:"rasht"}]; 
for (let keys of userName){
   for(let key in keys)
   {
  document.write(key, " is equal : " , keys[key] ,); document.write("</br>");
   }
   document.write("</br>");
}
}
);
  
