import  React from 'react'

function InputRoom(props:any)  {
 
let name = props.name ? props.name: "Animal Ride";
  return <div>
    <input id="room-name" className='input_text' placeholder='type here...'>
      </input> <button id="new-room-button" type="button" className='btn btn-info text-center' onClick={props.onClick}>New room</button>
  </div> 
}

export default InputRoom;