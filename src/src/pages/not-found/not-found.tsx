import { Link } from "react-router-dom";

export default function NotFoundPage(): JSX.Element {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Return to the dashboard</Link>
      </p>
    </div>
  );
}
