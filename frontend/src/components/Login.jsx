import { React, useState } from "react";

const MaintenancePage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorCount, setErrorCount] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Ganti URL API sesuai dengan kebutuhan Anda
      const apiUrl = 'http://localhost:3001/api/get/Admin';
      const response = await fetch(apiUrl);
      const data = await response.json();

      const user = data.find(user => user.username === username && user.password === password);

      if (user) {
        // Jika username dan password cocok, arahkan ke "/Schedule"
        window.location.href = "/Schedule";
      } else {
        setErrorCount(errorCount + 1);

        if (errorCount === 2) {
          // Jika sudah 3 kali salah, lakukan sesuatu, misalnya menonaktifkan formulir
          alert("Anda telah mencoba 3 kali dengan username/password yang salah.");
        } else {
          alert("Username atau password salah. Silakan coba lagi.");
        }
      }
    } catch (error) {
      console.error('Error fetching data from API:', error);
      // Handle error, misalnya menampilkan pesan kesalahan kepada pengguna
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-200" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('YOUR_IMAGE_URL')", backgroundSize: "cover" }}>
    
      <form class="flex items-center justify-center h-screen">

        <div class="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] ">
          <div class="mb-8 flex justify-center">
           <span className="text-4xl text-slate-900 font-bold">Login</span>
          </div>
          <div class="flex flex-col text-sm rounded-md">
            <input class="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="text" placeholder="Username " value={username} onChange={(e) => setUsername(e.target.value)} />
            <input class="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button onClick={handleSubmit} class="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300" type="submit">Sign in</button>
          
          <div class="mt-5 flex text-center text-sm text-gray-400">
            <p>
              This site only can accses by admin <br />
            
            </p>
          </div>
        </div>
      </form>
    </div>

// {!isSubmitted ? (
//   <form class="w-60 max-w-sm">
//     <div class="flex items-center border-b border-teal-500 py-2">
//       <input
//         class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
//         type="password"
//         onChange={(event) => setPassword(event.target.value)} 
//         value={Password}
//         onKeyDown={handleKeyPress} 
//         placeholder="Masukan Pin"
//       />
//       <button
//         class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
//         type="button"
//         onClick={handleSubmit}
//       >
//         Sign In
//       </button>
//     </div>
//   </form>
  
//       ) : (
//         <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//           <p className="text-gray-800 text-xl">Selamat Datang Kembali!!!</p>
//         </div>
//       )}
  );
};

export default MaintenancePage;
