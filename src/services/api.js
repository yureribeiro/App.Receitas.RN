import axios from 'axios'

// rodar com IPV4: json-server --watch -d 180 --host 192.168.15.9 db.json
// json server vai 'vigiar' o db.json no host do meu IP, com inicialização de 180milisegundos de atraso.

const api = axios.create({
  baseURL: 'http://192.168.15.9:3000'
})

export default api