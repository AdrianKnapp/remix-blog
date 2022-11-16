import { Form } from '@remix-run/react';

const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;

type EditFormProps = {
  handleCloseModal: () => void;
};

const EditForm = ({ handleCloseModal }: EditFormProps) => {
  return (
    <Form method="post" className="mt-6">
      <p>
        <label>
          Post Title:
          <input type="text" name="title" className={inputClassName} />
        </label>
      </p>
      <p>
        <label>
          Post Slug:
          <input type="text" name="slug" className={inputClassName} />
        </label>
      </p>
      <p>
        <label htmlFor="markdown">Markdown:</label>
        <br />
        <textarea id="markdown" rows={20} name="markdown" className={`${inputClassName} font-mono`} />
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
