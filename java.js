    
   
     const today=  new Date();
     const time=today.toLocaleTimeString('en-US',{
        timeStyle:'medium'  
     })
     console.log(time)
     const weekDay =today.toLocaleDateString('en-US',{
        weekday:'short'
     })
     const temp= weekDay+',';
     document.getElementById('day').innerHTML=temp
     const month =today.toLocaleDateString('en-US',{
        month: 'short'
     })
     
     const day  =today.toLocaleDateString('en-US',{
        day: '2-digit'
     })
     
     const year=today.toLocaleDateString('en-US',{
        year: 'numeric'  
     })
     const monthYear=month+' '+day+' '+year;
    document.getElementById('monthYear').innerHTML=monthYear
    

document.getElementById('background').addEventListener('click',function(){
    
   const bg='#'+ Math.floor(Math.random()*16777215).toString(16)
   
    document.body.style.backgroundColor=bg 
})
document.getElementById('discover-btn').addEventListener('click',function(event){
   
    event.preventDefault();
    window.location.href='./question.html'


})



const completeBtns=document.querySelectorAll('.buttons')
for(let i=0;i<completeBtns.length;i++){
    completeBtns[i].addEventListener('click',function(event){
    event.preventDefault();   
    const Task= document.getElementById('task').innerText
    const convertedTask=parseInt(Task)
    const update= document.getElementById('update').innerText
    const convertedUpdate=parseInt(update)
    const cards= completeBtns[i].parentNode.parentNode.parentNode;
    const title=cards.querySelector('.title')
    
        const today=  new Date();
         const time=today.toLocaleTimeString('en-US',{
            timeStyle:'medium'  
         })
       
         alert('Board updated Successfully')
         if(convertedTask>1){
            
               
               const sub=convertedTask-1;
               document.getElementById('task').innerText=sub;
               console.log(sub)
                const sum=convertedUpdate+1;
                document.getElementById('update').innerText=sum;
                console.log(sum)
                const newHistory=document.createElement('p')
                
                const text='You Have Complete The Task '+ title.innerText +' at '+time;
                console.log(text)
                newHistory.classList.add('background')
                newHistory.innerText=text
                console.log(newHistory)
                document.getElementById('history').appendChild(newHistory)
                completeBtns[i].disabled=true; 
            
         }
         else{
           
          alert('Congress!! You Have Completed All The Current Tasks.')
          completeBtns[i].disabled=true; 
         }

    })
}
   
document.getElementById('clear').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('history').innerText=' '
   
   

})

    



























