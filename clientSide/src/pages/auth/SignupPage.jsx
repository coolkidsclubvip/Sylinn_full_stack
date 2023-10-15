import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import authService from "../../services/authService";
import SyCard from "../../components/common/SyCard";
import LoadingButton from "../../components/common/LoadingButton";
// LOCAL MODULES
import * as styles from "../../styles/SignupPage.css";
import useAuth from "../../hooks/useAuth";
import SyButton from "../../components/common/SyButton";

function SignupPage() {
  // ACCESS VARIABLES FROM HOOKS
  const { loginSaveUser } = useAuth();
  const navigate = useNavigate();
  const passwordConfirmRef = useRef();

  // Initialize an empty user state
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    isAdmin: "false", // no more new sign up user can be admin.Admin must be manually entered.
  });
  const [loading, setLoading] = useState(false);

  // Destructure data state nested object properties
  const { username, email, password } = user;

  // FORM FUNCTIONS
  // (1) Handle change of input values and update component state
  const handleTextChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // (2) handleSubmit will submit form data to API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate if passwords match
    if (password !== passwordConfirmRef.current.value) {
      toast.warn("Passwords do not match");
      setLoading(false);
      return;
    }

    // Make an API call to register the user
    try {
      const response = await authService.register(user);
      // TO ADJUST LATER WITH CONTEXT API
      loginSaveUser(response.data);
      toast.success(`User ${user.username} is successfully registered`);
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
    <div className={styles.signupWrapper}>
      <SyCard title="Sign Up" authform>
        <div className={styles.userNav}>
          {/* Form starts */}
          <Form onSubmit={handleSubmit}>
            {/* GROUP 1: USERNAME */}
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                name="username"
                value={username}
                onChange={handleTextChange}
                required
              />
            </Form.Group>
            {/* GROUP 2: EMAIL */}
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
            {/* GROUP 3: PASSWORD */}
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="At Least 3 Characters"
                name="password"
                value={password}
                onChange={handleTextChange}
                required
              />
            </Form.Group>
            {/* GROUP 4: PASSWORD CONFIRM*/}
            <Form.Group className="mb-3" controlId="password-confirm">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repeat Password"
                ref={passwordConfirmRef}
                required
              />
            </Form.Group>
            {/* SUBMIT BUTTON */}
            {loading ? <LoadingButton /> : <SyButton />}
          </Form>

          {/* Form ends */}
          <span className={styles.cardSmallText}>
            Already a member? &nbsp;
            <Link to="/login">
              <span style={{ textDecoration: "underline" }}>Login Here</span>
            </Link>
          </span>
        </div>
      </SyCard>
    </div>
  );
}

export default SignupPage;
