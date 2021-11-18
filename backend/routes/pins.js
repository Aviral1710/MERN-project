const router = require("express").Router();
const Pin = require("../models/Pin");

// Create a pin
router.post("/", async (req, res) => {
  const newPin = new Pin(req.body); // we are going to send title desc in side our body
  try {
    const savedPin = await newPin.save(); // return us the pin
    res.status(200).json(savedPin);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all pins

router.get("/", async (req, res) => {
  try {
    const pins = await Pin.find();
    res.status(200).json(pins);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
