import React, { useState } from 'react';

export default function Setting() {
  const [selectedImage, setSelectedImage] = useState(null); // State to store the uploaded image

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl); // Set the uploaded image to the state
    }
  };

  const handleImageRemove = () => {
    setSelectedImage(null); // Remove the selected image
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8 bg-gray-50 min-h-screen">
      
      {/* Left Side: User Info */}
      <div className="bg-white text-center p-8 rounded-lg shadow-lg flex-shrink-0 w-full lg:w-1/3">
        <h3 className="text-3xl font-semibold mb-2">User</h3>
        <p className="text-gray-500">User</p>

        <div className="mt-6 flex justify-center">
          <label htmlFor="imageInput" className="relative group cursor-pointer">
            <div className="bg-gray-200 rounded-full w-24 h-24 flex items-center justify-center border border-gray-300 hover:bg-gray-300 transition">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Uploaded"
                  className="rounded-full w-24 h-24 object-cover"
                />
              ) : (
                <h5 className="text-sm font-semibold text-gray-600">Change Picture</h5>
              )}
            </div>
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>

        <button
          className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition"
          onClick={handleImageRemove}
        >
          Remove Photo
        </button>

        <div className="mt-4 bg-gray-100 p-4 rounded-lg text-sm text-gray-600 shadow-sm">
          <p>Upload a new avatar. Larger images will be resized automatically.</p>
          <p>Maximum upload size is <span className="font-semibold">1 MB</span>.</p>
        </div>
      </div>

      {/* Right Side: Edit Profile */}
      <div className="bg-white p-8 rounded-lg shadow-lg flex-grow">
        <div className="mb-6">
          <h2 className="text-3xl font-bold">Edit Profile</h2>
          <p className="text-gray-500 border-b-2 border-blue-500 inline-block mt-2">User Info</p>
        </div>

        <div className="space-y-6">
          {/* User Info Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="User"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                placeholder="**********"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                placeholder="**********"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Address</label>
              <input
                type="text"
                placeholder="KDA"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Contact</label>
              <input
                type="text"
                placeholder="+92 123456789"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button className="bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-600 transition">
              Update Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
