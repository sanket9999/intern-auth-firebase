var db=firebase.firestore();

//Variable to access database collection
//const db = firestore.collection("Application");

//Get Submit Form
let submitButton = document.getElementById("signUp");

document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("welcome.html")
    }
})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
}

function clearForm() {
    document.getElementById("clearFrom").reset();
}

function signUp(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const bio = document.getElementById("bio").value
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((cred) => {
        console.log(cred);
        db.collection('Application').doc(cred.user.uid).set({
            
            email: email,
            password: password,
            bio: bio
        })
        .then(() => {
          console.log('User added!');
        });
    })

    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
        console.log(error);
    })


  
        //Prevent Default Form Submission Behavior
        // e.preventDefault();
    // let email = document.getElementById("email").value;
    // let password = document.getElementById("password").value;

    // firestore
    // .collection("Application")
    // .get()
    // .then((snapshot) => {
    //   snapshot.docs.forEach((doc) => {
    //     const fn = doc.data().email;
    //     if (email === fn) {
    //       console.log("Already Exists");
    //     }

    //     // console.log("data", doc.data().fname);
    //   });
    // });
  //Save Form Data To Firebase

    // db.doc().set({
    //     //username: username,
    //     email: email,
    //     password: password
    //     })
    //     .then(() => {alert("Submitted Successfully"); })
    //     .catch((error) => {
    //     console.log(error);
    //     });

    //alert
    // alert("Your Form Has Been Submitted Successfully");

    //clear form after submission

            clearForm()
    }



function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}



// //Create Event Listener To Allow Form Submission
// submitButton.addEventListener("click", (e) => {
//     //Prevent Default Form Submission Behavior
//     e.preventDefault();
  
//     //Get Form Values
//     //let username = document.getElementById("username").value;
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;

//     firestore
//     .collection("Application")
//     .get()
//     // .then((snapshot) => {
//     //   snapshot.docs.forEach((doc) => {
//     //     const fn = doc.data().email;
//     //     if (email === fn) {
//     //       console.log("Already Exists");
//     //     }

//     //     // console.log("data", doc.data().fname);
//     //   });
//     // });
//   //Save Form Data To Firebase

//     db.doc().set({
//         //username: username,
//         email: email,
//         password: password
//         })
//         .then(() => { })
//         .catch((error) => {
//         console.log(error);
//         });

//     //alert
//     alert("Your Form Has Been Submitted Successfully");

//     //clear form after submission
//     function clearForm() {
//         document.getElementById("clearFrom").reset();
//     }
//     clearForm()
//     });