
import { Button } from "react-bootstrap";
import Loader from "./Loader";

function SyButton({loading,children,onClick}) {
  return (
    <Button
      className="btn btn-primary"
      type="submit"
      value="Submit"
      onClick={onClick}
      disabled={loading ? 1 : 0}
    >
      {loading ? <Loader /> :  children }
    </Button>
  );
}

export default SyButton