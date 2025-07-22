import Alert from "react-bootstrap/Alert";

function AdditionalContentExample() {
  return (
    <Alert variant="dark">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>Welcome to my web page!</p>
      <hr />
      <p className="mb-0">Are you looking for a book?</p>
    </Alert>
  );
}

export default AdditionalContentExample;
