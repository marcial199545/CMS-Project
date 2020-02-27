import { ApolloServer, makeExecutableSchema } from "apollo-server";
// MODELS
import models from "./models";
import typeDefs from "./types/Hello";
import resolvers from "./resolvers/Hello";

const schema = makeExecutableSchema({ typeDefs, resolvers });
const server = new ApolloServer({ schema, context: { models } });

export default function start(port) {
    models.sequelize.sync({ force: true }).then(async () => {
        console.log("DB Connected 🛸 🛸 🛸 ");
        try {
            let serverStatus = await server.listen(port);
            console.log(`Server listening at --> ${serverStatus.url} 👽 👽 👽`);
        } catch (error) {
            console.error(error);
        }
    });
}
