// For Mina to copy and paste

var MemeText = document.getElementsByClassName("MemeText");
var MemeImg = document.getElementsByClassName("MemeImg");
var MemeData = [
    /*{ Example
        Text: "When you go outside but forgot your mask",
        Img: "https://i.pinimg.com/736x/7b/c0/99/7bc09917e0553a759088b998b007fce1.jpg"
    }, {
        Text: "POV: You're the first to sleep in a sleep over",
        Img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wikihow.com%2FPrank-at-a-Sleepover&psig=AOvVaw05OuGiGLQAKByFN47O8Qe8&ust=1665654673410000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLjKz6u12voCFQAAAAAdAAAAABAE"
    }*/
];

function RenderMeme () {
    for (var i = 0; i < MemeData.length; i++) {
        MemeText.innerText = MemeData[i].Text;
        MemeImage.src = MemeData[i].Img;
    }
};