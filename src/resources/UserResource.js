import AdminJs from 'adminjs';
import { response } from 'express';
import { request } from 'http';

import User from "../models/user";

export default {
    resource: User,
    options: {
        parent: {
            icon: "User",
        },
        actions: {
            resetPassword: {
                actionType: 'record',
                icon: "Password",
                handler: async (request, response, context) => {
                    return {
                        record: context.record.toJSON(),
                    }
                }
            }
        },
        properties: {
            id: {
                position: 1,
            },
            initials: {
                position:2,
                isVisible: {list: true, filter: false, show: true, edit: false},
            },
            name: {
                position: 3,
                isRequired: true,
            },
            email: {
                position: 4,
                isRequired: true,
            },
            role: {
                position: 5,
                isRequired: true,
                availableValues: [
                    { Value: 'admin', label: 'Administrador'},
                    { Value: 'manager', label: 'Gerente'},
                    { Value: 'developer', label: 'Desenvolvedor'},
                ],
            },
            status: {
                position: 6,
                isRequired: true,
                availableValues: [
                    { Value: 'active', label: 'Ativo'},
                    { Value: 'archived', label: 'Arquivado'},
                ],
            },
            createAt: {
                position:7,
                isVisible: {list: true, filter: false, show: true, edit: false},
            },
            updatedAt: {
                position:8,
                isVisible: {list: true, filter: false, show: true, edit: false},
            },
            password: {
                isVisible: false,
            },
            password_hash: {
                isVisible: false,
            },
        },
    },
};
