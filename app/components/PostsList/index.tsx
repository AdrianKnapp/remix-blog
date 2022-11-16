import { Link } from '@remix-run/react';
import { useState } from 'react';
import AdminModal from '../AdminModal';
import type { PostModel } from '~/types/common';

type PostsListProps = {
  posts: PostModel[];
};

const PostsList = ({ posts }: PostsListProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeModalPost, setActiveModalPost] = useState<PostModel | null>(null);

  const handleToggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <ul className="px-2 my-2 flex flex-col gap-2">
        {posts.map((post) => (
          <li key={post.slug} className="flex">
            <Link
              to={post.slug}
              className="text-blue-600 underline w-full flex justify-between bg-emerald-100 rounded mx-2 p-2"
            >
              {post.title}
              <span className="text-gray-500 text-sm">{new Date(post.updatedAt).toLocaleDateString('pt-br')}</span>
            </Link>
            <button
              type="button"
              className="underline cursor-pointer flex items-center"
              onClick={() => {
                setActiveModalPost(post);
                handleToggleModal();
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
      <div>
        <button
          type="button"
          onClick={() => {
            setActiveModalPost(null);
            handleToggleModal();
          }}
        >
          Create new post
        </button>
      </div>
      <AdminModal activeModalPost={activeModalPost} isOpen={modalIsOpen} handleCloseModal={handleToggleModal} />
    </>
  );
};

export default PostsList;
