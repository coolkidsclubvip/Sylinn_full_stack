import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import authService from "../../services/authService";
import SyCard from "../../components/common/SyCard";
import LoadingButton from "../../components/common/LoadingButton";
import useAuth  from "../../hooks/useAuth";


// LOCAL MODULES
import * as styles from "../../styles/LoginPage.css.ts";
import SyButton from "../../components/common/SyButton";

function LoginPage() {
  const { loginSaveUser } = useAuth();
  const navigate = useNavigate();

  // Initialize an empty user state
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  // Destructure data state nested object properties
  const { email, password } = user;

  // FORM FUNCTIONS
  // (1) Handle change of input values and update component state
  const handleTextChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // (2) handleSubmit will submit form data to API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Make an API call to register the user
    try {
      const response = await authService.login( user);
      // TO ADJUST LATER WITH CONTEXT API
      console.log("response.data is:", response.data);
      toast.success("Login successful");
      loginSaveUser(response.data);
      navigate("/dashboard");
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (err) {
      console.log(err?.response);
      // toast.error(err.response.data);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };
  return (
    <div className={styles.LoginWrapper}>
      <SyCard title="Login" loginform>
        <div className={styles.userNav}>
          {/* Form starts */}
          <Form onSubmit={handleSubmit}>
            {/* GROUP 1: EMAIL */}
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={email}
                onChange={handleTextChange}
                required
              />
            </Form.Group>
            {/* GROUP 2: PASSWORD */}
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={handleTextChange}
                required
              />
            </Form.Group>

            {/* SUBMIT BUTTON */}
            {loading ? <LoadingButton /> : <SyButton />}
            {/* <SyButton
              variant="primary"
              type="submit"
              loadingState={loading}
            ></SyButton> */}
          </Form>

          {/* Form ends */}
          <span className={styles.cardSmallText}>
            Not a member? &nbsp;
            <Link to="/register">
              <span style={{ textDecoration: "underline" }}>Sign up</span>
            </Link>
          </span>
        </div>
      </SyCard>
    </div>
  );
}

export default LoginPage;
