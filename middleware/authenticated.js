export default function ({
  app,
  store,
  redirect
}) {
  // If the user is not authenticated
  if (!store.state.auth.loggedIn) {
    return redirect('/')
  }
}