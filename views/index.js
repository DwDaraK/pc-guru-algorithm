const express = require("express");
const app = express();
const bodyParser = require("body-parser")

var maior = 0
var GamesG = ["Lol", "CS", "COD", "Fortnite", "Minecraft", "FF"]
var Game = [2, 1, 3, 4, 2, 2]
var Games = [
   ["Lol", "Celeron® G5925", "Pentium Gold G5420", "I3-10100F"],
   ["CS", "Celeron® G5925", "Pentium Gold G5420", "Pentium Gold G5420"],
   ["COD", "Pentium Gold G5420", "I3-10100F", "i5-10400F"],
   ["Fortnite", "I3-10100F", "i5-10400F", "RYZEN 5 3500X"],
   ["Minecraft", "Celeron® G5925", "Pentium Gold G5420", "I3-10100F"],
   ["FF", "Celeron® G5925", "Pentium Gold G5420", "I3-10100F"]
]

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/cad", function(req,res){
  res.sendFile(__dirname + "/layouts/formulario.html")
})

app.post('/games', function(req, res){
  maior = 0
  var Games0 = ["", "", "", "", "", "", ""]
  Games0 = [req.body.Lol, req.body.CS, req.body.COD, req.body.Fortnite, req.body.Minecraft, req.body.FF]

  for(var i = 0; i < 6; i++){
    if (Games0[i] == GamesG[i]) {
      if (Game[i] > maior) {
        console.log(i)
        var A = i
        maior = Game[i]
      }
    }
  }
res.send("Configurações Minimas: " + Games[A][1] + " Media: " + Games[A][2] + " Recomendada: " + Games[A][3])
})



app.listen(8081, function(){
  console.log("Servidor Rodando")
})
