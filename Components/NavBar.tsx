import  React from 'react'

let toogle: boolean = false;

export function toogleNavBar (state:boolean) {
    $("#myNavbar").toggle(state)
} 

function NavBar(props:any){
        return <nav className="navbar navbar-inverse painel" style={{backgroundColor:'hsl(182, 84%, 50%)', borderColor:'hsl(182, 84%, 50%)'}}>
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" onClick={()=>handleToogle(toogle)} style={{backgroundColor:'hsl(182, 84%, 50%)', borderColor:'white'}}>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>                        
                    </button>
                    <a className="navbar-brand" href="animal-ride" style={{color: 'white'}}>Animal Ride</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                    <li><a href="/animal-ride" ><span className="glyphicon glyphicon-home"></span> Lobby</a></li>
                    <li><a href="/ranking" ><span className="glyphicon glyphicon-star"></span> Ranking</a></li> 
                    <li><a href="/contact" ><span className="glyphicon glyphicon-envelope"></span> Contact</a></li>
                    <li><a href="/about" ><span className="glyphicon glyphicon-question-sign"></span> About</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                    <li><a href="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    }
 

function handleToogle(state:boolean) {
    toogle = !state
    toogleNavBar (toogle)
}

export default NavBar;