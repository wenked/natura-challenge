import dotenv from "dotenv";
import app from "./main/config/app";

dotenv.config();

const port = process.env.PORT || 5001;
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
