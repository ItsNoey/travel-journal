import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img
                src={props.item.image}
                alt="me in Venice"
                className="card--image"
            />
            <div className="card--info-container">
                <div class="card--geo">
                    <i class="fa-solid fa-location-dot"></i>{" "}
                    <span className="card--location">
                        {props.item.location}
                    </span>
                    <span className="card--map">
                        <a href={props.item.googleMapsUrl} target="_blank">
                            View on Google Maps
                        </a>
                    </span>
                </div>
                <h2 className="card--title">{props.item.title}</h2>
                <h3 className="card--dates">
                    {props.item.startDate} - {props.item.endDate}
                </h3>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    );
}
