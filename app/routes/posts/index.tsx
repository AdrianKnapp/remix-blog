import { json, redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';
import PostsList from '~/components/PostsList';
import { getPosts, createPost, editPost, deletePost } from '~/models/post.server';
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

  const intent = formData.get('intent');
  const slugToEdit = formData.get('slug-to-edit');
  const title = formData.get('title');
  const slug = formData.get('slug');
  const markdown = formData.get('markdown');

  invariant(typeof slugToEdit === 'string', 'slug to edit must be a string');
  invariant(typeof title === 'string', 'title must be a string');
  invariant(typeof slug === 'string', 'slug must be a string');
  invariant(typeof markdown === 'string', 'markdown must be a string');

  switch (intent) {
    case 'create':
      await createPost({ title, slug, markdown });
      break;
    case 'update':
      await editPost(slugToEdit, { title, slug, markdown });
      break;
    case 'delete':
      await deletePost(slugToEdit);
      break;
    default:
      break;
  }

  return redirect('/posts');
};

const Posts = () => {
  const { posts } = useLoaderData() as unknown as LoaderData;

  return (
    <main className="text-center">
      <h1 className="my-4 font-bold text-xl">Posts</h1>
      <PostsList posts={posts} />
    </main>
  );
};

export default Posts;
