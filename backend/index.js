const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const multer = require("multer");
const path = require ("path");



app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "classroom",
});


// /////////////////////////////////////////////////
// Realtime Function
// STUDENT 1
app.post("/api/post/data1", (req, res) => {
  const { Student1, Name1} = req.body;

  // Insert the data into the MySQL database
  const sql = "INSERT INTO attendance (Status, Name) VALUES (?, ?)";
  db.query(sql, [Student1, Name1], (err, result) => {
    if (err) {
      console.error("Error posting data to MySQL:", err);
      return res.status(500).json({ error: "Failed to post data." });
    }

    console.log("Data posted successfully!");
    return res.status(200).json({ message: "Data posted successfully!" });
  });
});

// STUDENT 2
app.post("/api/post/data2", (req, res) => {
  const { Student2, Name2} = req.body;

  // Insert the data into the MySQL database
  const sql = "INSERT INTO attendance (Status, Name) VALUES (?, ?)";
  db.query(sql, [Student2, Name2], (err, result) => {
    if (err) {
      console.error("Error posting data to MySQL:", err);
      return res.status(500).json({ error: "Failed to post data." });
    }

    console.log("Data posted successfully!");
    return res.status(200).json({ message: "Data posted successfully!" });
  });
});

// STUDENT 3
app.post("/api/post/data3", (req, res) => {
  const { Student3, Name3} = req.body;

  // Insert the data into the MySQL database
  const sql = "INSERT INTO attendance (Status, Name) VALUES (?, ?)";
  db.query(sql, [Student3, Name3], (err, result) => {
    if (err) {
      console.error("Error posting data to MySQL:", err);
      return res.status(500).json({ error: "Failed to post data." });
    }

    console.log("Data posted successfully!");
    return res.status(200).json({ message: "Data posted successfully!" });
  });
});


// STUDENT 4
app.post("/api/post/data4", (req, res) => {
  const { Student4, Name4} = req.body;

  // Insert the data into the MySQL database
  const sql = "INSERT INTO attendance (Status, Name) VALUES (?, ?)";
  db.query(sql, [Student4, Name4], (err, result) => {
    if (err) {
      console.error("Error posting data to MySQL:", err);
      return res.status(500).json({ error: "Failed to post data." });
    }

    console.log("Data posted successfully!");
    return res.status(200).json({ message: "Data posted successfully!" });
  });
});

// STUDENT 5
app.post("/api/post/data5", (req, res) => {
  const { Student5, Name5} = req.body;

  // Insert the data into the MySQL database
  const sql = "INSERT INTO attendance (Status, Name) VALUES (?, ?)";
  db.query(sql, [Student5, Name5], (err, result) => {
    if (err) {
      console.error("Error posting data to MySQL:", err);
      return res.status(500).json({ error: "Failed to post data." });
    }

    console.log("Data posted successfully!");
    return res.status(200).json({ message: "Data posted successfully!" });
  });
});

// STUDENT 6
app.post("/api/post/data6", (req, res) => {
  const { Student6, Name6} = req.body;

  // Insert the data into the MySQL database
  const sql = "INSERT INTO attendance (Status, Name) VALUES (?, ?)";
  db.query(sql, [Student6, Name6], (err, result) => {
    if (err) {
      console.error("Error posting data to MySQL:", err);
      return res.status(500).json({ error: "Failed to post data." });
    }

    console.log("Data posted successfully!");
    return res.status(200).json({ message: "Data posted successfully!" });
  });
});

// STUDENT 7
app.post("/api/post/data7", (req, res) => {
  const { Student7, Name7} = req.body;

  // Insert the data into the MySQL database
  const sql = "INSERT INTO attendance (Status, Name) VALUES (?, ?)";
  db.query(sql, [Student7, Name7], (err, result) => {
    if (err) {
      console.error("Error posting data to MySQL:", err);
      return res.status(500).json({ error: "Failed to post data." });
    }

    console.log("Data posted successfully!");
    return res.status(200).json({ message: "Data posted successfully!" });
  });
});


// STUDENT 8
app.post("/api/post/data8", (req, res) => {
  const { Student8, Name8} = req.body;

  // Insert the data into the MySQL database
  const sql = "INSERT INTO attendance (Status, Name) VALUES (?, ?)";
  db.query(sql, [Student8, Name8], (err, result) => {
    if (err) {
      console.error("Error posting data to MySQL:", err);
      return res.status(500).json({ error: "Failed to post data." });
    }

    console.log("Data posted successfully!");
    return res.status(200).json({ message: "Data posted successfully!" });
  });
});


// STUDENT 9
app.post("/api/post/data9", (req, res) => {
  const { Student9, Name9} = req.body;

  // Insert the data into the MySQL database
  const sql = "INSERT INTO attendance (Status, Name) VALUES (?, ?)";
  db.query(sql, [Student9, Name9], (err, result) => {
    if (err) {
      console.error("Error posting data to MySQL:", err);
      return res.status(500).json({ error: "Failed to post data." });
    }

    console.log("Data posted successfully!");
    return res.status(200).json({ message: "Data posted successfully!" });
  });
});
// ////////////////////////////


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      path.parse(file.originalname).name +
        "-" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });


