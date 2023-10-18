import { Link } from "react-router-dom";

export default function NotFoundPage(): JSX.Element {
  return (
    <div>
      <h1>Lost your way?</h1>
      <p>
        <Link to="/">Return home</Link>
      </p>
    </div>
  );
}
