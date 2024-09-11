import fastify from 'fastify'

// criando aplicacao
const app = fastify()

// especificando porta para aplicacao rodar, que pode ser mais de uma
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running')
  })
