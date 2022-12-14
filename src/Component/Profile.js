import PropTypes from 'prop-types';

let Profile=({name,Bio,Profession,handleName})=>{
    return(
            <div className='props'>
                <h3>My name is : {name}</h3>
                <h4>My Bio is : {Bio}</h4>
                <h5>My Profession is : {Profession}</h5>
                <img src='/proj1.jpg' alt='Not Found'/><br/>
                <button onClick={()=>handleName("Sana")}>HELLO</button>
            </div>
                
               
        )
    }

    Profile.defaultProps={
        name : "Kafteji"
    }
    
    
    Profile.propTypes = {
    
        name: PropTypes.number
     }
     
   
    
    
    export default Profile