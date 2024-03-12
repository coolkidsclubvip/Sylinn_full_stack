import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as styles from "../../styles/components/Dashboard.css";
import useAuth from "../../hooks/useAuth";
import SyCard from "../../components/common/SyCard";
// import authServices from "../../../../serverSide/src/utils/authServices";
import api from "../../services/api";
import ViewAllUsers from "../../components/common/ViewAllUsers";
import { PiDogDuotone } from "react-icons/pi";
import { PiFishSimpleDuotone } from "react-icons/pi";

function Dashboard() {
  const { user, logout } = useAuth();
  const [showViewAllUsers, setShowViewAllUsers] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all users from DB
  const fetchAllUsers = async () => {
    const response = await api.get("/auth/users");
    setUsersData(response.data);
    setLoading(false);
  };
  // Function to hide/show view all users section
  function handleViewUsers() {
    setShowViewAllUsers(true);
    fetchAllUsers();
  }

  return (
    <Container>
      <div className={styles.container}>
        {!user && (
          <SyCard title="Dashboard">
            <div>Can Not Retrieve User</div>{" "}
          </SyCard>
        )}

        {user && (
          <SyCard
            title={`Hello,  ${user.username} `}
            icon={
              user.username === "Ying" ? (
                <PiDogDuotone />
              ) : user.username === "Din" ? (
                <PiFishSimpleDuotone />
              ) : null 
            }
          >
            <div>
              {/* <p>Welcome, {user.username}</p> */}
              <p>{user.email}</p>
            </div>

            {/* Admin exclusive stuff is here: */}

            {user.isAdmin == "true" ? (
              <div>
                <div>
                  <button
                    type="button"
                    onClick={handleViewUsers}
                    className="btn btn-primary mb-3 mt-3"
                  >
                    View registered users
                  </button>
                  {showViewAllUsers && (
                    <ViewAllUsers usersData={usersData} loading={loading} />
                  )}
                </div>
              </div>
            ) : (
              <div>
                {" "}
                <ul style={{ textAlign: "center", margin: "5rem" }}>
                  Thank you for registering your email with us. You will receive
                  new products release notification and other product/brand
                  updates.
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            )}
          </SyCard>
        )}
      </div>
    </Container>
  );
}

export default Dashboard;
