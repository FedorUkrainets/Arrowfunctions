const newPost = (post, addedAT = Date()) => ({
    ...post,
    addedAT,
})

const post = {
    id: 279,
    author: 'Volodya'
}

newPost(post)

console.log(newPost(post))

