import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

const assignAccessModeToUserResource = async (req: Request, res: Response) => {
    const { userId, resourceId, accessModeId } = req.body;
    if(!userId || !resourceId || !accessModeId) {
        return res.status(206).json({
            status: 206,
            message: 'Please provide the data fields.',
            data: null
        });
    }
    try{
        const userResource = await prisma.userResource.findUnique({
            where: {
                userId_resourceId: {
                    userId,resourceId
                }
            }
        });
        const accessMode = await prisma.accessMode.findUnique({
            where: { id : accessModeId }
        });
        if(!userResource || !accessMode) {
            return res.status(206).json({
                status: 206,
                message: 'Either the UserResource or AccessMode does not exists.',
                data: null
            });
        }
        const response = await prisma.resourceAccessMode.create({
            data: {
                userId,
                resourceId,
                accessModeId
            },
            include: {
                userResource: {
                    include: {
                        user: true,
                        resource: true
                    }
                },
                accessMode: true
            }
        });
        res.status(200).json({
            status: 200,
            message: 'AccessMode assigned to user resource successfully!',
            data: response
        });
    } catch(err) {
        res.status(400).json({
            status: 400,
            message: 'Unable to assign AccessMode to user resource. Please try again.',
            data: err
        });
    }
}

const removeAccessModeToUserResource = async (req:Request, res: Response) => {
    const { userId, resourceId, accessModeId } = req.body;
    if(!userId || !resourceId || !accessModeId) {
        return res.status(206).json({
            status: 206,
            message: 'Please provide the data fields.',
            data: null
        });
    }
    try{
        const userResource = await prisma.userResource.findUnique({
            where: {
                userId_resourceId: {
                    userId,resourceId
                }
            }
        });
        const accessMode = await prisma.accessMode.findUnique({
            where: { id : accessModeId }
        });
        if(!userResource || !accessMode) {
            return res.status(206).json({
                status: 206,
                message: 'Either the UserResource or AccessMode does not exists.',
                data: null
            });
        }
        const response = await prisma.resourceAccessMode.delete({
            where: { 
                userId_resourceId_accessModeId:{
                    userId,
                    resourceId,
                    accessModeId
                }
            },
            include: {
                userResource: {
                    include: {
                        user: true,
                        resource: true
                    }
                },
                accessMode: true
            }
        });
        res.status(200).json({
            status: 200,
            message: 'AccessMode removed from user resource successfully!',
            data: response
        });
    } catch(err) {
        res.status(400).json({
            status: 400,
            message: 'Failed to remove AccessMode from user resource.',
            data: err
        });
    }
};

export default { assignAccessModeToUserResource, removeAccessModeToUserResource };