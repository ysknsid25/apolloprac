const {ApolloServer, Pubsub, PubSub} = require('apollo-server');
const db = require('./db');
const Query = require('./resolver/Query');
const Mutation = require('./resolver/Mutation');
const Subscription = require('./resolver/Subscription');
const typeDefs = require('./schema');

const pubsub = new PubSub();

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: {
        Query,
        Mutation,
        Subscription
    },
    context: {
        db,
        pubsub
    }
})

server.listen().then(({url, subscriptionsUrl}) => {
    console.log(`Server Ready at ${url}`);
})