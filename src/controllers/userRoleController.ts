import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

const assignRoleToUser = async (req: Request, res: Response) => {
    const { userId, roleId } = req.body;
    if(!userId || !roleId) {
        return res.status(206).json({
            status: 206,
            message: 'Please provide the data fields.',
            data: null
        });
    }
    try{
        const user = await prisma.user.findUnique({
            where: { id : userId }
        });
        const role = await prisma.role.findUnique({
            where: { id : roleId }
        });
        if(!user || !role) {
            return res.status(206).json({
                status: 206,
                message: 'Either the User or Role does not exists.',
                data: null
            });
        }
        const response = await prisma.roleUser.create({
            data: {
                userId,
                roleId
            },
            include: {
                user: true,
                role: true
            }
        });
        res.status(200).json({
            status: 200,
            message: 'Role assigned to user successfully!',
            data: response
        });
    } catch(err) {
        res.status(400).json({
            status: 400,
            message: 'Unable to create assign role to user. Please try again.',
            data: err
        });
    }
}

const removeRoleFromUser = async (req:Request, res: Response) => {
    const { userId, roleId } = req.body;
    if(!userId || !roleId) {
        return res.status(206).json({
            status: 206,
            message: 'Please provide the data fields.',
            data: null
        });
    }
    try {
        const user = await prisma.user.findUnique({
            where: { id : userId }
        });
        const role = await prisma.role.findUnique({
            where: { id : roleId }
        });
        if(!user || !role) {
            return res.status(206).json({
                status: 206,
                message: 'Either the User or Role does not exists.',
                data: null
            });
        }
        const response = await prisma.roleUser.delete({
            where: { 
                userId_roleId:{
                    userId,
                    roleId
                }
            },
            include : {
                user: true,
                role: true
            }
        });
        res.status(200).json({
            status: 200,
            message: 'Role remove from user successfully!',
            data: response
        });
    } catch(err) {
        res.status(400).json({
            status: 400,
            message: 'Failed to remove role from user.',
            data: err
        });
    }
};

export default { assignRoleToUser, removeRoleFromUser };