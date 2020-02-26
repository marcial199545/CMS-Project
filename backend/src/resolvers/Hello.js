export default {
    Query: {
        sayHello(_, args) {
            const { input } = args;
            const phrase = args ? (input ? input.name : "World") : "World";
            return {
                message: `Hello ${phrase}`
            };
        }
    }
};
