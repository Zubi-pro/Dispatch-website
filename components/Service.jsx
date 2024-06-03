import React from 'react'

import ServiceList from './ServiceList'
const Services = () => {
    return (
        <>
            <section style={{ "padding": "50px 5px" }} className="section">
                <div className="text">
                    <h1 style={{ "fontSize": "60px" }}>Our services</h1>
                    <p>
                        Enhance Your Trucking Operations with Our Best-in-Class Dispatch Services.

                    </p>
                </div>
                <div className="image">
                    <img style={{ "width": "50%", "borderRadius": "10px" }} src="../public/Pics/goals.jpeg" alt="Description" />
                </div>
            </section>

            <ServiceList/>
        </>
    )
}

export default Services