import {Spinner} from 'react-bootstrap'

function ViewAllUsers({ usersData,loading }) {
  console.log("usersData are:", usersData);

  return (
    <div>
      <h4>All Registered Users Details:</h4>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>isAdmin</th>
            </tr>
          </thead>
         {loading?<Spinner variant="primary"  />: <tbody>
            {usersData.length > 0 &&
              usersData.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.isAdmin ? "Yes" : "No"}</td>
                </tr>
              ))}
          </tbody>}
        </table>
      </div>
    </div>
  );
}

export default ViewAllUsers;
