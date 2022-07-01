/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { IsNomeDeUsuarioUnicoConstraint } from "./is-nome-de-usuario-unico-validator";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.server";

@Module({
    controllers: [UsuarioController],
    providers: [
        UsuarioService,
        IsNomeDeUsuarioUnicoConstraint],
})
export class UsuarioModule{}