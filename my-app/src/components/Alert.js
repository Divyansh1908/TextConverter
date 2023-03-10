import React from 'react'

export default function Alert(props) {

    const capitals = (word) =>
    {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return ( 
    //props.alert if true then only other will run otherwise nothing run (if props.alert not equal to run then do this)
    <div style={{height:'50px'}}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
         <strong>{capitals(props.alert.type)}</strong>: {props.alert.msg}
    </div>}
    </div>
  )
}
