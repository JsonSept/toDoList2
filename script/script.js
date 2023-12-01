let array = []

let btn = document.getElementById('btn');
        let valueInput = document.getElementById('input');
        let output = document.getElementById('para');
        

        btn.addEventListener('click', add)
        

        //adding new tasks
        function add(aV) {
            aV.preventDefault();
            
            //checks if input empty
            if(valueInput.value == '') {
                return
            }

            // creating new elements
            let addTsk = document.createElement('li');
            addTsk.innerHTML = `
            <input type ="checkbox">
            <p>${valueInput.value }</p>
            <button type="button">Delete</button>
            `;
            
            
            
            output.appendChild(addTsk);
            valueInput.value = '';
            
            
            addTsk.querySelector('button').addEventListener('click' , rmvTask);
            add.querySelector('input').addEventListener('click' , toggleDne);
            localStorage()
            sort()
        }

        // delete function
        function rmvTask(aV) {
            output.removeChild(this.parentNode);
        }
        
        function toggleDne() {
            output.removeChild(this.parentNode).list.toggle('done');
        }
        

        function sort() {
            addTsk.sort(function(a, b){return a - b});
        }