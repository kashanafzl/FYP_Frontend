import React from "react";
import { FaFacebook, FaTwitter } from 'react-icons/fa'; // Import Facebook and Twitter icons

function DrMuneerUmar() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-6 lg:p-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Dr. M. Muneer Umar
        </h1>

        {/* Education Section */}
        <div className="text-center mb-6">
          <p className="text-lg font-medium text-gray-600 mb-2">BS Information Technology</p>
          <p className="text-lg font-medium text-gray-600 mb-2">MS Computer Science</p>
          <p className="text-lg font-medium text-gray-600 mb-2">Ph.D. Wireless Networks</p>
          <p className="text-lg font-medium text-gray-600 mb-2">Email: <a href="mailto:muneer.umar@kust.edu.pk" className="text-blue-600 hover:underline">muneer.umar@kust.edu.pk</a></p>
        </div>

        {/* Research Interest Section */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Research Interest</h2>
          <p className="text-gray-600 leading-relaxed">Routing and Security in Wireless Ad hoc Networks</p>
        </div>

        {/* Publications Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Publications</h3>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
            <li>
              Kim, M.M. Umar, S. Khan, M. A. Khan, “Novel Scoring for Energy-Efficient Routing in Multi-Sensored Networks.” Sensors. 2022; Vol. 22 no.4 :1673. <a href="https://doi.org/10.3390/s22041673" className="text-blue-600 hover:underline">https://doi.org/10.3390/s22041673</a>
            </li>
            <li>
              A. Khan, M. M. Nasralla, M. M Umar, G. Rehman; S. Khan, N. Choudhury. “An Efficient Multilevel Probabilistic Model for Abnormal Traffic Detection in Wireless Sensor Networks.” Sensors 2022, Vol. 22, no. 2, 410. <a href="https://doi.org/10.3390/s22020410" className="text-blue-600 hover:underline">https://doi.org/10.3390/s22020410</a>
            </li>
            <li>
              Badshah, A. Jalal, G. Rehman, M. Zubair & M. M. Umar. "Academic use of social networking sites in learners’ engagement in underdeveloped countries’ schools." Education and Information Technologies Vol.26, 6319–6336 (2021). <a href="https://doi.org/10.1007/s10639-021-10619-8" className="text-blue-600 hover:underline">https://doi.org/10.1007/s10639-021-10619-8</a>
            </li>
            <li>
              A. Khan, M. M. Nasralla, M. M. Umar, Z. Iqbal, G. Rehman, M. S. Sarfraz, and N. Choudhury, “A Survey on the Noncooperative Environment in Smart Nodes-Based Ad Hoc Networks: Motivations and Solutions,” Security and Communication Networks, vol. 2021, Article ID 9921826, 17 pages, <a href="https://doi.org/10.1155/2021/9921826" className="text-blue-600 hover:underline">https://doi.org/10.1155/2021/9921826</a>
            </li>
            <li>
            M. Umar, S. Khan, R. Ahmed, J. Singh, “Game Theoretic Reward Based Adaptive Data Communication in Wireless Sensor Networks,” IEEE ACCESS, vol. 6, no.1, pp.28073-28084, May 2018. doi: 10.1109/ACCESS.2018.2833468.
            </li>
            <li>
            Mehmood, A. khanan, M. M. Umar, S. Abdullah, K. A. Z. Ariffin, and H. Song, “Secure Knowledge & Cluster-based Intrusion Detection Mechanism for Smart Wireless Sensor Networks,” IEEE Access, vol. 6, 2018, pp. 5688 - 5694, Nov. 2017, doi: 10.1109/ACCESS.2017.2770020.
            </li>
            <li>
            M. Umar, A. Mehmood, H. Song, and K.-K. R. Choo, “I-Marks: An iris code embedding system for ownership identification of multimedia content,” Computers & Electrical Engineering, vol. 63, pp. 209–219, Oct. 2017,https://doi.org/10.1016/j.compeleceng.2017.07.007.
            </li>
            <li>
            Mehmood, Z. Lv, J. Lloret, and M. M. Umar, “ELDC: An Artificial Neural Network based Energy-Efficient and Robust Routing Scheme for Pollution Monitoring in WSNs,” IEEE Transactions on Emerging Topics in Computing, vol.8, no.1, pp. 106–114, Feb. 2017, doi: 10.1109/TETC.2017.2671847.
           </li>
            <li>
            Mehmood, M. M. Umar, and H. Song, “ICMDS: Secure Inter-cluster Multiple-key Distribution Scheme for Wireless Sensor Networks,” Ad Hoc Networks, vol. 55, pp. 97–106, Feb. 2017, https://doi.org/10.1016/j.adhoc.2016.10.007.
           </li>
            <li>
            M. Umar, A. Mehmood, and H. Song, “SeCRoP: Secure Cluster Head Centered Multi-hop Routing Protocol for Mobile Ad hoc Networks,” Security and Comm. Networks, vol. 9, no. 16, pp. 3378–3387, Jul. 2016, https://doi.org/10.1002/sec.1544.
           </li>
            {/* Add additional publications here following the same format */}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="text-center mt-8">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">Connect with me:</h4>
          <div className="flex justify-center space-x-6">
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

export default DrMuneerUmar;
