import React, { useState, useEffect } from "react";



const Teacher = () => {
  const [Name, setName] = useState("");
  const [Subject, setSubject] = useState("");
  const [Timein, setTimein] = useState("");
  const [Timeout, setTimeout] = useState("");
  const [data, setData] = useState([]);
  const [OpenCaution, setOpenCaution] = useState(false);
  const [teacherData, setTeacherData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/get/teacher")
      .then((response) => response.json())
      .then((data) => {
        setTeacherData(data);
      })
      .catch((error) => {
        console.error("Error fetching teacher data:", error);
      });
  }, []);








  // Submit PPIC / ADD
  const Add = (event) => {
    event.preventDefault();
    if (!Name || !Subject || !Timein || !Timeout) {
      alert("Harap isi semua kolom!");
      return;
    }
    const data = {
      Name: Name,
      Subject: Subject,
      Timein: Timein,
      Timeout: Timeout,
    };

    fetch(`http://localhost:3001/api/post/schedule`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Schedule Succesfully Updated");
          window.location.reload();
        } else {
          throw new Error("Error adding data");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


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

  const Reset = () => {
    fetch("http://localhost:3001/api/delete/schedule", {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Schedule Succesfully Deleted");
        window.location.reload();
        console.log(data);
        setData([]);
      })
      .catch((error) => {
        console.error("Error resetting data:", error);
      });
  };

  return (
    <main>
      <div
        class="w-full  shadow-xl rounded-lg flex overflow-x-auto custom-scrollbar"
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
                <a class=" bg-opacity-30 text-blue-500 flex items-center justify-between py-1.5 px-4 rounded cursor-pointer">
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
                <a href="Students" class="hover: hover:bg-opacity-10 hover:text-blue-500 flex items-center text-white py-1.5 px-4 rounded space-x-2 cursor-pointer">
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
                <a href="Teacher" class="hover: hover:bg-opacity-10 hover:text-blue-500 flex items-center text-white py-1.5 px-4 rounded space-x-2 cursor-pointer">
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
          <div className="mt-12">
            <span className="text-white text-2xl font-semibold">
              Add Schedule
            </span>
          </div>
          <div class="mb-6  pt-4 ">
            <form class="w-full max-w-lg">
              <div class="flex  -mx-3 mb-6">
              <div class="w-full px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide w-56 text-white text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Teacher Name
                  </label>
                  <div className="relative">
                    <select
                      onChange={(e) => setName(e.target.value)}
                      value={Name}
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option value="" disabled>Select Teacher</option>
                      {teacherData.map((teacher) => (
                        <option key={teacher.No} value={teacher.Name}>
                          {teacher.Name}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="w-full  mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide w-56 text-white text-xs font-bold mb-2"
                    for="grid-state"
                  >
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      onChange={(e) => setSubject(e.target.value)}
                      defaultValue="" // Tambahkan defaultValue dengan nilai kosong
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option value="" disabled>Select Subject</option>
                      <option>Mathematics</option>
                      <option>Social Science</option>
                      <option>Sport</option>
                      <option>Geometry</option>
                      <option>Literature</option>
                      <option>IT (Information And Technology)</option>
                      <option>Biology</option>
                      <option>Music</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>

                </div>
                <div class="w-full px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide  text-white text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Clock Start
                  </label>
                  <input
                    onChange={(e) => {
                      setTimein(e.target.value);
                    }}
                    class="appearance-none block w-full  bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="Time"
                    placeholder="Jane"
                  />
                </div>
                <span className="mt-8 "> To </span>
                <div class="w-full px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide  text-white text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Clock End
                  </label>
                  <input
                    onChange={(e) => {
                      setTimeout(e.target.value);
                    }}
                    class="appearance-none block w-full  bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="Time"
                    placeholder="Jane"
                  />
                </div>
              </div>

            </form>


            <div class="flex items-center justify-between mt-4">
              <div class="flex items-center space-x-2">
                <button
                  onClick={() => setOpenCaution(true)}
                  class="bg-red-700  hover:bg-blue-700 rounded-lg px-12 py-1.5 text-gray-100 hover:shadow-xl transition duration-150"
                >
                  Reset
                </button>
                <button
                  onClick={Add}
                  class="bg-blue-500 hover:bg-blue-700 rounded-lg px-12 py-1.5 text-gray-100 hover:shadow-xl transition duration-150"
                >
                  Add
                </button>
              </div>
            </div>

            <div className="flex  mt-6 border-spacing-1.5 flex-col">
              <div className="p-2 ml-72 mb-5">
                <span className="font-bold text-3xl p-2  text-white">
                  Todays Schedule
                </span>
              </div>
              <table class="table-auto border w-[900px]">
                <thead className="bg-teal-600">
                  <tr className=" border">
                    <th class="px-4 text-white py-2 text-left">Teacher</th>
                    <th class="px-4 text-white py-2 text-left">Subject</th>
                    <th class="px-4 text-white py-2 text-left">Time</th>
                  </tr>
                </thead>
                <tbody className="bg-teal-800">
                  {data.map((item, index) => (
                    <tr key={index} className=" border">
                      <td class="px-4 font-medium text-white py-2">{item.Name}</td>
                      <td class="px-4 font-serif text-white py-2">{item.Subject}</td>
                      <td class="px-4 text-white py-2">
                        <span className="text-lime-400"> {item.Timein}</span> - <span className="text-red-400">{item.Timeout}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {OpenCaution ? (
        <>
          <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div class="fixed inset-0 z-10 overflow-y-auto">
              <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                      <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                        </svg>
                      </div>
                      <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Reset Schedule</h3>
                        <div class="mt-2">
                          <p class="text-sm text-gray-500">Are you sure you want to Reset Subject For Today? All of data will be permanently removed. This action cannot be undone.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="button" onClick={Reset} class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Reset</button>
                    <button type="button" onClick={() => setOpenCaution(false)} class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

    </main>
  );
};

export default Teacher;
