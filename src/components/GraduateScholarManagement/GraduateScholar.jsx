import React, { useState } from 'react';

function GraduateScholar() {
  const [formData, setFormData] = useState({
    scholarName: '',
    degreeProgram: '',
    researchInterest: '',
    publications: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Submit logic here (e.g., API call)
  };

  return (
    <div className="ml-24 md:ml-80 w-[70%] mt-10 p-4 md:p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Graduate Scholar Management</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Scholar Name */}
        <div>
          <label className="block text-lg font-medium text-gray-700">Scholar Name</label>
          <input
            type="text"
            name="scholarName"
            value={formData.scholarName}
            onChange={handleChange}
            placeholder="Enter Scholar's Name"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Degree Program */}
        <div>
          <label className="block text-lg font-medium text-gray-700">Degree Program</label>
          <input
            type="text"
            name="degreeProgram"
            value={formData.degreeProgram}
            onChange={handleChange}
            placeholder="Enter Degree Program (e.g., Ph.D. in Wireless Networks)"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Research Interest */}
        <div>
          <label className="block text-lg font-medium text-gray-700">Research Interest</label>
          <textarea
            name="researchInterest"
            value={formData.researchInterest}
            onChange={handleChange}
            rows="4"
            placeholder="Enter Research Interests (e.g., Routing and Security in Wireless Networks)"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Publications */}
        <div>
          <label className="block text-lg font-medium text-gray-700">Publications</label>
          <textarea
            name="publications"
            value={formData.publications}
            onChange={handleChange}
            rows="4"
            placeholder="Enter Publications"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-4 rounded-lg font-semibold shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          >
            Submit Scholar Details
          </button>
        </div>
      </form>
    </div>
  );
}

export default GraduateScholar;
