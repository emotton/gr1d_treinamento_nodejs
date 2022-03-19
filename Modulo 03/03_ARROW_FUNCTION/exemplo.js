var func1 = function (param1) {
  return param * 2;
};

// Function Statement
var func2 = (param1) => {
  return param1 * 2;
};

// Expression Body
var func3 = (param1) => param1 * 2;

// Contexto

// Function utilizando this está se referenciando ao contexto body da própria
// Arrow Function this está se referenciando ao contexto externo (PAI)

function Factory() {
  this.contador = 0;
  this.create = () => {
    return {
      nome: "Eduardo",
      idade: 52,
      contador: ++this.contador,
    };
  };
}

var factory = new Factory();

var obj = factory.create();
console.log(obj);

var obj2 = factory.create();
console.log(obj2);

var obj3 = factory.create();
console.log(obj3);

var retObj = () => ({ nome: "Edu" });

console.log(retObj());
