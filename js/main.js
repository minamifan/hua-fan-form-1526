// READY TO START CODING
let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
// Start with your function here
// (come up with the meaningful name).
let fn = document.getElementById("fullname");
let em = document.getElementById("email");
let mes = document.getElementById("message");
let sb = document.getElementById("subcribe-btn");
   
function formValidate(){
    let data ={};
    let errors =[];
    // | FULL NAME |
  
    // Check if fullname is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
    // End your conditional here.
    if (fn.value !== ""){
        data.fullname = fn.value
    }else{
        errors.push('Full name is missing!');
    }
    // | EMAIL | 
  
    // Check if email is not empty.
       // Check if email is valid.
       // If so:
          // Pass the collected value
          // to your object "data".
       // Otherwise:
          // Create a corresponding error-message
          // and add it to your array "errors".
       // End your nested conditional here.
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your outer conditional here.
    if (em.value !== ""){
       if (pattern.test (em.value)){
        data.email = em.value;
       }else{
        errors.push('invalid email!');
       }
    }else{
        errors.push('Email is missing')
    }

    
    // | MESSAGE | 

    // Check if message is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your conditional here.

    if(mes.value !== ""){
        data.message = mes.value;
    }else{
        errors.push('Message is missing')
    }
    // | FEEDBACK/ERRORS |

    // Check if there is anything in array errors
       // If so: 
       // Print it in JavaScript console.
    // Otherwise:
       // Print the data in JavaScript console.
       // Clear text-fields
    // End your conditional here.
    if (errors.length === 0) {
        console.log(data);
    } else {
        console.log(errors);
    }
// Close your function here
}
// Register your form to "click" event.
sb.addEventListener("click", formValidate);
