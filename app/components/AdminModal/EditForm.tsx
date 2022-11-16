import { Form, useTransition } from '@remix-run/react';
import type { PostModel } from '~/types/common';

const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;

type EditFormProps = {
  handleCloseModal: () => void;
  activeModalPost: PostModel | null;
};

const EditForm = ({ handleCloseModal, activeModalPost }: EditFormProps) => {
  const transition = useTransition();

  const isCreating = transition.submission?.formData.get('intent') === 'create';
  const isUpdating = transition.submission?.formData.get('intent') === 'update';
  const isDeleting = transition.submission?.formData.get('intent') === 'delete';

  return (
    <Form method="post" className="flex flex-col gap-3">
      <h1 className="text-center text-xl my-2 font-bold">{activeModalPost ? `Edit post` : 'Create a new post'}</h1>
      <input type="hidden" name="slug-to-edit" value={activeModalPost?.slug} />
      <p>
        <label>
          Post Title:
          <input type="text" name="title" className={inputClassName} defaultValue={activeModalPost?.title} />
        </label>
      </p>
      <p>
        <label>
          Post Slug:
          <input type="text" name="slug" className={inputClassName} defaultValue={activeModalPost?.slug} />
        </label>
      </p>
      <p>
        <label htmlFor="markdown">Markdown:</label>
        <br />
        <textarea
          id="markdown"
          rows={10}
          name="markdown"
          className={`${inputClassName} font-mono`}
          defaultValue={activeModalPost?.markdown}
        />
      </p>
      <div className="flex flex-row-reverse justify-start gap-3">
        <button
          type="submit"
          name="intent"
          value={activeModalPost ? 'update' : 'create'}
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
          onClick={handleCloseModal}
          disabled={isCreating || isUpdating}
        >
          {activeModalPost ? 'Update' : 'Create'}
        </button>
        {activeModalPost ? (
          <button
            type="submit"
            value="delete"
            name="intent"
            className="rounded bg-red-500 py-2 px-4 text-white hover:bg-red-600 focus:bg-red-400 disabled:bg-red-300"
            onClick={handleCloseModal}
            disabled={isDeleting}
            tabIndex={-1}
          >
            Delete post
          </button>
        ) : null}
      </div>
    </Form>
  );
};

export default EditForm;
