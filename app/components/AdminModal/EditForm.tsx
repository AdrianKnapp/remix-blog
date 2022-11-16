import { Form } from '@remix-run/react';
import type { PostModel } from '~/types/common';

const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;

type EditFormProps = {
  handleCloseModal: () => void;
  activeModalPost: PostModel | null;
};

const EditForm = ({ handleCloseModal, activeModalPost }: EditFormProps) => {
  return (
    <Form method="post" className="mt-6">
      <input type="hidden" name="form-action" value={activeModalPost ? 'edit' : 'create'} />
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
          rows={20}
          name="markdown"
          className={`${inputClassName} font-mono`}
          defaultValue={activeModalPost?.markdown}
        />
      </p>
      <p className="text-right">
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
          onClick={handleCloseModal}
        >
          Create Post
        </button>
      </p>
    </Form>
  );
};

export default EditForm;
