import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

const createUser = async (req: Request,res: Response)=>{
    const { name } = req.body; 
    try {
        const response = await prisma.user.create({
            data: {
                name
            }
        });
        res.status(201).json({
            status: 201,
            message: 'User created successfully.',
            data: response
        });
    } catch(err) {
        res.status(400).json({
            status: 400,
            message: 'Unable to create a user. Please try again.',
            data: err
        });
    }
}

const getUserById = async (req: Request,res: Response)=>{
    const { id } = req.params;
    try {
        const user = await prisma.user.findUniqueOrThrow({
            where: { id: id },
            include: {
                roles: true,
                resources: true
            }
        });
        res.status(200).json({
            status: 200,
            message: 'User retrieved successfully.',
            data: user
        });
    } catch(err) {
        res.status(404).json({
            status: 404,
            message: 'User does not exists.',
            data: err
        });
    }
}

const listAllUsers = async (req: Request,res: Response)=>{
    try{
        const allUsers = await prisma.user.findMany({
            select: {
                id: true,
                name: true
            }
        });
        res.status(200).json({
            status: 200,
            message: 'User list retrieved successfully.',
            data: allUsers
        });
    } catch(err) {
        res.status(400).json({
            status: 400,
            message: 'Unable to get users. Please try again',
            data: err
        });
    }
}

const updateUser = async (req: Request,res: Response)=>{
    const { id } = req.params;
    const { name } = req.body;
    if(!name) {
        return res.status(206).json({
            status: 206,
            message: 'Please provide the fields.',
            data: null
        });
    }
    try{
        const response = await prisma.user.update({
            where: { id: id },
            data: { name }
        });
        res.status(200).json({
            status: 200,
            message: 'User data updated successfully.',
            data: response
        });
    } catch(err) {
        res.status(400).json({
            status: 400,
            message: 'Failed to update the user.',
            data: err
        });
    }
}

const deleteUser = async (req: Request,res: Response)=>{
    try {
        const { id } = req.params;
        const response = await prisma.user.delete({
            where: { id : id}
        });
        res.status(200).json({
            status: 200,
            message: 'User deleted successfully.',
            data: response
        });
    } catch(err) {
        res.status(404).json({
            status: 404,
            message: 'User does not exists.',
            data: err
        });
    }
}

export default { createUser,getUserById,listAllUsers,updateUser,deleteUser };