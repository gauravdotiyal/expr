const express = require("express");

const users = [
  {
    name: "John",
    kidney: [
      {
        healthy: false,
      },
    ],
  },
];

const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  const johnkidneys = users[0].kidney;
  const numberOfKidneys = johnkidneys.length;
  let noOfHealthyKidneys = 0;
  for (let i = 0; i < johnkidneys.length; ++i) {
    if (johnkidneys[i].healthy) {
      noOfHealthyKidneys++;
    }
  }

  const noOfUnhealthyKidneys = numberOfKidneys - noOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    johnkidneys,
    noOfHealthyKidneys,
    noOfUnhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidney.push({
    healthy: isHealthy,
  });

  res.json({
    msg: "DONE",
  });
});

// app.put("/", function(req,res){
//     for(let i=0;i<users[0].kidney.length;++i){
//         users[0].kidney[i].healthy=true;
//     }

//     res.json({})
// })

// removing all the unhealthy kidneys
app.delete("/", function (req, res) {
 
//Apply delete logic if there is atleast one unhealty kidney
  if (isThereAtLeastOneUnhealthyKidney()) {
    const newpatient = [];
    for (let i = 0; i < users[0].kidney.length; ++i) {
      if (users[0].kidney[i].healthy == true) {
        newpatient.push({
          health: true,
        });
      }
    }

    users[0].kidney = newpatient;

    res.json({ msg: "DONE" });
  }

   else {
      res.status(411).json({
        msg:"You have no unhealthy kidney"
      })
   }
});

function isThereAtLeastOneUnhealthyKidney() {
  let oneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidney.length; ++i) {
    if (!users[0].kidney[i].healthy) {
      oneUnhealthyKidney = true;
    }
  }

  return oneUnhealthyKidney;
}

app.listen(3000);
