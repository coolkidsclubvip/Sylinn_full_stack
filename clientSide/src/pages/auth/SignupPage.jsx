import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";

// LOCAL MODULES
import * as styles from "./SignupPage.css";
// import { useAuth } from "../../contexts/AuthContext";
// import SyCard from "../../components/common/SyCard";
// import SyButton from "../../components/common/SyButton";

function SignupPage() {
  // // ACCESS VARIABLES FROM HOOKS
  // const { loginSaveUser } = useAuth();
  // const navigate = useNavigate();
  // const passwordConfirmRef = useRef();

  // // HOOK: SETTING COMPONENT STATE (& init values)
  // const [user, setUser] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });
  // const [loading, setLoading] = useState(false);

  // // Destructure data state nested object properties
  // const { username, email, password } = user;

  // // FORM FUNCTIONS
  // // [1] handleTextChange handles state value change for all login data
  // const handleTextChange = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };

  // // [2] handleSubmit will submit form data to API
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   // Early Validation - Error Check First
  //   if (password !== passwordConfirmRef.current.value) {
  //     toast.error("Passwords do not match");
  //     setLoading(false);
  //     return;
  //   }

  //   // API Call to Write User Data
  //   try {
  //     const response = await axios.post("/api/auth/register", user);
  //     // TO ADJUST LATER WITH CONTEXT API
  //     loginSaveUser(response.data);
  //     navigate("/dashboard");
  //   } catch (err) {
  //     console.log(err?.response);
  //     toast.error(err.response.data);
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 1000);
  //   }
  // };

  return (
    // <SyCard title="Sign Up" authform>
    //   <Form onSubmit={handleSubmit}>
    //     {/* GROUP 1: USERNAME */}
    //     <Form.Group className="mb-3" controlId="username">
    //       <Form.Label>Username</Form.Label>
    //       <Form.Control
    //         type="text"
    //         placeholder="Username"
    //         name="username"
    //         value={username}
    //         onChange={handleTextChange}
    //         required
    //       />
    //     </Form.Group>
    //     {/* GROUP 2: EMAIL */}
    //     <Form.Group className="mb-3" controlId="email">
    //       <Form.Label>Email</Form.Label>
    //       <Form.Control
    //         type="email"
    //         placeholder="Email"
    //         name="email"
    //         value={email}
    //         onChange={handleTextChange}
    //         required
    //       />
    //     </Form.Group>

    //     {/* GROUP 3: PASSWORD */}
    //     <Form.Group className="mb-3" controlId="password">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control
    //         type="password"
    //         placeholder="Password"
    //         name="password"
    //         value={password}
    //         onChange={handleTextChange}
    //         required
    //       />
    //     </Form.Group>

    //     {/* GROUP 4: PASSWORD CONFIRM */}
    //     <Form.Group className="mb-3" controlId="password-confirm">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control
    //         type="password"
    //         placeholder="Password Confirmation"
    //         ref={passwordConfirmRef}
    //         required
    //       />
    //     </Form.Group>

    //     {/* SUBMIT BUTTON */}
    //     <SyButton loadingState={loading}>{loading ? "..." : "Submit"}</SyButton>
    //   </Form>
    <div className={styles.userNav}>
      <span>
        Already a member? &nbsp;
        <Link to="/login">Login Here</Link>
      </span>
    </div>
    // </SyCard>
  );
}

export default SignupPage;
