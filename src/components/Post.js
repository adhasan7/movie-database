
function Post() {
    const posts = [{ title: "test 123", description: "nothing" }];
  return (
  <div className="post-app">
   
{posts.map((post, index) => (
  <div key={index + 2}>
    <h3>Title : {post.title}</h3>
    <p>Deskripsi : {post.description}</p>
  </div>
))}
</div>

 );
}


export default Post;

