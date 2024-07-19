// Import the framework and instantiate it
import Fastify from "fastify";
const port = process.env.PORT || 4000;

const fastify = Fastify({
  logger: true,
});

// Declare a route
fastify.get("/", async function handler(request, reply) {
  return { success: true };
});

// Declare a route
fastify.post("/reservation", async function handler(request, reply) {
  console.log("PAYLOAD", request.body, request.query, request.params);
  return { success: true };
});

// Run the server!
try {
  await fastify.listen({ port, host: "0.0.0.0" });
  console.log(`Server listening on ${port}`);
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
