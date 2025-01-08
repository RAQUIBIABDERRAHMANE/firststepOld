import React from "react";
import Link from "next/link";

const Service = () => {
  return (
    <section className="pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary text-[#6366f1]">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base text-body-color ">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          {/* Hospital and cabinet system Card */}
          <ServiceCard
            link={"/services/hospital"}
            title="Hospital & cabinet system"
            details="A tailored solution for healthcare providers to manage patient records, appointments, billing, and diagnostics. It includes features for telemedicine, inventory management, doctor scheduling, and compliance with medical data standards like HIPAA and GDPR."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="160"
                height="160"
                fill="#6366F1"
                className="bi bi-hospital-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6 0a1 1 0 0 0-1 1v1a1 1 0 0 0-1 1v4H1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h6v-2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V16h6a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-3V3a1 1 0 0 0-1-1V1a1 1 0 0 0-1-1zm2.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1zM2.25 9h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 9.75v-.5A.25.25 0 0 1 2.25 9m0 2h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 1 .25-.25M2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zM13.25 9h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 1 .25-.25M13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm.25 1.75h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5a.25.25 0 0 1 .25-.25" />
              </svg>
            }
          />
          {/* Hotel system Card */}
          <ServiceCard
            link={"/services/hotel"}
            title="Hotel system"
            details="An all-in-one solution for hotel operations, offering tools for reservation management, front desk automation, housekeeping, billing, and guest services. It supports integrations with OTA platforms, loyalty programs, and IoT for smart room controls."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <path
                  d="m28.558 7.098-.47 2.74a1 1 0 0 0 1.45 1.053L32 9.6l2.461 1.293a1 1 0 0 0 1.452-1.054l-.47-2.74 1.99-1.942a1 1 0 0 0-.553-1.705l-2.752-.4L32.897.558a1.04 1.04 0 0 0-1.793 0L29.873 3.05l-2.752.4a1 1 0 0 0-.554 1.705zM42.558 12.098l-.47 2.74a1 1 0 0 0 1.45 1.053L46 14.6l2.461 1.293a1 1 0 0 0 1.452-1.054l-.47-2.74 1.99-1.942a1 1 0 0 0-.553-1.705l-2.752-.4-1.231-2.493a1.04 1.04 0 0 0-1.793 0L43.873 8.05l-2.752.4a1 1 0 0 0-.554 1.705zM54.558 19.098l-.47 2.74a1 1 0 0 0 1.45 1.053L58 21.6l2.461 1.293a1 1 0 0 0 1.452-1.054l-.47-2.74 1.99-1.941a1 1 0 0 0-.553-1.706l-2.752-.4-1.231-2.493a1.04 1.04 0 0 0-1.793 0l-1.231 2.493-2.752.4a1 1 0 0 0-.554 1.706zM14.558 12.098l-.47 2.74a1 1 0 0 0 1.45 1.053L18 14.6l2.461 1.293a1 1 0 0 0 1.452-1.054l-.47-2.74 1.99-1.942a1 1 0 0 0-.553-1.705l-2.752-.4-1.232-2.493a1.04 1.04 0 0 0-1.793 0l-1.23 2.493-2.752.4a1 1 0 0 0-.554 1.705zM2.558 19.098l-.47 2.74a1 1 0 0 0 1.45 1.053L6 21.6l2.461 1.293a1 1 0 0 0 1.452-1.054l-.47-2.74 1.99-1.941a1 1 0 0 0-.553-1.706l-2.752-.4-1.232-2.493a1.04 1.04 0 0 0-1.793 0l-1.23 2.493-2.752.4a1 1 0 0 0-.554 1.705zM63 62V29a1 1 0 0 0 0-2H46v35h-2V19a1 1 0 0 0-1-1H21a1 1 0 0 0-1 1v43h-2V27H1a1 1 0 0 0 0 2v33a1 1 0 0 0 0 2h62a1 1 0 0 0 0-2zm-8-29a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm-7-21a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM10 33a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM3 33a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm33-33a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm-7-21a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm-7-21a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm0 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm14 20v-7h-3v7h-2v-7h-3v7h-2V50a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12z"
                  fill="#6366F1"
                />
                <path
                  fill="#6366F1"
                  d="M24 36h2v2h-2zM31 29h2v2h-2zM28 51h8v2h-8zM31 36h2v2h-2zM24 22h2v2h-2zM31 43h2v2h-2zM31 22h2v2h-2zM38 29h2v2h-2zM24 43h2v2h-2zM24 29h2v2h-2zM38 22h2v2h-2zM38 43h2v2h-2zM38 36h2v2h-2zM57 48h2v2h-2zM50 48h2v2h-2zM57 55h2v2h-2zM50 55h2v2h-2zM57 34h2v2h-2zM50 34h2v2h-2zM57 41h2v2h-2zM50 41h2v2h-2zM5 48h2v2H5zM12 48h2v2h-2zM5 55h2v2H5zM12 55h2v2h-2zM5 34h2v2H5zM12 34h2v2h-2zM5 41h2v2H5zM12 41h2v2h-2z"
                />
              </svg>
            }
          />
          {/* Car rental system Card */}
          <ServiceCard
            link={"/services/car"}
            title="Car rental system"
            details="A comprehensive platform for managing car rentals and fleet operations. It includes reservation management, vehicle tracking, maintenance scheduling, customer profiles, dynamic pricing, and integration with insurance providers for seamless service."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="160"
                height="160"
                fill="#6366F1"
                className="bi bi-car-front"
                viewBox="0 0 16 16"
              >
                <path d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17s2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276" />
                <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679q.05.242.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.8.8 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.8.8 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155s4.037-.084 5.592-.155A1.48 1.48 0 0 0 15 9.611v-.413q0-.148-.03-.294l-.335-1.68a.8.8 0 0 0-.43-.563 1.8 1.8 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3z" />
              </svg>
            }
          />
          {/* restaurent system Card */}
          <ServiceCard
            link={"/services/restaurant"}
            title="restaurent system"
            details="A versatile system to streamline restaurant operations, including reservation handling, order management, POS integration, staff scheduling, and inventory tracking for ingredients and supplies. It enhances customer experiences with online reservations and personalized services."
            icon={
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 122.88 115.21"
                style={{ enableBackground: "new 0 0 122.88 115.21" }}
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M29.03,100.46l20.79-25.21l9.51,12.13L41,110.69C33.98,119.61,20.99,110.21,29.03,100.46L29.03,100.46z M53.31,43.05 c1.98-6.46,1.07-11.98-6.37-20.18L28.76,1c-2.58-3.03-8.66,1.42-6.12,5.09L37.18,24c2.75,3.34-2.36,7.76-5.2,4.32L16.94,9.8 c-2.8-3.21-8.59,1.03-5.66,4.7c4.24,5.1,10.8,13.43,15.04,18.53c2.94,2.99-1.53,7.42-4.43,3.69L6.96,18.32 c-2.19-2.38-5.77-0.9-6.72,1.88c-1.02,2.97,1.49,5.14,3.2,7.34L20.1,49.06c5.17,5.99,10.95,9.54,17.67,7.53 c1.03-0.31,2.29-0.94,3.64-1.77l44.76,57.78c2.41,3.11,7.06,3.44,10.08,0.93l0.69-0.57c3.4-2.83,3.95-8,1.04-11.34L50.58,47.16 C51.96,45.62,52.97,44.16,53.31,43.05L53.31,43.05z M65.98,55.65l7.37-8.94C63.87,23.21,99-8.11,116.03,6.29 C136.72,23.8,105.97,66,84.36,55.57l-8.73,11.09L65.98,55.65L65.98,55.65z"
                    fill="#6366f1"
                  />
                </g>
              </svg>
            }
          />
          {/* stock management system Card */}
          <ServiceCard
            link={"/services/stock"}
            title="stock management system"
            details="A robust solution for tracking, organizing, and optimizing inventory levels across multiple warehouses or stores. Features include real-time stock updates, low-stock alerts, supplier integration, and analytics to prevent overstocking or shortages."
            icon={
              <svg
                fill="#6366f1"
                height="200px"
                width="200px"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 512 512"
                stroke="#6366f1"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M486.4,0c-14.114,0-25.6,11.486-25.6,25.6v93.867h-25.6V53.504c0-10.684-8.695-19.371-19.371-19.371h-63.659 c-10.675,0-19.371,8.687-19.371,19.371v65.963h-25.6V53.504c0-10.684-8.695-19.371-19.371-19.371h-63.659 c-10.675,0-19.371,8.687-19.371,19.371v65.963h-25.6V53.504c0-10.684-8.695-19.371-19.371-19.371H96.171 c-10.675,0-19.371,8.687-19.371,19.371v65.963H51.2V25.6C51.2,11.486,39.714,0,25.6,0S0,11.486,0,25.6V512h51.2v-51.2h25.6h102.4 h25.6h102.4h25.6h102.4h25.6V512H512V25.6C512,11.486,500.514,0,486.4,0z M460.8,443.733h-25.6v-65.963 c0-10.684-8.695-19.371-19.371-19.371h-63.659c-10.675,0-19.371,8.687-19.371,19.371v65.963h-25.6v-65.963 c0-10.684-8.695-19.371-19.371-19.371h-63.659c-10.675,0-19.371,8.687-19.371,19.371v65.963h-25.6v-65.963 c0-10.684-8.695-19.371-19.371-19.371H96.171c-10.675,0-19.371,8.687-19.371,19.371v65.963H51.2V298.667h25.6h102.4h25.6h102.4 h25.6h102.4h25.6V443.733z M460.8,281.6h-25.6v-65.963c0-10.684-8.695-19.371-19.371-19.371h-63.659 c-10.675,0-19.371,8.687-19.371,19.371V281.6h-25.6v-65.963c0-10.684-8.695-19.371-19.371-19.371h-63.659 c-10.675,0-19.371,8.687-19.371,19.371V281.6h-25.6v-65.963c0-10.684-8.695-19.371-19.371-19.371H96.171 c-10.675,0-19.371,8.687-19.371,19.371V281.6H51.2V136.533h25.6h102.4h25.6h102.4h25.6h102.4h25.6V281.6z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            }
          />
          {/* Custom Web app Card */}
          <ServiceCard
            link={"/services/CustomWebApp"}
            title="Custom Web app"
            details="We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
            icon={
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.88 113.37"
              >
                <path
                  class="cls-1"
                  fill="#6366f1"
                  d="M110,99.72a8.29,8.29,0,0,1-1.84,2.72l-8.37,8.37,0,0A8.26,8.26,0,0,1,97,112.7a8.07,8.07,0,0,1-9.16-1.89l-5-4.89c0-6.18,0-11,0-12.08h0c0-1,0-1.68,0-2a4.35,4.35,0,0,1,.1-.63l.08-.25a18.71,18.71,0,0,1,1.15-3.2,30.43,30.43,0,0,1,3.07-4.87c5.51-7.45,8.2-16,7.5-24.24C92.55,31.67,59,19.56,39,38.89,31,46.59,26.91,58.09,29.9,69c2.38,8.71,7.5,13,11.84,20.1a19,19,0,0,1,1.63,3.37h0l0,.08a4.42,4.42,0,0,1,.21.84c.1.6.17,1.29.23,2.12v.31c.07,1,.13,5.41.19,11.09-.83-.34-1.66-.71-2.52-1.09s-2-.92-2.88-1.41c-.29-.14-.58-.33-.88-.48l-4.67,4.76-.11.11a8.8,8.8,0,0,1-2.73,1.76,8.34,8.34,0,0,1-3.16.59,8.42,8.42,0,0,1-3.17-.59,8.73,8.73,0,0,1-2.73-1.74s-.08,0-.08-.09l-8.35-8.45a8.19,8.19,0,0,1-2.56-6,8.26,8.26,0,0,1,.68-3.3,7.85,7.85,0,0,1,1.88-2.68L18.12,83a39.33,39.33,0,0,1-3-8H8.45a8.79,8.79,0,0,1-3.25-.63,7.88,7.88,0,0,1-2.68-1.85A9,9,0,0,1,.63,69.77,8.61,8.61,0,0,1,0,66.6v-12a8,8,0,0,1,2.48-6A8.22,8.22,0,0,1,5.2,46.82a8.71,8.71,0,0,1,3.25-.63H16c1.11-2.85,2.19-5.1,3.55-7.82l-4.76-4.68A8.52,8.52,0,0,1,13,30.86a8.78,8.78,0,0,1,0-6.33A8.73,8.73,0,0,1,14.7,21.8c2.83-2.83,5.69-5.63,8.54-8.45A8.33,8.33,0,0,1,26,11.5a8.16,8.16,0,0,1,3.26-.67,8.08,8.08,0,0,1,3.25.67,8.42,8.42,0,0,1,2.66,1.89l5.35,5.35a39.56,39.56,0,0,1,8-3V9.07a8.79,8.79,0,0,1,.63-3.25A8.1,8.1,0,0,1,51,3.05c4.17-4,22.47-5,25.63,2.77a8.91,8.91,0,0,1,.62,3.25v7.59c2.85,1.11,5.11,2.19,7.83,3.55l4.68-4.68a9,9,0,0,1,2.72-1.89,8.22,8.22,0,0,1,6.5,0,8,8,0,0,1,2.73,1.89l8.37,8.37A8.63,8.63,0,0,1,112,26.67a8.22,8.22,0,0,1,0,6.5,8.24,8.24,0,0,1-1.89,2.66l-5.35,5.45c1,2.39,2.54,5.4,3,7.95h6.65a8.79,8.79,0,0,1,3.25.63,7.78,7.78,0,0,1,2.68,1.85l.09.08a9.26,9.26,0,0,1,1.8,2.69,8.52,8.52,0,0,1,.63,3.16v12a8.87,8.87,0,0,1-.63,3.25,9.11,9.11,0,0,1-1.84,2.77,8.38,8.38,0,0,1-2.73,1.84,8.71,8.71,0,0,1-3.25.63h-7.59c-1.12,2.87-2.18,5.09-3.55,7.82L108,90.59a9.06,9.06,0,0,1,1.89,2.73,8.22,8.22,0,0,1,0,6.5l.14-.1ZM44.06,71.33c-2.89-4.56-4.56-9.81-1.85-16.92,2.13-5.61,7-10.21,13.25-12.78C45.34,64,74.41,72,75.28,45.51c9.73,8.08,9.65,20,2.51,29.62-3.36,4.56-4.27,7.12-5,9.73a16.23,16.23,0,0,0-.5,4.69c0,1.51,0,10,.09,16.54H54.27c-.09-6-.18-14-.27-15.32a16.66,16.66,0,0,0-.94-5.27c-.82-2.16-1.81-4.14-4.75-8.21-1.34-1.86-3-4-4.25-6Z"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Service;

const ServiceCard = ({ link, icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 h-96  hover:shadow-lg border-2 border-[#6366f1]/30 md:px-7 xl:px-10">
          <Link href={link}>
            <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
              {icon}
            </div>
            <h4 className="mb-[14px] text-2xl font-semibold text-dark ">
              {title}
            </h4>
            <p className="text-body-color ">{details}</p>
          </Link>
        </div>
      </div>
    </>
  );
};
