import * as React from 'react';
import Alert from 'react-bootstrap/Alert';



const Profile = (user) => { 
  return (
   <Alert variant="info">
   Welcome: {user.name}
   <span style={{ float: "right" }}>
   <button className="btn btn-sm btn-primary" onClick={(e)=>{
     alert(JSON.stringify(user));
   }} >View Profile</button>
     
   </span>
   

 </Alert>
  );
}

export default Profile;