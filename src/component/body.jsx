import './styles.css'
import Map from './map'

//importing the Map component from ./map
//the header and title are added for styling


const Body = () => {
    return (
        <>
            <header>
                <div className='logo-img-container'>
                    <img src='/images/coffe.jpg' alt='coffee'/>
                </div>
                <h1>Lagos Coffee Shop</h1>
                <p>Just brewed happiness in a cup!</p>
            </header>
            <main>
                <p>On your next trip, locate us at Chevron Toll Plaza, Chevron Drive, Lekki, Lagos State</p>
                <Map/>
            </main>
        </>
    )
}

export default Body