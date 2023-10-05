import { Container, Row, Col } from "react-bootstrap";
import * as styles from "./Dashboard.css";
import  useAuth from "../../hooks/useAuth";
import SyCard from "../../components/common/SyCard";

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <Container>
      <div className={styles.dashboardWrapper}>
        {!user && (
          <SyCard title="User Profile" authform>
            <div>Can Not Retrieve User</div>{" "}
          </SyCard>
        )}

        {user && (
          <SyCard title="User Profile" authform>
            <div>
              <h3> {user.username}</h3>
              <p>{user.email}</p>
              <ul style={{ textAlign: "center", margin: "5rem" }}>
                what's in my cart:
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>

            {/* Admin exclusive stuff is here: */}

            {user.isAdmin === "true" && (
              <div>$$only Amin can see this line</div>
            )}
          </SyCard>
        )}
      </div>
    </Container>
  );
}

export default Dashboard;
