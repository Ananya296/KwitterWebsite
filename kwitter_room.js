
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB9teouwXVZJmj9x2qVgaIVHU9akWfC4UI",
  authDomain: "kwitter-c6c19.firebaseapp.com",
  databaseURL: "https://kwitter-c6c19-default-rtdb.firebaseio.com",
  projectId: "kwitter-c6c19",
  storageBucket: "kwitter-c6c19.appspot.com",
  messagingSenderId: "952675618901",
  appId: "1:952675618901:web:cc53806b3b83dacb2b44dc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}

