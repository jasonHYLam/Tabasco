import { useOutletContext } from "react-router-dom";
import { PostsContainer } from "../postsContainer/PostsContainer";
import { PostPreview } from "../postPreview/PostPreview";

export function Feed() {
  const { loggedInUser, feed } = useOutletContext();
  return (
    <>
      <main>
        <h2>Your feed</h2>

        <PostsContainer posts={feed} />

        {/* <section>
          <ul>
            {feed.map((post) => (
              <PostPreview key={post.id} post={post} />
            ))}
          </ul>
        </section> */}
      </main>
    </>
  );
}
