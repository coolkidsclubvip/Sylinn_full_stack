
import { Button,Spinner } from "react-bootstrap";
 

function SyButton({loading,children,onClick}) {
  return (
    <Button
      className="btn btn-primary"
      type="submit"
      value="Submit"
      onClick={onClick}
      disabled={loading ? 1 : 0}
    >
      {loading ? (
        <Spinner animation="grow" size="sm" role="status" aria-hidden="true" />
      ) : (
        children
      )}
    </Button>
  );
}

export default SyButton