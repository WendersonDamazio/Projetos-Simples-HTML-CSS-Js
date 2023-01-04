function calcular(){
    var text = document.getElementById("textarea").value;
    var result = text.split(" ").length;

    document.getElementById("resultado").innerHTML = "Voce tem: " + result + " palavras";
}