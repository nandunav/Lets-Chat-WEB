const firebaseConfig = {
      apiKey: "AIzaSyD-IE5hRBvkwkv4mPUQgkMCys86kS3jKZw",
      authDomain: "lets-chat-4f99d.firebaseapp.com",
      databaseURL: "https://lets-chat-4f99d-default-rtdb.firebaseio.com",
      projectId: "lets-chat-4f99d",
      storageBucket: "lets-chat-4f99d.appspot.com",
      messagingSenderId: "804622415583",
      appId: "1:804622415583:web:7f5a03db583eeda45f1b6a",
      measurementId: "G-2CLMC48RQP"
    };
    
    const app = initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

    function addroom()
{
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose = "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room name -"+ Room_names);
       row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;


      });});}
getData();

function redirectToRoomName(name){

      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
