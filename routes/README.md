This example contains following:

1) node server using fastify framework : http://0.0.0.0:3002/
2) register routes which exposes an endpoint

QUERIES:

Q - API does not return a response if we don't specify async while configuring end point  
A - Since we are returning JSON object in the end point, we need to convert it into a promise (async keyword)  
