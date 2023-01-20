function AddUser(){

    player1_name=document.getElementsByClassName("inputbox")[0].value
    player2_name=document.getElementsByClassName("inputbox")[1].value

    localStorage.setItem("player1_name" ,player1_name )
    localStorage.setItem("player2_name" ,player2_name )

    window.location = "index2.html"

   
}