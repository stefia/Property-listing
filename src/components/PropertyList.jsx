import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import '../index.css';

export default function PropertyList({selectedCountry, isSuperhost}) {
    const [propertyData, setPropertyData] = useState([]);

    
    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json")
            .then((response) => response.json())
            .then((data) => {
                setPropertyData(data)
            })
            .catch((error) => {
              // Handle any errors here
            });
    }, []);
    const filtered = propertyData.filter((p) => {
        const byCountry =
            selectedCountry.size === 0 || selectedCountry.has(p.location);
        const bySuperhost = !isSuperhost || p.superhost === true;
        return byCountry && bySuperhost;
    });
    
    return (
        <div className="property-list">
            <div className="property-title">Over 200 stays</div>
        {filtered.map((property) => (
            <PropertyCard key={property.id} {...property} />
        ))}
        </div>
    );
}
