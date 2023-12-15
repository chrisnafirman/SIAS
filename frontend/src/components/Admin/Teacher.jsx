import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyBF8Q3AuT5m-iBayXDt82r8RyADUdnyGsk",
    databaseURL:
        "https://classroom-1a392-default-rtdb.asia-southeast1.firebasedatabase.app",
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();


const Teacher = () => {

    const [data, setData] = useState([]);

    const [OpenTeacher1, setOpenTeacher1] = useState(null);
    const [OpenTeacher2, setOpenTeacher2] = useState(null);
    const [OpenTeacher3, setOpenTeacher3] = useState(null);
    const [OpenTeacher4, setOpenTeacher4] = useState(null);
    const [OpenTeacher5, setOpenTeacher5] = useState(null);
    const [OpenTeacher6, setOpenTeacher6] = useState(null);
    const [OpenTeacher7, setOpenTeacher7] = useState(null);
    const [OpenTeacher8, setOpenTeacher8] = useState(null);
    const [OpenTeacher9, setOpenTeacher9] = useState(null);
    // Di luar komponen


    // Di dalam komponen


    const [EditProfil, setEditProfil] = useState(false);

    // SUBMIT FILE
    const [file, setFile] = useState(null);


    // Update
    const [No, setNo] = useState("");
    const [Name, setName] = useState("");
    const [Addres, setAddres] = useState("");
    const [Contact, setContact] = useState("");
    const [BornDate, setBornDate] = useState("");



    useEffect(() => {
        fetch("http://localhost:3001/api/get/teacher")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                const foundItem = data.find(item => item.No === 1);
                if (foundItem) {

                    const foundItem2 = data.find(item => item.No === 2);
                    if (foundItem2) {

                    }
                    const foundItem3 = data.find(item => item.No === 3);
                    if (foundItem3) {

                    }
                    const foundItem4 = data.find(item => item.No === 4);
                    if (foundItem4) {

                    }
                    const foundItem5 = data.find(item => item.No === 5);
                    if (foundItem5) {

                    }
                    const foundItem6 = data.find(item => item.No === 6);
                    if (foundItem6) {

                    }
                    const foundItem7 = data.find(item => item.No === 7);
                    if (foundItem7) {

                    }
                    const foundItem8 = data.find(item => item.No === 8);
                    if (foundItem8) {

                    }
                }
            })
            .catch((error) => {
                // Tangani error jika permintaan gagal
                console.error("Error fetching data:", error);
            });
    }, []);

    const updateProfile = () => {
        const data = new FormData();
        data.append("Name", Name);
        data.append("Addres", Addres);
        data.append("Contact", Contact);
        data.append("BornDate", BornDate);
        data.append("Picture", file);

        fetch(`http://localhost:3001/api/put/teacher/${No}`, {
            method: "PUT",
            body: data,
        })
            .then((response) => {
                if (response.status === 200) {
                    alert("Data has been updated successfully");
                    window.location.reload();
                } else {
                    throw new Error("Error updating data");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // Handle file change
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };




    return (
        <main>
            <div
                class="w-full  shadow-xl rounded-lg flex  "
                style={{
                    height: "200vh",
                    background: "#005A5B",
                }}
            >
                <div class="w-64 px-4 ">
                    <div class="h-16 flex items-center">
                        <a
                            href="/"
                            class="w-48 mx-auto bg-red-800 hover:bg-red-500 flex items-center justify-center text-gray-100 py-2 rounded space-x-2 transition duration-150"
                        >
                            <span>Logout</span>
                        </a>
                    </div>
                    <div class="px-2 pt-4 pb-8 h-[600px]  border-r border-gray-300">
                        <ul class="space-y-2">
                            <li>
                                <a class="hover: hover:bg-opacity-10 hover:text-blue-500 flex items-center text-white py-1.5 px-4 rounded space-x-2 cursor-pointer">
                                    <span class="flex items-center space-x-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                            ></path>
                                        </svg>
                                        <span>Schedule</span>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="Information" class="hover: hover:bg-opacity-10 hover:text-blue-500 flex items-center text-white py-1.5 px-4 rounded space-x-2 cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                        ></path>
                                    </svg>
                                    <span>Information</span>
                                </a>
                            </li>
                            <li>
                                <a href="Students " class="hover: hover:bg-opacity-10 hover:text-blue-500 flex items-center text-white py-1.5 px-4 rounded space-x-2 cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                        ></path>
                                    </svg>
                                    <span>Students</span>
                                </a>
                            </li>
                            <li>
                                <a href="Teacher" class=" text-blue-500 hover: hover:bg-opacity-10 hover:text-blue-500 flex items-center  py-1.5 px-4 rounded space-x-2 cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                        ></path>
                                    </svg>
                                    <span>Teacher</span>
                                </a>
                            </li>
                            {/* <li>
                <a class="hover: hover:bg-opacity-10 hover:text-blue-500 flex items-center text-white py-1.5 px-4 rounded space-x-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 rotate-90"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                  <span>Sent</span>
                </a>
              </li> */}
                        </ul>
                    </div>
                </div>

                <div class="flex-1 px-2">

                    <div class="mb-6  pt-4 ">
                        <div className="flex  mt-6 border-spacing-1.5 flex-col">
                            <div className="p-2 ml-72 mb-5">
                                <span className="font-bold text-3xl p-2  text-white">
                                    Todays Schedule
                                </span>
                            </div>

                            <div
                               
                            >
                                <div class="flex ">
                                    <button
                                        className="mx-auto p-5 hover:scale-90"
                                        onClick={() => {
                                            setNo(1);
                                            setOpenTeacher1(true);
                                        }}
                                    >
                                        <svg fill="#ffff" version="1.1" id="Capa_1"
                                            width="80px" viewBox="0 0 31.312 31.312"
                                        >
                                            <g>
                                                <g>
                                                    <path d="M23.098,8.079c0-0.898-0.633-1.42-2.224-1.42c-0.319,0-0.742,0.023-1.351,0.063c-0.141,0.007-0.141,0.07-0.141,0.405
			c0,0.164-0.016,0.344-0.156,2.193c-0.117,1.498-0.147,1.904-0.147,2.099c0,0.616,0.312,0.92,1.537,0.92
			c1.911,0,2.481-0.795,2.481-1.748c0-0.593-0.228-1.045-0.828-1.233C22.909,9.195,23.098,8.57,23.098,8.079z M21.014,11.324
			c-0.148,0-0.328-0.031-0.508-0.085l0.086-1.272c0.18-0.031,0.352-0.046,0.469-0.046c0.522,0,0.709,0.296,0.709,0.686
			C21.77,10.903,21.661,11.324,21.014,11.324z M21.115,8.905c-0.141,0-0.289-0.023-0.445-0.063c0.031-0.421,0.047-0.795,0.062-1.068
			c0.147-0.023,0.297-0.039,0.406-0.039c0.522,0,0.709,0.273,0.709,0.593C21.848,8.578,21.73,8.905,21.115,8.905z"/>
                                                    <path d="M26.959,3.924c0.468,0,0.468,0.313,0.484,1.03c0,0.109,0.029,0.141,0.257,0.141c0.709,0,1.124-0.296,1.124-0.96
			c0-0.772-0.562-1.405-1.795-1.405c-2.293,0-2.629,2.193-2.629,3.231c0,1.919,1.14,2.465,2.209,2.465
			c1.067,0,1.623-0.546,1.707-0.897c0.07-0.289,0.117-0.53,0.117-0.694c0-0.148-0.039-0.234-0.156-0.234
			c-0.327,0-0.584,0.608-1.442,0.608c-0.664,0-0.976-0.367-0.976-1.327C25.857,5.29,25.977,3.924,26.959,3.924z"/>
                                                    <path d="M14.698,17.064h0.414c0.086,0,0.156-0.047,0.18-0.125l0.257-1.077h1.358c0.086,0.75,0.171,1.202,1.069,1.202h0.397
			c0.14,0,0.21-0.039,0.21-0.188c0-0.257-0.21-1.124-1.046-4.486c-0.108-0.444-0.25-0.866-0.772-0.866h-0.742
			c-0.187,0-0.217,0-0.303,0.148c-0.328,0.586-1.763,4.174-1.763,4.877C13.958,16.924,14.363,17.064,14.698,17.064z M16.398,12.672
			l0.328,2.06H15.83L16.398,12.672z"/>
                                                    <polygon points="2.931,0.463 2.931,3.415 4.221,3.018 4.221,1.752 30.023,1.752 30.023,18.199 9.491,18.199 9.424,19.49 
			31.312,19.49 31.312,0.463 		"/>
                                                    <circle cx="4.984" cy="7.526" r="3.821" />
                                                    <polygon points="8.228,29.104 8.228,22.302 8.228,21.661 8.228,20.791 8.471,20.791 8.825,13.885 15.416,10.471 14.55,8.8 
			8.525,11.921 6.375,11.921 4.917,13.611 3.509,11.921 0.417,12.338 0.214,19.363 1.527,19.363 1.597,20.791 1.797,20.791 
			1.797,21.661 1.797,22.302 1.797,29.104 1.534,29.104 0,29.436 0,30.85 1.306,30.85 2.83,30.602 2.844,30.85 4.531,30.85 
			4.531,29.275 4.531,29.104 4.531,22.302 5.493,22.302 5.493,29.104 5.493,29.275 5.493,30.85 7.182,30.85 7.195,30.602 
			8.718,30.85 10.024,30.85 10.024,29.436 8.491,29.104 		"/>
                                                    <rect x="23.611" y="14.943" width="5.051" height="1.879" />
                                                </g>
                                            </g>
                                        </svg>
                                        {data.map((item, index) => (
                                            <span class="font-thin text-white">
                                                {item.No === 1 && <>{item.Name}</>}
                                            </span>
                                        ))}
                                    </button>

                                    <button
                                        onClick={() => {
                                            setNo(2);
                                            setOpenTeacher2(true);
                                        }}
                                        class="mx-auto p-5 hover:scale-90"
                                    >
                                        <svg fill="#ffff" version="1.1" id="Capa_1"
                                            width="80px" viewBox="0 0 31.312 31.312"
                                        >
                                            <g>
                                                <g>
                                                    <path d="M23.098,8.079c0-0.898-0.633-1.42-2.224-1.42c-0.319,0-0.742,0.023-1.351,0.063c-0.141,0.007-0.141,0.07-0.141,0.405
			c0,0.164-0.016,0.344-0.156,2.193c-0.117,1.498-0.147,1.904-0.147,2.099c0,0.616,0.312,0.92,1.537,0.92
			c1.911,0,2.481-0.795,2.481-1.748c0-0.593-0.228-1.045-0.828-1.233C22.909,9.195,23.098,8.57,23.098,8.079z M21.014,11.324
			c-0.148,0-0.328-0.031-0.508-0.085l0.086-1.272c0.18-0.031,0.352-0.046,0.469-0.046c0.522,0,0.709,0.296,0.709,0.686
			C21.77,10.903,21.661,11.324,21.014,11.324z M21.115,8.905c-0.141,0-0.289-0.023-0.445-0.063c0.031-0.421,0.047-0.795,0.062-1.068
			c0.147-0.023,0.297-0.039,0.406-0.039c0.522,0,0.709,0.273,0.709,0.593C21.848,8.578,21.73,8.905,21.115,8.905z"/>
                                                    <path d="M26.959,3.924c0.468,0,0.468,0.313,0.484,1.03c0,0.109,0.029,0.141,0.257,0.141c0.709,0,1.124-0.296,1.124-0.96
			c0-0.772-0.562-1.405-1.795-1.405c-2.293,0-2.629,2.193-2.629,3.231c0,1.919,1.14,2.465,2.209,2.465
			c1.067,0,1.623-0.546,1.707-0.897c0.07-0.289,0.117-0.53,0.117-0.694c0-0.148-0.039-0.234-0.156-0.234
			c-0.327,0-0.584,0.608-1.442,0.608c-0.664,0-0.976-0.367-0.976-1.327C25.857,5.29,25.977,3.924,26.959,3.924z"/>
                                                    <path d="M14.698,17.064h0.414c0.086,0,0.156-0.047,0.18-0.125l0.257-1.077h1.358c0.086,0.75,0.171,1.202,1.069,1.202h0.397
			c0.14,0,0.21-0.039,0.21-0.188c0-0.257-0.21-1.124-1.046-4.486c-0.108-0.444-0.25-0.866-0.772-0.866h-0.742
			c-0.187,0-0.217,0-0.303,0.148c-0.328,0.586-1.763,4.174-1.763,4.877C13.958,16.924,14.363,17.064,14.698,17.064z M16.398,12.672
			l0.328,2.06H15.83L16.398,12.672z"/>
                                                    <polygon points="2.931,0.463 2.931,3.415 4.221,3.018 4.221,1.752 30.023,1.752 30.023,18.199 9.491,18.199 9.424,19.49 
			31.312,19.49 31.312,0.463 		"/>
                                                    <circle cx="4.984" cy="7.526" r="3.821" />
                                                    <polygon points="8.228,29.104 8.228,22.302 8.228,21.661 8.228,20.791 8.471,20.791 8.825,13.885 15.416,10.471 14.55,8.8 
			8.525,11.921 6.375,11.921 4.917,13.611 3.509,11.921 0.417,12.338 0.214,19.363 1.527,19.363 1.597,20.791 1.797,20.791 
			1.797,21.661 1.797,22.302 1.797,29.104 1.534,29.104 0,29.436 0,30.85 1.306,30.85 2.83,30.602 2.844,30.85 4.531,30.85 
			4.531,29.275 4.531,29.104 4.531,22.302 5.493,22.302 5.493,29.104 5.493,29.275 5.493,30.85 7.182,30.85 7.195,30.602 
			8.718,30.85 10.024,30.85 10.024,29.436 8.491,29.104 		"/>
                                                    <rect x="23.611" y="14.943" width="5.051" height="1.879" />
                                                </g>
                                            </g>
                                        </svg>
                                        {data.map((item, index) => (
                                            <span class="font-thin text-white">
                                                {item.No === 2 && <>{item.Name}</>}
                                            </span>
                                        ))}
                                    </button>

                                    <button
                                        onClick={() => {
                                            setNo(3);
                                            setOpenTeacher3(true);
                                        }}
                                        class="mx-auto p-5 hover:scale-90">
                                        <svg fill="#ffff" version="1.1" id="Capa_1"
                                            width="80px" viewBox="0 0 31.312 31.312"
                                        >
                                            <g>
                                                <g>
                                                    <path d="M23.098,8.079c0-0.898-0.633-1.42-2.224-1.42c-0.319,0-0.742,0.023-1.351,0.063c-0.141,0.007-0.141,0.07-0.141,0.405
			c0,0.164-0.016,0.344-0.156,2.193c-0.117,1.498-0.147,1.904-0.147,2.099c0,0.616,0.312,0.92,1.537,0.92
			c1.911,0,2.481-0.795,2.481-1.748c0-0.593-0.228-1.045-0.828-1.233C22.909,9.195,23.098,8.57,23.098,8.079z M21.014,11.324
			c-0.148,0-0.328-0.031-0.508-0.085l0.086-1.272c0.18-0.031,0.352-0.046,0.469-0.046c0.522,0,0.709,0.296,0.709,0.686
			C21.77,10.903,21.661,11.324,21.014,11.324z M21.115,8.905c-0.141,0-0.289-0.023-0.445-0.063c0.031-0.421,0.047-0.795,0.062-1.068
			c0.147-0.023,0.297-0.039,0.406-0.039c0.522,0,0.709,0.273,0.709,0.593C21.848,8.578,21.73,8.905,21.115,8.905z"/>
                                                    <path d="M26.959,3.924c0.468,0,0.468,0.313,0.484,1.03c0,0.109,0.029,0.141,0.257,0.141c0.709,0,1.124-0.296,1.124-0.96
			c0-0.772-0.562-1.405-1.795-1.405c-2.293,0-2.629,2.193-2.629,3.231c0,1.919,1.14,2.465,2.209,2.465
			c1.067,0,1.623-0.546,1.707-0.897c0.07-0.289,0.117-0.53,0.117-0.694c0-0.148-0.039-0.234-0.156-0.234
			c-0.327,0-0.584,0.608-1.442,0.608c-0.664,0-0.976-0.367-0.976-1.327C25.857,5.29,25.977,3.924,26.959,3.924z"/>
                                                    <path d="M14.698,17.064h0.414c0.086,0,0.156-0.047,0.18-0.125l0.257-1.077h1.358c0.086,0.75,0.171,1.202,1.069,1.202h0.397
			c0.14,0,0.21-0.039,0.21-0.188c0-0.257-0.21-1.124-1.046-4.486c-0.108-0.444-0.25-0.866-0.772-0.866h-0.742
			c-0.187,0-0.217,0-0.303,0.148c-0.328,0.586-1.763,4.174-1.763,4.877C13.958,16.924,14.363,17.064,14.698,17.064z M16.398,12.672
			l0.328,2.06H15.83L16.398,12.672z"/>
                                                    <polygon points="2.931,0.463 2.931,3.415 4.221,3.018 4.221,1.752 30.023,1.752 30.023,18.199 9.491,18.199 9.424,19.49 
			31.312,19.49 31.312,0.463 		"/>
                                                    <circle cx="4.984" cy="7.526" r="3.821" />
                                                    <polygon points="8.228,29.104 8.228,22.302 8.228,21.661 8.228,20.791 8.471,20.791 8.825,13.885 15.416,10.471 14.55,8.8 
			8.525,11.921 6.375,11.921 4.917,13.611 3.509,11.921 0.417,12.338 0.214,19.363 1.527,19.363 1.597,20.791 1.797,20.791 
			1.797,21.661 1.797,22.302 1.797,29.104 1.534,29.104 0,29.436 0,30.85 1.306,30.85 2.83,30.602 2.844,30.85 4.531,30.85 
			4.531,29.275 4.531,29.104 4.531,22.302 5.493,22.302 5.493,29.104 5.493,29.275 5.493,30.85 7.182,30.85 7.195,30.602 
			8.718,30.85 10.024,30.85 10.024,29.436 8.491,29.104 		"/>
                                                    <rect x="23.611" y="14.943" width="5.051" height="1.879" />
                                                </g>
                                            </g>
                                        </svg>{data.map((item, index) => (
                                            <span class="font-thin text-white">
                                                {item.No === 3 && <>{item.Name}</>}
                                            </span>
                                        ))}

                                    </button>
                                </div>

                                <div class="flex">
                                    <button
                                        onClick={() => {
                                            setNo(4);
                                            setOpenTeacher4(true);
                                        }}
                                        class="mx-auto p-5 hover:scale-90">
                                        <svg fill="#ffff" version="1.1" id="Capa_1"
                                            width="80px" viewBox="0 0 31.312 31.312"
                                        >
                                            <g>
                                                <g>
                                                    <path d="M23.098,8.079c0-0.898-0.633-1.42-2.224-1.42c-0.319,0-0.742,0.023-1.351,0.063c-0.141,0.007-0.141,0.07-0.141,0.405
			c0,0.164-0.016,0.344-0.156,2.193c-0.117,1.498-0.147,1.904-0.147,2.099c0,0.616,0.312,0.92,1.537,0.92
			c1.911,0,2.481-0.795,2.481-1.748c0-0.593-0.228-1.045-0.828-1.233C22.909,9.195,23.098,8.57,23.098,8.079z M21.014,11.324
			c-0.148,0-0.328-0.031-0.508-0.085l0.086-1.272c0.18-0.031,0.352-0.046,0.469-0.046c0.522,0,0.709,0.296,0.709,0.686
			C21.77,10.903,21.661,11.324,21.014,11.324z M21.115,8.905c-0.141,0-0.289-0.023-0.445-0.063c0.031-0.421,0.047-0.795,0.062-1.068
			c0.147-0.023,0.297-0.039,0.406-0.039c0.522,0,0.709,0.273,0.709,0.593C21.848,8.578,21.73,8.905,21.115,8.905z"/>
                                                    <path d="M26.959,3.924c0.468,0,0.468,0.313,0.484,1.03c0,0.109,0.029,0.141,0.257,0.141c0.709,0,1.124-0.296,1.124-0.96
			c0-0.772-0.562-1.405-1.795-1.405c-2.293,0-2.629,2.193-2.629,3.231c0,1.919,1.14,2.465,2.209,2.465
			c1.067,0,1.623-0.546,1.707-0.897c0.07-0.289,0.117-0.53,0.117-0.694c0-0.148-0.039-0.234-0.156-0.234
			c-0.327,0-0.584,0.608-1.442,0.608c-0.664,0-0.976-0.367-0.976-1.327C25.857,5.29,25.977,3.924,26.959,3.924z"/>
                                                    <path d="M14.698,17.064h0.414c0.086,0,0.156-0.047,0.18-0.125l0.257-1.077h1.358c0.086,0.75,0.171,1.202,1.069,1.202h0.397
			c0.14,0,0.21-0.039,0.21-0.188c0-0.257-0.21-1.124-1.046-4.486c-0.108-0.444-0.25-0.866-0.772-0.866h-0.742
			c-0.187,0-0.217,0-0.303,0.148c-0.328,0.586-1.763,4.174-1.763,4.877C13.958,16.924,14.363,17.064,14.698,17.064z M16.398,12.672
			l0.328,2.06H15.83L16.398,12.672z"/>
                                                    <polygon points="2.931,0.463 2.931,3.415 4.221,3.018 4.221,1.752 30.023,1.752 30.023,18.199 9.491,18.199 9.424,19.49 
			31.312,19.49 31.312,0.463 		"/>
                                                    <circle cx="4.984" cy="7.526" r="3.821" />
                                                    <polygon points="8.228,29.104 8.228,22.302 8.228,21.661 8.228,20.791 8.471,20.791 8.825,13.885 15.416,10.471 14.55,8.8 
			8.525,11.921 6.375,11.921 4.917,13.611 3.509,11.921 0.417,12.338 0.214,19.363 1.527,19.363 1.597,20.791 1.797,20.791 
			1.797,21.661 1.797,22.302 1.797,29.104 1.534,29.104 0,29.436 0,30.85 1.306,30.85 2.83,30.602 2.844,30.85 4.531,30.85 
			4.531,29.275 4.531,29.104 4.531,22.302 5.493,22.302 5.493,29.104 5.493,29.275 5.493,30.85 7.182,30.85 7.195,30.602 
			8.718,30.85 10.024,30.85 10.024,29.436 8.491,29.104 		"/>
                                                    <rect x="23.611" y="14.943" width="5.051" height="1.879" />
                                                </g>
                                            </g>
                                        </svg>{data.map((item, index) => (
                                            <span class="font-thin text-white">
                                                {item.No === 4 && <>{item.Name}</>}
                                            </span>
                                        ))}
                                    </button>


                                </div>


                                {data.map((item, index) => (
                                    <td class="">
                                        {OpenTeacher1 && item.No === 1 && (
                                            <>
                                                <div
                                                    className="relative z-10"
                                                    aria-labelledby="modal-title"
                                                    role="dialog"
                                                    aria-modal="true"
                                                >
                                                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                                                    <div className="fixed inset-0 z-10 overflow-y-auto">
                                                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                                                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                                        {item.Name}
                                                                    </h3>
                                                                    <button
                                                                        onClick={() => setOpenTeacher1(false)}
                                                                        type="button"
                                                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                                        data-modal-hide="defaultModal"
                                                                    >
                                                                        <svg
                                                                            className="w-3 h-3"
                                                                            aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="none"
                                                                            viewBox="0 0 14 14"
                                                                        >
                                                                            <path
                                                                                stroke="currentColor"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth="2"
                                                                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                                            />
                                                                        </svg>
                                                                        <span className="sr-only">Close modal</span>
                                                                    </button>
                                                                </div>

                                                                <div className="p-6 flex space-y-6">
                                                                    <div>
                                                                        <img
                                                                            src={`http://localhost:3001/${item.Picture}`}
                                                                            alt="Logo"
                                                                            className="w-44 rounded-3xl h-64 border-black border-4"
                                                                        />
                                                                    </div>

                                                                    <div className="ml-3 flex flex-col">
                                                                        <span className="p-3 font-mono">
                                                                            Name: {item.Name}
                                                                        </span>
                                                                        <span className="p-3 font-mono">
                                                                            Born Date: {item.BornDate}
                                                                        </span>
                                                                        <span className="p-3 font-mono">
                                                                            Contact: {item.Contact}
                                                                        </span>
                                                                        <span className="p-3 font-mono">
                                                                            Address: <br /> {item.Addres}
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                                    <button
                                                                        data-modal-hide="defaultModal"
                                                                        type="button"
                                                                        class="text-black bg-lime-600 hover:bg-lime-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                                                    >
                                                                        Chat
                                                                    </button>
                                                                    <button
                                                                        onClick={() => setEditProfil(true)}
                                                                        data-modal-hide="defaultModal"
                                                                        type="button"
                                                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                                    >
                                                                        Update
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </td>
                                ))}


                                {data.map((item, index) => (
                                    <td className="">
                                        {OpenTeacher2 && item.No === 2 && (
                                            <>
                                                <div
                                                    className="relative z-10"
                                                    aria-labelledby="modal-title"
                                                    role="dialog"
                                                    aria-modal="true"
                                                >
                                                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                                                    <div className="fixed inset-0 z-10 overflow-y-auto">
                                                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                                                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                                        {item.Name}
                                                                    </h3>
                                                                    <button
                                                                        onClick={() => setOpenTeacher2(false)}
                                                                        type="button"
                                                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                                        data-modal-hide="defaultModal"
                                                                    >
                                                                        <svg
                                                                            className="w-3 h-3"
                                                                            aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="none"
                                                                            viewBox="0 0 14 14"
                                                                        >
                                                                            <path
                                                                                stroke="currentColor"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth="2"
                                                                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                                            />
                                                                        </svg>
                                                                        <span className="sr-only">Close modal</span>
                                                                    </button>
                                                                </div>

                                                                <div className="p-6 flex space-y-6">
                                                                    <div>
                                                                        <img
                                                                            src={`http://localhost:3001/${item.Picture}`}
                                                                            alt="Logo"
                                                                            className="w-44 rounded-3xl h-64 border-black border-4"
                                                                        />
                                                                    </div>

                                                                    <div className="ml-3 flex flex-col">
                                                                        <span className="p-3 font-mono">
                                                                            Name: {item.Name}
                                                                        </span>
                                                                        <span className="p-3 font-mono">
                                                                            Born Date: {item.BornDate}
                                                                        </span>
                                                                        <span className="p-3 font-mono">
                                                                            Contact: {item.Contact}
                                                                        </span>
                                                                        <span className="p-3 font-mono">
                                                                            Address: <br /> {item.Addres}
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                                    <a href={`https://api.whatsapp.com/send?phone=${item.Contact}`}>
                                                                        <button
                                                                            data-modal-hide="defaultModal"
                                                                            type="button"
                                                                            class="text-black bg-lime-600 hover:bg-lime-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                                                        >
                                                                            Chat
                                                                        </button>
                                                                    </a>
                                                                    <button
                                                                        onClick={() => setEditProfil(true)}
                                                                        data-modal-hide="defaultModal"
                                                                        type="button"
                                                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                                    >
                                                                        Update
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </td>
                                ))}


                                {data.map((item, index) => (
                                    <td className="">
                                        {OpenTeacher3 && item.No === 3 && (
                                            <>
                                                <div
                                                    className="relative z-10"
                                                    aria-labelledby="modal-title"
                                                    role="dialog"
                                                    aria-modal="true"
                                                >
                                                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                                                    <div className="fixed inset-0 z-10 overflow-y-auto">
                                                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                                                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                                        {item.Name}
                                                                    </h3>
                                                                    <button
                                                                        onClick={() => setOpenTeacher3(false)}
                                                                        type="button"
                                                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                                        data-modal-hide="defaultModal"
                                                                    >
                                                                        <svg
                                                                            className="w-3 h-3"
                                                                            aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="none"
                                                                            viewBox="0 0 14 14"
                                                                        >
                                                                            <path
                                                                                stroke="currentColor"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth="2"
                                                                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                                            />
                                                                        </svg>
                                                                        <span className="sr-only">Close modal</span>
                                                                    </button>
                                                                </div>

                                                                <div className="p-6 flex space-y-6">
                                                                    <div>
                                                                        <img
                                                                            src={`http://localhost:3001/${item.Picture}`}
                                                                            alt="Logo"
                                                                            className="w-44 rounded-3xl h-64 border-black border-4"
                                                                        />
                                                                    </div>

                                                                    <div className="ml-3 flex flex-col">
                                                                        <span className="p-3 font-mono">
                                                                            Name: {item.Name}
                                                                        </span>
                                                                        <span className="p-3 font-mono">
                                                                            Born Date: {item.BornDate}
                                                                        </span>
                                                                        <span className="p-3 font-mono">
                                                                            Contact: {item.Contact}
                                                                        </span>
                                                                        <span className="p-3 font-mono">
                                                                            Address: <br /> {item.Addres}
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                                    <a href={`https://api.whatsapp.com/send?phone=${item.Contact}`}>
                                                                        <button
                                                                            data-modal-hide="defaultModal"
                                                                            type="button"
                                                                            class="text-black bg-lime-600 hover:bg-lime-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                                                        >
                                                                            Chat
                                                                        </button>
                                                                    </a>
                                                                    <button
                                                                        onClick={() => setEditProfil(true)}
                                                                        data-modal-hide="defaultModal"
                                                                        type="button"
                                                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                                    >
                                                                        Update
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </td>
                                ))}

                                {data.map((item, index) => (
                                    <td className="">
                                        {OpenTeacher4 && item.No === 4 && (
                                            <>
                                                <div
                                                    className="relative z-10"
                                                    aria-labelledby="modal-title"
                                                    role="dialog"
                                                    aria-modal="true"
                                                >
                                                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                                                    <div className="fixed inset-0 z-10 overflow-y-auto">
                                                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                                                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                                        {item.Name}
                                                                    </h3>
                                                                    <button
                                                                        onClick={() => setOpenTeacher4(false)}
                                                                        type="button"
                                                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                                        data-modal-hide="defaultModal"
                                                                    >
                                                                        <svg
                                                                            className="w-3 h-3"
                                                                            aria-hidden="true"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            fill="none"
                                                                            viewBox="0 0 14 14"
                                                                        >
                                                                            <path
                                                                                stroke="currentColor"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth="2"
                                                                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                                            />
                                                                        </svg>
                                                                        <span className="sr-only">Close modal</span>
                                                                    </button>
                                                                </div>

                                                                <div className="p-6 flex space-y-6">
                                                                    <div>
                                                                        <img
                                                                            src={`http://localhost:3001/${item.Picture}`}
                                                                            alt="Logo"
                                                                            className="w-44 rounded-3xl h-64 border-black border-4"
                                                                        />
                                                                    </div>

                                                                    <div className="ml-3 flex flex-col">
                                                                        <span className="p-3 font-mono">
                                                                            Name: {item.Name}
                                                                        </span>
                                                                        <span className="p-3 font-mono">
                                                                            Born Date: {item.BornDate}
                                                                        </span>
                                                                        <span className="p-3 font-mono">
                                                                            Contact: {item.Contact}
                                                                        </span>
                                                                        <span className="p-3 font-mono">
                                                                            Address: <br /> {item.Addres}
                                                                        </span>
                                                                    </div>
                                                                </div>

                                                                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                                    <a href={`https://api.whatsapp.com/send?phone=${item.Contact}`}>
                                                                        <button
                                                                            data-modal-hide="defaultModal"
                                                                            type="button"
                                                                            class="text-black bg-lime-600 hover:bg-lime-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                                                        >
                                                                            Chat
                                                                        </button>
                                                                    </a>
                                                                    <button
                                                                        onClick={() => setEditProfil(true)}
                                                                        data-modal-hide="defaultModal"
                                                                        type="button"
                                                                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                                    >
                                                                        Update
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </td>
                                ))}








                                <td class="">
                                    {EditProfil ? (
                                        <>
                                            <div className="fixed z-10 inset-0 overflow-y-auto">
                                                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                                    <div className="fixed inset-0 transition-opacity">
                                                        <div className="absolute inset-0 bg-slate-800 opacity-75"></div>
                                                    </div>

                                                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

                                                    <div
                                                        className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                                                        role="dialog"
                                                        aria-modal="true"
                                                        aria-labelledby="modal-headline"
                                                    >
                                                        <div className="bg-white px-4 pt-1 pb-4 sm:p-6 sm:pb-4">
                                                            <div className="sm:flex sm:items-start">
                                                                <form className="w-full max-w-lg">
                                                                    <div class="flex flex-wrap -mx-3 ">
                                                                        <div class="w-full px-1">
                                                                            <label
                                                                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                                                for="grid-first-name"
                                                                            >
                                                                                Name
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                name="Name"
                                                                                required
                                                                                onChange={(e) => {
                                                                                    setName(e.target.value);
                                                                                }}
                                                                            ></input>
                                                                        </div>
                                                                    </div>
                                                                    <div class="flex flex-wrap -mx-3 ">
                                                                        <div class="w-full px-1">
                                                                            <label
                                                                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                                                for="grid-first-name"
                                                                            >
                                                                                Addres
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                name="Addres"
                                                                                required
                                                                                onChange={(e) => {
                                                                                    setAddres(e.target.value);
                                                                                }}
                                                                            ></input>
                                                                        </div>
                                                                    </div>
                                                                    <div class="flex flex-wrap -mx-3 ">
                                                                        <div class="w-full px-1">
                                                                            <label
                                                                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                                                for="grid-first-name"
                                                                            >
                                                                                Telephone
                                                                            </label>
                                                                            <input
                                                                                type="Number"
                                                                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                name="Contact"
                                                                                required
                                                                                onChange={(e) => {
                                                                                    setContact(e.target.value);
                                                                                }}
                                                                            ></input>
                                                                        </div>
                                                                    </div>
                                                                    <div class="flex flex-wrap -mx-3 ">
                                                                        <div class="w-full px-1">
                                                                            <label
                                                                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                                                for="grid-first-name"
                                                                            >
                                                                                Born Date
                                                                            </label>
                                                                            <input
                                                                                type="Date"
                                                                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                name="Borndate"
                                                                                required
                                                                                onChange={(e) => {
                                                                                    setBornDate(e.target.value);
                                                                                }}
                                                                            ></input>
                                                                        </div>
                                                                    </div>

                                                                    <div class="flex flex-wrap -mx-3 ">
                                                                        <div class="w-full px-1">
                                                                            <label
                                                                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                                                                                for="grid-password"
                                                                            >
                                                                                Profil Picture
                                                                            </label>
                                                                            <input
                                                                                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                                id="grid-password"
                                                                                type="file"
                                                                                placeholder=""
                                                                                name="Picture"
                                                                                onChange={handleFileChange}
                                                                                required
                                                                            />
                                                                            <p class="text-gray-600 text-xs italic"></p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex justify-end">
                                                                        <button
                                                                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                                                                            onClick={() => setEditProfil(false)}
                                                                        >
                                                                            Batal
                                                                        </button>
                                                                        <button
                                                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                                            type="submit"
                                                                            onClick={updateProfile}
                                                                        >
                                                                            Submit
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ) : null}
                                </td>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Teacher;
