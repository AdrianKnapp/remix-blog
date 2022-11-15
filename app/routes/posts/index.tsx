import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';
import PostsList from '~/components/PostsList';
import { getPosts, createPost } from '~/models/post.server';
import type { PostModel } from '~/types/common';
import type { ActionFunction } from '@remix-run/node';

type LoaderData = {
  posts: PostModel[];
};

export const loader = async () => {
  return json<LoaderData>({
    posts: (await getPosts()) as unknown as PostModel[],
  });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const title = formData.get('title');
  const slug = formData.get('slug');
  const markdown = formData.get('markdown');

  invariant(typeof title === 'string', 'title must be a string');
  invariant(typeof slug === 'string', 'slug must be a string');
  invariant(typeof markdown === 'string', 'markdown must be a string');

  await createPost({ title, slug, markdown });

  return null;
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
