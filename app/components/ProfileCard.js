"use client";

const ProfileCard = ({ user, role }) => {
  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-lg max-w-xs mx-auto my-4">
      <div className="p-6">
        {role === "admin" && (
          <div>
            <h2 className="text-gray-700 font-semibold mb-2">{user.name}</h2>
            <p className="text-gray-700 mb-2">Email: {user.email}</p>
            <p className="text-gray-700 mb-2">Phone: {user.phone}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={() => console.log("Edit button clicked")}
            >
              Edit
            </button>
          </div>
        )}

        {role === "member" && (
          <div>
            <p className="text-gray-700 mb-2">Name: {user.name}</p>
            <p className="text-gray-700 mb-2">Email: {user.email}</p>
          </div>
        )}

        {role === "guest" && (
          <div>
            <p className="text-gray-700 mb-2">Welcome, {user.name}!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
