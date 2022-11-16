import { Link } from '@remix-run/react';
import { useState } from 'react';
import { TbEdit } from 'react-icons/tb';
import { MdOutlineAdd } from 'react-icons/md';
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
      <ul className="container px-2 my-2 flex flex-col gap-2 mx-auto">
        {posts.map((post) => (
          <li key={post.slug} className="flex border-b-gray-200 border-b">
            <Link to={post.slug} className="w-full flex justify-between mx-2 p-2 ">
              <span className="text-gray-800">{post.title}</span>
              <span className="text-gray-600 text-sm">{new Date(post.updatedAt).toLocaleDateString('pt-br')}</span>
            </Link>
            <button
              type="button"
              className="cursor-pointer flex items-center px-3 text-gray-600 hover:text-gray-400 duration-300 text-sm gap-1"
              onClick={() => {
                setActiveModalPost(post);
                handleToggleModal();
              }}
            >
              <TbEdit className="text-xl" />
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
          className="flex gap-2 mx-auto items-center rounded bg-blue-500 my-4 py-2 px-4 text-white hover:bg-blue-400 duration-300"
        >
          <MdOutlineAdd />
          Create new post
        </button>
      </div>
      <AdminModal activeModalPost={activeModalPost} isOpen={modalIsOpen} handleCloseModal={handleToggleModal} />
    </>
  );
};

export default PostsList;
