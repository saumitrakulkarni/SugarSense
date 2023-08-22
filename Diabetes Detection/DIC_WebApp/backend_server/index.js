const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const { spawn } = require('child_process');

app.use(cors());

app.use(bodyParser.json());

app.post('/predict', (req, res) => {
  const {
    HighBP,
    HighCholestrol,
    BodyMassIndex,
    Smoker,
    Stroke,
    HeartDisease,
    PhysicalActivity,
    Fruits,
    Veggies,
    HighAlcohol,
    GeneralHealth,
    MentalHealth,
    PhysicalHealth,
    DifficultyWalking,
    Sex,
    Age,
    Income,
    Fruits_and_Veggies,
  } = req.body;
  console.log(req.body);
  const script = spawn('C:\\Program Files\\python311\\python.exe', [
    'script.py',
  ]);

  let dataToSend;

  script.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
    dataToSend = data.toString();
  });

  script.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  script.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
    return res.json({ prediction: dataToSend.toString()[0] });
  });

  script.stdin.write(
    `${HighBP} ${HighCholestrol} ${BodyMassIndex} ${Smoker} ${Stroke} ${HeartDisease} ${PhysicalActivity} ${Fruits} ${Veggies} ${HighAlcohol} ${GeneralHealth} ${MentalHealth} ${PhysicalHealth} ${DifficultyWalking} ${Sex} ${Age} ${Income} ${Fruits_and_Veggies}\n`
  );
  script.stdin.end();
});

const port = 3005;

app.listen(port, function () {
  console.log(`App listening on port ${port}`);
});
