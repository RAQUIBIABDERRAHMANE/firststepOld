import React from "react";
import Link from "next/link";

const Service = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="cyber-grid opacity-20" />
        <div className="gradient-mesh animate-morphing" />

        {/* Floating Quantum Elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />

        {/* Neural Connections */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent data-stream"
            style={{
              top: `${20 + i * 20}%`,
              width: "100%",
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center rounded-full px-6 py-3 text-sm font-medium glass-card text-purple-400 border border-purple-400/30 mb-8 neural-border">
            <span className="text-mono">INDUSTRY.SOLUTIONS</span>
          </div>

          <h2 className="text-section-title mb-8 plasma-text">
            Specialized Systems
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Advanced management solutions tailored for specific industries, each
            optimized for unique operational requirements and{" "}
            <span className="neon-text">quantum compliance</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Hospital System */}
          <ServiceCard
            link="/services/health"
            title="Medical & Hospital System"
            details="Unified platform for doctors and hospitals to manage consultations, prescriptions, appointments, billing, and patient records."
            icon={
              <div className="flex items-center space-x-2">
                {/* Hospital Icon */}
                <div className="flex items-center justify-center w-10 h-10">
                  <svg
                    className="w-6 h-6"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="#ffffff"
                  >
                    <path
                      style={{ fill: "#5c92ff" }}
                      d="M331.401,512H180.598c-23.981,0-43.491-19.51-43.491-43.491v-93.616H43.491 C19.51,374.893,0,355.383,0,331.402V180.598c0-23.981,19.51-43.491,43.491-43.491h93.616V43.491C137.107,19.51,156.617,0,180.598,0 h150.804c23.981,0,43.491,19.51,43.491,43.491v93.616h93.616c23.981,0,43.491,19.51,43.491,43.491v150.804 c0,23.981-19.51,43.491-43.491,43.491h-93.616v93.616C374.893,492.49,355.383,512,331.401,512z"
                    ></path>
                    <path
                      style={{ fill: "#3da1ff" }}
                      d="M468.509,137.107h-93.616V43.491C374.893,19.51,355.383,0,331.402,0h-75.407v512h75.407 c23.981,0,43.491-19.51,43.491-43.491v-93.616h93.616c23.981,0,43.491-19.51,43.491-43.491V180.598 C512,156.617,492.49,137.107,468.509,137.107z"
                    ></path>
                  </svg>
                </div>
              </div>
            }
            gradient="from-pink-400 to-blue-600"
            tech={[
              "Consultations",
              "Prescriptions",
              "Appointments",
              "Telemedicine",
              "Billing",
              "Records",
            ]}
          />

          {/* Hotel System */}
          <ServiceCard
            link="/services/hotel"
            title="Hotel Booking System"
            details="Streamlined hotel management with booking engine, guest services, smart pricing, and availability tracking."
            icon={
              <svg
                fill="#9076D4"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M12.691406 0L11.564453 2.3320312L9 2.6386719L10.949219 4.3613281L10.435547 7L12.691406 5.6816406L14.949219 7L14.435547 4.3613281L16.384766 2.6386719L13.820312 2.3320312L12.691406 0 z M 14.949219 7L10.435547 7L9.3007812 7C6.3307812 7 4 9.3307812 4 12.300781L4 45C4 45.55 4.45 46 5 46L22 46L22 36L28 36L28 46L45 46C45.55 46 46 45.55 46 45L46 12.300781C46 9.3307812 43.669219 7 40.699219 7L39.564453 7L35.050781 7L31.359375 7L26.845703 7L23.154297 7L18.640625 7L14.949219 7 z M 18.640625 7L20.896484 5.6816406L23.154297 7L22.640625 4.3613281L24.589844 2.6386719L22.025391 2.3320312L20.896484 0L19.769531 2.3320312L17.205078 2.6386719L19.154297 4.3613281L18.640625 7 z M 26.845703 7L29.103516 5.6816406L31.359375 7L30.845703 4.3613281L32.794922 2.6386719L30.230469 2.3320312L29.103516 0L27.974609 2.3320312L25.410156 2.6386719L27.359375 4.3613281L26.845703 7 z M 35.050781 7L37.308594 5.6816406L39.564453 7L39.050781 4.3613281L41 2.6386719L38.435547 2.3320312L37.308594 0L36.179688 2.3320312L33.615234 2.6386719L35.564453 4.3613281L35.050781 7 z M 10 12L16 12L16 16L10 16L10 12 z M 22 12L28 12L28 16L22 16L22 12 z M 34 12L40 12L40 16L34 16L34 12 z M 10 20L16 20L16 24L10 24L10 20 z M 22 20L28 20L28 24L22 24L22 20 z M 34 20L40 20L40 24L34 24L34 20 z M 10 28L16 28L16 32L10 32L10 28 z M 22 28L28 28L28 32L22 32L22 28 z M 34 28L40 28L40 32L34 32L34 28 z M 10 36L16 36L16 40L10 40L10 36 z M 34 36L40 36L40 40L34 40L34 36 z"></path>
                </g>
              </svg>
            }
            gradient="from-purple-400 to-pink-600"
            tech={["Booking Engine", "Room Service", "Dynamic Pricing"]}
          />

          {/* Car Rental System */}
          <ServiceCard
            link="/services/cars"
            title="Car Rental Platform"
            details="Manage fleets, reservations, maintenance, and customer data for car rental businesses of all sizes."
            icon={
              <div className="flex items-center justify-center w-10 h-10">
                <svg
                  width="151px"
                  height="151px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 14.803v6.447c0 .414.336.75.75.75h1.614a.75.75 0 0 0 .74-.627L5.5 19h13l.395 2.373a.75.75 0 0 0 .74.627h1.615a.75.75 0 0 0 .75-.75v-6.447a5.954 5.954 0 0 0-1-3.303l-.78-1.17a1.994 1.994 0 0 1-.178-.33h.994a.75.75 0 0 0 .671-.415l.25-.5A.75.75 0 0 0 21.287 8H19.6l-.31-1.546a2.5 2.5 0 0 0-1.885-1.944C15.943 4.17 14.141 4 12 4c-2.142 0-3.943.17-5.405.51a2.5 2.5 0 0 0-1.886 1.944L4.399 8H2.714a.75.75 0 0 0-.67 1.085l.25.5a.75.75 0 0 0 .67.415h.995a1.999 1.999 0 0 1-.178.33L3 11.5c-.652.978-1 2.127-1 3.303zm15.961-4.799a4 4 0 0 0 .34.997H5.699c.157-.315.271-.65.34-.997l.632-3.157a.5.5 0 0 1 .377-.39C8.346 6.157 10 6 12 6c2 0 3.654.156 4.952.458a.5.5 0 0 1 .378.389l.631 3.157zM5.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM20 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                      fill="#3CCB82"
                    ></path>
                  </g>
                </svg>
              </div>
            }
            gradient="from-green-400 to-emerald-600"
            tech={["Fleet Management", "Reservations", "Analytics"]}
          />

          {/* Restaurant System */}
          <ServiceCard
            link="/services/restaurant"
            title="Restaurant POS System"
            details="POS and order system with kitchen display, delivery support, staff roles, and multi-branch management."
            icon={
              <svg
                fill="#C08346"
                viewBox="0 -2.89 122.88 122.88"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M36.82,107.86L35.65,78.4l13.25-0.53c5.66,0.78,11.39,3.61,17.15,6.92l10.29-0.41c4.67,0.1,7.3,4.72,2.89,8 c-3.5,2.79-8.27,2.83-13.17,2.58c-3.37-0.03-3.34,4.5,0.17,4.37c1.22,0.05,2.54-0.29,3.69-0.34c6.09-0.25,11.06-1.61,13.94-6.55 l1.4-3.66l15.01-8.2c7.56-2.83,12.65,4.3,7.23,10.1c-10.77,8.51-21.2,16.27-32.62,22.09c-8.24,5.47-16.7,5.64-25.34,1.01 L36.82,107.86L36.82,107.86z M29.74,62.97h91.9c0.68,0,1.24,0.57,1.24,1.24v5.41c0,0.67-0.56,1.24-1.24,1.24h-91.9 c-0.68,0-1.24-0.56-1.24-1.24v-5.41C28.5,63.53,29.06,62.97,29.74,62.97L29.74,62.97z M79.26,11.23 c25.16,2.01,46.35,23.16,43.22,48.06l-93.57,0C25.82,34.23,47.09,13.05,72.43,11.2V7.14l-4,0c-0.7,0-1.28-0.58-1.28-1.28V1.28 c0-0.7,0.57-1.28,1.28-1.28h14.72c0.7,0,1.28,0.58,1.28,1.28v4.58c0,0.7-0.58,1.28-1.28,1.28h-3.89L79.26,11.23L79.26,11.23 L79.26,11.23z M0,77.39l31.55-1.66l1.4,35.25L1.4,112.63L0,77.39L0,77.39z"
                    />
                  </g>
                </g>
              </svg>
            }
            gradient="from-orange-400 to-red-600"
            tech={["POS", "Delivery", "Kitchen Display"]}
          />

          {/* Stock Management */}
          <ServiceCard
            link="/services/stock"
            title="Stock & Inventory"
            details="Inventory tracking, barcode support, suppliers, stock alerts, and purchase orders made easy."
            icon={
              <svg
                viewBox="0 0 16 16"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#607CD0"
                stroke="#607CD0"
                className="w-6 h-6"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#607CD0"
                    d="M12 6v-6h-8v6h-4v7h16v-7h-4zM7 12h-6v-5h2v1h2v-1h2v5zM5 6v-5h2v1h2v-1h2v5h-6zM15 12h-6v-5h2v1h2v-1h2v5z"
                  ></path>
                  <path fill="#607CD0" d="M0 16h3v-1h10v1h3v-2h-16v2z"></path>
                </g>
              </svg>
            }
            gradient="from-indigo-400 to-blue-600"
            tech={["Inventory", "Suppliers", "Reports"]}
          />

          {/* Custom Web App Builder */}
          <ServiceCard
            link="/services/custom"
            title="Custom Web App"
            details="Build tailored apps with dashboards, CRMs, or specialized workflows—designed for your business."
            icon={
              <div className="ml-3 w-16 h-16 flex items-center justify-center space-x-2">
                <svg
                  fill="#22B2A7"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>web</title>{" "}
                    <path d="M0 15.656v-0.031c0.281-3.625 1.594-6.344 3.875-8.063 2.25-1.75 4.688-2.594 7.344-2.594 2.781-0.031 5.375 0.906 7.688 2.781 2.344 1.844 3.5 4.594 3.5 8.156v0.219c0 3.594-1.156 6.281-3.5 8.125-2.344 1.875-4.938 2.813-7.719 2.813h-0.125c-2.719-0.031-5.219-0.969-7.531-2.844-2.313-1.844-3.5-4.688-3.531-8.563zM10.531 10.75v-4.938h-0.75c-0.156 0.188-0.281 0.406-0.406 0.594s-0.25 0.375-0.375 0.594c-0.125 0.188-0.281 0.438-0.375 0.625-0.125 0.188-0.219 0.375-0.313 0.594-0.188 0.313-0.344 0.625-0.469 0.906-0.156 0.281-0.281 0.563-0.375 0.813 0.188 0.125 0.406 0.281 0.656 0.375 0.281 0.094 0.563 0.188 0.844 0.25 0.313 0.063 0.594 0.094 0.844 0.125 0.281 0.031 0.531 0.063 0.719 0.063zM11.844 5.813v4.906c0.156 0 0.344 0.031 0.531 0 0.188 0 0.406-0.031 0.594-0.063 0.344-0.063 0.75-0.156 1.063-0.25 0.344-0.125 0.656-0.281 0.875-0.469-0.375-0.906-0.781-1.625-1.188-2.313s-0.875-1.281-1.375-1.781v-0.031h-0.5zM8.469 6.094v-0.031c-0.219 0.094-0.438 0.25-0.688 0.344-0.219 0.094-0.5 0.219-0.719 0.344-0.438 0.219-0.875 0.469-1.313 0.75-0.406 0.281-0.813 0.594-1.156 0.906 0.125 0.125 0.281 0.25 0.406 0.344s0.281 0.219 0.438 0.344c0.125 0.063 0.281 0.156 0.438 0.281 0.156 0.094 0.344 0.219 0.531 0.344 0.25-0.563 0.5-1.156 0.813-1.688 0.313-0.563 0.656-1.094 1-1.563 0.031-0.063 0.063-0.125 0.125-0.188 0.031-0.031 0.063-0.125 0.125-0.188zM18.031 8.406v-0.031c-0.781-0.594-1.469-1.094-2.156-1.406s-1.375-0.625-2-0.875c0.5 0.5 0.938 1.125 1.219 1.719 0.313 0.625 0.625 1.281 0.875 1.906 0.125-0.063 0.281-0.125 0.469-0.25 0.156-0.094 0.375-0.188 0.563-0.281 0.188-0.125 0.344-0.25 0.531-0.375 0.188-0.156 0.375-0.281 0.5-0.406zM17.5 15.375h3.594c0-1.156-0.25-2.25-0.719-3.375-0.438-1.094-1.063-2-1.844-2.781v-0.031c-0.156 0.25-0.375 0.469-0.594 0.625-0.25 0.156-0.469 0.281-0.719 0.406-0.156 0.094-0.313 0.219-0.469 0.281-0.156 0.094-0.375 0.156-0.531 0.25 0.125 0.25 0.25 0.531 0.375 0.781 0.094 0.281 0.25 0.594 0.313 0.875 0.188 0.5 0.313 1.031 0.438 1.563 0.094 0.469 0.156 0.969 0.156 1.406zM6.188 10.75v-0.031c-0.25-0.125-0.531-0.219-0.75-0.344-0.219-0.156-0.438-0.313-0.625-0.438-0.188-0.094-0.375-0.219-0.531-0.344s-0.281-0.25-0.406-0.375c-0.813 0.781-1.406 1.656-1.781 2.688-0.406 1.031-0.688 2.188-0.813 3.438h3.844c0-0.875 0.125-1.719 0.344-2.563 0.188-0.875 0.469-1.531 0.719-2.031zM10.531 15.344v-3.594c-0.25 0.031-0.563 0.031-0.844 0-0.313-0.031-0.625-0.125-0.906-0.219-0.25-0.063-0.563-0.125-0.813-0.219-0.281-0.063-0.563-0.188-0.781-0.313-0.188 0.313-0.344 0.688-0.469 1.094-0.156 0.375-0.25 0.781-0.344 1.156-0.063 0.375-0.094 0.781-0.125 1.125s-0.063 0.688-0.063 0.969h4.344zM11.844 11.813v3.531h4.625c0-0.188 0-0.406-0.031-0.656-0.063-0.219-0.094-0.5-0.125-0.75-0.094-0.375-0.188-0.781-0.313-1.156-0.125-0.344-0.25-0.688-0.406-0.969-0.063-0.156-0.125-0.344-0.188-0.469-0.094-0.156-0.188-0.25-0.25-0.344-0.344 0.25-0.813 0.406-1.375 0.531-0.531 0.125-1.156 0.25-1.719 0.281h-0.219zM5.125 16.375h-3.844c0 0.531 0.094 1.125 0.25 1.844 0.156 0.75 0.469 1.438 0.813 2.188 0.156 0.375 0.344 0.75 0.531 1.125 0.219 0.344 0.469 0.719 0.719 1.063 0.188-0.125 0.375-0.219 0.531-0.313 0.188-0.094 0.406-0.219 0.594-0.313 0.219-0.094 0.438-0.188 0.688-0.313 0.219-0.094 0.5-0.219 0.781-0.344-0.25-0.781-0.531-1.531-0.719-2.375-0.219-0.813-0.344-1.625-0.344-2.531v-0.031zM10.531 20.031v-3.656h-4.344c0 0.25 0.031 0.625 0.094 1 0.031 0.375 0.125 0.781 0.188 1.188 0.125 0.438 0.219 0.875 0.344 1.25s0.25 0.688 0.375 0.969c0.563-0.219 1.125-0.375 1.5-0.469 0.406-0.125 0.781-0.219 1.156-0.25h0.344c0.125-0.031 0.25-0.031 0.344-0.031zM11.844 16.375v3.625c0.219 0.031 0.469 0.063 0.719 0.094 0.281 0.031 0.625 0.094 0.906 0.156l0.469 0.094c0.156 0.063 0.344 0.094 0.5 0.125 0.188 0.063 0.375 0.094 0.563 0.156 0.156 0.063 0.313 0.094 0.438 0.156 0.406-1.031 0.656-1.875 0.813-2.594 0.156-0.688 0.219-1.281 0.219-1.781v-0.031h-4.625zM21.094 16.406v-0.031h-3.594v0.188c-0.031 0.594-0.125 1.281-0.25 2-0.125 0.688-0.406 1.5-0.781 2.5 0.5 0.25 0.969 0.5 1.344 0.75s0.719 0.531 0.969 0.781c0.531-0.531 1-1.25 1.406-2.188 0.406-0.906 0.688-1.844 0.844-2.844 0.031-0.188 0.031-0.375 0.063-0.563v-0.594zM10.531 25.906v-4.875c-0.781 0.125-1.438 0.281-1.938 0.406s-0.875 0.25-1.125 0.375c0.188 0.469 0.375 0.875 0.563 1.25 0.188 0.344 0.406 0.719 0.594 1.031 0.063 0.125 0.188 0.25 0.281 0.406 0.094 0.125 0.156 0.281 0.25 0.406 0.094 0.156 0.188 0.344 0.281 0.531 0.125 0.156 0.219 0.344 0.344 0.469h0.75zM11.844 25.906h0.719c0.281-0.219 0.563-0.531 0.781-0.875 0.25-0.344 0.531-0.75 0.719-1.094 0.219-0.406 0.438-0.781 0.625-1.156s0.344-0.719 0.469-0.969c-0.344-0.125-0.813-0.25-1.281-0.375s-1.125-0.25-2.031-0.375v4.844zM18.031 23.344v-0.031c-0.063-0.094-0.188-0.219-0.281-0.313s-0.25-0.219-0.406-0.313c-0.125-0.094-0.281-0.188-0.469-0.281s-0.438-0.219-0.656-0.344c-0.125 0.25-0.344 0.688-0.656 1.281-0.281 0.594-0.781 1.313-1.406 2.094 0.781-0.125 1.469-0.406 2.094-0.781 0.688-0.344 1.281-0.813 1.781-1.313zM6.406 22.344v-0.031c-0.219 0.125-0.563 0.281-0.906 0.438-0.375 0.156-0.781 0.344-1.156 0.594 0.219 0.188 0.438 0.375 0.625 0.5 0.188 0.156 0.406 0.281 0.594 0.406 0.344 0.219 0.75 0.438 1.156 0.625s0.906 0.375 1.531 0.563c-0.219-0.25-0.375-0.563-0.531-0.813s-0.344-0.5-0.5-0.75-0.281-0.531-0.406-0.781c-0.156-0.25-0.281-0.5-0.406-0.75z"></path>{" "}
                  </g>
                </svg>
              </div>
            }
            gradient="from-teal-400 to-cyan-600"
            tech={["Dashboards", "APIs", "Workflow Builders"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Service;

const ServiceCard = ({ link, icon, title, details, gradient, tech }) => {
  return (
    <div className="group relative glass-card rounded-2xl overflow-hidden card-hover neural-border">
      {/* Quantum Border Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
      />

      <div className="relative p-8">
        <Link href={link} className="block">
          {/* Icon */}
          <div className="mb-6 flex justify-center items-center w-full">
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${gradient} p-0.5 neural-border`}
            >
              <div className="flex items-center justify-center w-full h-full bg-black rounded-2xl">
                {icon}
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-card-title mb-4 group-hover:text-cyan-400 transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
            {details}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 glass-card text-xs text-gray-300 rounded-full border border-cyan-400/20 text-mono group-hover:border-cyan-400/40 transition-colors duration-300"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Neural link */}
          <div className="flex items-center text-cyan-400 font-semibold group-hover:text-white transition-colors duration-300">
            <span className="text-mono text-sm">EXPLORE_NEURAL_SYSTEM</span>
            <svg
              className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </Link>
      </div>

      {/* Quantum Decorations */}
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Data Flow */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-data-flow" />
    </div>
  );
};
