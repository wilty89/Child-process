const { exec, spawn } = require("child_process");
const { stdout } = require("process");


exec("DIR", (err, stdout, sterr) => {
  if (err) {
    console.error(err);
    return false;
  }
  //console.log(stdout)
});

exec("node consola.js", (err, stdout, sterr) => {
  if (err) {
    console.error(err);
    return false;
  }
  //console.log(stdout)
});
exec("DIR", (err, stdout, sterr) => {
  if (err) {
    console.error(err);
    return false;
  }
  //console.log(stdout)
});

const python = spawn("python.exe", ["./hello.py"]); //dir

python.stdout.on("data", function (data) {
  console.log(data.toString());
  //res.send(data.toString()); 
});
python.on("exit", function () {
  console.log("el proceso termino");
  console.log(python.killed)
});
