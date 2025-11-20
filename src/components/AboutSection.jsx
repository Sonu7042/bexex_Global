import React from "react";
import { Plus } from "lucide-react";

const ProfileSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 min-h-screen p-8 gap-8 px-4 md:px-16 lg:px-12">
      {/* Left Section - Image */}
      <div className="flex-shrink-0">
        <img
          src="https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/content_entry5adf77af6eabcc00190b75b6/6075185986d092000b192d0a/files/best-free-travel-images-main-image-hd-op.webp"
          alt="Profile"
          className="rounded-lg shadow-md object-cover w-80 h-80"
        />
      </div>

      {/* Right Section - Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
        {/* Management Card */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2 flex justify-between items-center">
              Management
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md p-1">
                <Plus size={20} />
              </button>
            </h2>
            <p className="text-gray-700 font-medium">
              Enhancing organizational efficiency through structured management
              systems and strategic guidance.
            </p>
          </div>
        </div>

        {/* Consulting Card */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2 flex justify-between items-center">
              Consulting
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md p-1">
                <Plus size={20} />
              </button>
            </h2>
          </div>
        </div>

        {/* Auditing Card (full width on bottom) */}
        <div className="md:col-span-2 bg-white rounded-xl shadow p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2 flex justify-between items-center">
              Auditing
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md p-1">
                <Plus size={20} />
              </button>
            </h2>
            <p className="text-gray-700 font-medium">
              Providing independent audits to assess compliance, improve
              systems, and ensure continual improvement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
