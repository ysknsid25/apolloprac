const Mutation = {
    createPost(parent, args, {db, pubsub}, info){
        const postNumTotal = String(db.posts.length + 1);
        const post = {
            id: postNumTotal,
            ...args.data
        };
        db.posts.push(post);
        pubsub.publish('post', {
            post: {
                mutation: 'CREATED',
                data: post
            }
        });
        return post;
    },
    updatePost(parent, args, {db, pubsub}, info){
        const {id, data} = args;
        const post = db.posts.find((post) => post.id === id);
        if(!post){
            throw new Error('Post not Found');
        }
        if(typeof data.title === 'string' && typeof data.author === 'string'){
            post.title = data.title;
            post.author = data.author;
            pubsub.publish('post', {
                post: {
                    mutation: 'UPDATED',
                    data: post
                }
            });
        }
        return post;
    },
    deletePost(parenst, args, {db, pubsub}, info){
        const post = db.posts.find((post) => post.id === id);
        const postIndex = db.posts.findIndex((post) => post.id === id);
        if(postIndex === -1){
            throw new Error('post not found');
        }
        db.post.splice(postIndex, 1);
        pubsub.publish('post', {
            post: {
                mutation: 'DELETED',
                data: post
            }
        });
        return post;
    }
}

module.exports = Mutation;