/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.server';

@Controller('users')
export class UsuarioController {

  private usuarioService = new UsuarioService();

  @Post()
  public cria(@Body() usuario) {
    const usuarioCriado = this.usuarioService.cria(usuario);
    return usuarioCriado;
  }
}
