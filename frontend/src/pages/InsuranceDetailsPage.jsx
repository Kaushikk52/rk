import React from 'react'
import { useParams } from 'react-router-dom'
const InsuranceDetailsPage = () => {

    const insurances = [
        { id: 1, category: 'property-insurance', title: 'Property', description: 'Property insurance description' },
        { id: 2, category: 'auto-insurance', title: 'Auto', description: 'Auto insurance description' },
        { id: 3, category: 'motor-cycle-insurance', title: 'Motorcycle', description: 'Motorcycle insurance description' },
        { id: 4, category: 'health-insurance', title: 'Health', description: 'Health insurance description' },
        { id: 5, category: 'life-insurance', title: 'Life', description: 'Life insurance description' },
        { id: 6, category: 'family-health-insurance', title: 'Family Health', description: 'Family health insurance description' },
      ];

    const { title } = useParams()
    const insurance = insurances.find(item => item.category === title)

    if(!insurance) {
     return <p>Insurance not found!</p> 
    }

    return (
        <>
        <h1>{insurance.title}</h1>
        </>
    )
}

export default InsuranceDetailsPage