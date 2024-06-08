import connectDb from "./DBConnection/mongoDBconnection.js";
import app from "./app.js";
const port = 8000;

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  })
  .catch(() => {
    console.log("server is not running");
    process.exit(1);
  });
