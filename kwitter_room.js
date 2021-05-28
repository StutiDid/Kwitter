
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDO9eK2JKRnMFVrrgkj155pIgjdnRVKkDE",
      authDomain: "kwitter-c456c.firebaseapp.com",
      databaseURL: "https://kwitter-c456c-default-rtdb.firebaseio.com",
      projectId: "kwitter-c456c",
      storageBucket: "kwitter-c456c.appspot.com",
      messagingSenderId: "249944226100",
      appId: "1:249944226100:web:bf40610a65d74684bc4d61",
      measurementId: "G-CHPZJX8B2R"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
    function addroom()
    {
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpuse:"adding room name"
          
            });
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";

    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room name- "+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;

      });});}
getData();
function redirectToRoomName(name)
     {
           console.log(name);
           localStorage.setItem("room_name",name);
           window.location="kwitter_page.html";
      }
      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location=index.html;
      }