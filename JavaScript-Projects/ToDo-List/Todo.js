/*To create a todo list initially we create an array and 
        initially we add todos by targetting the input element and input value 
        in that input value if we enter any value that should be stored in an array along with 
        that the entered text should be displayed by creating a html element on the page using dom
        */ 
            let todoArray = JSON.parse(localStorage.getItem("todos")) || [];

            function saveTodos(){
                localStorage.setItem("todos",JSON.stringify(todoArray));
            }
        
            function addTodo(){
            let inputElement = document.querySelector(".js-text");
            let inputValue = inputElement.value;
            todoArray.push({
                text: inputValue,
                complete: false
            });
            console.log(todoArray);
                saveTodos();
                displayTodos();
                inputElement.value = "";
            }

            function displayTodos(){
                
                
                let todoHtml = ""; //empty html element 
                for(let i = 0;i< todoArray.length;i++){
                    

                    let taskText =todoArray[i].text;
                        if(todoArray[i].complete){ //if it is true then it should be marked 
                            taskText = `<mark>${taskText}</mark>`
                        }
                    let buttonText = "Complete";

                    if (todoArray[i].complete) {
                        buttonText = "Completed";
                    }

                    todoHtml += `<span>${taskText}</span>
                    <button onclick="deleteTodo(${i})">Delete</button>
                    <button onclick="completeStatus(${i})">${buttonText}</button>
                        <br>
                    `;
                }
                document.querySelector(".js-output").innerHTML = todoHtml; //To print the value on the page use double tiks`;
            }
            //we can delete the task using index and display after deleting

            function deleteTodo(index){
                todoArray.splice(index,1); //index indicates the element at index and 1 represents the no of elements to be removed
                saveTodos();
                displayTodos(); 
                console.log(todoArray);//after deleting it should be displayed 
            }
            

            function completeStatus(index){
                todoArray[index].complete =!todoArray[index].complete ; //by including a toggle the value true changed to false and false changes to true 
                saveTodos();
                displayTodos();
                console.log(todoArray);
            }
            displayTodos();
