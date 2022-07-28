import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import express from "express";

const app = express();

const adminJs = new AdminJS({
    databases: [],
    rootPath: "/admin",
    resources: [],
});

const router = AdminJSExpress.buildRouter(adminJs);

app.use(adminJs.options.rootPath, router);
app.listen(3333, () => {
    console.log("AdminJS is under http://localhost:3333/admin")
})