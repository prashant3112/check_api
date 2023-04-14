const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/user_controller");

// Here all  the routes define for manage Product API
router.post("/create", Controllers.createUser);
router.get("/sep", Controllers.Getfilter);
router.get("/:id", Controllers.GetUser);
router.post("/:id", Controllers.updateUser);
``;
router.delete("/:id", Controllers.deleteuser);
router.get("*", (req, res) => {
  res.send("<h1>404</h1>");
});

module.exports = router;