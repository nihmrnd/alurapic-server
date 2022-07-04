/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.server';

@Controller('users')
export class UsuarioController {

  constructor(private usuarioService: UsuarioService) {}

  @Get(':nomeDeUsuario')
  public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string) {
    const usuarioEncontado = this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);
    return usuarioEncontado;
  }

  @Post()
  public cria(@Body() usuario: Usuario): Usuario {
    throw new Error('Erro no cadastro de usuário');
    const usuarioCriado = this.usuarioService.cria(usuario);
    return usuarioCriado;
  }
}
