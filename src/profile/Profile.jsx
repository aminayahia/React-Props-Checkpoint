import PropTypes from "prop-types";
const Profil = (props) =>{
    const Style={color:"red"}
    return( 
        <div style={Style}>
            <h3>name: {props.fullName}</h3>
            <h3>bio: {props.bio}</h3>
            <h3>profession: {props.profession}</h3>
            {props.children}<br />
            <a onClick={props.handelClick}>Click</a>
        </div>
    )
}
Profil.defaultProps = {
    name: "amina",
    bio: "bio",
    profession: "profession"
   };
Profil.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
   };   
export default Profil;