import React, { useEffect, useState } from "react";

const statusColor = (status) => {
  if (status === "overdue")
    return "bg-red-500 text-white-600";
  if (status === "on-track")
    return "bg-green-500 text-white";
  if (status === "almost due")
    return "bg-yellow-400 text-white";
};

const tagColor = (tag) => {
  if (tag === "work")
    return "bg-green-100 text-green-600";
  if (tag === "family")
    return "bg-green-100 text-green-600";
  if (tag === "hobby")
    return "bg-green-100 text-green-600";
  if (tag === "travel")
    return "bg-green-100 text-green-600";
};

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();

      setFriends(data);
      
    };

    fetchData();
  }, []);
    
  return (
    <div className="bg-gray-100 min-h-screen px-6 py-10">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Friends to keep close in your life
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <button className="btn btn-success mt-4">
          + Add a Friend
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-5xl mx-auto">
        <div className="card bg-base-100 shadow text-center p-6">
          <h2 className="text-2xl font-bold">{friends.length}</h2>
          <p className="text-sm text-gray-500">Total Friends</p>
        </div>
        <div className="card bg-base-100 shadow text-center p-6">
          <h2 className="text-2xl font-bold">
            {friends.filter((f) => f.status === "on-track").length}
          </h2>
          <p className="text-sm text-gray-500">On Track</p>
        </div>
        <div className="card bg-base-100 shadow text-center p-6">
          <h2 className="text-2xl font-bold">
            {friends.filter((f) => f.status === "almost due" || f.status === "overdue").length}
          </h2>
          <p className="text-sm text-gray-500">Need Attention</p>
        </div>
        <div className="card bg-base-100 shadow text-center p-6">
          <h2 className="text-2xl font-bold">12</h2>
          <p className="text-sm text-gray-500">Interactions This Month</p>
        </div>
      </div>

      {/* Friends Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-lg font-semibold text-gray-700 mb-6">
          Your Friends
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <div key={friend.id} className="card bg-white shadow-md p-5 text-center">
              
              <img
                src={friend.picture}
                alt={friend.name}
                className="w-16 h-16 rounded-full mx-auto mb-3"
              />

              <h3 className="font-semibold text-black">
                {friend.name}
              </h3>

              <p className="text-xs text-gray-400 mb-2">
                {friend["days_since_contact"]}d ago
              </p>

              {/* Tags */}
              <div className="flex justify-center gap-2 mb-2 flex-wrap">
                {friend.tags.map((tag, index) => (
                  <span key={index}className={`px-3 py-1 text-xs font-medium rounded-full ${tagColor(tag)}`}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Status */}
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${statusColor(friend.status)}`}>
                {friend.status}
              </span>

              {/* Goal */}
              {/* <p className="text-xs text-gray-500 mt-2">
                Goal: {friend.goal}
              </p> */}

              {/* Next Due Date */}
              {/* <p className="text-xs text-gray-400">
                Next Due: {friend["next-due-date"]}
              </p> */}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Friends;
