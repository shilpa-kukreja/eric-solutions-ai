import express from 'express';
import dotenv from 'dotenv';
import connectDB from'./config/db.js';
import cors from 'cors';
import contactRoutes from './routers/contactroute.js';
import adminRoutes from './routers/adminroute.js';
import newsletterRoutes from './routers/newslettterroute.js';
import blogRoutes from './routers/blogroute.js';
import sliderRoutes from "./routers/sliderroute.js";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config();

const app=express();


app.use(express.json());
app.use(cors({
    origin:process.env.FRONTEND_URL,
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.use('/api/contact',contactRoutes);
app.use('/api/admin',adminRoutes);
app.use('/api/newsletter',newsletterRoutes);
app.use('/api/blog',blogRoutes);
app.use("/api/sliders", sliderRoutes);


app.get('/',(req,res)=>{
    res.send('this is eric solutions server');
});

const PORT=process.env.PORT;

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
});
