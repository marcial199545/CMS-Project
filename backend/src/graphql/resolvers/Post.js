export default {
    Query: {
        getPosts: async (parent, args, { models }) => {
            try {
                const { User, Post, Tag } = models;
                let posts = await Post.findAll({
                    include: [
                        {
                            model: Tag,
                            as: "tags"
                        }
                    ]
                });
                return posts;
            } catch (error) {
                return error;
            }
        }
    },
    Mutation: {
        createPost: async (parent, { input }, { models }) => {
            try {
                const { User, Post, Tag } = models;
                let post = await Post.create(
                    { ...input },
                    {
                        include: [
                            {
                                model: Tag,
                                as: "tags"
                            }
                        ]
                    }
                );
                return post;
            } catch (error) {
                return error;
            }
        }
    }
};
