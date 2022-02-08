app.use(express.urlencoded({ extended: true}))
======================================================================================
A opção "extended" diz para o express qual biblioteca ele deve utilizar para fazer o parsing do conteúdo das requisições que ele recebe.
Quando extended : true vai utilizar a biblioteca qs e quando for false ele vai utilizar a biblioteca querystring.

app.use(express.json())
======================================================================================
Baseado no body-parser, permite fazer o parser de objetos JSON no Body da msg.