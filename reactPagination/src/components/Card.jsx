import React from "react";

const Card = ({user,setIsupdate,setForm,setUserData,userData,setToggle}) => {

    function deleteHandle(id) {
        const filter = userData.filter((val) => val.id !== id)
        setUserData(filter)
        console.log("id",id)
    }

    function editUser(id) {
        const user = userData.find((val) => val.id == id)
        setForm(user)
        setIsupdate(true)
        setToggle(true)
    }



  return (
    <div
      style={{
        width: "280px",
        padding: "20px",
        border: "1px solid #e5e5e5",
        borderRadius: "12px",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      {/* Image */}
      <img
        src={user.imageUrl}
        alt="profile"
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      {/* Name */}
      <h2
        style={{
          margin: "15px 0 5px",
          fontSize: "20px",
          color: "#18181b",
        }}
      >
       {user.name}
      </h2>

      {/* Email */}
      <p
        style={{
          margin: 0,
          color: "#71717a",
          fontSize: "14px",
        }}
      >
        {user.email}
      </p>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <button
        onClick={() => editUser(user.id)}
          style={{
            flex: 1,
            padding: "10px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#18181b",
            color: "white",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Edit
        </button>

        <button
        onClick={() => deleteHandle(user.id)}
          style={{
            flex: 1,
            padding: "10px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#dc2626",
            color: "white",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;