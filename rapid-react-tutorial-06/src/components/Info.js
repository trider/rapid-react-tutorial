import * as React from 'react';
import Alert from 'react-bootstrap/Alert';




const Welcome = (user) => { 
  return (
    <div>
       Welcome: {user.name}
      <span style={{ float: "right" }}>
      <button className="btn btn-sm btn-primary" onClick={(e)=>{
        alert(JSON.stringify(user));
      }} >View Profile</button>
        
      </span>

    </div>
   );
}


const Status = (user) => {
  return (
    <div>
       Status: { user.isLoggedIn ? 'Authenticated' : 'Not Authenticated' }
    </div>
  );
}

const getInfo = (props) => {
  if(props.infoType==='profile'){
    return  <Welcome {...props.user} />
    

  }
  else if(props.infoType==='status'){
    return <Status{...props.user} />
  }
}



const Info= (props) => { 

      return (
        <Alert variant={props.variantInfo}>
          {getInfo(props)}
          {/* {props.inforType === 'profile' ? <Welcome {...props.user} /> : <Status {...props.user} />} */}
        </Alert>
      );

   }
  

 

    


  // }




export default Info;