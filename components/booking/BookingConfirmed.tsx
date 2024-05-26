import React from "react";

const BookingConfirmed = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        backgroundColor: "#f0f8ff",
        textAlign: "center",
        paddingTop: 50,
      }}
    >
      <div className="star-animation">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="star"
            style={{
              position: "absolute",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: "fall 2s linear forwards",
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0,
            }}
          >
            🌟
          </div>
        ))}
      </div>
      <h1>Booking Confirmed!</h1>
      <p>Your booking has been successfully confirmed.</p>
      <button
        onClick={handlePrint}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          margin: "20px",
        }}
      >
        Print Confirmation
      </button>
      <a
        href="/dashboard"
        style={{
          display: "inline-block",
          backgroundColor: "green",
          color: "white",
          padding: "10px 20px",
          textDecoration: "none",
          fontSize: "16px",
        }}
      >
        Go to Dashboard
      </a>
      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(-100px); opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default BookingConfirmed;
