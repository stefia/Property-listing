import React from 'react';
import { useState, useEffect } from 'react'
import '../index.css';

export default function FilterBar({ setIsSuperhost, isSuperhost, selectedCountry, setSelectedCountry}) {
    const countries = ["All Stays", "Norway", "Finland", "Sweden", "Switzerland"];
    const onToggleCountry = (country) => {
        if (country === "All Stays") {
            setSelectedCountry(new Set())
            return
        }
        setSelectedCountry(prev => {
            const next = new Set(prev);
            if (next.has(country)) next.delete(country);
            else next.add(country);
            return next;
        })
    }
    const isActive = (country) => country === "All Stays" ? selectedCountry.size === 0 : selectedCountry.has(country)
    return (
        <div className="filterBar">
            <div className="filterBar-wrapper">
                <div className="countries">
                {countries.map((country) => (
                    <button
                        key = {country}
                        className={`btn ${isActive(country) ? "active" : ""}`}
                        onClick = {() => onToggleCountry(country)}
                        >
                        {country}
                    </button>
                ))}
                </div>
                <div className="switch">
                <input
                    id="superhost-toggle"
                    className="switch-input"
                    type="checkbox"
                    checked={isSuperhost}
                    onChange={() => setIsSuperhost(!isSuperhost)}
                    aria-label="Superhost"
                />
                <label htmlFor="superhost-toggle" className="switch-label">
                    <span className="switch-track" aria-hidden="true"></span>
                </label>
                <span className="switch-name">Superhost</span>
                </div>
            </div>
        </div>
    )
}