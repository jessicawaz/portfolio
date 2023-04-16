import express from "express";
import axios from "axios";
import dotenv from "dotenv";

const router = express.Router();
router.use(express.json());
dotenv.config();

const ODDS_API_KEY = process.env.ODDS_API;

router.get("/listSports", (req, res) => {
  axios
    .get(`https://api.the-odds-api.com/v4/sports/?apiKey=${ODDS_API_KEY}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
});

export default router;
