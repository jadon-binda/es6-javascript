var posts = [
    { id: 1, title: 'New Post' },
    { id: 2, title: 'Old Post' }
];

var comment = /*[*/
    { postId: 1, content: 'Great Post!' }/*,
    { postId: 2, content: 'Good post' },
    { postId: 1, content: 'So so' }
]*/;

function postForComment(posts, comment) {
    return posts.find(function(post) {
        return post.id === comment.postId;
    });
}

console.log(postForComment(posts, comment));