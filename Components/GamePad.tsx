import  React from 'react'

function GamePad(props:any)  {
 
let name = props.name ? props.name: "Animal Ride";

  return <div className='text-center' style={{bottom:50, position: 'fixed'}}>
            <div>
                 <button className='btn btn-primary'>Up</button>
            </div>
            <div> 
                <button className='btn btn-primary'>Left</button><button className='btn btn-primary'>Right</button>
            </div>
            <div>
                <button className='btn btn-primary'>Down</button>
            </div>
        </div>
}

export default GamePad;