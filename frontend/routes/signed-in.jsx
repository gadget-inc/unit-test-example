import { useUser, useFindMany } from "@gadgetinc/react";
import reactLogo from "../assets/react-logo.svg";
import { api } from "../api";

export default function () {
  const user = useUser(api);
  const [{ data: posts, fetching, error }] = useFindMany(api.post);

  return user ? (
    <>
      <div className="app-link">
        <img src={reactLogo} className="app-logo" alt="logo" />
        <span>You are now signed into {process.env.GADGET_PUBLIC_APP_SLUG} </span>
      </div>
      <div>
        <p className="description" style={{ width: "100%" }}>
          Start building your app&apos;s signed in area
        </p>
        <a href="/edit/files/frontend/routes/signed-in.jsx" target="_blank" rel="noreferrer" style={{ fontWeight: 500 }}>
          frontend/routes/signed-in.jsx
        </a>
      </div>
      <div className="card-stack">
        <div className="card">
          <div className="card-content">
            <img className="icon" src={user.googleImageUrl} />
            <div className="userData">
              <p>id: {user.id}</p>
              <p>
                name: {user.firstName} {user.lastName}
              </p>
              <p>
                email: <a href={`mailto:${user.email}`}>{user.email}</a>
              </p>
              <p>created: {user.createdAt}</p>
              {fetching ?
                <p>Loading...</p> :
                <p>num posts: {posts.length}</p>
              }
              {error && <pre><code>{error.message}</code></pre>}
            </div>
          </div>
          <div className="sm-description">This data is fetched from the user model</div>
        </div>
      </div>
    </>
  ) : null;
}
