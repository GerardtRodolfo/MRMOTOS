import React from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Input from "../../components/Input";
import * as C from "./styles";





const Brand = () => {
  return (
    <>
   
   <Menu />
   <Header />
    <C.Container>
    
      <C.Label>Cadastro de Marcas</C.Label>
      
      <C.Content>
      <C.Strong>Nova Marca</C.Strong>
        <Input
          type="Nome"
          placeholder="Digite o nome"
        />
         
      </C.Content>
    </C.Container>
   
      
    </>
  );
};

export default Brand;

