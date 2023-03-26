// get a form 
let form = document.getElementById('form')
let expenses = document.getElementById('expenses')
// add submit event on form
form.addEventListener('submit',onSubmit)
expenses.addEventListener('click',deleteExpense)
expenses.addEventListener('click',editExpense)

let count = 0 ;
// call fun when submit form 
function onSubmit(e){
    e.preventDefault();
    // find value from inputfield and attache in record 
   let amount = document.getElementById('amount').value
   let desc = document.getElementById('description').value
   let category = document.getElementById('exptype').value
   
   // create li element and insert all user value 
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(`${amount}-${category}-${desc}`))
    // create edit and delete button 
    let delBtn = document.createElement('button')
    let editBtn = document.createElement('button')
     delBtn.appendChild(document.createTextNode('Delete Expense'))
     editBtn.appendChild(document.createTextNode('Edit Expense'))
     
     // set attribute of button 
      delBtn.setAttribute('class','delbtn float-right mr-1')
      delBtn.setAttribute('id','')
      editBtn.setAttribute('class','edit float-right mb-1')
      editBtn.setAttribute('id','')
     // insert into li del and edit button
      li.appendChild(editBtn)
      li.appendChild(delBtn)
    // li insert in page 
    let ul = document.getElementById('expenses')
    if(amount && desc && category){
    ul.appendChild(li)
    count++
    }

    let obj = {amount,category,desc}
    localStorage.setItem(`${amount}`,JSON.stringify(obj))
     document.getElementById('amount').value =''
     document.getElementById('description').value =''
     document.getElementById('exptype').value =''
    
}

function deleteExpense(e){
    e.preventDefault();
    if(e.target.getAttribute('class') == 'delbtn float-right mr-1')
    {
      let current = e.target.parentElement;
      let key = current.innerText.trim('').split('-')[0]
      console.log(key)
       current.remove()
       localStorage.removeItem(key)
    }
}

function editExpense(e){
    e.preventDefault();
    if(e.target.getAttribute('class') == 'edit float-right mb-1')
    {
        let current = e.target.parentElement;
        let key = current.innerText.trim('').split('-')[0]
        console.log(key)
       let data = JSON.parse(localStorage.getItem(key))
       console.log(data)
         document.getElementById('amount').value = data.amount
         document.getElementById('description').value = data.desc
         document.getElementById('exptype').value = data.category
        current.remove()
        localStorage.removeItem(key)
    }
}

if(count == 0 ){
    console.log('inso=ide blank')
    for(let i=0;i<10;i++){
        let key = localStorage.key(i)
        if(!key)
        break;
        console.log(key)
       let data = JSON.parse(localStorage.getItem(key))
       console.log(data)

       // repeat hole process for print data from local storage
       // create li element and insert all user value 
    let li = document.createElement('li')
    if(data.amount && data.desc && data.category){
    li.appendChild(document.createTextNode(`${data.amount}-${data.category}-${data.desc}`))
    // create edit and delete button 
    let delBtn = document.createElement('button')
    let editBtn = document.createElement('button')
     delBtn.appendChild(document.createTextNode('Delete Expense'))
     editBtn.appendChild(document.createTextNode('Edit Expense'))
     
     // set attribute of button 
      delBtn.setAttribute('class','delbtn float-right mr-1')
      delBtn.setAttribute('id','')
      editBtn.setAttribute('class','edit float-right mb-1')
      editBtn.setAttribute('id','')
     // insert into li del and edit button
      li.appendChild(editBtn)
      li.appendChild(delBtn)
      console.log(li)
    // li insert in page 
    let ul = document.getElementById('expenses')
    ul.appendChild(li)
    console.log(ul)

    }
}
}