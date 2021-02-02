var timer = document.querySelector('.timer');

function timing() {
    var today  = new Date();

    timer.innerHTML = today.getHours() + ' : ' + today.getMinutes() + ' : ' + today.getSeconds();
}
 setInterval(timing, 1000);

//  working on the input text 

var pendingTask = document.querySelector('#taskWriting');
var pendingTime = document.querySelector('#timeWriting');
var addBtn = document.querySelector('.addBtn');
var taskList = document.querySelector('#taskList');
var task = document.querySelector('.task');
var taskList = document.querySelector('#taskList');
var taskEdit = document.querySelectorAll('.taskEdit');
var taskDelete = document.querySelectorAll('.taskDelete');

// var taskText = document.querySelectorAll('.taskText');
var time = document.querySelectorAll('.taskTime');

    addBtn.addEventListener('click', function(){ 
        var li = document.createElement('li');
        li.classList.add('task');
    
        var tasktime = document.createElement('div');
        tasktime.classList.add('taskTime');
        var text1 = document.createTextNode(pendingTime.value);
        tasktime.appendChild(text1);
        li.appendChild(tasktime);
        console.log(tasktime.innerHTML);

        var p = document.createElement('p');    
        p.classList.add('taskText');
        var text2 = document.createTextNode(pendingTask.value);
        p.appendChild(text2);
        li.appendChild(p);

        var deleting = document.createElement('div');
        deleting.classList.add('taskDelete');
        var text4 = document.createTextNode('X');
        deleting.appendChild(text4);
        li.appendChild(deleting);

        if (pendingTask.value === '' || pendingTime.value === '') {
            alert('Enter both time and what to do !!! PLEASE');
        }else {
            taskList.appendChild(li);
        }

        //clears the input boxes
        pendingTask.value = '';
        pendingTime.value ='';
        
        //  deleting task
        taskDelete = document.querySelectorAll('.taskDelete');
        for (var i = 0; i < taskDelete.length; i++) {
            taskDelete[i].addEventListener('click', function(){
            this.parentNode.remove();
            })
        }

        // accomplishing text a task
        var taskText = document.querySelectorAll('.taskText');

        var listDone = document.querySelector('#listDone');
for (var j = 0; j < taskText.length; j++) {
    taskText[j].addEventListener('dblclick', function(){

        var li = document.createElement('li');
        li.classList.add('done');

        var p = document.createElement('p');
        p.classList.add('doneText');                 
        var text5 = document.createTextNode(this.innerHTML);
        p.appendChild(text5);
        li.appendChild(p);

        var div = document.createElement('div');
        div.classList.add('accomplished');
        var text6 = document.createTextNode('Accomplished');
        div.appendChild(text6);
        li.appendChild(div);

        listDone.appendChild(li);

        // removing task from taskList when accomplished
        this.parentNode.remove();

    })
}
 
})
