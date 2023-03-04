import Fastify, { FastifyInstance } from 'fastify'

const server: FastifyInstance = Fastify({})

server.get('/', async (request, reply) => {
  return 'Hello World\n'
})

const start = async () => {
  try {
    await server.listen({ port: 8080 })

    const address = server.server.address()
    const port = typeof address === 'string' ? address : address?.port

    console.log(`Server listening at ${address}:${port}`)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()
