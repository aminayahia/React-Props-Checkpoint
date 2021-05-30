
import PropTypes from "prop-types";
import img3 from './images/img3.jpg';
import {Card , Button} from 'react-bootstrap';
const Profil = (props) =>{
   // const Style={color:"red"}
console.log(props)
 
    return( 
        <div /*style={Style}*/>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.src} />
                <Card.Body>
                    <Card.Title>{props.fullName}</Card.Title>
                    <Card.Text>
                    {props.profession}
                    </Card.Text>
                    <Button onClick={props.handelClick(props.fullName)}>Click</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
Profil.defaultProps = {
    fullName: "amina",
    bio: "bio",
    profession: "profession",
    src:{img3}
   };
Profil.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
   };   
export default Profil;