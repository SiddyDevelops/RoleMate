import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

const assignResourceToUser = async (req: Request, res: Response) => {
    const { userId, resourceId } = req.body;
    if(!userId || !resourceId) {
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
        const resource = await prisma.resource.findUnique({
            where: { id : resourceId }
        });
        if(!user || !resource) {
            return res.status(206).json({
                status: 206,
                message: 'Either the User or Resource does not exists.',
                data: null
            });
        }
        const response = await prisma.userResource.create({
            data: {
                userId,
                resourceId
            },
            include: {
                user: true,
                resource: true
            }
        });
        res.status(200).json({
            status: 200,
            message: 'Resource assigned to user successfully!',
            data: response
        });
    } catch(err) {
        res.status(400).json({
            status: 400,
            message: 'Unable to create assign resource to user. Please try again.',
            data: err
        });
    }
}

const removeResourceToUser = async (req:Request, res: Response) => {
    const { userId, resourceId } = req.body;
    if(!userId || !resourceId) {
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
        const resource = await prisma.resource.findUnique({
            where: { id : resourceId }
        });
        if(!user || !resource) {
            return res.status(206).json({
                status: 206,
                message: 'Either the User or Resource does not exists.',
                data: null
            });
        }
        const response = await prisma.userResource.delete({
            where: { 
                userId_resourceId:{
                    userId,
                    resourceId
                }
            },
            include : {
                user: true,
                resource: true
            }
        });
        res.status(200).json({
            status: 200,
            message: 'Resource remove from user successfully!',
            data: response
        });
    } catch(err) {
        res.status(400).json({
            status: 400,
            message: 'Failed to remove resource from user.',
            data: err
        });
    }
};

export default { assignResourceToUser, removeResourceToUser };