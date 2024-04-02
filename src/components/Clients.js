import React from 'react'
import client1 from '../assets/media/clients/client1.png'
import client2 from '../assets/media/clients/client2.png'
import client3 from '../assets/media/clients/client3.png'
import client4 from '../assets/media/clients/client4.png'
import client5 from '../assets/media/clients/client5.png'
import client6 from '../assets/media/clients/client6.png'

const Clients = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={client1} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={client2} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={client3} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={client4} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={client5} className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src={client6} className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Clients
