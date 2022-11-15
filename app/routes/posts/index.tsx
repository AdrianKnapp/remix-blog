import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import PostsList from '~/components/PostsList';
import { getPosts } from '~/models/post.server';
import type { PostModel } from '~/types/common';

type LoaderData = {
  // this is a handy way to say: "posts is whatever type getPosts resolves to"
  posts: PostModel[];
};

export const loader = async () => {
  return json<LoaderData>({
    posts: (await getPosts()) as unknown as PostModel[],
  });
};

const Posts = () => {
  const { posts } = useLoaderData() as unknown as LoaderData;

  return (
    <main>
      <h1>Posts</h1>
      <PostsList posts={posts} />
    </main>
  );
};

export default Posts;
