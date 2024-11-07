const { addMessage, getMessages } = require("../controllers/messageController");
const { register, login, setAvatar, getAllUsers } = require("../controllers/messagesController");

const router = require("express").Router();

router.post("/addmsg", addMessage);
router.post("/getmsg", getMessages);

module.exports = router;