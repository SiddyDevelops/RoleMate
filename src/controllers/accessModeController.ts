import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

const createAccessMode = async (req: Request,res: Response)=>{
    const { id,name } = req.body;
    if(!id || !name) {
        return res.status(206).json({
            status: 206,
            message: 'Please provide the fields.',
            data: null
        });
    }
    try {
        const response = await prisma.accessMode.create({
            data: {
                id,
                name
            }
        });
        res.status(201).json({
            status: 201,
            message: 'AccessMode posted successfully.',
            data: response
        });
    } catch(err) {
        res.status(400).json({
            status: 400,
            message: 'Unable to create a access mode. Please try again.',
            data: err
        });
    }
}

const getAccessModeById = async (req: Request,res: Response)=>{
    const { id } = req.params;
    try {
        const accessMode = await prisma.accessMode.findUniqueOrThrow({
            where: { id: id },
            include: {
                userResources: true
            }
        });
        res.status(200).json({
            status: 200,
            message: 'AccessMode retrieved successfully.',
            data: accessMode
        });
    } catch(err) {
        res.status(404).json({
            status: 404,
            message: 'AccessMode does not exists.',
            data: err
        });
    }
}

const listAllAccessModes = async (req: Request,res: Response)=>{
    try{
        const allAccessModes = await prisma.accessMode.findMany({
            select: {
                id: true,
                name: true
            }
        });
        res.status(200).json({
            status: 200,
            message: 'AccessMode list retrieved successfully.',
            data: allAccessModes
        });
    } catch(err) {
        res.status(400).json({
            status: 400,
            message: 'Unable to get AccessMode. Please try again',
            data: err
        });
    }
}

const updateAccessMode = async (req: Request,res: Response)=>{
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
        const response = await prisma.accessMode.update({
            where: { id: id },
            data: { description }
        });
        res.status(200).json({
            status: 200,
            message: 'AccessMode data updated successfully.',
            data: response
        });
    } catch(err) {
        res.status(400).json({
            status: 400,
            message: 'Failed to update the AccessMode.',
            data: err
        });
    }
}

const deleteAccessMode = async (req: Request,res: Response)=>{
    try {
        const { id } = req.params;
        const response = await prisma.accessMode.delete({
            where: { id : id}
        });
        res.status(200).json({
            status: 200,
            message: 'AccessMode deleted successfully.',
            data: response
        });
    } catch(err) {
        res.status(404).json({
            status: 404,
            message: 'AccessMode does not exists.',
            data: err
        });
    }
}

export default { createAccessMode, getAccessModeById, listAllAccessModes, updateAccessMode, deleteAccessMode };