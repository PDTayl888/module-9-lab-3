Reflection Questions
How did you ensure unique keys for your list items?
    I used task.id for the keys because they are unique.


What considerations did you make when implementing the filtering functionality?
    I used a main array of tasks and filtered them into another dedicated array by destructuring and changing only the relevant items.

How did you handle state updates for task status changes?
    The status updates took place as the lists were mapped by comparing the new and old object status properties


What challenges did you face when implementing conditional rendering?
    I used a simple if block that checked if there were any tasks in state. If not it returned an appropriate message. 
    Otherwise the standard taskList return block was rendered.