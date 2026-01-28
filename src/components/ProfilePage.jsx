import React, { useEffect, useState } from "react";
import Layout from "./Layout";

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);

  const getProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("import.meta.env.VITE_API_URL/profile", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
      });

      const data = await res.json();
      setProfile(data);

    } catch (error) {
      console.log("Profile fetch failed", error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (

    <div className="h-full flex items-center justify-center bg-blue-100 p-6 -m-6">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-lg overflow-hidden z-100">
        
        <div className="bg-[#002B5B] p-6 text-white text-center">
            <h1>Hi!</h1>
            <h1 className="text-2xl font-bold mt-4">
            {profile ? profile.username : "Loading..."}</h1>
          <p className="mt-1 text-white/90">{profile ? profile.email : ""}</p>
        </div>

        
        <div className="p-6 space-y-4">
          {profile && (
            <>
              <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h2 className="font-semibold text-gray-700">Username</h2>
                <p className="text-gray-900 text-lg">{profile.username}</p>
              </div>

              <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h2 className="font-semibold text-gray-700">Email</h2>
                <p className="text-gray-900 text-lg">{profile.email}</p>
              </div>
            </>
          )}

          {!profile && <p className="text-center text-gray-500">Loading profile...</p>}
        </div>
      </div>
    </div>

  );
};

export default ProfilePage;
