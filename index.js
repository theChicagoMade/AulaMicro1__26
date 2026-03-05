// ALEXANDRE FERNANDES DA SILVA - 2581191 - 5° ADS NOTURNO

const express = require("express");
const app = express();

app.get("/:alexandre", (req, res) => {
  const { alexandre } = req.params

  res.status(200).json({
    mensagem: `Seja Bem vindo ${alexandre}`
  })
});

app.get("/teste", (req, res) => {
  res.send("Olá Mundo!");
});

app.listen(3003, () => {
  console.log("Servidor On Junior Junior ALEXANDRE FERNANDES");
});