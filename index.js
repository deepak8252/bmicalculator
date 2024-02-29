const form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const height=parseInt(document.querySelector("#height").value);
    const weight=parseInt(document.querySelector("#weight").value);
    const results=document.querySelector("#result");
    if(height==="" || height<0 || isNaN(height)){
        results.innerHTML=`please enter valid height `
    }
    if(weight==="" || weight<0 || isNaN(weight)){
        results.innerHTML=`please enter valid weight `
    }
  else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    if(bmi<=18.6){
        results.innerHTML=`<span> Under Weight=${bmi} </span>`
    }
     else if(bmi<=24.6){
        results.innerHTML=`<span> Normal Range=${bmi} </span>`
    }
    else{
        results.innerHTML=`<span> Overweight=${bmi} </span>`
    }
    
   
  }
})