import { ApolloServer, makeExecutableSchema } from "apollo-server";
import { $db } from "../config/index";
// MODELS
import models from "./models";
// Typedefs and resolvers
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/types";
const schema = makeExecutableSchema({ typeDefs, resolvers });
const server = new ApolloServer({ schema, context: { models } });

const { options } = $db();
export default function start(port, options = options) {
    models.sequelize.sync(options).then(async () => {
        console.log("DB Connected 🛸 🛸 🛸 ");
        try {
            let serverStatus = await server.listen(port);
            console.log(`Server listening at --> ${serverStatus.url} 👽 👽 👽`);
        } catch (error) {
            console.error(error);
        }
    });
}
