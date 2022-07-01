/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsNomeDeUsuarioUnico } from './is-nome-de-usuario-unico-validator';
/* eslint-disable prettier/prettier */
export class Usuario{
    id: number;
     
    //__________________________________
    @Expose({ //deixa o nome em ingles para permitir a comunicação entre api e biblioteca 
        name: 'username'
    })
    @IsNomeDeUsuarioUnico({ //verifica se usuario ja existe na base de dados
        message: 'nomeDeUsuario precisa ser único'
    })
    @IsNotEmpty({
        message: 'nomeDeUsuario é obrigatório'
    })
    @IsString({
        message: 'nomeDeUsuario precisa ser string'
    })
    nomeDeUsuario: string;
    
     //__________________________________
    @Expose({
        name: 'email'
    })
    @IsEmail()
    email: string;
    
    //_______________________________
    @Expose({
        name: 'password'
    })
    @Exclude({
        toPlainOnly: true  //para não mostrar a senha no momento de retorno do JSON e funciona em conjunto com o intercptor
    })
    @IsNotEmpty({
        message: 'senha é obrigatória'
    })
    senha: string;
    
     //__________________________________
    @Expose({
        name: 'fullName'
    })
    @IsNotEmpty({
        message: 'nomeCompleto é obrigatório'
    })
    nomeCompleto: string;
    
    //__________________________________
    @Expose({
        name: 'joinDate'
    })
    dataDeEntrada: Date;
}