import { Link } from '@remix-run/react';

const Home = () => {
  return (
    <div>
      <h1>Wellcome to home</h1>
      <Link to="posts">
        <button type="button">Go to posts!</button>
      </Link>
    </div>
  );
};

export default Home;
