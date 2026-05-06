// Load environment variable first
require("dotenv").config();
// Required
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());
const corsOptions = {
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.get("/api/health", (req, res) => {
    res.json({
        message: "Laboratory server is running",
    });
});

app.listen(PORT, () => {
    console.log(`Laboratory server running on http://localhost:${PORT}`);
})