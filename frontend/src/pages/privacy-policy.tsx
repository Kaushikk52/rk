import React from 'react'

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">
          Privacy Policy
        </h1>

        {/* Introduction Section */}
        <div className="mb-12">
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold">RK Insurance</span> is committed to lawful, fair, and transparent collection of your data. This policy governs data collection by us and our affiliates (collectively the "Company") when you purchase or use our products, services, software, and website (collectively the "Services"). It was drafted to help you understand the types of information we collect from you, how we use it, as well as how we share, store and protect it. If you do not agree with this policy, you should not use our Services. By accessing or using our Services, you agree to this policy, which may change from time to time to better reflect our practices and applicable laws. Your continued use after we make change(s) is deemed acceptance of those changes.
          </p>
        </div>

        {/* Children Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Children Under the Age of 13
          </h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <p className="text-yellow-700 font-medium">
              [NOTE: IF YOU ARE MARKETING TO AND/OR COLLECTING DATA FROM MINORS, YOU SHOULD CONSULT A PROFESSIONAL ADVISOR.]
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Our Services are not intended for minors (children under 13 years of age or equivalent depending on jurisdiction, ("Children"), and use of our Services by Children is strictly prohibited. We do not knowingly collect personally identifiable information from Children. If we learn we have collected or received personal information from Children without verification of parental consent, we will delete that information. If you believe we might have any information from or about Children, please contact us.
          </p>
        </section>

        {/* Information Collection Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Types of Information We Collect
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
              <p className="text-gray-700">
                [NOTE: IF YOU ARE LOCATED IN CALIFORNIA, THE EU, OR OTHER JURISDICTION WITH MORE SPECIFIC DATA PRIVACY REGULATIONS, YOU SHOULD CONSULT A PROFESSIONAL ADVISOR.]
              </p>
            </div>
            <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
              <p className="text-gray-700">
                [NOTE: IF YOU ARE COLLECTING DATA FROM RESIDENTS IN CALIFORNIA OR THE EU, OR OTHER JURISDICTIONS WITH MORE SPECIFIC DATA PRIVACY REGULATIONS, YOU SHOULD CONSULT A PROFESSIONAL ADVISOR.]
              </p>
            </div>
            <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
              <p className="text-gray-700">
                [NOTE: IF YOU ARE COLLECTING SENSITIVE INFORMATION, SUCH AS CREDIT CARD NUMBERS OR SOCIAL SECURITY NUMBERS, YOU SHOULD CONSULT A PROFESSIONAL ADVISOR.]
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              We collect information if you voluntarily provide it to us. For example, if you sign up for our Services, you might give us your name and email address. You might also give us data when you email us or give us feedback. In addition, you may submit information online through surveys, forms, portals, or other interactive activities on our website, details about transactions you carry out through our website. It is always your choice whether or not to provide personal data unless you are authorized to do so. We may collect the following information directly from you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Information that may be personally identified, such as name, address, e-mail address, and other identifier by which you may be contacted online or offline ("personal information");
              </li>
              <li>
                Information that is about you but individually does not identify you; and/or
              </li>
              <li>
                Information about how you interact with our website, such as internet connection or the equipment you use to access the Services.
              </li>
            </ul>
            <p>
              This policy does not apply to third-party sites that may link to, or be accessible from, our site. We do not control these third parties' tracking technologies or how they may be used. Your interactions with these sites are governed by the third parties' applicable privacy statements. If you have any questions about these sites, you should contact the responsible provider directly.
            </p>
          </div>
        </section>

        {/* Automatic Collection Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            We may also collect information automatically:
          </h2>
          <p className="text-gray-700 leading-relaxed">
            As you interact with our website, we may use automatic data collection technologies to collect certain information about your equipment, browsing actions, and patterns, including details of your visits to our website, traffic data, location data, logs, and other communication data and the resources that you access and use on the website.
          </p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy;