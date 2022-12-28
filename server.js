const express = require('express')
const app = express()

app.use(express.static(__dirname + "/dist/sys-sapucaia-angular"))

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/dist/sys-sapucaia-angular/index.html")
})

app.listen(5052, () => {
  console.log("Iniciou na porta 5052")
})
