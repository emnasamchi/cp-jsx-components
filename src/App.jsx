import "./App.css";
import { product } from "../product";
import Card from "react-bootstrap/Card";
import Image from "./components/image";
import Name from "./components/Name";
import Description from "./components/Description";
import Price from "./components/Price";

function App(props) {
  console.log(props);
  return (
    <>
      {" "}
      <Card style={{ width: "18rem" }}>
        <Image url={props.url} />
        <Card.Body>
          <Card.Title >


            <Name name={props.name }/>
          </Card.Title>
          <Card.Text>
           <Description description={props.description}/>
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Price  price ={props.price}/>
        </Card.Body>
      </Card>

    </>
  );
}
App.defaultProps = product;

export default App;
