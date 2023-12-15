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

const ClassA = () => {

  const [messageSent, setMessageSent] = useState(false);
  const [status, setStatus] = useState("");
  const [mesin, setMesin] = useState("");
  const [line, setLine] = useState("");
  const [nama, setNama] = useState("");
  const [timer, setTimer] = useState("");


  const [Name1, setName1] = useState("");
  const [Name2, setName2] = useState("");
  const [Name3, setName3] = useState("");
  const [Name4, setName4] = useState("");
  const [Name5, setName5] = useState("");
  const [Name6, setName6] = useState("");
  const [Name7, setName7] = useState("");
  const [Name8, setName8] = useState("");
  const [Name9, setName9] = useState("");

  const [Student1, setStudent1] = useState("false");
  const [backgroundColorStudent1, setBackgroundColorStudent1] = useState("");
  const [Student2, setStudent2] = useState("false");
  const [backgroundColorStudent2, setBackgroundColorStudent2] = useState("");
  const [Student3, setStudent3] = useState("false");
  const [backgroundColorStudent3, setBackgroundColorStudent3] = useState("");
  const [Student4, setStudent4] = useState("false");
  const [backgroundColorStudent4, setBackgroundColorStudent4] = useState("");
  const [Student5, setStudent5] = useState("false");
  const [backgroundColorStudent5, setBackgroundColorStudent5] = useState("");
  const [Student6, setStudent6] = useState("false");
  const [backgroundColorStudent6, setBackgroundColorStudent6] = useState("");
  const [Student7, setStudent7] = useState("false");
  const [backgroundColorStudent7, setBackgroundColorStudent7] = useState("");
  const [Student8, setStudent8] = useState("false");
  const [backgroundColorStudent8, setBackgroundColorStudent8] = useState("");
  const [Student9, setStudent9] = useState("false");
  const [backgroundColorStudent9, setBackgroundColorStudent9] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [data, setData] = useState([]);

  const [OpenStudent1, setOpenStudent1] = useState(null);
  const [OpenStudent2, setOpenStudent2] = useState(null);
  const [OpenStudent3, setOpenStudent3] = useState(null);
  const [OpenStudent4, setOpenStudent4] = useState(null);
  const [OpenStudent5, setOpenStudent5] = useState(null);
  const [OpenStudent6, setOpenStudent6] = useState(null);
  const [OpenStudent7, setOpenStudent7] = useState(null);
  const [OpenStudent8, setOpenStudent8] = useState(null);
  const [OpenStudent9, setOpenStudent9] = useState(null);
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

    const ref1 = firebase.database().ref("ClassA/Student1");
    ref1.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStudent1(data);

      const botToken = "6405419400:AAF4htN-o_4JFxFVirN4xgANDWjalsHm8q8";
      const chatIds = [6259133542];

      const sendMessage = (message) => {
        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
              console.log("Telegram message sent successfully");
            })
            .catch((error) => {
              console.error("Error sending telegram message:", error);
            });
        });
      };

      if (data === "Present" && !messageSent) {
        console.log("Student is present");
        const message = `The student has at school.`;
        sendMessage(message);
        setMessageSent(true);
      } else if (data === "Not Present" && !messageSent) {
        console.log("Student is Not present");
        const message = `The student has left the school.`;
        sendMessage(message);
        setMessageSent(true);
      }
    });



    const ref2 = firebase.database().ref("ClassA/Student2");
    ref2.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStudent2(data);
      // const botToken = "6405419400:AAF4htN-o_4JFxFVirN4xgANDWjalsHm8q8";
      // const chatIds = [6259133542];

      // const sendMessage = (message) => {
      //   chatIds.forEach((chatId) => {
      //     fetch(
      //       `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`
      //     )
      //       .then((response) => {
      //         if (!response.ok) {
      //           throw new Error("Error sending telegram message");
      //         }
      //         console.log("Telegram message sent successfully");
      //       })
      //       .catch((error) => {
      //         console.error("Error sending telegram message:", error);
      //       });
      //   });
      // };

      // if (data === "Present" && !messageSent) {
      //   console.log("Student is present");
      //   const message = `${Name2} Telah Hadir Di Sekolah`;
      //   sendMessage(message);
      //   setMessageSent(true);
      // } else if (data === "Not Present" && !messageSent) {
      //   console.log("Student is Not present");
      //   const message = `${Name2} Telah Meninggalkan Sekolah`;
      //   sendMessage(message);
      //   setMessageSent(true);
      // }
    });

    const ref3 = firebase.database().ref("ClassA/Student3");
    ref3.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStudent3(data);
      // const botToken = "6405419400:AAF4htN-o_4JFxFVirN4xgANDWjalsHm8q8";
      // const chatIds = [6259133542];

      // const sendMessage = (message) => {
      //   chatIds.forEach((chatId) => {
      //     fetch(
      //       `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`
      //     )
      //       .then((response) => {
      //         if (!response.ok) {
      //           throw new Error("Error sending telegram message");
      //         }
      //         console.log("Telegram message sent successfully");
      //       })
      //       .catch((error) => {
      //         console.error("Error sending telegram message:", error);
      //       });
      //   });
      // };

      // if (data === "Present" && !messageSent) {
      //   console.log("Student is present");
      //   const message = `${Name3} Telah Hadir Di Sekolah`;
      //   sendMessage(message);
      //   setMessageSent(true);
      // } else if (data === "Not Present" && !messageSent) {
      //   console.log("Student is Not present");
      //   const message = `${Name3} Telah Meninggalkan Sekolah`;
      //   sendMessage(message);
      //   setMessageSent(true);
      // }
    });

    const ref4 = firebase.database().ref("ClassA/Student4");
    ref4.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStudent4(data);
      // const botToken = "6405419400:AAF4htN-o_4JFxFVirN4xgANDWjalsHm8q8";
      // const chatIds = [6259133542];

      // const sendMessage = (message) => {
      //   chatIds.forEach((chatId) => {
      //     fetch(
      //       `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`
      //     )
      //       .then((response) => {
      //         if (!response.ok) {
      //           throw new Error("Error sending telegram message");
      //         }
      //         console.log("Telegram message sent successfully");
      //       })
      //       .catch((error) => {
      //         console.error("Error sending telegram message:", error);
      //       });
      //   });
      // };

      // if (data === "Present" && !messageSent) {
      //   console.log("Student is present");
      //   const message = `${Name4} Telah Hadir Di Sekolah`;
      //   sendMessage(message);
      //   setMessageSent(true);
      // } else if (data === "Not Present" && !messageSent) {
      //   console.log("Student is Not present");
      //   const message = `${Name4} Telah Meninggalkan Sekolah`;
      //   sendMessage(message);
      //   setMessageSent(true);
      // }
    });

    const ref5 = firebase.database().ref("ClassA/Student5");
    ref5.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStudent5(data);
      // const botToken = "6405419400:AAF4htN-o_4JFxFVirN4xgANDWjalsHm8q8";
      // const chatIds = [6259133542];

      // const sendMessage = (message) => {
      //   chatIds.forEach((chatId) => {
      //     fetch(
      //       `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`
      //     )
      //       .then((response) => {
      //         if (!response.ok) {
      //           throw new Error("Error sending telegram message");
      //         }
      //         console.log("Telegram message sent successfully");
      //       })
      //       .catch((error) => {
      //         console.error("Error sending telegram message:", error);
      //       });
      //   });
      // };

      // if (data === "Present" && !messageSent) {
      //   console.log("Student is present");
      //   const message = `${Name5} Telah Hadir Di Sekolah`;
      //   sendMessage(message);
      //   setMessageSent(true);
      // } else if (data === "Not Present" && !messageSent) {
      //   console.log("Student is Not present");
      //   const message = `${Name5} Telah Meninggalkan Sekolah`;
      //   sendMessage(message);
      //   setMessageSent(true);
      // }
    });

    const ref6 = firebase.database().ref("ClassA/Student6");
    ref6.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStudent6(data);
      // const botToken = "6405419400:AAF4htN-o_4JFxFVirN4xgANDWjalsHm8q8";
      // const chatIds = [6259133542];

      // const sendMessage = (message) => {
      //   chatIds.forEach((chatId) => {
      //     fetch(
      //       `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`
      //     )
      //       .then((response) => {
      //         if (!response.ok) {
      //           throw new Error("Error sending telegram message");
      //         }
      //         console.log("Telegram message sent successfully");
      //       })
      //       .catch((error) => {
      //         console.error("Error sending telegram message:", error);
      //       });
      //   });
      // };

      // if (data === "Present" && !messageSent) {
      //   console.log("Student is present");
      //   const message = `${Name6} Telah Hadir Di Sekolah`;
      //   sendMessage(message);
      //   setMessageSent(true);
      // } else if (data === "Not Present" && !messageSent) {
      //   console.log("Student is Not present");
      //   const message = `${Name6} Telah Meninggalkan Sekolah`;
      //   sendMessage(message);
      //   setMessageSent(true);
      // }
    });

    const ref7 = firebase.database().ref("ClassA/Student7");
    ref7.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStudent7(data);
      // const botToken = "6405419400:AAF4htN-o_4JFxFVirN4xgANDWjalsHm8q8";
      // const chatIds = [6259133542];

      // const sendMessage = (message) => {
      //   chatIds.forEach((chatId) => {
      //     fetch(
      //       `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`
      //     )
      //       .then((response) => {
      //         if (!response.ok) {
      //           throw new Error("Error sending telegram message");
      //         }
      //         console.log("Telegram message sent successfully");
      //       })
      //       .catch((error) => {
      //         console.error("Error sending telegram message:", error);
      //       });
      //   });
      // };

      // if (data === "Present" && !messageSent) {
      //   console.log("Student is present");
      //   const message = `${Name7} Telah Hadir Di Sekolah`;
      //   sendMessage(message);
      //   setMessageSent(true);
      // } else if (data === "Not Present" && !messageSent) {
      //   console.log("Student is Not present");
      //   const message = `${Name7} Telah Meninggalkan Sekolah`;
      //   sendMessage(message);
      //   setMessageSent(true);
      // }
    });

    const ref8 = firebase.database().ref("ClassA/Student8");
    ref8.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStudent8(data);
      const botToken = "6405419400:AAF4htN-o_4JFxFVirN4xgANDWjalsHm8q8";
      const chatIds = [6259133542];

      const sendMessage = (message) => {
        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
              console.log("Telegram message sent successfully");
            })
            .catch((error) => {
              console.error("Error sending telegram message:", error);
            });
        });
      };

      if (data === "Present" && !messageSent) {
        console.log("Student is present");
        const message = `The student has at school.`;
        sendMessage(message);
        setMessageSent(true);
      } else if (data === "Not Present" && !messageSent) {
        console.log("Student is Not present");
        const message = `The student has left the school.`;
        sendMessage(message);
        setMessageSent(true);
      }
    });


    const ref9 = firebase.database().ref("ClassA/Student9");
    ref9.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStudent9(data);
      // const botToken = "6405419400:AAF4htN-o_4JFxFVirN4xgANDWjalsHm8q8";
      // const chatIds = [6259133542];

      // const sendMessage = (message) => {
      //   chatIds.forEach((chatId) => {
      //     fetch(
      //       `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`
      //     )
      //       .then((response) => {
      //         if (!response.ok) {
      //           throw new Error("Error sending telegram message");
      //         }
      //         console.log("Telegram message sent successfully");
      //       })
      //       .catch((error) => {
      //         console.error("Error sending telegram message:", error);
      //       });
      //   });
      // };

      // if (data === "Present" && !messageSent) {
      //   console.log("Student is present");
      //   const message = `${Name9} Telah Hadir Di Sekolah`;
      //   sendMessage(message);
      //   setMessageSent(true);
      // } else if (data === "Not Present" && !messageSent) {
      //   console.log("Student is Not present");
      //   const message = `${Name9} Telah Meninggalkan Sekolah`;
      //   sendMessage(message);
      //   setMessageSent(true);
      // }
    });
    return () => { };
  }, []);

  const updateStudent1 = (data) => {
    setStudent1(data);
    setBackgroundColorStudent1(
      data === "Present"
        ? "#84BF56"
        : data === "Not Present"
          ? "#C00000"
          : "#565454"
    );
  };

  const updateStudent2 = (data) => {
    setStudent2(data);
    setBackgroundColorStudent2(
      data === "Present"
        ? "#84BF56"
        : data === "Not Present"
          ? "#C00000"
          : "#565454"
    );
  };

  const updateStudent3 = (data) => {
    setStudent3(data);
    setBackgroundColorStudent3(
      data === "Present"
        ? "#84BF56"
        : data === "Not Present"
          ? "#C00000"
          : "#565454"
    );
  };

  const updateStudent4 = (data) => {
    setStudent4(data);
    setBackgroundColorStudent4(
      data === "Present"
        ? "#84BF56"
        : data === "Not Present"
          ? "#C00000"
          : "#565454"
    );
  };

  const updateStudent6 = (data) => {
    setStudent6(data);
    setBackgroundColorStudent6(
      data === "Present"
        ? "#84BF56"
        : data === "Not Present"
          ? "#C00000"
          : "#565454"
    );
  };

  const updateStudent5 = (data) => {
    setStudent5(data);
    setBackgroundColorStudent5(
      data === "Present"
        ? "#84BF56"
        : data === "Not Present"
          ? "#C00000"
          : "#565454"
    );
  };

  const updateStudent7 = (data) => {
    setStudent7(data);
    setBackgroundColorStudent7(
      data === "Present"
        ? "#84BF56"
        : data === "Not Present"
          ? "#C00000"
          : "#565454"
    );
  };

  const updateStudent8 = (data) => {
    setStudent8(data);
    setBackgroundColorStudent8(
      data === "Present"
        ? "#84BF56"
        : data === "Not Present"
          ? "#C00000"
          : "#565454"
    );
  };

  const updateStudent9 = (data) => {
    setStudent9(data);
    setBackgroundColorStudent9(
      data === "Present"
        ? "#84BF56"
        : data === "Not Present"
          ? "#C00000"
          : "#565454"
    );
  };

  // Fungsi untuk menghitung jumlah nilai "Present"
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
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/get/students");
        const data = await response.json();
        console.log(data); // Tambahkan ini untuk melihat data yang diambil dari API
        setData(data);

        const foundItem1 = data.find(item => item.No === 1);
        if (foundItem1) {
          setName1(foundItem1.Name);
        }

        const foundItem2 = data.find(item => item.No === 2);
        if (foundItem2) {
          setName2(foundItem2.Name);
        }

        const foundItem3 = data.find(item => item.No === 3);
        if (foundItem3) {
          setName3(foundItem3.Name);
        }

        const foundItem4 = data.find(item => item.No === 4);
        if (foundItem4) {
          setName4(foundItem4.Name);
        }

        const foundItem5 = data.find(item => item.No === 5);
        if (foundItem5) {
          setName5(foundItem5.Name);
        }

        const foundItem6 = data.find(item => item.No === 6);
        if (foundItem6) {
          setName6(foundItem6.Name);
        }

        const foundItem7 = data.find(item => item.No === 7);
        if (foundItem7) {
          setName7(foundItem7.Name);
        }

        const foundItem8 = data.find(item => item.No === 8);
        if (foundItem8) {
          setName8(foundItem8.Name);
        }

        const foundItem9 = data.find(item => item.No === 9);
        if (foundItem9) {
          setName9(foundItem9.Name);
        }
      } catch (error) {
        // Tangani error jika permintaan gagal
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // dependensi kosong, sehingga useEffect hanya dijalankan sekali saat komponen dipasang



  const updateProfile = () => {
    const data = new FormData();
    data.append("Name", Name);
    data.append("Addres", Addres);
    data.append("Contact", Contact);
    data.append("BornDate", BornDate);
    data.append("Picture", file);

    fetch(`http://localhost:3001/api/put/students/${No}`, {
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



  // Function Realtime
  //  STUDENT 1
  useEffect(() => {
    const data = {
      Student1: Student1,
      Name1: Name1,
    };

    if (Student1 !== "") {
      fetch("http://localhost:3001/api/post/data1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to post data");
          }
          console.log("Data posted successfully!");
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
    }
  }, [Student1, Name1]);

  //  STUDENT 2
  useEffect(() => {
    const data = {
      Student2: Student2,
      Name2: Name2,
    };

    if (Student1 !== "") {
      fetch("http://localhost:3001/api/post/data2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to post data");
          }
          console.log("Data posted successfully!");
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
    }
  }, [Student2, Name2]);

  //  STUDENT 3
  useEffect(() => {
    const data = {
      Student3: Student3,
      Name3: Name3,
    };

    if (Student1 !== "") {
      fetch("http://localhost:3001/api/post/data3", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to post data");
          }
          console.log("Data posted successfully!");
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
    }
  }, [Student3, Name3]);


  //  STUDENT 4
  useEffect(() => {
    const data = {
      Student4: Student4,
      Name4: Name4,
    };

    if (Student1 !== "") {
      fetch("http://localhost:3001/api/post/data4", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to post data");
          }
          console.log("Data posted successfully!");
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
    }
  }, [Student4, Name4]);

  //  STUDENT 5
  useEffect(() => {
    const data = {
      Student5: Student5,
      Name5: Name5,
    };

    if (Student1 !== "") {
      fetch("http://localhost:3001/api/post/data5", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to post data");
          }
          console.log("Data posted successfully!");
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
    }
  }, [Student5, Name5]);

  //  STUDENT 6
  useEffect(() => {
    const data = {
      Student6: Student6,
      Name6: Name6,
    };

    if (Student1 !== "") {
      fetch("http://localhost:3001/api/post/data6", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to post data");
          }
          console.log("Data posted successfully!");
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
    }
  }, [Student6, Name6]);


  //  STUDENT 7
  useEffect(() => {
    const data = {
      Student7: Student7,
      Name7: Name7,
    };

    if (Student1 !== "") {
      fetch("http://localhost:3001/api/post/data7", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to post data");
          }
          console.log("Data posted successfully!");
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
    }
  }, [Student7, Name7]);


  //  STUDENT 8
  useEffect(() => {
    const data = {
      Student8: Student8,
      Name8: Name8,
    };

    if (Student1 !== "") {
      fetch("http://localhost:3001/api/post/data8", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to post data");
          }
          console.log("Data posted successfully!");
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
    }
  }, [Student8, Name8]);


  //  STUDENT 9
  useEffect(() => {
    const data = {
      Student9: Student9,
      Name9: Name9,
    };

    if (Student1 !== "") {
      fetch("http://localhost:3001/api/post/data9", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to post data");
          }
          console.log("Data posted successfully!");
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
    }
  }, [Student9, Name9]);





  // useEffect(() => {
  //   if (Student1 !== "" && prevStudent1 !== Student1) {
  //     fetch("http://localhost:3001/api/post/data", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         Student1: Student1, // Use the current Student1 value here instead of prevStudent1
  //         Name1: Name1,
  //       }),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => console.log(data))
  //       .catch((error) => console.error(error));
  //   }
  //   setPrevStudent1(Student1);
  // }, [Student1, Name1, prevStudent1]);


  return (
    <main className=" mb-2 ">
      <div
        style={{
          height: "200vh",
          background: "linear-gradient(90deg, #00203FFF 50%, #2C5F2D 50%)",
        }}
      >
        <div className="items-center  mx-auto text-center justify-center pt-7 mb-10">
          <span className="font-mono text-white text-4xl ">ClassRoom</span>
        </div>



        <span></span>
        <div class="flex ">
          <button
            className="mx-auto p-5 hover:scale-90"
            onClick={() => {
              setNo(1);
              setOpenStudent1(true);
            }}
          >
            <svg
              width="100px"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M768 544V64a64 64 0 0 0-64-64H320a64 64 0 0 0-64 64v480h512z"
                fill={backgroundColorStudent1}
              />
              <path d="M256 512h512v32H256z" fill="" />
              <path
                d="M608 160m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M512 288m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M416 160m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M608 416m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M416 416m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M256 992a32 32 0 1 0 64 0V672H256v320zM704 672v320a32 32 0 1 0 64 0V672h-64z"
                fill="#434854"
              />
              <path
                d="M832 640a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32v-64a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v64z"
                fill={backgroundColorStudent1}
              />
              <path
                d="M800 544H224a32 32 0 0 0-32 32v32a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v-32a32 32 0 0 0-32-32z"
                fill="#FFFFFF"
              />
              <path d="M704 672h64v32h-64zM256 672h64v32H256z" fill="" />
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
              setOpenStudent2(true);
            }}
            class="mx-auto p-5 hover:scale-90"
          >
            <svg
              width="100px"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M768 544V64a64 64 0 0 0-64-64H320a64 64 0 0 0-64 64v480h512z"
                fill={backgroundColorStudent2}
              />
              <path d="M256 512h512v32H256z" fill="" />
              <path
                d="M608 160m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M512 288m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M416 160m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M608 416m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M416 416m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M256 992a32 32 0 1 0 64 0V672H256v320zM704 672v320a32 32 0 1 0 64 0V672h-64z"
                fill="#434854"
              />
              <path
                d="M832 640a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32v-64a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v64z"
                fill={backgroundColorStudent2}
              />
              <path
                d="M800 544H224a32 32 0 0 0-32 32v32a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v-32a32 32 0 0 0-32-32z"
                fill="#FFFFFF"
              />
              <path d="M704 672h64v32h-64zM256 672h64v32H256z" fill="" />
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
              setOpenStudent3(true);
            }}
            class="mx-auto p-5 hover:scale-90">
            <svg
              width="100px"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M768 544V64a64 64 0 0 0-64-64H320a64 64 0 0 0-64 64v480h512z"
                fill={backgroundColorStudent3}
              />
              <path d="M256 512h512v32H256z" fill="" />
              <path
                d="M608 160m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M512 288m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M416 160m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M608 416m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M416 416m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M256 992a32 32 0 1 0 64 0V672H256v320zM704 672v320a32 32 0 1 0 64 0V672h-64z"
                fill="#434854"
              />
              <path
                d="M832 640a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32v-64a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v64z"
                fill={backgroundColorStudent3}
              />
              <path
                d="M800 544H224a32 32 0 0 0-32 32v32a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v-32a32 32 0 0 0-32-32z"
                fill="#FFFFFF"
              />
              <path d="M704 672h64v32h-64zM256 672h64v32H256z" fill="" />
            </svg>
            {data.map((item, index) => (
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
              setOpenStudent4(true);
            }}
            class="mx-auto p-5 hover:scale-90">
            <svg
              width="100px"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M768 544V64a64 64 0 0 0-64-64H320a64 64 0 0 0-64 64v480h512z"
                fill={backgroundColorStudent4}
              />
              <path d="M256 512h512v32H256z" fill="" />
              <path
                d="M608 160m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M512 288m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M416 160m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M608 416m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M416 416m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M256 992a32 32 0 1 0 64 0V672H256v320zM704 672v320a32 32 0 1 0 64 0V672h-64z"
                fill="#434854"
              />
              <path
                d="M832 640a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32v-64a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v64z"
                fill={backgroundColorStudent4}
              />
              <path
                d="M800 544H224a32 32 0 0 0-32 32v32a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v-32a32 32 0 0 0-32-32z"
                fill="#FFFFFF"
              />
              <path d="M704 672h64v32h-64zM256 672h64v32H256z" fill="" />
            </svg>
            {data.map((item, index) => (
              <span class="font-thin text-white">
                {item.No === 4 && <>{item.Name}</>}
              </span>
            ))}
          </button>

          <button
            onClick={() => {
              setNo(5);
              setOpenStudent5(true);
            }}
            class="mx-auto p-5 hover:scale-90">
            <svg
              width="100px"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M768 544V64a64 64 0 0 0-64-64H320a64 64 0 0 0-64 64v480h512z"
                fill={backgroundColorStudent5}
              />
              <path d="M256 512h512v32H256z" fill="" />
              <path
                d="M608 160m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M512 288m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M416 160m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M608 416m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M416 416m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M256 992a32 32 0 1 0 64 0V672H256v320zM704 672v320a32 32 0 1 0 64 0V672h-64z"
                fill="#434854"
              />
              <path
                d="M832 640a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32v-64a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v64z"
                fill={backgroundColorStudent5}
              />
              <path
                d="M800 544H224a32 32 0 0 0-32 32v32a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v-32a32 32 0 0 0-32-32z"
                fill="#FFFFFF"
              />
              <path d="M704 672h64v32h-64zM256 672h64v32H256z" fill="" />
            </svg>

            {data.map((item, index) => (
              <span class="font-thin text-white">
                {item.No === 5 && <>{item.Name}</>}
              </span>
            ))}
          </button>

          <button
            onClick={() => {
              setNo(6);
              setOpenStudent6(true);
            }}
            class="mx-auto p-5 hover:scale-90"
          >

            <svg
              width="100px"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M768 544V64a64 64 0 0 0-64-64H320a64 64 0 0 0-64 64v480h512z"
                fill={backgroundColorStudent6}
              />
              <path d="M256 512h512v32H256z" fill="" />
              <path
                d="M608 160m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M512 288m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M416 160m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M608 416m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M416 416m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M256 992a32 32 0 1 0 64 0V672H256v320zM704 672v320a32 32 0 1 0 64 0V672h-64z"
                fill="#434854"
              />
              <path
                d="M832 640a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32v-64a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v64z"
                fill={backgroundColorStudent6}
              />
              <path
                d="M800 544H224a32 32 0 0 0-32 32v32a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v-32a32 32 0 0 0-32-32z"
                fill="#FFFFFF"
              />
              <path d="M704 672h64v32h-64zM256 672h64v32H256z" fill="" />
            </svg>
            {data.map((item, index) => (
              <span class="font-thin text-white">
                {item.No === 6 && <>{item.Name}</>}
              </span>
            ))}
          </button>
        </div>


        <div class="flex">
          <button
            onClick={() => {
              setNo(7);
              setOpenStudent7(true);
            }}
            class="mx-auto p-5 hover:scale-90">
            <svg
              width="100px"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M768 544V64a64 64 0 0 0-64-64H320a64 64 0 0 0-64 64v480h512z"
                fill={backgroundColorStudent7}
              />
              <path d="M256 512h512v32H256z" fill="" />
              <path
                d="M608 160m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M512 288m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M416 160m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M608 416m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M416 416m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M256 992a32 32 0 1 0 64 0V672H256v320zM704 672v320a32 32 0 1 0 64 0V672h-64z"
                fill="#434854"
              />
              <path
                d="M832 640a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32v-64a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v64z"
                fill={backgroundColorStudent7}
              />
              <path
                d="M800 544H224a32 32 0 0 0-32 32v32a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v-32a32 32 0 0 0-32-32z"
                fill="#FFFFFF"
              />
              <path d="M704 672h64v32h-64zM256 672h64v32H256z" fill="" />
            </svg>
            {data.map((item, index) => (
              <span class="font-thin text-white">
                {item.No === 7 && <>{item.Name}</>}
              </span>
            ))}
          </button>

          <button
            onClick={() => {
              setNo(8);
              setOpenStudent8(true);
            }}
            class="mx-auto p-5 hover:scale-90">
            <svg
              width="100px"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M768 544V64a64 64 0 0 0-64-64H320a64 64 0 0 0-64 64v480h512z"
                fill={backgroundColorStudent8}
              />
              <path d="M256 512h512v32H256z" fill="" />
              <path
                d="M608 160m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M512 288m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M416 160m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M608 416m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M416 416m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M256 992a32 32 0 1 0 64 0V672H256v320zM704 672v320a32 32 0 1 0 64 0V672h-64z"
                fill="#434854"
              />
              <path
                d="M832 640a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32v-64a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v64z"
                fill={backgroundColorStudent8}
              />
              <path
                d="M800 544H224a32 32 0 0 0-32 32v32a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v-32a32 32 0 0 0-32-32z"
                fill="#FFFFFF"
              />
              <path d="M704 672h64v32h-64zM256 672h64v32H256z" fill="" />
            </svg>
            {data.map((item, index) => (
              <span class="font-thin text-white">
                {item.No === 8 && <>{item.Name}</>}
              </span>
            ))}
          </button>
          <button
            onClick={() => {
              setNo(9);
              setOpenStudent9(true);
            }}
            class="mx-auto p-5 hover:scale-90">
            <svg
              width="100px"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M768 544V64a64 64 0 0 0-64-64H320a64 64 0 0 0-64 64v480h512z"
                fill={backgroundColorStudent9}
              />
              <path d="M256 512h512v32H256z" fill="" />
              <path
                d="M608 160m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M512 288m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M416 160m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M608 416m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M416 416m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z"
                fill=""
              />
              <path
                d="M256 992a32 32 0 1 0 64 0V672H256v320zM704 672v320a32 32 0 1 0 64 0V672h-64z"
                fill="#434854"
              />
              <path
                d="M832 640a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32v-64a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v64z"
                fill={backgroundColorStudent9}
              />
              <path
                d="M800 544H224a32 32 0 0 0-32 32v32a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v-32a32 32 0 0 0-32-32z"
                fill="#FFFFFF"
              />
              <path d="M704 672h64v32h-64zM256 672h64v32H256z" fill="" />
            </svg>
            {data.map((item, index) => (
              <span class="font-thin text-white">
                {item.No === 9 && <>{item.Name}</>}
              </span>
            ))}
          </button>
        </div>


        {data.map((item, index) => (
          <td class="">
            {OpenStudent1 && item.No === 1 && (
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
                            onClick={() => setOpenStudent1(false)}
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
            {OpenStudent2 && item.No === 2 && (
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
                            onClick={() => setOpenStudent2(false)}
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
            {OpenStudent3 && item.No === 3 && (
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
                            onClick={() => setOpenStudent3(false)}
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
            {OpenStudent4 && item.No === 4 && (
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
                            onClick={() => setOpenStudent4(false)}
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
            {OpenStudent5 && item.No === 5 && (
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
                            onClick={() => setOpenStudent5(false)}
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
            {OpenStudent6 && item.No === 6 && (
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
                            onClick={() => setOpenStudent6(false)}
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
            {OpenStudent7 && item.No === 7 && (
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
                            onClick={() => setOpenStudent7(false)}
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
            {OpenStudent8 && item.No === 8 && (
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
                            onClick={() => setOpenStudent8(false)}
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
            {OpenStudent9 && item.No === 9 && (
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
                            onClick={() => setOpenStudent9(false)}
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
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </td>
        ))}

      
      </div>

    </main>
  );
};

export default ClassA;
