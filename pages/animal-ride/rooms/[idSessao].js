import '../../../css/Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "../../../Components/NavBar"
import Head from "../../../Components/Head"
import Footer from "../../../Components/Footer"
import GamePad from "../../../Components/GamePad"
import { useState, useEffect } from 'react'
import { useParams } from 'next/router';
import * as me from 'melonjs'
import DataManifest from '../../../manifest.js';
import PlayScreen from '../../../js/stage/play.js';
import TitleScreen from '../../../js/stage/title.js';
import {PlayerEntity, CoinEntity, EnemyEntity} from '../../../js/renderables/entities.js';


export default function Rooms (props) {
  const [mainPlayer, setMainPlayer] = useState()
  const [isClient, setIsClient] = useState(false)
  const [idSessao, setIdSessao] = useState(0)

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
    }
  useEffect(() => {
    var param = getQueryVariable("player");
    setMainPlayer(param)
    setIdSessao(props.id)
    window.$ = window.jQuery = require('jquery')
         me.device.onReady(() => {
            setIsClient(true)
         // Initialize the video.
         if (!me.video.init(640, 480, {parent : "screen", scale : "auto"})) {
           //  swal("Your browser does not support HTML5 canvas.");
             return;
         } 
      
         me.loader.preload(DataManifest, function() {
             // set the user defined game stages
            // me.state.set(me.state.MENU, new TitleScreen());
         
             // set a global fading transition for the screen
             me.state.transition("fade", "#FFFFFF", 250);
             switch(param) {
                 case("mainPlayer"): {
                     me.pool.register("mainPlayer", PlayerEntity);
                     me.pool.register("mainPlayerDark", CoinEntity);
                     me.pool.register("mainPlayerTeff", CoinEntity);
                     me.pool.register("mainPlayerSnow", CoinEntity);
                     break 
                 } 
                 case("mainPlayerTeff"):{ 
                     me.pool.register("mainPlayerTeff", PlayerEntity);
                     me.pool.register("mainPlayerDark", CoinEntity);
                     me.pool.register("mainPlayer", CoinEntity);
                     me.pool.register("mainPlayerSnow", CoinEntity);
                     break 
                 }
                 case("mainPlayerSnow"):{
                     me.pool.register("mainPlayerSnow", PlayerEntity);
                     me.pool.register("mainPlayerDark", CoinEntity);
                     me.pool.register("mainPlayer", CoinEntity);
                     me.pool.register("mainPlayerTeff", CoinEntity);
                     break 
                 } 
                 case ("mainPlayerDark"):{
                     me.pool.register("mainPlayerSnow", CoinEntity);
                     me.pool.register("mainPlayerDark", PlayerEntity);
                     me.pool.register("mainPlayer", CoinEntity);
                     me.pool.register("mainPlayerTeff", CoinEntity);
                     break 
                 }
             }
             me.pool.register("CoinEntity", CoinEntity);
             me.pool.register("EnemyEntity", EnemyEntity);
               // enable the keyboard
               me.input.bindKey(me.input.KEY.LEFT,  "left");
               me.input.bindKey(me.input.KEY.RIGHT, "right");
               // map X, Up Arrow and Space for jump
               //me.input.bindKey(me.input.KEY.X,      "jump", true);
               me.input.bindKey(me.input.KEY.UP, "jump", false);
           //  me.input.bindKey(me.input.KEY.SPACE,  "jump", true);
               // Start the game.
             //  me.state.set(me.state.MENU, new TitleScreen());
              // me.state.change(me.state.MENU);
              me.pool.register(param, PlayerEntity);
              me.state.set(me.state.PLAY, new PlayScreen());
              me.state.change(me.state.PLAY)
              me.state.transition("start")
         })
        //me.state.set(me.state.PLAY, new PlayScreen());
     });
       }, [mainPlayer])

  if (!isClient)
  return(<></>)
  else
    return (isClient&&
    <html>
        <Head/>
        <body>
            <NavBar/>
            <span>Sessâo: {idSessao}</span>
            <div id="container">
              <div id="screen"></div>
            </div>
            
            <GamePad name=""/>
            <Footer name="Room"/>
        </body>
    </html>
    )
}

