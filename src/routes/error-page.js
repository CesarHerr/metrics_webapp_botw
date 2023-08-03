import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      style={{
        display: 'grid',
        placeContent: 'center',
        marginTop: '2rem',
        fontSize: '1.5rem',
        textAlign: 'center',
      }}
    >
      <h1>Oops!</h1>
      <img src="https://http.cat/404" alt="Not found!" />
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
