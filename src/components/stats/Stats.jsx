import React from "react";
import "./Stats.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Stats = () => {
    const stats = [
        { label: "Cases Solved", value: "1,200+" },
        { label: "Transactions & M&A", value: "850+" },
        { label: "Total Value", value: "$3B+" },
        { label: "M&A Value", value: "$1.5B+" },
        { label: "Clients Served", value: "500+" },
        { label: "Awards Won", value: "15+" },
        { label: "Years of Experience", value: "25+" },
        { label: "Global Offices", value: "10+" },
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div className="stats-container">
            <h2 className="stats-title">Nossos feitos</h2>
            <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
                {stats.map((stat, index) => (
                    <div key={index} className="stat-item">
                        <div className="stat-circle">
                            <span className="stat-value">{stat.value}</span>
                        </div>
                        <p className="stat-label">{stat.label}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Stats;