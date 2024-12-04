import Alert from "react-bootstrap/Alert";

const Welcome = (user) => {
  return (
    <div>
      Welcome: {user.name}
      <span style={{ float: "right" }}>
        <button
          className="btn btn-sm btn-primary"
          onClick={(e) => {
            alert(JSON.stringify(user));
          }}
        >
          View Profile
        </button>
      </span>
    </div>
  );
};

const Info = (props) => {
  return (
    <Alert variant={props.variantInfo}>
      <Welcome {...props.user} />
    </Alert>
  );
};

export default Info;