import  React from 'react'
import nina from "../public/data/img/sprite/nina/nina.png"
import snow from "../public/data/img/sprite/snow/snow.png"
import teff from "../public/data/img/sprite/teff/teff.png"
import dark from "../public/data/img/sprite/dark/dark.gif"

function PlayerLabel(props:any)  {
    let name: String = props.name ? props.name: "";
    let width= props.width ? props.width: "";
    let height = props.height ? props.height: "";
    
    switch(name) { 
        case "mainPlayer":
            return (
                <div className='col-md-3 painel_img' onClick={props.onClick}>
                    <h6>Nina</h6><br/>
                  <img width={width} height={height} src={nina.src}/>
                </div>)
      
        case "mainPlayerTeff":
            return (
                <div className='col-md-3 painel_img' onClick={props.onClick}>
                   <h6>Teff</h6><br/>
                  <img width={width} height={height} src={teff.src}/>
                </div>)
       
        case "mainPlayerSnow":
            return (
                <div className='col-md-3 painel_img' onClick={props.onClick}>
                  <h6>Snow</h6><br/>
                  <img  width={width} height={height} src={snow.src}/>
                </div>)
        case "mainPlayerDark":
        return (
            <div className='col-md-3 painel_img_dark' onClick={props.onClick}>
                <h6>Dark</h6><br/>
                <img width={width} height={height} src={dark.src} />
            </div>)
        default: 
           return (
            <div className='col-md-3 painel_img'  onClick={props.onClick}>
                 <h6>Nina</h6><br/>
                <img width={width} height={height} className='col-md-3 painel_img' src={nina.src}/>
            </div>)
    }
   
  }
export default PlayerLabel;