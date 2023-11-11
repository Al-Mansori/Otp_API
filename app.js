import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/random", (req, res) => {
  const randomIndex = 0;
  res.json(jokeOtp[randomIndex]);
});


app.listen(port, () => {
  console.log(`Successfully started server on port ${port}.`);
});

var jokeOtp = [
  {
    otpNumber:
      "12345",
  }
];
