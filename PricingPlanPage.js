// PricingPlanPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PricingPlanPage.css';

const PricingPlanPage = () => {
    const navigate = useNavigate();

    const handleSelectPlan = (plan) => {
        if (plan === 'premium' || plan === 'gold') {
            navigate('/payment');
        } else {
            alert("You have selected the Free Plan. Enjoy basic access!");
        }
    };

    return (
        <div className="pricing-page">
            <h1 className="pricing-title">Choose Your Plan</h1>
            <div className="plan-container">
                <div className="plan-card free-plan">
                    <h2>Free Plan</h2>
                    <h3 className="price">$0<span>/month</span></h3>
                    <ul>
                         <li>Limited features</li>
                    </ul>
                    <button 
                        className="select-button"
                        onClick={() => handleSelectPlan('free')}
                    >
                        Select Free Plan
                    </button>
                </div>

                <div className="plan-card gold-plan">
                    <h2>Gold Plan</h2>
                    <h3 className="price">$299<span>/month</span></h3>
                    <ul>
                        <li>Customization features</li>
                    </ul>
                    <button 
                        className="select-button"
                        onClick={() => handleSelectPlan('gold')}
                    >
                        Select Gold Plan
                    </button>
                </div>

                <div className="plan-card Diamond-plan">
                    <h2>Diamond Plan</h2>
                    <h3 className="price">$699<span>/month</span></h3>
                    <ul>
                        <li>Priority support</li>
                    </ul>
                    <button 
                        className="select-button"
                        onClick={() => handleSelectPlan('diamond')}
                    >
                        Select Diamond Plan
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PricingPlanPage;
