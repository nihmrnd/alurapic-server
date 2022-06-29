/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.server";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioService],
})
export class UsuarioModule{}