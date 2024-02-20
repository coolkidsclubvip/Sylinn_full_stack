import DelayedLoaderSpinner from "../layout/DelayedLoaderSpinner";

function ViewAllUsers({ usersData, loading }) {
  // console.log("usersData are:", usersData);
  console.log("loading is:", loading);
  return (
    <div className=" mt-5">
      <h4>All Registered Users Details:</h4>

      {loading ? (
        <DelayedLoaderSpinner />
      ) : (
        <div className=" mt-5">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>isAdmin</th>
              </tr>
            </thead>

            <tbody>
              {usersData.length > 0 &&
                usersData.map((user, index) => (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.isAdmin == "true" ? "Yes" : "No"}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ViewAllUsers;
