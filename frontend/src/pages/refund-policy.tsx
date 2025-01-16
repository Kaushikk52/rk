import React from 'react'

function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">
        Refund Policy
      </h1>

      {/* Introduction Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <span className="font-semibold">RK Insurance</span> is committed to your satisfaction. If you have purchased digital/hard goods/subscription from RK Insurance and are unhappy with the service received, you may be eligible for a refund/partial refund if requested within 1 days of the original purchase date.
        </p>
      </section>

      {/* Hard Goods Refund Section */}
      <section className="mb-8">
        <h3 className="text-xl font-bold text-blue-900 mb-4">
          Refunds of Hard Goods:
        </h3>
        <p className="text-gray-700 mb-4">To be eligible for return and refund, the following steps must be taken:</p>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
          <li>Refund must be requested in writing by contacting hr@rkinsuranceservice.in</li>
          <li>Request of refund must be made within 1 days of the original purchase date</li>
          <li>Hard goods must be returned to RK Insurance immediately, according to the instructions you will receive once contacting hr@rkinsuranceservice.in as directed in step 1.</li>
          <li>The item(s) must be unused and returned in the original packaging, in like-new, or re-sellable condition, as determined in RK Insurance sole, reasonable discretion.</li>
          <li>Once refund is process it will be back to source within 5-7 business working days</li>
        </ol>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h4 className="font-bold text-gray-900 mb-2">Non-returnable Items:</h4>
          <p className="text-gray-700 mb-2">The following items are non-returnable as stated at the time of purchase on www.rkinsuranceservice.in/</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Item</li>
            <li>Item</li>
          </ul>
        </div>
      </section>

      {/* Digital/Subscription Refund Section */}
      <section className="mb-8">
        <h3 className="text-xl font-bold text-blue-900 mb-4">
          Refunds of Digital/Subscription Based Goods:
        </h3>
        <p className="text-gray-700 mb-4">To be eligible for a refund on any digital/subscription based goods, the following steps must be taken:</p>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
          <li>Refund must be requested in writing by contacting hr@rkinsuranceservice.in</li>
          <li>Request of refund must be made within 7days of the original purchase date</li>
        </ol>
        <p className="text-gray-700 mb-4">
          RK Insurance is committed to its consumers, and while we stand by our policy as written above, we also want to understand how we can resolve the dissatisfaction and better understand how we can serve you.
        </p>
        <p className="text-gray-700 mb-4">
          Once refund is processed it will be credited within 5-7 days
        </p>
        <p className="text-gray-700 mb-4">
          Please contact RK Insurance at hr@rkinsuranceservice.in for any questions related to our policy, or simply to let us know how we can help
        </p>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-50 p-6 rounded-lg">
        <h3 className="font-bold text-gray-900 mb-4">RK Insurance</h3>
        <address className="text-gray-700 not-italic">
          <p>OFFICE NO. D-319, 2ND FLOOR,</p>
          <p>SHANTI SHOPPING CENTRE, OPP.</p>
          <p>MIRA ROAD RAILWAY STATION,</p>
          <p>MIRA ROAD (EAST), THANE , Pin 401107</p>
        </address>
      </section>
    </div>
  </div>
  )
}

export default RefundPolicy;