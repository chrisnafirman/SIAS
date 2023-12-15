import React, { useState, useEffect } from "react";

const Teacher = () => {
  const [Name, setName] = useState("");
  const [Subject, setSubject] = useState("");
  const [Timein, setTimein] = useState("");
  const [Timeout, setTimeout] = useState("");
  const [data, setData] = useState([]);
  const [OpenChrisna, setOpenChrisna] = useState(true);

  const [NoLetter, setNoLetter] = useState(true);
  const [LetterName, setLetterName] = useState(true);
  // SUBMIT FILE
  const [file, setFile] = useState(null);

  const submitInformation = () => {
    const data = new FormData();
    data.append("NoLetter", NoLetter);
    data.append("LetterName", LetterName);
    data.append("File", file);

    alert("File Telah Berhasil Di Input");
    window.location.reload();

    fetch("http://localhost:3001/api/post/Information", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (response.status === 200) {
        } else {
          throw new Error("Error adding data");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // SUBMIT FILE
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

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
    fetch("http://localhost:3001/api/get/Information")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        // Tangani error jika permintaan gagal
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/api/delete/Information/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Data Berhasil Di Hapus");
          window.location.reload();
        } else {
          throw new Error("Error adding data");
        }
      })
      .catch((err) => {
        console.log(err);
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
                <a href="schedule" class=" bg-opacity-30 flex text-white items-center justify-between py-1.5 px-4 rounded cursor-pointer">
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
                <a  href="information " class=" text-blue-500 hover: hover:bg-opacity-10 hover:text-blue-500 flex items-center  py-1.5 px-4 rounded space-x-2 cursor-pointer">
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
            </ul>
          </div>
        </div>

        <div class="flex-1 px-2">
          <div className="mt-12">
            <span className="text-white text-2xl font-semibold">
              Add Information Letter
            </span>
          </div>
          <div class="mb-6  pt-4 ">
            <form class="w-full max-w-lg">
              <div class="flex  -mx-3">
                <div class="w-full px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide w-28 text-white text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    No letter
                  </label>
                  <input
                    onChange={(e) => {
                      setNoLetter(e.target.value);
                    }}
                    class="appearance-none block w-full  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="Number"
                    name="NoLetter"
                    placeholder="000"
                  />
                </div>
                <div class="w-full px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide w-56 text-white text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Name Letter
                  </label>
                  <input
                    onChange={(e) => {
                      setLetterName(e.target.value);
                    }}
                    class="appearance-none block w-full  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    name="LetterName"
                    placeholder="Letters..."
                  />
                </div>
                <div class="w-full  mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide  text-white text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    File
                  </label>
                  <input
                    onChange={handleFileChange}
                    class="appearance-none block h-12  bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="File"
                    name="File"
                  />
                </div>

                <div class="flex items-center justify-between ml-5 mt-3">
                  <div class="flex items-center space-x-2">
                    <button
                      onClick={submitInformation}
                      class="bg-blue-500 hover:bg-blue-700 rounded-lg px-12 py-1.5 text-gray-100 hover:shadow-xl transition duration-150"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>

            <div className="flex  mt-6 border-spacing-1.5 flex-col">
              <div className="p-2 ml-72 mb-5">
                <span className="font-bold text-3xl p-2  text-white">
                  Letter
                </span>
              </div>

              <table class="table-auto border w-[900px]">
                <thead className="bg-cyan-500">
                  <tr className=" border">
                    <th class="px-4 text-white py-2 text-left">No Letter</th>
                    <th class="px-4 text-white py-2 text-left">Name Letter</th>
                    <th class="px-4 text-white py-2 text-left">Letter</th>
                  </tr>
                </thead>
                <tbody className="bg-cyan-900">
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td class="px-4 font-medium text-white py-2">
                        {item.NoLetter}
                      </td>
                      <td class="px-4 font-serif text-white py-2">
                        {item.LetterName}
                      </td>
                      <div class="flex items-center">
                        <div className="">
                        <a
                          href={`http://localhost:3001/${item.File}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="text-blue-600 mt-2 hover:text-blue-800"
                        >
                          <i class="far fa-file-pdf mr-2"></i>
                          View PDF
                        </a>
                        </div>
                    
                        <button onClick={()=> handleDelete(item.id)} className="">
                          <svg
                            width="35px"
                            className=" ml-48"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.625 7.00008L14.5217 6.78908C13.9873 5.69263 12.8947 5 11.6995 5C10.5044 5 9.4118 5.69263 8.8774 6.78908L8.77502 7.00008H14.625Z"
                              stroke="#FF0000"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10.6117 11.8095C10.3225 11.513 9.84769 11.507 9.55111 11.7961C9.25453 12.0853 9.24852 12.5601 9.53769 12.8567L10.6117 11.8095ZM11.163 14.5237C11.4522 14.8203 11.927 14.8263 12.2236 14.5371C12.5202 14.248 12.5262 13.7731 12.237 13.4765L11.163 14.5237ZM9.53769 15.1435C9.24852 15.4401 9.25453 15.915 9.55111 16.2041C9.84769 16.4933 10.3225 16.4873 10.6117 16.1907L9.53769 15.1435ZM12.237 14.5237C12.5262 14.2271 12.5202 13.7523 12.2236 13.4631C11.927 13.174 11.4522 13.18 11.163 13.4765L12.237 14.5237ZM13.8623 12.8567C14.1515 12.5601 14.1455 12.0853 13.8489 11.7961C13.5523 11.507 13.0775 11.513 12.7883 11.8095L13.8623 12.8567ZM11.163 13.4765C10.8738 13.7731 10.8799 14.248 11.1764 14.5371C11.473 14.8263 11.9478 14.8203 12.237 14.5237L11.163 13.4765ZM12.7883 16.1907C13.0775 16.4873 13.5523 16.4933 13.8489 16.2041C14.1455 15.915 14.1515 15.4401 13.8623 15.1435L12.7883 16.1907ZM12.237 13.4765C11.9478 13.18 11.473 13.174 11.1764 13.4631C10.8799 13.7523 10.8738 14.2271 11.163 14.5237L12.237 13.4765ZM16.575 7.75012C16.9892 7.75012 17.325 7.41434 17.325 7.00012C17.325 6.58591 16.9892 6.25012 16.575 6.25012V7.75012ZM14.625 6.25012C14.2108 6.25012 13.875 6.58591 13.875 7.00012C13.875 7.41434 14.2108 7.75012 14.625 7.75012V6.25012ZM6.82501 6.25012C6.4108 6.25012 6.07501 6.58591 6.07501 7.00012C6.07501 7.41434 6.4108 7.75012 6.82501 7.75012V6.25012ZM8.77501 7.75012C9.18923 7.75012 9.52501 7.41434 9.52501 7.00012C9.52501 6.58591 9.18923 6.25012 8.77501 6.25012V7.75012ZM7.53894 18.2679L7.00194 18.7915L7.00194 18.7915L7.53894 18.2679ZM6.82501 16.5001H7.57501H6.82501ZM9.53769 12.8567L11.163 14.5237L12.237 13.4765L10.6117 11.8095L9.53769 12.8567ZM10.6117 16.1907L12.237 14.5237L11.163 13.4765L9.53769 15.1435L10.6117 16.1907ZM12.7883 11.8095L11.163 13.4765L12.237 14.5237L13.8623 12.8567L12.7883 11.8095ZM13.8623 15.1435L12.237 13.4765L11.163 14.5237L12.7883 16.1907L13.8623 15.1435ZM16.575 6.25012H14.625V7.75012H16.575V6.25012ZM6.82501 7.75012H8.77501V6.25012H6.82501V7.75012ZM7.63719 9.75012H15.7628V8.25012H7.63719V9.75012ZM15.7628 9.75012C15.7739 9.75012 15.7864 9.75363 15.8001 9.76768C15.8142 9.78206 15.825 9.80384 15.825 9.83312H17.325C17.325 8.97687 16.6434 8.25012 15.7628 8.25012V9.75012ZM15.825 9.83312V16.5001H17.325V9.83312H15.825ZM15.825 16.5001C15.825 17.4846 15.0517 18.2501 14.1375 18.2501V19.7501C15.9157 19.7501 17.325 18.277 17.325 16.5001H15.825ZM14.1375 18.2501H9.26251V19.7501H14.1375V18.2501ZM9.26251 18.2501C8.82117 18.2501 8.39395 18.0705 8.07594 17.7443L7.00194 18.7915C7.59816 19.403 8.41092 19.7501 9.26251 19.7501V18.2501ZM8.07594 17.7443C7.7573 17.4175 7.57501 16.9703 7.57501 16.5001H6.07501C6.07501 17.356 6.40634 18.1806 7.00194 18.7915L8.07594 17.7443ZM7.57501 16.5001V9.83312H6.07501V16.5001H7.57501ZM7.57501 9.83312C7.57501 9.80384 7.58587 9.78206 7.59989 9.76768C7.61359 9.75363 7.62614 9.75012 7.63719 9.75012V8.25012C6.75664 8.25012 6.07501 8.97687 6.07501 9.83312H7.57501Z"
                              fill="#FF0000"
                            />
                          </svg>
                          </button>
                      </div>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {OpenChrisna ? (
        <>
          <div
            id="staticModal"
            data-modal-backdrop="static"
            tabindex="-1"
            aria-hidden="true"
            class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div class="relative w-full max-w-2xl max-h-full">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Static modal
                  </h3>
                  <button
                    type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="staticModal"
                  >
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>

                <div class="p-6 space-y-6">
                  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union
                    enacts new consumer privacy laws for its citizens, companies
                    around the world are updating their terms of service
                    agreements to comply.
                  </p>
                  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation
                    (G.D.P.R.) goes into effect on May 25 and is meant to ensure
                    a common set of data rights in the European Union. It
                    requires organizations to notify users as soon as possible
                    of high-risk data breaches that could personally affect
                    them.
                  </p>
                </div>

                <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    data-modal-hide="staticModal"
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    I accept
                  </button>
                  <button
                    data-modal-hide="staticModal"
                    type="button"
                    class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    Decline
                  </button>
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
