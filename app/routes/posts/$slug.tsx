import { marked } from 'marked';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import invariant from 'tiny-invariant';
import { getPost } from '~/models/post.server';
import type { Post } from '~/models/post.server';
import type { LoaderFunction } from '@remix-run/node';

type LoaderData = { post: Post; html: string };

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, `params.slug is required`);

  const post = await getPost(params.slug);
  invariant(post, `Post not found: ${params.slug}`);

  const html = marked(post.markdown);
  return json<LoaderData>({ post, html });
};
const PostSlug = () => {
  const { post, html } = useLoaderData();

  return (
    <main className="mx-auto container px-4">
      <h1 className="mb-6 border-b text-center font-bold text-xl py-4">{post.title}</h1>
      <div className="mt-2" dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
};

export default PostSlug;
