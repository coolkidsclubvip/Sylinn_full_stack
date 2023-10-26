
import { Button } from "react-bootstrap";

function SyButton({loading,children}) {
  return (
    <Button
      className="btn btn-primary"
      type="submit"
      value="Submit"
      disabled={loading ? 1 : 0}
   >
    {children}
   </Button>
   
  );
}

export default SyButton