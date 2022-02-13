npm i -D typescript

tsconfig.json

{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "./build",
    "strict": true,
    "esModuleInterop": true
  }
}

npm i -S express

npm i -D @types/express @types/node

npm run build

node build/index.js

npm i -D ts-node nodemon

npm run dev

npm i -S morgan

npm i -D @types/morgan

npm i -S tsoa swagger-ui-express

npm i -D @types/swagger-ui-express concurrently

add tsconfig.json

"experimentalDecorators": true,
"emitDecoratorMetadata": true

