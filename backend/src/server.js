import { ApolloServer, makeExecutableSchema } from "apollo-server";

import typeDefs from "./types/Hello";
import resolvers from "./resolvers/Hello";

const schema = makeExecutableSchema({ typeDefs, resolvers });
const server = new ApolloServer({ schema });

export default async function start(port) {
    try {
        let status = await server.listen(port);
        console.log(`Server listening at --> ${status.url}`);
    } catch (error) {
        console.error(error);
    }
}
