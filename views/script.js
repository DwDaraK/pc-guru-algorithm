if (Lol == "Lol") {
  if (i < 2) {
    i = 2
    j = 1
    A = 0
    console.log(A)
  }
}

if (CS == "CS") {
  if (i < 1) {
    i = 1
    j = 1
    A = 1
  }
}

if (COD == "COD") {
  if (i < 3) {
    i = 3
    j = 1
    A = 2

  }
}

if (Fortnite == "Fortnite") {
  if (i < 4) {
    i = 4
    j = 1
    A = 3
  }
}

if (Minecraft == "Minecraft") {
  if (i < 2) {
    i = 2
    j = 1
    A = 4
  }
}

if (FF == "FF") {
  if (i < 2) {
    i = 2
    j = 1
    A = 5
  }
}












const express = require("express");
const app = express();
const bodyParser = require("body-parser")
var j = 0
var A = 0
var maior = 0

var GamesG = ["Lol", "CS", "COD", "Fortnite", "Minecraft", "FF"]
var Game = [2, 1, 3, 4, 2, 2]

var LolG = 2
var CSG = 1
var CODG = 3
var FortniteG = 4
var MinecraftG = 2
var FFG = 2

var processador = [
  ["Celeron® G5925", 0],
  ["Pentium Gold G5420", 1],
  ["I3-10100F", 2],
  ["i5-10400F", 3],
  ["RYZEN 5 3500X", 4]
]

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

  var Games0 = [req.body.Lol, req.body.CS, req.body.COD, req.body.Fortnite, req.body.Minecraft, req.body.FF]

  var Lol = req.body.Lol
  var CS = req.body.CS
  var COD = req.body.COD
  var Fortnite = req.body.Fortnite
  var Minecraft = req.body.Minecraft
  var FF = req.body.FF

  for(var i = 0; i < 6; i++){
    if (Games0[i] == GamesG[i]) {
      if (Game[i] > maior) {
        maior = Games[i]
      }
    }
  }






res.send("Configurações Minimas: " + Games[i][1] + " Media: " + Games[i][2] + " Recomendada: " + Games[i][3])
})




app.listen(8081, function(){
  console.log("Servidor Rodando")
})
