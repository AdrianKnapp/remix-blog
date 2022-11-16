import { Link } from '@remix-run/react';

const Home = () => {
  return (
    <div className="flex flex-col items-center my-5">
      <h1 className="text-xl font-bold">Wellcome to home</h1>
      <Link to="posts">
        <button
          type="button"
          className="flex gap-2 mx-auto items-center rounded bg-blue-500 my-4 py-2 px-4 text-white hover:bg-blue-400 duration-300"
        >
          Go to posts!
        </button>
      </Link>
    </div>
  );
};

export default Home;
