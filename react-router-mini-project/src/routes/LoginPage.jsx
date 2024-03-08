export const LoginPage = () => {
  return (
    <>
      <form className="container">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="surname" className="form-label">Surname</label>
          <input type="text" className="form-control" id="surname" />
        </div>
        <div className="mb-3">
          <label htmlFor="technology" className="form-label">Technology</label>
          <input type="text" className="form-control" id="technology" />
        </div>
        <div className="mb-3">
          <label htmlFor="mail" className="form-label">Mail</label>
          <input type="text" className="form-control" id="mail" />
        </div>
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
    </>
  )
}
