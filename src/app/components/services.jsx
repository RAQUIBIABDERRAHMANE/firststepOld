import React from "react";
import Link from "next/link";

const Service = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-base font-semibold leading-7 text-indigo-600 mb-4">Our Solutions</h2>
          <h3 className="text-section-title text-gray-900 mb-6">
            Industry-Specific Management Systems
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tailored solutions designed for specific industries, each optimized for unique operational requirements 
            and regulatory compliance needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Hospital and cabinet system Card */}
          <ServiceCard
            link={"/services/hospital"}
            title="Healthcare Management"
            details="Comprehensive healthcare solution managing patient records, appointments, billing, and diagnostics. Features telemedicine, inventory management, and HIPAA compliance."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="currentColor"
                className="text-indigo-600"
                viewBox="0 0 16 16"
              >
                <path d="M6 0a1 1 0 0 0-1 1v1a1 1 0 0 0-1 1v4H1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h6v-2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V16h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-3V3a1 1 0 0 0-1-1V1a1 1 0 0 0-1-1zm2.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1z" />
              </svg>
            }
            gradient="from-blue-500 to-cyan-500"
          />

          {/* Hotel system Card */}
          <ServiceCard
            link={"/services/hotel"}
            title="Hotel Management"
            details="All-in-one hotel operations platform with reservation management, front desk automation, housekeeping, billing, and guest services integration."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="text-indigo-600" viewBox="0 0 64 64">
                <path d="m28.558 7.098-.47 2.74a1 1 0 0 0 1.45 1.053L32 9.6l2.461 1.293a1 1 0 0 0 1.452-1.054l-.47-2.74 1.99-1.942a1 1 0 0 0-.553-1.705l-2.752-.4L32.897.558a1.04 1.04 0 0 0-1.793 0L29.873 3.05l-2.752.4a1 1 0 0 0-.554 1.705z" />
              </svg>
            }
            gradient="from-purple-500 to-pink-500"
          />

          {/* Car rental system Card */}
          <ServiceCard
            link={"/services/car"}
            title="Fleet Management"
            details="Comprehensive car rental and fleet operations platform with reservation management, vehicle tracking, maintenance scheduling, and customer profiles."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="currentColor"
                className="text-indigo-600"
                viewBox="0 0 16 16"
              >
                <path d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2z" />
              </svg>
            }
            gradient="from-green-500 to-emerald-500"
          />

          {/* Restaurant system Card */}
          <ServiceCard
            link={"/services/restaurant"}
            title="Restaurant Operations"
            details="Streamline restaurant operations with reservation handling, order management, POS integration, staff scheduling, and inventory tracking."
            icon={
              <svg
                width="48"
                height="48"
                viewBox="0 0 122.88 115.21"
                className="text-indigo-600"
                fill="currentColor"
              >
                <path d="M29.03,100.46l20.79-25.21l9.51,12.13L41,110.69C33.98,119.61,20.99,110.21,29.03,100.46L29.03,100.46z M53.31,43.05 c1.98-6.46,1.07-11.98-6.37-20.18L28.76,1c-2.58-3.03-8.66,1.42-6.12,5.09L37.18,24c2.75,3.34-2.36,7.76-5.2,4.32L16.94,9.8 c-2.8-3.21-8.59,1.03-5.66,4.7c4.24,5.1,10.8,13.43,15.04,18.53c2.94,2.99-1.53,7.42-4.43,3.69L6.96,18.32 c-2.19-2.38-5.77-0.9-6.72,1.88c-1.02,2.97,1.49,5.14,3.2,7.34L20.1,49.06c5.17,5.99,10.95,9.54,17.67,7.53 c1.03-0.31,2.29-0.94,3.64-1.77l44.76,57.78c2.41,3.11,7.06,3.44,10.08,0.93l0.69-0.57c3.4-2.83,3.95-8,1.04-11.34L50.58,47.16 C51.96,45.62,52.97,44.16,53.31,43.05L53.31,43.05z" />
              </svg>
            }
            gradient="from-orange-500 to-red-500"
          />

          {/* Stock management system Card */}
          <ServiceCard
            link={"/services/stock"}
            title="Inventory Control"
            details="Robust inventory management with real-time stock tracking, low-stock alerts, supplier integration, and analytics across multiple warehouses."
            icon={
              <svg
                fill="currentColor"
                height="48"
                width="48"
                viewBox="0 0 512 512"
                className="text-indigo-600"
              >
                <path d="M486.4,0c-14.114,0-25.6,11.486-25.6,25.6v93.867h-25.6V53.504c0-10.684-8.695-19.371-19.371-19.371h-63.659 c-10.675,0-19.371,8.687-19.371,19.371v65.963h-25.6V53.504c0-10.684-8.695-19.371-19.371-19.371h-63.659 c-10.675,0-19.371,8.687-19.371,19.371v65.963h-25.6V53.504c0-10.684-8.695-19.371-19.371-19.371H96.171 c-10.675,0-19.371,8.687-19.371,19.371v65.963H51.2V25.6C51.2,11.486,39.714,0,25.6,0S0,11.486,0,25.6V512h51.2v-51.2h25.6h102.4 h25.6h102.4h25.6h102.4h25.6V512H512V25.6C512,11.486,500.514,0,486.4,0z" />
              </svg>
            }
            gradient="from-indigo-500 to-blue-500"
          />

          {/* Custom Web app Card */}
          <ServiceCard
            link={"/services/CustomWebApp"}
            title="Custom Solutions"
            details="Bespoke web applications tailored to your unique business requirements with scalable architecture and modern technology stack."
            icon={
              <svg
                width="48"
                height="48"
                viewBox="0 0 122.88 113.37"
                className="text-indigo-600"
                fill="currentColor"
              >
                <path d="M110,99.72a8.29,8.29,0,0,1-1.84,2.72l-8.37,8.37,0,0A8.26,8.26,0,0,1,97,112.7a8.07,8.07,0,0,1-9.16-1.89l-5-4.89c0-6.18,0-11,0-12.08h0c0-1,0-1.68,0-2a4.35,4.35,0,0,1,.1-.63l.08-.25a18.71,18.71,0,0,1,1.15-3.2,30.43,30.43,0,0,1,3.07-4.87c5.51-7.45,8.2-16,7.5-24.24C92.55,31.67,59,19.56,39,38.89,31,46.59,26.91,58.09,29.9,69c2.38,8.71,7.5,13,11.84,20.1a19,19,0,0,1,1.63,3.37h0l0,.08a4.42,4.42,0,0,1,.21.84c.1.6.17,1.29.23,2.12v.31c.07,1,.13,5.41.19,11.09-.83-.34-1.66-.71-2.52-1.09s-2-.92-2.88-1.41c-.29-.14-.58-.33-.88-.48l-4.67,4.76-.11.11a8.8,8.8,0,0,1-2.73,1.76,8.34,8.34,0,0,1-3.16.59,8.42,8.42,0,0,1-3.17-.59,8.73,8.73,0,0,1-2.73-1.74s-.08,0-.08-.09l-8.35-8.45a8.19,8.19,0,0,1-2.56-6,8.26,8.26,0,0,1,.68-3.3,7.85,7.85,0,0,1,1.88-2.68L18.12,83a39.33,39.33,0,0,1-3-8H8.45a8.79,8.79,0,0,1-3.25-.63,7.88,7.88,0,0,1-2.68-1.85A9,9,0,0,1,.63,69.77,8.61,8.61,0,0,1,0,66.6v-12a8,8,0,0,1,2.48-6A8.22,8.22,0,0,1,5.2,46.82a8.71,8.71,0,0,1,3.25-.63H16c1.11-2.85,2.19-5.1,3.55-7.82l-4.76-4.68A8.52,8.52,0,0,1,13,30.86a8.78,8.78,0,0,1,0-6.33A8.73,8.73,0,0,1,14.7,21.8c2.83-2.83,5.69-5.63,8.54-8.45A8.33,8.33,0,0,1,26,11.5a8.16,8.16,0,0,1,3.26-.67,8.08,8.08,0,0,1,3.25.67,8.42,8.42,0,0,1,2.66,1.89l5.35,5.35a39.56,39.56,0,0,1,8-3V9.07a8.79,8.79,0,0,1,.63-3.25A8.1,8.1,0,0,1,51,3.05c4.17-4,22.47-5,25.63,2.77a8.91,8.91,0,0,1,.62,3.25v7.59c2.85,1.11,5.11,2.19,7.83,3.55l4.68-4.68a9,9,0,0,1,2.72-1.89,8.22,8.22,0,0,1,6.5,0,8,8,0,0,1,2.73,1.89l8.37,8.37A8.63,8.63,0,0,1,112,26.67a8.22,8.22,0,0,1,0,6.5,8.24,8.24,0,0,1-1.89,2.66l-5.35,5.45c1,2.39,2.54,5.4,3,7.95h6.65a8.79,8.79,0,0,1,3.25.63,7.78,7.78,0,0,1,2.68,1.85l.09.08a9.26,9.26,0,0,1,1.8,2.69,8.52,8.52,0,0,1,.63,3.16v12a8.87,8.87,0,0,1-.63,3.25,9.11,9.11,0,0,1-1.84,2.77,8.38,8.38,0,0,1-2.73,1.84,8.71,8.71,0,0,1-3.25.63h-7.59c-1.12,2.87-2.18,5.09-3.55,7.82L108,90.59a9.06,9.06,0,0,1,1.89,2.73,8.22,8.22,0,0,1,0,6.5l.14-.1Z" />
              </svg>
            }
            gradient="from-teal-500 to-cyan-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Service;

const ServiceCard = ({ link, icon, title, details, gradient }) => {
  return (
    <div className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      <div className="relative p-8">
        <Link href={link} className="block">
          {/* Icon */}
          <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-100 group-hover:bg-indigo-100 transition-colors duration-300">
            {icon}
          </div>
          
          {/* Title */}
          <h3 className="text-card-title text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
            {details}
          </p>
          
          {/* Learn more link */}
          <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors duration-300">
            Learn more
            <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};