app.put("/api/put/students/:id", upload.single("Picture"), (req, res) => {
  const { id } = req.params;
  const { Name, Addres, Contact, BornDate } = req.body;
  let Picture = null;

  if (req.file) {
    Picture = req.file.path.replace(/\\/g, "/").substring(7);
  }

  db.query(
    "SELECT * FROM students WHERE No = ?",
    [id],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
      }
      
      const student = results[0];

      const updatedName = Name || student.Name;
      const updatedAddres = Addres || student.Addres;
      const updatedContact = Contact || student.Contact;
      const updatedBornDate = BornDate || student.BornDate;
      const updatedPicture = Picture || student.Picture;

      db.query(
        "UPDATE students SET Name = ?, Addres = ?, Contact = ?, BornDate = ?, Picture = ? WHERE No = ?",
        [updatedName, updatedAddres, updatedContact, updatedBornDate, updatedPicture, id],
        (error, results) => {
          if (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal server error" });
          }
          res.status(200).json({ message: "Data has been updated successfully" });
        }
      );
    }
  );
});


app.put("/api/put/teacher/:id", upload.single("Picture"), (req, res) => {
  const { id } = req.params;
  const { Name, Addres, Contact, BornDate } = req.body;
  let Picture = null;

  if (req.file) {
    Picture = req.file.path.replace(/\\/g, "/").substring(7);
  }

  db.query(
    "SELECT * FROM teacher WHERE No = ?",
    [id],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
      }
      
      const student = results[0];

      const updatedName = Name || student.Name;
      const updatedAddres = Addres || student.Addres;
      const updatedContact = Contact || student.Contact;
      const updatedBornDate = BornDate || student.BornDate;
      const updatedPicture = Picture || student.Picture;

      db.query(
        "UPDATE teacher SET Name = ?, Addres = ?, Contact = ?, BornDate = ?, Picture = ? WHERE No = ?",
        [updatedName, updatedAddres, updatedContact, updatedBornDate, updatedPicture, id],
        (error, results) => {
          if (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal server error" });
          }
          res.status(200).json({ message: "Data has been updated successfully" });
        }
      );
    }
  );
});






app.post("/api/post/Information", upload.single("File"), (req, res) => {
  const { NoLetter, LetterName } = req.body;
  const File = req.file.path.replace(/\\/g, "/").substring(7); // mengubah backslash menjadi slash dan menghapus "./public"

  db.query(
    
    "INSERT INTO Information(NoLetter, LetterName, File) VALUES (?, ?, ?)",
    [NoLetter, LetterName, File],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
      }
      res.status(200).json({ message: "Data has been added successfully" });
    }
  );
});


app.delete("/api/delete/Information/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM Information WHERE id = ?", [id], (error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
    res.status(200).json({ message: "Data has been deleted successfully" });
  });
});



// app.post("/api/post/students", upload.single("Picture"), (req, res) => {
//   const { Name, Addres, Contact, BornDate } = req.body;
//   const Validation = req.file.path.replace(/\\/g, "/").substring(7); // mengubah backslash menjadi slash dan menghapus "./public"

//   db.query(
    
//     "INSERT INTO students(Name, Addres, Contact, BornDate, Picture) VALUES (?, ?, ?, ?, ?)",
//     [Name, Addres, Contact, BornDate, Picture],
//     (error, results) => {
//       if (error) {
//         console.log(error);
//         return res.status(500).json({ message: "Internal server error" });
//       }
//       res.status(200).json({ message: "Data has been added successfully" });
//     }
//   );
// });


// Week1
app.post("/api/post/schedule", (req, res) => {
  const { Name, Subject, Timein, Timeout } = req.body;

  db.query(
    "INSERT INTO Schedule (Name, Subject, Timein, Timeout) VALUES (?, ?, ?, ?)",
    [Name, Subject, Timein, Timeout],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been added successfully' });
    }
  );
});




app.post("/api/post/students", (req, res) => {
  const { Name, Subject, Timein, Timeout } = req.body;

  db.query(
    "INSERT INTO Schedule (Name, Subject, Timein, Timeout) VALUES (?, ?, ?, ?)",
    [Name, Subject, Timein, Timeout],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been added successfully' });
    }
  );
});

app.delete("/api/delete/schedule", (req, res) => {
  db.query("DELETE FROM Schedule", (error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
    res.status(200).json({ message: 'All data has been deleted successfully' });
  });
});



app.get("/api/get/schedule", (req, res) => {
  const sqlSelect = "SELECT * FROM schedule";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
});


app.get("/api/get/students", (req, res) => {
  const sqlSelect = "SELECT * FROM students";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
});

app.get("/api/get/teacher", (req, res) => {
  const sqlSelect = "SELECT * FROM teacher";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
});



app.get("/api/get/Information", (req, res) => {
  const sqlSelect = "SELECT * FROM Information";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
});

app.get("/api/get/Attendance", (req, res) => {
  const sqlSelect = "SELECT * FROM attendance";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
});



app.get("/api/get/Admin", (req, res) => {
  const sqlSelect = "SELECT * FROM admin";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
});




  app.listen(3001, () => {
    console.log("Running on port 3001");
  });
  
  
