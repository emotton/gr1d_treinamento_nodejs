const params = [
    "c:\\entrada",
    "c:\\saida",
    3000,
    1024
];

function configParams([entrada,,porta]){
    console.log("entrada=> ", entrada);
    console.log("porta=> ", porta);
}

configParams(params);
