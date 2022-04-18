const express = require("express");
const router = express.Router();
const Controller = require("./controller");
const cors = require('cors');

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

module.exports = cors(corsOptions);


// Foods ENDPOINT
router.get("/get",cors(corsOptions) ,Controller.get_lists);
router.post("/create", Controller.create_list);
router.put("/update/id/:id", Controller.update_list);
router.put("/updateStatus/id/:id", Controller.update_status);
router.delete("/delete/id/:id",Controller.delete_list);



module.exports = router;
