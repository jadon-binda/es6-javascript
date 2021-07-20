var post = /*[
  { id: 1, title: 'New Post' },
  { id: 2, title: 'New Post' },
  { id: 3, title: 'New Post' },*/
  { id: 4, title: 'New Post' }/*,
  { id: 5, title: 'New Post' }
]*/;

var comments = [
  { postId: 4, content: 'awesome post!' },
  { postId: 3, content: 'it was ok' },
  { postId: 4, content: 'neat' },
  { postId: 5, content: 'cool' },
  { postId: 4, content: 'bacana'},
];

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    /*if (post.id == 4) {*/
      return comment.postId === post.id;
    /*}*/
  });
}

console.log(commentsForPost(post, comments));