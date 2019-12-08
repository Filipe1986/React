# back-end

Forma para mockar um back-end que retorna rest de forma rápida e simples

Instalar o serviço back-end
npm i --save json-server@0.13.0 -E

npm start para rodar o serviço

Adiconar esse start no package.json
  "scripts": {
    "start": "json-server --watch db.json --port 3001"
  },

url de exemplo 
  http://localhost:3001/users/1