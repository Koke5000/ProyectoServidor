import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const port = process.env.PORT;
const allowedOrigins = ["http://localhost:5173"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

const app = express();
app.use(express.json());
app.use(cors(options));

import routerUsuarios from "./usuarios/infrastructure/rest/Usuario.Router";
app.use("/api/usuarios", routerUsuarios);

import routerRunas from "./runas/infrastructure/rest/Runa.Router";
app.use("/api/runas", routerRunas);

import routerGilfos from "./glifos/infrastructure/rest/Glifo.Router";
app.use("/api/glifos", routerGilfos);

import routerArmaduras from "./armaduras/infrastructure/rest/Armadura.Router";
app.use("/api/armaduras", routerArmaduras);

import routerEspadas from "./espadas/infrastructure/rest/Espada.Router";
app.use("/api/espadas", routerEspadas);

import routerPlantillas from "./plantillas/infrastructure/rest/Plantilla.Router";
app.use("/api/plantillas", routerPlantillas);

import routerNoticias from "./noticias/infrastructure/rest/Noticia.Router";
app.use("/api/noticias", routerNoticias);

app.listen(process.env.PORT, () => {
  console.log(`Application started on port ${port}`);
});

import swaggerUI from "swagger-ui-express";
import swaggerDocument from "./swagger-output.json";
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocument, {explorer:true}));
