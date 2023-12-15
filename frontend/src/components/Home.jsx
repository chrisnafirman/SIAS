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

const Home = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [Student1, setStudent1] = useState("");
  const [Student2, setStudent2] = useState("");
  const [Student3, setStudent3] = useState("");
  const [Student4, setStudent4] = useState("");
  const [Student5, setStudent5] = useState("");
  const [Student6, setStudent6] = useState("");
  const [Student7, setStudent7] = useState("");
  const [Student8, setStudent8] = useState("");
  const [Student9, setStudent9] = useState("");

  const [isopeninformation, setIsopeninformation] = useState(false);
  const [isopenRealtimeAttendance, setIsopenRealtimeAttendance] = useState(false);

  const countPresent = () => {
    const variables = [
      Student1,
      Student2,
      Student3,
      Student4,
      Student5,
      Student6,
      Student7,
      Student8,
      Student9,
    ];
    let presentCount = 0;
    for (let i = 0; i < variables.length; i++) {
      if (variables[i] === "Present") {
        presentCount++;
      }
    }
    return presentCount;
  };

  useEffect(() => {
    const ref1 = firebase.database().ref("ClassA/Student1");
    ref1.on("value", (snapshot) => {
      const data = snapshot.val();
      setStudent1(data);
    });

    const ref2 = firebase.database().ref("ClassA/Student2");
    ref2.on("value", (snapshot) => {
      const data = snapshot.val();
      setStudent2(data);
    });

    const ref3 = firebase.database().ref("ClassA/Student3");
    ref3.on("value", (snapshot) => {
      const data = snapshot.val();
      setStudent3(data);
    });

    const ref4 = firebase.database().ref("ClassA/Student4");
    ref4.on("value", (snapshot) => {
      const data = snapshot.val();
      setStudent4(data);
    });

    const ref5 = firebase.database().ref("ClassA/Student5");
    ref5.on("value", (snapshot) => {
      const data = snapshot.val();
      setStudent5(data);
    });

    const ref6 = firebase.database().ref("ClassA/Student6");
    ref6.on("value", (snapshot) => {
      const data = snapshot.val();
      setStudent6(data);
    });

    const ref7 = firebase.database().ref("ClassA/Student7");
    ref7.on("value", (snapshot) => {
      const data = snapshot.val();
      setStudent7(data);
    });

    const ref8 = firebase.database().ref("ClassA/Student8");
    ref8.on("value", (snapshot) => {
      const data = snapshot.val();
      setStudent8(data);
    });

    const ref9 = firebase.database().ref("ClassA/Student9");
    ref9.on("value", (snapshot) => {
      const data = snapshot.val();
      setStudent9(data);
    });
    return () => { };
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/api/get/schedule")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        // Tangani error jika permintaan gagal
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/api/get/Information")
      .then((response) => response.json())
      .then((data) => {
        setData2(data);
      })
      .catch((error) => {
        // Tangani error jika permintaan gagal
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/api/get/Attendance")
      .then((response) => response.json())
      .then((data) => {
        setData3(data);
      })
      .catch((error) => {
        // Tangani error jika permintaan gagal
        console.error("Error fetching data:", error);
      });
  }, []);

  const formatDateTime = (dateString) => {
    const options = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return new Intl.DateTimeFormat("id-ID", options).format(new Date(dateString));
  };

  const styles = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/BG2.jpg)`,
    backgroundSize: "1120px",
    backgroundPosition: "250px",
    height: "648px", // Ubah tinggi (height) sesuai kebutuhan Anda
  };

  return (
    <body style={styles}>
      <div className="flex">
        <div className="flex flex-col">
          <div className="p-2 w-52">
            <span className="font-mono text-3xl p-2    text-blue-950 ">

            </span>
          </div>
          <button onClick={() => setIsopenRealtimeAttendance(true)} className="mx-auto p-2  hover:scale-90">
            <svg
              fill="#00008B"
              width="80px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>alt-clipboard</title>
              <path d="M2.016 30.016v-26.016q0-0.832 0.576-1.408t1.408-0.576h4v4h-1.984v21.984h20v-21.984h-2.016v-4h4q0.832 0 1.408 0.576t0.608 1.408v26.016q0 0.832-0.608 1.408t-1.408 0.576h-24q-0.832 0-1.408-0.576t-0.576-1.408zM8 26.016v-18.016h2.016q0 0.832 0.576 1.44t1.408 0.576h8q0.832 0 1.408-0.576t0.608-1.44h1.984v18.016h-16zM10.016 22.016h9.984v-2.016h-9.984v2.016zM10.016 18.016h8v-2.016h-8v2.016zM10.016 14.016h12v-2.016h-12v2.016zM10.016 6.016v-4h4v-2.016h4v2.016h4v4q0 0.832-0.608 1.408t-1.408 0.576h-8q-0.832 0-1.408-0.576t-0.576-1.408zM14.016 6.016h4v-2.016h-4v2.016z"></path>
            </svg>
            <span className="font-thin text-white">Attendance</span>
          </button>
          <button className="mx-auto p-5 hover:scale-90">
            <a href="/InformationTeacher">
              <svg fill="#ffff" width="80px" version="1.1" id="Layer_1"
                viewBox="0 0 512 512" >
                <g>
                  <g>
                    <circle cx="256.763" cy="44.89" r="44.89" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M269.99,136.099l-8.011-14.569l7.108-12.927c1.059-1.927-0.337-4.293-2.539-4.293h-19.529
			c-2.199,0-3.599,2.364-2.538,4.293l7.123,12.954l-8.025,14.597c-0.931,1.694-1.235,3.663-0.859,5.559l1.373,6.914l12.692,3.489
			l12.58-3.458l1.464-6.893C271.237,139.837,270.94,137.827,269.99,136.099z"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M237.477,414.547v51.505c0,14.355,11.637,25.991,25.992,25.991s25.992-11.637,25.992-25.991V353.595L237.477,414.547z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M165.014,426.411c-8.735-7.45-14.097-17.385-15.935-27.873v47.32c0,7.531,6.105,13.637,13.637,13.637
			c7.532,0,13.637-6.106,13.637-13.637V433.59C172.348,431.788,168.525,429.404,165.014,426.411z"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M176.353,301.556h-27.274v80.568c1.409-8.076,4.921-15.893,10.627-22.583l16.648-19.519v-38.466H176.353z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M335.254,301.556v144.302c0,7.531,6.105,13.637,13.637,13.637s13.637-6.106,13.637-13.637V301.556H335.254z" />
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M237.34,301.556l-61.321,71.898c-9.315,10.922-8.012,27.327,2.909,36.642c10.932,9.322,27.335,8.005,36.642-2.909
			l90.091-105.631H237.34z"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M218.382,192.209c-5.347,0.013-43.728,0.109-49.016,0.122c9.866-20.868,7.628-16.136,17.359-36.72
			c2.282-4.828,7.126-7.991,12.438-8.184v24.984l14.487-0.037v-24.967c0-1.186-0.159-3.192,1.849-4.723
			c1.165-0.888,2.679-1.182,4.093-0.794c2.979,0.819,18.824,5.175,20.548,5.649c-0.089-0.23-16.704-43.32-16.755-43.452h-23.711
			c-22.18,0-42.635,12.956-52.115,33.009c-3.156,6.676-28.973,61.287-32.014,67.721c-7.011,14.837,4.623,31.417,19.638,30.917
			c9.328-0.023,74.697-0.186,83.308-0.207c11.963-0.03,21.636-9.752,21.606-21.714C240.065,201.135,229.27,191.869,218.382,192.209z
			"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M470.545,255.507c-1.571,0-416.533,0-429.088,0c-7.254,0-13.135,5.881-13.135,13.135c0,7.255,5.881,13.135,13.135,13.135
			h14.139V491.84c0,11.133,9.026,20.159,20.159,20.159s20.159-9.026,20.159-20.159V281.777c14.377,0,306.504,0,321.36,0v210.064
			c0,11.133,9.026,20.159,20.159,20.159s20.159-9.026,20.159-20.159V281.777h12.953c7.254,0,13.135-5.881,13.135-13.135
			C483.681,261.388,477.8,255.507,470.545,255.507z"/>
                  </g>
                </g>
                <g>
                  <g>
                    <path d="M397.697,204.822c-3.035-6.419-28.863-61.056-32.014-67.721c-9.48-20.052-29.935-33.009-52.115-33.009H290.18
			c-0.087,0.228-16.663,43.219-16.752,43.45c1.791-0.492,17.585-4.834,20.548-5.649c1.413-0.388,2.926-0.095,4.093,0.794
			c2.008,1.53,1.849,3.537,1.849,4.723v25.164h13.972v-25.152c5.388,0.122,10.321,3.304,12.63,8.191
			c9.738,20.601,7.622,16.123,17.399,36.805c-18.136,0-30.897,0-49.111,0c-11.963,0-21.66,9.697-21.66,21.66
			s9.697,21.66,21.66,21.66c8.772,0,74.415,0,83.308,0C393.94,235.738,404.503,219.213,397.697,204.822z"/>
                  </g>
                </g>
              </svg>
              <span className="font-thin text-white">Teacher</span>
            </a>
          </button>
          <button onClick={() => setIsopeninformation(true)} className="mx-auto p-5  hover:scale-90">
            <svg width="80px" fill="#808080" version="1.1" id="_x32_"
              viewBox="0 0 512 512">

              <g>
                <path class="st0" d="M290.671,135.434c37.324-3.263,64.949-36.175,61.663-73.498c-3.241-37.324-36.152-64.938-73.476-61.675
		c-37.324,3.264-64.949,36.164-61.686,73.488C220.437,111.096,253.348,138.698,290.671,135.434z"/>
                <path class="st0" d="M311.31,406.354c-16.134,5.906-43.322,22.546-43.322,22.546s20.615-95.297,21.466-99.446
		c8.71-41.829,33.463-100.86-0.069-136.747c-23.35-24.936-53.366-18.225-79.819,7.079c-17.467,16.696-26.729,27.372-42.908,45.322
		c-6.55,7.273-9.032,14.065-5.93,24.717c3.332,11.515,16.8,17.226,28.705,12.871c16.134-5.895,43.3-22.534,43.3-22.534
		s-12.595,57.997-18.869,87c-0.874,4.137-36.06,113.292-2.505,149.18c23.35,24.949,53.343,18.226,79.819-7.066
		c17.467-16.698,26.729-27.373,42.908-45.334c6.55-7.263,9.009-14.054,5.93-24.706C336.66,407.733,323.215,402.01,311.31,406.354z"
                />
              </g>
            </svg>
            <span className="font-thin text-white">Information</span>
          </button>

          <button className="mx-auto p-5 hover:scale-90">
            <a href="/Login">
              <svg
                width="80px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 14v8H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm9 4h1v5h-8v-5h1v-1a3 3 0 0 1 6 0v1zm-2 0v-1a1 1 0 0 0-2 0v1h2z" />
                </g>
              </svg>
              <span className="font-thin text-white">Admin</span>
            </a>
          </button>
        </div>

        <div className="flex ml-28 w-[800px] mt-10 border-spacing-1.5 flex-col">
          <div className="p-2 ml-36 mb-5">
            <span className="font-bold text-3xl p-2 font-mono   text-blue-950">
              Todays Schedule
            </span>
          </div>
          <table class="table-auto">
            <thead>
              <tr>
                <th class="px-4 font-bold font-mono  text-blue-950 py-2 text-left">
                  Name
                </th>
                <th class="px-4 font-bold font-mono  text-blue-950  py-2 text-left">
                  Subject
                </th>
                <th class="px-4  font-bold  font-mono   text-blue-950 py-2 text-left">
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td class="px-4 font-medium text-white py-2">{item.Name}</td>
                  <td class="px-4 font-mono  text-white py-2 ">
                    {item.Subject}
                  </td>
                  <td class="px-4 font-mono  text-white py-2">
                    <span className="text-lime-300  font-semibold ">
                      {" "}
                      {item.Timein}
                    </span>{" "}
                    -{" "}
                    <span className="text-red-950 font-semibold">
                      {item.Timeout}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex   border-spacing-1.5 flex-col">
          <div>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <a href="ClassA">
                <button className="mx-auto p-5 hover:scale-90">
                  <img
                    src={process.env.PUBLIC_URL + "/Door.png"}
                    alt="Logo"
                    class=" "
                  />
                  <span className="font-thin text-white">Class A</span>
                </button>
                <div className="flex ml-[120px] mt-5">
                  <svg
                    width="30px"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.3 8.40007L21.82 6.40008C21.7248 6.27314 21.6008 6.17066 21.4583 6.10111C21.3157 6.03156 21.1586 5.99693 21 6.00008H11.2C11.0555 6.00007 10.9128 6.03135 10.7816 6.09177C10.6504 6.15219 10.5339 6.24031 10.44 6.35007L8.71998 8.35008C8.57227 8.53401 8.49435 8.76424 8.49998 9.00008V16.2901C8.50262 18.0317 9.19567 19.7013 10.4272 20.9328C11.6588 22.1644 13.3283 22.8574 15.07 22.8601H16.93C18.6716 22.8574 20.3412 22.1644 21.5728 20.9328C22.8043 19.7013 23.4973 18.0317 23.5 16.2901V9.00008C23.5 8.7837 23.4298 8.57317 23.3 8.40007Z"
                      fill="#FFCC80"
                    />
                    <path
                      d="M29.78 28.38L25.78 23.38C25.664 23.2321 25.5086 23.1198 25.3318 23.0562C25.1549 22.9925 24.9637 22.98 24.78 23.02L16 25L7.21999 23C7.03632 22.96 6.84507 22.9725 6.6682 23.0362C6.49133 23.0998 6.33598 23.2121 6.21999 23.36L2.21999 28.36C2.10392 28.5064 2.03116 28.6823 2.00995 28.8679C1.98874 29.0534 2.01993 29.2413 2.09999 29.41C2.17815 29.5839 2.3044 29.7319 2.46385 29.8364C2.62331 29.9409 2.80933 29.9977 2.99999 30H29C29.1885 29.9995 29.373 29.9457 29.5322 29.8448C29.6914 29.744 29.8189 29.6002 29.9 29.43C29.98 29.2613 30.0112 29.0734 29.99 28.8879C29.9688 28.7023 29.8961 28.5264 29.78 28.38Z"
                      fill="#01579B"
                    />
                    <path
                      d="M29.29 6.00003L16.29 2.00003C16.0999 1.95002 15.9001 1.95002 15.71 2.00003L2.71 6.00003C2.49742 6.06422 2.31226 6.19735 2.1837 6.37841C2.05515 6.55947 1.99052 6.77817 2 7.00003C1.9917 7.22447 2.0592 7.44518 2.19163 7.62659C2.32405 7.80799 2.5137 7.93954 2.73 8.00003L15.73 11.6C15.906 11.6534 16.094 11.6534 16.27 11.6L29.27 8.00003C29.4863 7.93954 29.6759 7.80799 29.8084 7.62659C29.9408 7.44518 30.0083 7.22447 30 7.00003C30.0095 6.77817 29.9448 6.55947 29.8163 6.37841C29.6877 6.19735 29.5026 6.06422 29.29 6.00003Z"
                      fill="#01579B"
                    />
                    <path
                      d="M11.22 6C11.0756 5.99999 10.9328 6.03127 10.8016 6.09169C10.6704 6.15211 10.5539 6.24023 10.46 6.35L8.74 8.35C8.58509 8.53114 8.49998 8.76166 8.5 9V16.29C8.50264 18.0317 9.19569 19.7012 10.4272 20.9328C11.6588 22.1643 13.3283 22.8574 15.07 22.86H16V6H11.22Z"
                      fill="#FFE0B2"
                    />
                    <path
                      d="M7.21999 23C7.03632 22.96 6.84507 22.9725 6.6682 23.0362C6.49133 23.0998 6.33598 23.2121 6.21999 23.36L2.21999 28.36C2.10392 28.5064 2.03116 28.6823 2.00995 28.8679C1.98874 29.0534 2.01993 29.2413 2.09999 29.41C2.17815 29.5839 2.3044 29.7319 2.46385 29.8364C2.62331 29.9409 2.80933 29.9977 2.99999 30H16V25L7.21999 23Z"
                      fill="#0277BD"
                    />
                    <path
                      d="M15.71 2.00002L2.71 6.00002C2.49742 6.06422 2.31226 6.19734 2.1837 6.3784C2.05515 6.55947 1.99052 6.77817 2 7.00002C1.9917 7.22447 2.0592 7.44518 2.19163 7.62658C2.32405 7.80799 2.5137 7.93954 2.73 8.00002L15.73 11.6C15.8194 11.6146 15.9106 11.6146 16 11.6V2.00002C15.9039 1.98469 15.8061 1.98469 15.71 2.00002Z"
                      fill="#0277BD"
                    />
                    <path
                      d="M2.73 8.00003L8.5 9.56003V16.29C8.50264 18.0317 9.19569 19.7013 10.4272 20.9328C11.6588 22.1643 13.3283 22.8574 15.07 22.86H16.93C18.6717 22.8574 20.3412 22.1643 21.5728 20.9328C22.8043 19.7013 23.4974 18.0317 23.5 16.29V9.56003L29.27 8.00003C29.4863 7.93954 29.6759 7.80799 29.8084 7.62659C29.9408 7.44518 30.0083 7.22447 30 7.00003C30.0095 6.77817 29.9448 6.55947 29.8163 6.37841C29.6877 6.19735 29.5026 6.06422 29.29 6.00003L16.29 2.00003C16.0999 1.95002 15.9001 1.95002 15.71 2.00003L2.71 6.00003C2.49742 6.06422 2.31226 6.19735 2.1837 6.37841C2.05515 6.55947 1.99052 6.77817 2 7.00003C1.9917 7.22447 2.0592 7.44518 2.19163 7.62659C2.32405 7.80799 2.5137 7.93954 2.73 8.00003ZM21.5 16.29C21.4974 17.5013 21.015 18.6621 20.1586 19.5186C19.3021 20.3751 18.1412 20.8574 16.93 20.86H15.07C13.8588 20.8574 12.6979 20.3751 11.8414 19.5186C10.985 18.6621 10.5026 17.5013 10.5 16.29V10.11L15.73 11.56C15.906 11.6134 16.094 11.6134 16.27 11.56L21.5 10.11V16.29ZM16 4.05003L25.44 7.00003L16 9.56003L6.56 7.00003L16 4.05003Z"
                      fill="#263238"
                    />
                    <path
                      d="M25.78 23.38C25.664 23.2321 25.5086 23.1198 25.3318 23.0562C25.1549 22.9925 24.9637 22.98 24.78 23.02L16 25L7.21999 23C7.03632 22.96 6.84507 22.9725 6.6682 23.0362C6.49133 23.0998 6.33598 23.2121 6.21999 23.36L2.21999 28.36C2.10392 28.5064 2.03116 28.6823 2.00995 28.8679C1.98874 29.0534 2.01993 29.2413 2.09999 29.41C2.17815 29.5839 2.3044 29.7319 2.46385 29.8364C2.62331 29.9409 2.80933 29.9977 2.99999 30H29C29.1885 29.9995 29.373 29.9457 29.5322 29.8448C29.6914 29.744 29.8189 29.6002 29.9 29.43C29.98 29.2613 30.0112 29.0734 29.99 28.8879C29.9688 28.7023 29.8961 28.5264 29.78 28.38L25.78 23.38ZM5.07999 28L7.38999 25.11L15.78 27C15.9251 27.0299 16.0748 27.0299 16.22 27L24.61 25.13L26.92 28H5.07999Z"
                      fill="#263238"
                    />
                  </svg>
                  <span className="ml-4 text-white"> = </span>
                  <div className="text-white ml-6"> {countPresent()}</div>
                </div>
              </a>
            </section>
          </div>
        </div>
      </div>


      {isopeninformation ? (
        <>
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex  justify-center"
            onClick={() => setIsopeninformation(false)}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg mt-5 h-96">
              <div className="flex justify-between mb-4">
                <h2 className="text-xl font-bold">Letter Information</h2>
                <button onClick={() => setIsopeninformation(false)}>X</button>
              </div>
              <div className="overflow-x-auto rounded-lg overflow-y-auto">
                <table className="table-auto border w-[900px]">
                  <thead className="bg-slate-900">
                    <tr className="border">
                      <th className="px-4 text-white py-2 text-left">No Letter</th>
                      <th className="px-4 text-white py-2 text-left">Name Letter</th>
                      <th className="px-4 text-white py-2 text-left">Letter</th>
                    </tr>
                  </thead>
                  <tbody className="bg-slate-600">
                    {data2.map((item, index) => (
                      <tr key={index}>
                        <td className="px-4 font-medium text-white py-2">
                          {item.NoLetter}
                        </td>
                        <td className="px-4 font-serif text-white py-2">
                          {item.LetterName}
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex  items-center">
                            <a
                              href={`http://localhost:3001/${item.File}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 mt-2 hover:text-blue-800"
                            >
                              <svg className="ml-2" width="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </>
      ) : null}


      {isopenRealtimeAttendance ? (
        <>
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex  justify-center"
            onClick={() => setIsopenRealtimeAttendance(false)}
          >
            <div className="bg-yellow-900 p-6 rounded-md shadow-lg mt-5 h-96">
              <div className="flex justify-between mb-4">
                <h2 className="text-xl font-bold text-white">Realtime Attendance</h2>
                <button onClick={() => setIsopenRealtimeAttendance(false)}>X</button>
              </div>
              <div className="overflow-x-auto rounded-lg overflow-y-auto">
                <table className="table-auto  w-[900px]">
                  <thead className="bg-blue-900">
                    <tr className="">
                      <th className="px-4 text-black py-2 text-left">Name</th>
                      <th className="px-4 text-black py-2 text-left">Date</th>
                      <th className="px-4 text-black py-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-slate-800">
                    {data3
                      .filter(item => item.Status.trim() !== 'false') // Menyaring data dengan item.Name yang tidak kosong
                      .sort((a, b) => new Date(b.Date) - new Date(a.Date))
                      .slice(0, 5)
                      .map((item, index) => (
                        <tr key={index}>
                          <td className="px-4 font-medium text-white py-2">
                            {item.Name}
                          </td>
                          <td className="px-4 font-serif text-white py-2">
                            {formatDateTime(item.Date)}
                          </td>
                          <td className={`px-4 font-serif py-2 ${item.Status === 'Present' ? 'text-green-500' : 'text-red-500'}`}>
                            {item.Status}
                          </td>
                        </tr>
                      ))}
                  </tbody>

                </table>
              </div>

            </div>
          </div>
        </>
      ) : null}
    </body>
  );
};

export default Home;
