import React from 'react'
import { useParams } from 'react-router-dom'
const InsuranceDetailsPage = () => {
    const { title } = useParams()
    const insurance = insurances.find(item => item.category === title)

    if(!insurance)
    return (
        <>

        </>
    )
}

export default InsuranceDetailsPage