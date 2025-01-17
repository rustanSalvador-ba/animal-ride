
import '../css/Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "../Components/NavBar"
import Head from "../Components/Head"
import PlayerLabel from "../Components/PlayerLabel"
import Footer from "../Components/Footer"
import { useState, useEffect, useRef } from 'react'
//import * as me from 'melonjs/dist/melonjs.module.js';
import * as me from 'melonjs'
import TitleScreen from '../js/stage/title.js';
import PlayScreen from '../js/stage/play.js';
import {PlayerEntity, CoinEntity, EnemyEntity} from '../js/renderables/entities.js';
//import PlayerEntity from "./js/renderables/player-entity.js";
//import CoinEntity from "./js/renderables/coin-entity.js";
//import EnemyEntity from "./js/renderables/enemy-entity.js";
import Sala from '../Components/Sala'
import InputRoom from '../Components/InputRoom'
import DataManifest from '../manifest.js';
 
export default function AnimalRide () {
  const [isClient, setIsClient] = useState(false)
  const [idSessao, setIdSessao] = useState(0)
  const [salasShow, setSalasShow] = useState(false)
  const [playersShow, setPlayersShow] = useState(false)
  const [gameShow, setGameShow] = useState("none")
  const [newRoomShow, setNewRoomShow] = useState("none")
  const [mainPlayer, setMainPlayer] = useState([])



  const [salas, setSalas] = useState([{}])

  function handleClick(name) {
    setMainPlayer(name)
    }
  function getName(mainPlayer){
    
        if(mainPlayer=="mainPlayer")return "Nina"
        if(mainPlayer=="mainPlayerTeff")return "Teff"
        if(mainPlayer=="mainPlayerSnow")return "Snow"
        if(mainPlayer=="mainPlayerDark")return "Dark"
    
  }
    function showInputNewRoom(){
        if (newRoomShow)
            setNewRoomShow(false)
        else
            setNewRoomShow("none")
    }

    function showGameShow(){
        if (gameShow)
            setGameShow(false)
        else 
            setGameShow("none")        
    }

    function showPlayers(){
        if (playersShow)
            setPlayersShow(false)
        else{ 
            setPlayersShow("none")
        }
    }
function selectPlayer(name){
    console.log("select", name)
    switch(name) {
        case("mainPlayer"): {
            me.pool.register("mainPlayer", PlayerEntity);
            me.pool.register("mainPlayerDark", CoinEntity);
            me.pool.register("mainPlayerTeff", CoinEntity);
            me.pool.register("mainPlayerSnow", CoinEntity);
        } 
        case("mainPlayerTeff"):{ 
            me.pool.register("mainPlayerTeff", PlayerEntity);
            me.pool.register("mainPlayerDark", CoinEntity);
            me.pool.register("mainPlayer", CoinEntity);
            me.pool.register("mainPlayerSnow", CoinEntity);

        }
        case("mainPlayerSnow"):{
            me.pool.register("mainPlayerSnow", PlayerEntity);
            me.pool.register("mainPlayerDark", CoinEntity);
            me.pool.register("mainPlayer", CoinEntity);
            me.pool.register("mainPlayerTeff", CoinEntity);
        } 
        case ("mainPlayerDark"):{
            me.pool.register("mainPlayerSnow", CoinEntity);
            me.pool.register("mainPlayerDark", PlayerEntity);
            me.pool.register("mainPlayer", CoinEntity);
            me.pool.register("mainPlayerTeff", CoinEntity);
        }
    }
}
function add(e) {
        let nome = document.getElementById('room-name')?.value
        let hasName = false
        salas.forEach(sala=> {
           if (sala.name === nome || nome === null) 
           hasName = true
        }) 

        if (!hasName){
          //  salasIni.push({id:++idSessao, name: nome})
            setIdSessao((sessao)=>++sessao)
            let sala =  {id:idSessao, name: nome}
            setSalas ([...salas, sala])
        }
    }

  useEffect(() => {
   
    window.$ = window.jQuery = require('jquery')
    setIsClient(true)
    me.device.onReady(() => {
    // Initialize the video.
    // if (!me.video.init(640, 480, {parent : "screen", scale : "auto"})) {
    //     swal("Your browser does not support HTML5 canvas.");
    //     return;
    // }
 
    // me.loader.preload(DataManifest, function() {
    //     // set the user defined game stages
    //    // me.state.set(me.state.MENU, new TitleScreen());
      
    //     // set a global fading transition for the screen
    //     me.state.transition("fade", "#FFFFFF", 250);
     
    //     me.pool.register("CoinEntity", CoinEntity);
    //     me.pool.register("EnemyEntity", EnemyEntity);
    //       // enable the keyboard
    //       me.input.bindKey(me.input.KEY.LEFT,  "left");
    //       me.input.bindKey(me.input.KEY.RIGHT, "right");
    //       // map X, Up Arrow and Space for jump
    //       //me.input.bindKey(me.input.KEY.X,      "jump", true);
    //       me.input.bindKey(me.input.KEY.UP, "jump", false);
    //   //  me.input.bindKey(me.input.KEY.SPACE,  "jump", true);
    //       // Start the game.
    //       // me.state.set(me.state.MENU, new TitleScreen());
    //       // me.state.change(me.state.MENU);
    //     //  me.state.set(me.state.PLAY);
    //     me.state.set(me.state.PLAY, new PlayScreen());
    // })
          
           // me.state.change(me.state.PLAY)
 
            document.getElementById('start')?.addEventListener("click",()=>{ 
                console.log("play") 
                showGameShow() 
            })
});
  }, [])

    if (!isClient)
     return(<></>)
    else
     return (
    <html lang="en">
    <Head/>
        <body>
            <NavBar/>
             <div id='salas' style={{display:salasShow}}>
               <span className='pull-right' style={{marginRight:'5px'}}><span  onClick={()=>showInputNewRoom()}  className={newRoomShow ? "glyphicon glyphicon-plus online":"glyphicon glyphicon-minus online"}> </span></span>
                <div id='newRoom' style={{display:newRoomShow}}>
                    <h5>New room</h5>
                    <InputRoom  onClick={(e)=>add(e)}></InputRoom>
                </div> 
                <h5>Roons On-line</h5>
                    {
                        salas.map(el=>{
                            return (<div><Sala name={el.name} href={el.id} player={mainPlayer}></Sala></div>)
                        })
                    }
              </div>
                <div id="players" style={{display:playersShow}}>
                <h5>Selected: {getName(mainPlayer) } <PlayerLabel id={mainPlayer} name={mainPlayer} onClick={(e)=>{  handleClick({mainPlayer})}}></PlayerLabel>
                </h5>
                <h5>Select a Player</h5>
                  <PlayerLabel id="mainPlayer" name="mainPlayer" onClick={(e)=>{  handleClick("mainPlayer")}}></PlayerLabel>
                  <PlayerLabel id="mainPlayerTeff" name="mainPlayerTeff" onClick={(e)=>setMainPlayer("mainPlayerTeff")}></PlayerLabel>
                  <PlayerLabel id="mainPlayerSnow" name="mainPlayerSnow" onClick={(e)=>setMainPlayer("mainPlayerSnow")}></PlayerLabel>
                  <PlayerLabel name="mainPlayerDark" onClick={(e)=>setMainPlayer("mainPlayerDark")}></PlayerLabel>
                </div>
                <div>
                    <button id="start" type="button" className="btn btn-info text-center">Play Now</button>
                </div>
            
            <Footer/>
        </body>
    </html>)
}

