var db=firebase.firestore();
const appbio = document.querySelector('#app-bio');
const about = document.querySelector('#about');
db.settings({ timestampsInSnapshots: true });

// db.settings({ timestampsInSnapshots: true });

firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
        //GetAllDataRealtime();
        // getbio();

        function applbio(doc){
            let li = document.createElement('li');
            let bio = document.createElement('span');
            let about = document.createElement('span');

            li.setAttribute('data-id', doc.id);

            bio.textContent = doc.data().bio;
            about.textContent = doc.data().about;

            li.appendChild(bio);
            li.appendChild(about);
            appbio.appendChild(li);
        }
        // function abouti(doc){
        //     let li = document.createElement('li');
        //     let about = document.createElement('span');
        //     li.setAttribute('data-id', doc.id);
        //     about.textContent = doc.data().about;
        //     li.appendChild(about);
        //     appbio.appendChild(li);
        // }
        uid = user.uid;
        console.log(uid);
        db.collection('Application').doc(uid)
        .get()
        .then((snapshot) => {
            // snapshot.docs
            // .forEach(doc => {
                applbio(snapshot);
                //abouti(snapshot);
            // })
        })
        
        
    }
})

// function getbio(){
    

//     function appbio(doc){
//         let li = document.createElement('li');
//         let bio = document.createElement('span');
//         li.setAttribute('data-id', doc.id);
//         bio.textContent = doc.data().bio;
//         li.appendChild(bio);
//         appbio.appendChild(li);

//     }
//     db.collection('Application').get().then((snapshot) => {
//         snapshot.docs.forEach(doc => {
//             appbio(doc);
//         })
//     })
// }
// function GetAllDataRealtime(){
//     db.collection("Application")
//     .get()
//     .then((querySnapshot)=>{
//         var Application = [];
//         querySnapshot.forEach(doc => {
//             Application.push(doc.data().bio());
//             console.log(bio);
//         });
//     });
// }

function logout(){
    firebase.auth().signOut()
}
      
// function getbio(){
// db.collection("Applications")
// // .where("organizationUrl", "==", org_url)
// .get()
// .then((querySnapshot) => { 
//     querySnapshot.forEach((doc) => { 
//         console.log((doc.data().bio), 
//         "=>", doc.data()); 
//          bio = doc.id; 
//          var bio = doc.data().bio; 
//         //  var orgAbout = doc.data().orgAbout; 
//          document.getElementById("bio").innerHTML = bio; 
//         //  document.getElementById("orgAbout").innerHTML = orgAbout; 
//          createViewMembers(bio); 
//          displaypreload(doc.data()); 
//         }); 
//     })
// }

