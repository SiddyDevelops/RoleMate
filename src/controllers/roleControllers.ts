import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

const createRole = async (req: Request, res: Response) => {
    const { id,name } = req.body;
    if(!id || !name) {
        return res.status(206).json({
            status: 206,
            message: 'Please provide the fields.',
            data: null
        });
    }
    try {
        const response = await prisma.role.create({
            data: {
                id,
                name
            }
        });
        res.status(201).json({
            status: 201,
            message: 'Role posted successfully.',
            data: response
        });
    } catch(err) {
        res.status(400).json({
            status: 400,
            message: 'Unable to create a role. Please try again.',
            data: err
        });
    }
}

const getRoleById = async (req: Request,res: Response)=>{
    const { id } = req.params;
    try {
        const user = await prisma.role.findUniqueOrThrow({
            where: { id: id },
            include: {
                users: true
            }
        });
        res.status(200).json({
            status: 200,
            message: 'Role retrieved successfully.',
            data: user
        });
    } catch(err) {
        res.status(404).json({
            status: 404,
            message: 'Role does not exists.',
            data: err
        });
    }
}

const listAllRoles = async (req: Request,res: Response)=>{
    try{
        const allRoles = await prisma.role.findMany({
            select: {
                id: true,
                name: true
            }
        });
        res.status(200).json({
            status: 200,
            message: 'Role list retrieved successfully.',
            data: allRoles
        });
    } catch(err) {
        res.status(400).json({
            status: 400,
            message: 'Unable to get roles. Please try again',
            data: err
        });
    }
}

const updateRole = async (req: Request,res: Response)=>{
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
        const response = await prisma.role.update({
            where: { id: id },
            data: { description }
        });
        res.status(200).json({
            status: 200,
            message: 'Role data updated successfully.',
            data: response
        });
    } catch(err) {
        res.status(400).json({
            status: 400,
            message: 'Failed to update the role.',
            data: err
        });
    }
}

const deleteRole = async (req: Request,res: Response)=>{
    try {
        const { id } = req.params;
        const response = await prisma.role.delete({
            where: { id : id}
        });
        res.status(200).json({
            status: 200,
            message: 'Role deleted successfully.',
            data: response
        });
    } catch(err) {
        res.status(404).json({
            status: 404,
            message: 'Role does not exists.',
            data: err
        });
    }
}

export default { createRole, getRoleById, listAllRoles, updateRole, deleteRole };
