import React from "react";
import { FaFacebook, FaTwitter } from 'react-icons/fa'; // Import Facebook and Twitter icons

function DrShafiullah() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-6 lg:p-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Dr. Shafiullah Khan
        </h1>

        {/* Education Section */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-600 inline-block mb-0">
            Education: PhD (UK) in 2011, Post-doc (UK)
          </h2>
        </div>

        {/* Specialization Section */}
        <div className="text-center mb-8">
          <h3 className="text-lg font-medium text-gray-700 inline-block">
            Specialization: Wireless Networks and Security
          </h3>
        </div>

        {/* Publications Section */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-700 mb-4">
            Recent Publications:
          </h4>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed">
            <li>
              Analysis of Simple K-Mean and Parallel K-Mean Clustering for
              Software Products and Organizational Performance Using Education
              Sector Dataset, <em>Scientific Programming</em>, Volume 2021, pp.
              1-20, May 2021.
            </li>
            <li>
              Analysis of Service-Oriented Architecture and Scrum Software
              Development Approach for IIoT, <em>Scientific Programming</em>,
              Volume 2021, Article ID 6611407, pp. 1-14, January 2021.
            </li>
            <li>
              "Citation Intent Classification Using Word Embedding," in <em>IEEE Access</em>, vol. 9, pp. 9982-9995, 2021.
            </li>
            <li>
              Efficient power allocation for NOMA-enabled IoT networks in 6G era, <em>Physical Communication</em>, Vol. 39, April 2020.
            </li>
            <li>
              A survey on intrusion detection and prevention in wireless ad-hoc networks, <em>Journal of Systems Architecture</em>, Vol. 105, May 2020.
            </li>
            <li>
              Authentication Techniques and Methodologies used in Wireless Body Area Networks, <em>Journal of Systems Architecture</em>, Vol. 101, December 2019.
            </li>
            <li>
              Game Theoretic Solution for Power Management in IoT-Based Wireless Sensor Networks, <em>Sensors</em>, 19(18), 2019.
            </li>
            <li>
              Game-Theoretic Solutions for Data Offloading in Next Generation Networks, MDPI <em>Symmetry Journal</em>, Vol. 10, issue 8, pp. 1-19, 2018.
            </li>
            <li>
              Game Theoretic Reward Based Adaptive Data Communication in Wireless Sensor Networks, <em>IEEE ACCESS Journal</em>, Vol. 6, pp.28073-28084, 2018.
            </li>
            <li>
              QoS based cooperative communications and security mechanisms for Ad hoc Sensor networks, <em>Hindawi Journal of Sensors</em>, Vol. 2017, pp. 1-2, 2017.
            </li>
          </ul>
        </div>

        {/* Books Section */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-700 mb-4">Books:</h4>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed">
            <li>
              Simulation Technologies in Networking and Communications: Selecting
              the Best Tool for the Test, Taylor and   Francis (CRC) Publisher USA, 2013.
            </li>
            <li>
              Security for Multihop wireless Networks, Taylor and Francis (CRC)
              Publisher USA (2014).
            </li>
            <li>
              Green Networking and Communications, Taylor and Francis (CRC)
              Publisher USA (2013).
            </li>
            <li>
              Wireless Sensor Networks: Current Status and Future Trends, Taylor
              and Francis (CRC) Publisher USA (2012).
            </li>
            <li>
              Wireless Networks and Security, Springer Publisher, Germany (2013).
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-8">
          <h4 className="text-lg font-bold text-gray-700">Contact:</h4>
          <p className="text-gray-600">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:skkust@gmail.com"
              className="text-blue-600 hover:underline"
            >
              skkust@gmail.com
            </a>
            <br />
            <strong>Skype:</strong> skkust
            <br />
            <strong>Postal:</strong> Institute of Computing (IoC), Kohat University of Science
            and Technology (KUST)
          </p>

          {/* Social Icons */}
          <div className="flex justify-center mt-4 space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 text-2xl"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrShafiullah;
