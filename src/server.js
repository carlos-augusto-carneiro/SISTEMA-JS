import "dotenv/config";

import "./database";

import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import express from "express";

import UsersResource from "./resources/UserResource";

AdminJS.registerAdapter(AdminJSSequelize);

const app = express();

const adminJs = new AdminJS({
    databases: [],
    rootPath: "/admin",
    resources: [UsersResource],
});

const router = AdminJSExpress.buildRouter(adminJs);

app.use(adminJs.options.rootPath, router);
app.listen(3333, () => {
    console.log("AdminJS is under http://localhost:3333/admin")
})