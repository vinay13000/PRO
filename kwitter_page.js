//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDVnrw0gREV30iI-PxiLbrtZt_lMVUZbCY",
      authDomain: "crea-f44ad.firebaseapp.com",
      databaseURL: "https://crea-f44ad-default-rtdb.firebaseio.com",
      projectId: "crea-f44ad",
      storageBucket: "crea-f44ad.appspot.com",
      messagingSenderId: "163338691578",
      appId: "1:163338691578:web:ce4549a03bb635310eba43"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
      
});
document.getElementById("msg").value="";
}
//End code
      } });  }); }
getData();
