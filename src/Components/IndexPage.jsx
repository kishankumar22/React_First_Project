import React, { useEffect, useState } from "react";
import Layout from "./layout/Layout";
import Notifications from "./Notifications";

const IndexPage = () => {
  const [updates, setUpdates] = useState([]);
  const [counter, setCounter] = useState(1);

  // Add a new update every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Add new update only if counter <= 6
      if (counter <= 5) {
        setUpdates((prevUpdates) => {
          const newUpdates = [
            ...prevUpdates,
            `Update #${counter}: This is a new notification!`,
          ];
          // Keep only the last 5 updates
          return newUpdates.slice(-5);
        });
        setCounter((prevCounter) => prevCounter + 1);
      }
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [counter]);

  
  const [username, setUsername] = useState(""); // State to store the username

  useEffect(() => {
    // Retrieve the logged-in user's information from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser && loggedInUser.username) {
      // Set the username in the state
      setUsername(loggedInUser.username);

      // Show the alert message once
      if (!localStorage.getItem("alertShown")) {
        alert(`Hey ${loggedInUser.username}, you have been logged in!`);
        localStorage.setItem("alertShown", "true"); // Set a flag to ensure the alert doesn't show again
      }
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <Layout>
      <>
   

      {/* Content Block */}
      <div className="content1">
        <div className="content-75">
          <h1>JK Institute Of Pharmacy</h1>
          <p>
          The Indian pharmaceutical industry at $6.5 p y billion and growing at 8-10% annually, 
          is the4th largest pharmaceutical industry in the world and is expected to be worth $14 billion world, 
          by 2010. Its exports are over $2billion. India is among the top five bulk drug makers and at home,
           the local industry has edged out the Multi-National companies whose share of 75% in the market is
            down to 35%. Trade of medicinal plants has crossed $ 900M already. There are 170 biotechnology
             companies in India, involved in the development and manufacture of genomic drugs, 
          whose business is growing exponentially Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, similique!
          </p>
          <p>Sequencing genes and delivering genomic information for big Pharmaceutical companies is the next 
            boom industry in India. India is also adorned by industry who are involved Insurance BPOs & Clinical 
            Research in Health Insurance, including Clinical Trial, BA/BE studies, PK Studies, Data management,
             Pharmacovigilence.</p>
          <img
            src="https://jkiop.org/images/aboutimg.jpg"
            alt="JK Institute Of Pharmacy"
          />
        </div>
        <div className="content-25">
          
              <h1>updates</h1>
              <Notifications/>
          
{/*   
          <div className="notification-container">
          
            {updates.map((update, index) => (
              <div key={index} className="notification">
                {update}
              </div>
            ))}
          </div> */}
        </div>
      </div>

      </>
    </Layout>
  );
};

export default IndexPage;
