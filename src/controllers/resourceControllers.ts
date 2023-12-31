import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

const createResource = async (req: Request, res: Response) => {
    const { id,name } = req.body;
    if(!id || !name) {
        return res.status(206).json({
            status: 206,
            message: 'Please provide the fields.',
            data: null
        });
    }
    try {
        const response = await prisma.resource.create({
            data: {
                id,
                name
            }
        });
        res.status(201).json({
            status: 201,
            message: 'Resource posted successfully.',
            data: response
        });
    } catch(err) {
        res.status(400).json({
            status: 400,
            message: 'Unable to create a resource. Please try again.',
            data: err
        });
    }
}

const getResourceById = async (req: Request,res: Response)=>{
    const { id } = req.params;
    try {
        const user = await prisma.resource.findUniqueOrThrow({
            where: { id: id },
            include: {
                users: true
            }
        });
        res.status(200).json({
            status: 200,
            message: 'Resource retrieved successfully.',
            data: user
        });
    } catch(err) {
        res.status(404).json({
            status: 404,
            message: 'Resource does not exists.',
            data: err
        });
    }
}

const listAllResources = async (req: Request,res: Response)=>{
    try{
        const allResources = await prisma.resource.findMany({
            select: {
                id: true,
                name: true
            }
        });
        res.status(200).json({
            status: 200,
            message: 'Resource list retrieved successfully.',
            data: allResources
        });
    } catch(err) {
        res.status(400).json({
            status: 400,
            message: 'Unable to get resources. Please try again',
            data: err
        });
    }
}

const updateResource = async (req: Request,res: Response)=>{
    const { id } = req.params;
    const { description } = req.body;
    if(!description) {
        return res.status(206).json({
            status: 206,
            message: 'Please provide the fields.',
            data: null
        });
    }
    try{
        const response = await prisma.resource.update({
            where: { id: id },
            data: { description }
        });
        res.status(200).json({
            status: 200,
            message: 'Resource data updated successfully.',
            data: response
        });
    } catch(err) {
        res.status(400).json({
            status: 400,
            message: 'Failed to update the resource.',
            data: err
        });
    }
}

const deleteResource = async (req: Request,res: Response)=>{
    try {
        const { id } = req.params;
        const response = await prisma.resource.delete({
            where: { id : id}
        });
        res.status(200).json({
            status: 200,
            message: 'Resource deleted successfully.',
            data: response
        });
    } catch(err) {
        res.status(404).json({
            status: 404,
            message: 'Resource does not exists.',
            data: err
        });
    }
}

export default { createResource, getResourceById, listAllResources, updateResource, deleteResource };
