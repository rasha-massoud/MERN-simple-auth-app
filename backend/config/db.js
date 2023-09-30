import mongoose from "mongoose";

const connectDB = () => {
    try {
        mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        const db = mongoose.connection;
        console.log("MongoDB connected successfully!")
        db.once('open', () => console.log("MongoDB connected successfully!"));
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;
