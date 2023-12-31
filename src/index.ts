import dotenv from 'dotenv';
import express from 'express';
import userRoutes from './routes/userRoutes';
import roleRoutes from './routes/roleRoutes';
dotenv.config();

const app = express();
app.use(express.json());
app.get('/', (req,res)=>{
    res.status(200).json({
        status: 200,
        message: "Landing Page of RoleMate.",
        data: "RoleMate: Node.js TypeScript Prisma project showcasing robust role-based access control."
    });
});

// USER CRUD
app.use('/user', userRoutes);
// Type CRUD
app.use('/role', roleRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server listening at http://localhost:${process.env.PORT}/`);
});