import React from 'react'

function Greeting(props) {
  return (
    <div>
     {
       props.greetings.map((greeting)=> {
        
        return  (
            <div key= {greeting.id}>
                <h3>{greeting.message}</h3>
            </div>
        );

      })}
    </div>
  );
}

export default Greeting;
