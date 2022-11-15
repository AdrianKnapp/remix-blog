import { Link } from '@remix-run/react';
import type { PostModel } from '~/types/common';

type PostsListProps = {
  posts: PostModel[];
};

const PostsList = ({ posts }: PostsListProps) => {
  return (
    <ul className="px-2 my-2 flex flex-col">
      {posts.map((post) => (
        <li key={post.slug} className="flex">
          <Link
            to={post.slug}
            className="text-blue-600 underline w-full flex justify-between bg-emerald-100 rounded mx-2 p-2"
          >
            {post.title}
            <span className="text-gray-500 text-sm">{new Date(post.updatedAt).toLocaleDateString('pt-br')}</span>
          </Link>
          <span className="underline cursor-pointer flex items-center">Edit</span>
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
