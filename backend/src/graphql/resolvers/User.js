export default {
    Query: {
        getUsers: async (parent, args, { models }) => {
            try {
                const { User, Post, Tag } = models;
                let users = await User.findAll({
                    include: [
                        {
                            model: Post,
                            as: "posts",
                            include: [
                                {
                                    model: Tag,
                                    as: "tags"
                                }
                            ]
                        }
                    ]
                });
                return users;
            } catch (error) {
                return error;
            }
        }
    },
    Mutation: {
        createUser: async (parent, { input }, { models }) => {
            try {
                const { User, Post, Tag } = models;
                let user = await User.create({ ...input });
                return user;
            } catch (error) {
                return error;
            }
        }
    }
};
