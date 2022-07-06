/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post } from '@nestjs/common';
import { NestResponseBuilder } from 'src/core/http/nest-responder-builder';
import { NestResponse } from 'src/core/http/nest-response';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.server';

@Controller('users')
export class UsuarioController {

  constructor(private usuarioService: UsuarioService) {}

  @Get(':nomeDeUsuario')
  public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string) {
    const usuarioEncontado = this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);

    if (!usuarioEncontado){
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Usuario não encontrado'
      });
    }
    
    return usuarioEncontado;
  }

  @Post()
  public cria(@Body() usuario: Usuario): NestResponse {
    const usuarioCriado = this.usuarioService.cria(usuario);
    return new NestResponseBuilder()
    .comStatus(HttpStatus.CREATED)
    .comHeaders({
      'Location': `/users/${usuarioCriado.nomeDeUsuario}`
    })
      .comBody(usuarioCriado)
      .build();
    }
    // res.status(HttpStatus.CREATED)
    //   .location(`/users/${usuarioCriado.nomeDeUsuario}`)
    //   .json(usuarioCriado);
  }

