document.addEventListener('DOMContentLoaded',function(event){
    var title = document.createElement('h1');
   var input = document.createElement('input');
   var button = document.createElement('button')
   var h2 = document.createElement('h2');
   var hr = document.createElement('hr');
   
   title.textContent = 'My Personal To Do List';
   
   button.textContent = 'submit';
   input.placeholder = 'Type List Item';
   h2.textContent = 'To Do:';
   
   var att = document.createAttribute("class");       
    att.value = "z-depth-1";                           
    button.setAttributeNode(att);
   
   input.style.width = '25rem';
   
   document.body.style.textAlign = 'center';
   button.style.display = 'block';
   button.style.marginLeft = 'auto';
   button.style.marginRight = 'auto';
   hr.style.width = '50rem';
   hr.style.backgroundColor = 'teal';
   title.style.color = 'teal';
   
   
   
   button.addEventListener('click',function(event){
       var li = document.createElement('li');
       li.textContent = input.value;
       li.style.textAlign = 'left';
       li.style.marginLeft = '25rem';
       li.style.marginRight = '25rem';
       li.style.fontSize = '24px';
       document.body.appendChild(li);
   });
   
   
   document.body.appendChild(title);
   document.body.appendChild(input);
   document.body.appendChild(button);
   document.body.appendChild(h2);
   document.body.appendChild(hr);
   
});