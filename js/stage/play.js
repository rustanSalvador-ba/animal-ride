import * as me from 'melonjs'
import data from '../../data/data.js'

export default class PlayScreen extends me.Stage {
    /**
     *  action to perform on state change
     */
    onResetEvent() {
        try {
            // Ensure the game world is ready
            if (!me.game.world) {
                console.error("Game world not initialized");
                return;
            }

            // Configure WebGL context if available
            if (me.video.renderer && me.video.renderer.WebGLRenderer) {
                const gl = me.video.renderer.context;
                if (gl) {
                    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
                    gl.enable(gl.BLEND);
                    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
                }
            }

            // Load level with error handling
            me.level.load("mapa3", {
                onLoaded: () => {
                    console.log("Map loaded successfully");
                    // reset the score
                    data.score = 0;

                    // add our HUD to the game world
                    this.HUD = new me.Container(0, 0, me.game.viewport.width, me.game.viewport.height);
                    me.game.world.addChild(this.HUD);
                },
                onError: (error) => {
                    console.error("Error loading map:", error);
                }
            });
        } catch (error) {
            console.error("Error in onResetEvent:", error);
        }
    }

    onDestroyEvent() {
        try {
            if (this.HUD && me.game.world) {
                me.game.world.removeChild(this.HUD);
            }
        } catch (error) {
            console.error("Error in onDestroyEvent:", error);
        }
    }
}
