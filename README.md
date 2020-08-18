### End goal

- React running inside Django, with create-react-app.
    - Can run frontend-only on port 3000 with hot-reloading and everything working nicely.
    - Can run full app on port 8000 after running `yarn build`.
- Django routing and react-router play nicely together.
    - Redirects work fine.
    - Subroutes work fine.
- Login page created using Django.
    - Traditional template rendered server-side.
- APIs use SessionAuthentication.
    - What about token-based auth, going forward?
- Requests made from frontend by specifying a path only (not a full url, with a token in a header).
- Dockerised.
- Frontend & backend served from same domain.
