const express = require("express");
const app = express();
const jwt = require(`jsonwebtoken`);
require(`dotenv`).config();
const jsonwebtoken = require("jsonwebtoken");




app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res
        .status(401)
        .json({ message: "Debe iniciar sesión para acceder a este recurso" });
});
app.get("/login", (req, res) => {
   
    res.send(`<html>
        <head>
            <meta charset="UTF-8"  "Content-Type": "text/html;charset=UTF-8" >
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>login</title>

    <style>
        body {font-family: Arial, Helvetica, sans-serif;}
        form {border: 3px solid #f1f1f1;}
        
        input[type=text], input[type=password] {
          width: 100%;
          padding: 12px 20px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          box-sizing: border-box;
        }
        
        button {
          background-color: #04AA6D;
          color: white;
          padding: 14px 20px;
          margin: 8px 0;
          border: none;
          cursor: pointer;
          width: 100%;
        }
        
        button:hover {
          opacity: 0.8;
        }
        
        .cancelbtn {
          width: auto;
          padding: 10px 18px;
          background-color: #f44336;
        }
        
        
        
       
        
        .container {
          padding: 16px;
        }
        
        span.psw {
          float: right;
          padding-top: 16px;
        }
         form {
            height: 400px;
            width: 500px;
            margin: 0 auto;
            margin-top: 100px;
            
           
           
            
         }
        
        </style>

</head>


<body>
    <form  method="post" action="/auth">
        
      
        <div class="container">
          <label for="username"><b>Usuario</b></label>
          <input type="text" placeholder="Ingrese Usuario" name="username" required>
      
          <label for="password"><b>Contraseña</b></label>
          <input type="password" placeholder="Ingrese Contraseña" name="password" required>
      
          <button type="submit">Ingresar</button>
          <label>
            <input type="checkbox" checked="checked" name="remember"> Recordar Usuario
          </label>
        </div>
      
        <div class="container" style="background-color:#f1f1f1">
          <button type="button" class="cancelbtn">Cancelar</button>
          <span class="psw">Olvido <a href="#">Contraseña?</a></span>
        </div>
      </form>
</body>
</html>`
    );
    ////
   
   
});

//////
app.post(`/auth`, (req, res) => {
    const SECRET =
        // "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";
        "usuario: Mauricio, ciudad: Buenos aires"; 
           
    const { username, password } = req.body;
    //
    console.log(`${username} esta tratando de iniciar sesion ..`);
    //
    if (username === "admin" && password === "admin") {
        return res.json({
            token: jsonwebtoken.sign({ user: "admin" }, SECRET),
            message: SECRET,

        });
    }
    else {
        res.send(`Usuario o contraseña - incorrecto`);
        console.log(`${username} no puede  iniciar sesion ..`);
    }

    ///
    const user = { username: username };

    const accessToken = generateAccessToken(user);

  /*  res.header(`authorization`, accessToken).json({
        message: `Usuario autenticado`,
        token: SECRET 
    })*/

});
////``
app.get("/api", validateToken, (req, res) => {
    res.json({ message: "Debe iniciar sesión para acceder a este recurso" });
});

////
function generateAccessToken(user) {

    { process.env.SECRET }


    //return jwt.sign(user, process.env.SECRET);
}

function validateToken(req, res, next) {
    const accessToken = req.headers[`authorization`];
    if (!accessToken) res.send(`acceso denegado`);

    jwt.verify(accessToken, process.env.SECRET, (err, user) => {
        if (err) {
            res.send(`acceso denegado o token incorrecto`);
        } else {
            next();
        }
    });
}

////
app.listen(3000, () => {
    console.log("API running on localhost:3000");
});
