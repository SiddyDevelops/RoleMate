import dotenv from 'dotenv';
import express from 'express';
import userRoutes from './routes/userRoutes';
import roleRoutes from './routes/roleRoutes';
import resourceRoute from './routes/resourceRoute';
import accessModeRoute from './routes/accessModeRoutes';
import userRoleRoute from './routes/userRoleRoute';
import userReourceRoute from './routes/userResourceRoute';
import userReourceAccessModeRoute from './routes/userResourceAccessModeRoutes';
import path from 'path';

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
dotenv.config();

const app = express();
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));

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
// Role CRUD
app.use('/role', roleRoutes);
// Resource CRUD
app.use('/resource', resourceRoute);
// AccessMode CRUD
app.use('/accessMode', accessModeRoute)
// RoleToUser CRUD
app.use('/roleUser', userRoleRoute);
// ResourceToUser CRUD
app.use('/userResource', userReourceRoute);
// AccessModeToUserResource CRUD
app.use('/userResourceAccessMode', userReourceAccessModeRoute);

// Get ROLE BASED ACCESS CONTROL LIST
app.get('/rbac', async (req,res)=>{
    try{
        const allUsers = await prisma.user.findMany({
            include: {
                roles: true,
                resources: {
                    include: {
                        resource: true,
                        accessModes: true
                    }
                }
            }
        });
        res.render('script', { data: allUsers });
        // res.status(200).json({
        //     status: 200,
        //     message: 'User list retrieved successfully.',
        //     data: allUsers
        // });
    } catch(err) {
        res.status(400).json({
            status: 400,
            message: 'Unable to get users. Please try again',
            data: err
        });
    }
});

app.listen(process.env.PORT,()=>{
    console.log(`Server listening at http://localhost:${process.env.PORT}/`);
});