import {
  LineChartOutlined,
  ThunderboltOutlined,
  TagOutlined,
  RocketOutlined,
  FileOutlined,
  TruckOutlined,
  AppstoreOutlined,
  ShoppingOutlined,
  SwapOutlined,
  FormOutlined,
  DiffOutlined,
  BankOutlined,
  BarcodeOutlined,
  CalculatorOutlined,
  HomeOutlined,
  FileTextOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { ContainerMenu, Titulo, ContainerLogoNome } from "./styles";
import React, { useState } from "react";
import { useNavigate  } from 'react-router-dom';


import { Menu as MenuLateral } from "antd";

const Menu = () => {
  const [theme] = useState("dark");
  const navigate = useNavigate();
  const [current, setCurrent] = useState("1");

  const items = [
    {
      kay: "registrations",
      label: "Cadastros",
      icon: <AppstoreOutlined />,
      children: [
        {
          key: "client",
          label: "Clientes",
          icon: <UserOutlined />,
          
        },
        {
          key: "supplier",
          label: "Fornecedores",
          icon: <TruckOutlined />,
        },
        {
          key: "product",
          label: "Produtos",
          icon: <ShoppingOutlined />,
          children: [
            {
              key: "products",
              label: "Produtos",
              icon: <ShoppingOutlined />,
            },
            {
              key: "gifts",
              label: "Brindes",
              icon: <RocketOutlined />,
              onClick: () => navigate('/gifts'),
            },
            {
              key: "brand",
              label: "Marcas",
              icon: <TagOutlined />,
              onClick: () => navigate('/brand'),
            }
          ],
        },
      ],
    },
    {
      kay: "movement",
      label: "Movimentação",
      icon: <SwapOutlined />,
      children: [
        {
          key: "pre-sale",
          label: "Pré-Venda",
          icon: <FormOutlined />,
        },
        {
          key: "sale",
          label: "Venda",
          icon: <DiffOutlined />,
        },
        {
          key: "gift-draw",
          label: "Sorteio de Brinde",
          icon: <ThunderboltOutlined />,
        },
      ],
    },
    {
      kay: "financial",
      label: "Financeiro",
      icon: <LineChartOutlined />,
      children: [
        {
          key: "account_receivable",
          label: "Contas a Receber",
          icon: <CalculatorOutlined />,
        },
        {
          key: "account_payable",
          label: "Contas a pagar",
          icon: <BarcodeOutlined />,
        },
        {
          key: "bank",
          label: "Banco",
          icon: <BankOutlined />,
        },
      ],
    },
    {
      kay: "Reports",
      label: "Relatórios",
      icon: <FileTextOutlined />,
      children: [
        {
          key: "pre-sale",
          label: "Vendas",
          icon: <FileTextOutlined />,
          children: [
            {
              key: "company",
              label: "Relação de Vendas",
              icon: <HomeOutlined />,
            },
            {
              key: "user",
              label: "Vendas por Vendedor",
              icon: <UserOutlined />,
            },
            {
              key: "contract",
              label: "Vendas por Cliente",
              icon: <FileOutlined />,
            },
          ],
        },
        {
          key: "sale",
          label: "Produtos",
          icon: <FileTextOutlined />,
        },
        {
          key: "sale",
          label: "Pessoas",
          icon: <FileTextOutlined />,
        },
        {
          key: "sale",
          label: "Contas a pagar",
          icon: <FileTextOutlined />,
        },
        {
          key: "sale",
          label: "Contas a Receber",
          icon: <FileTextOutlined />,
        },
      ],
    },
    {
      kay: "Configurações",
      label: "Configurações",
      icon: <SettingOutlined />,
      children: [
        {
          key: "company",
          label: "Empresa",
          icon: <HomeOutlined />,
        },
        {
          key: "user",
          label: "Usuário",
          icon: <UserOutlined />,
        },
        {
          key: "contract",
          label: "Contrato",
          icon: <FileOutlined />,
        },
      ],
    },
  ];

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <ContainerMenu>
      <ContainerLogoNome>
        <Titulo>COMPRA RÁPIDA</Titulo>
      </ContainerLogoNome>
      <MenuLateral
        theme={theme}
        onClick={onClick}
        style={{ width: 240 }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </ContainerMenu>
  );
};

export default Menu;
