import Card from 'react-bootstrap/Card';


function Image({url}) {
  return (
    <div>
    <Card.Img variant="top" src={url}/>


    </div>
  )
}

export default Image
