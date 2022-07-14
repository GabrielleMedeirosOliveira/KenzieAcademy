const PessoaFisica = [
  {
    email: "admin@admin.com",
    password: "Grupo_01",
    name: "Grupo_01",
    cpf: "123.456.789-10",
    birth_date: "01/01/2022",
    phone: "91234-5678",
    address: "Rua Kenzie 123, bairro Churros, vila Batatas, SP, Brasil",
    type: "user",
  },
];

const PessoaJuridica1 = [
  {
    email: "versailes@padoka.com",
    password: "Padoka@1999",
    name: "Versailes Padaria",
    cpnj: "12.345.678/0001-66",
    category: "Panificadora",
    phone: "40028922",
    address: "Rua Kenzie 123, vila churros, cidade Batata,SP",
    img: "https://scontent.fcgh10-1.fna.fbcdn.net/v/t39.30808-6/245420832_1053685778784700_6792366731091919525_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeENFoF7pY4xzIjaHmj1oPSaCJora_cPU6YImitr9w9TphrRPO3oTThcYjHoCsy-y9D5QYPMUn7EGAlklv_U5wEp&_nc_ohc=65jJKOf0DPQAX811GlI&_nc_zt=23&_nc_ht=scontent.fcgh10-1.fna&oh=00_AT9DyoevJSLr7VROcfeDt-Ik0i7M7t_qHKQBi3H7t0MHFA&oe=62D177A7",
    bio: "A Padaria Versailes foi criada em 1999, na cidade de Batatas, em São Paulo e desde então está a 22 anos no mercado.",
    id: 4,
    type: "company",
    products: [
      {
        category: "Panificadora",
        name: "Presunto Sadia",
        price: "4.99",
        description: "Aproximadamente 100 gramas",
        img: "https://static-images.ifood.com.br/image/upload/t_medium/pratos/e8b7a430-94e5-418e-8649-ae4a0cba38c2/202003061757_j7u9_d.jpg",
        validity: "20/07/2022",
        userId: 4,
        id: 1,
      },
      {
        category: "Panificadora",
        name: "Bolo redondo de Limão",
        price: "12.00",
        description: "Aproximadamente 600 gramas",
        img: "https://static-images.ifood.com.br/image/upload/t_medium/pratos/e8b7a430-94e5-418e-8649-ae4a0cba38c2/202007071219_Kz8T_2.jpg",
        validity: "17/07/2022",
        userId: 4,
        id: 2,
      },
      {
        category: "Panificadora",
        name: "Torta de Morango",
        price: "18.45",
        description: "Aproximadamente 1,2kg",
        img: "https://static-images.ifood.com.br/image/upload/t_medium/pratos/e8b7a430-94e5-418e-8649-ae4a0cba38c2/202003061737_PDdC_2.jpg",
        validity: "18/07/2022",
        userId: 4,
        id: 3,
      },
      {
        category: "Panificadora",
        name: "Baguete Massa Folhada de presunto e queijo",
        price: "9.45",
        description: "Valor a unidade",
        img: "https://static-images.ifood.com.br/image/upload/t_medium/pratos/e8b7a430-94e5-418e-8649-ae4a0cba38c2/202003071248_uy61_2.jpg",
        validity: "16/07/2022",
        userId: 4,
        id: 4,
      },
    ],
  },
];

const PessoaJuridica2 = [
  {
    email: "superbig@email.com",
    password: "Bingao@123",
    name: "Supermercado Big",
    cpnj: "12.205.587/0001-79",
    category: "Mercado",
    phone: "987463512",
    address: "Rua Victor 250, vila churros, cidade Batata,SP",
    img: "http://biscoitosgusman.com.br/wp-content/uploads/2017/12/Logo-Big.png",
    bio: "Aqui você encontra tudo que precisa em só lugar. Nossa missão é facilitar a sua vida. Tenha Mais Comodidade. Produtos Para Toda a Família, Reunidos em um Só Lugar.",
    id: 5,
    type: "company",
    products: [
      {
        category: "Mercado",
        name: "Leite Integral",
        price: "3.43",
        description: "Valor a unidade",
        img: "https://static.paodeacucar.com/img/uploads/1/194/531194.jpg",
        validity: "18/07/2022",
        userId: 5,
        id: 1,
      },
      {
        category: "Mercado",
        name: "Oleo de Soja",
        price: "4.31",
        description: "Valor a unidade",
        img: "https://www.bistek.com.br/media/catalog/product/cache/15b2f1f06e1cd470c80b1f3fd7ec8301/1/0/1030981.jpg",
        validity: "16/07/2022",
        userId: 5,
        id: 2,
      },
      {
        category: "Mercado",
        name: "Café Tradicional",
        price: "10.25",
        description: "Embalagem de 500g",
        img: "https://protelimp.com.br/wp-content/uploads/caf%C3%A9-pil%C3%A3o-a-vacuo-500-gramas-800x800.jpg",
        validity: "20/07/2022",
        userId: 5,
        id: 3,
      },
    ],
  },
];

const PessoaJuridica3 = [
  {
    email: "cozbr@email.com",
    password: "Cozbr@2022",
    name: "Cozinha Brasileira",
    cpnj: "11.235.577/0001-74",
    category: "Mercado",
    phone: "987463545",
    address: "Rua Alex 112, vila churros, cidade Batata,SP",
    img: "https://static-images.ifood.com.br/image/upload/t_high/logosgde/bcc8da34-db95-4f8b-a9d5-7b61b92834ba/202004131404_GH8i_i.png",
    bio: "Tadrição em quem sabe o que faz, a 20 anos trazendo comida brasileira pra mesa do Brasil",
    id: 6,
    type: "company",
    products: [
      {
        category: "Restaurante",
        name: "Baião de Dois",
        price: "18.99",
        description: "Acompanha: Couve, Torresmo e Fritas. Porção individual.",
        img: "https://static-images.ifood.com.br/image/upload/t_medium/pratos/b6740008-c3a8-442f-a17f-da69c92aec49/202010061557_zTJh_b.jpg",
        validity: "16/07/2022",
        userId: 6,
        id: 1,
      },
      {
        category: "Restaurante",
        name: "Feijoada",
        price: "22.49",
        description: "Acompanha: Arroz, Couve, Torresmo, Farofa e Bisteca",
        img: "https://static-images.ifood.com.br/image/upload/t_medium/pratos/b6740008-c3a8-442f-a17f-da69c92aec49/202006101530_ClgD_f.jpg",
        validity: "15/07/2022",
        userId: 6,
        id: 2,
      },
      {
        category: "Restaurante",
        name: "Prato Feito Báscio",
        price: "20.98",
        description: "Acompanha: Arroz, Feijão, Fritas, Salada e Carne",
        img: "https://t4.ftcdn.net/jpg/04/47/67/77/360_F_447677793_qlwuEq0EKegA6J55cIsxr39Ue4dyHIBA.jpg",
        validity: "15/07/2022",
        userId: 6,
        id: 3,
      },
    ],
  },
];

const PessoaJuridica4 = [
  {
    email: "citybread@email.com",
    password: "Bread@207",
    name: "Padaria City Bread",
    cpnj: "10.616.785/0001-55",
    category: "Panificadora",
    phone: "20244687",
    address: "Rua Cooler 616, vila churros, cidade Batata,SP",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwtQCbKlRSj1S_a6cU6wD7dujVLs2YNjVZq3jQnS4kchbKC71zor2VyReEO3ZeoGGo7c0&usqp=CAU",
    bio: "Padaria Completa 24 horas",
    id: 7,
    type: "company",
    products: [
      {
        category: "Panificadora",
        name: "Bolo de Cenoura com cobertura de Chocolate",
        price: "11.00",
        description: "Aproximadamente 600g",
        img: "https://static-images.ifood.com.br/image/upload/t_medium/pratos/fcccd87d-0f36-4823-b0d0-668b79827075/202005071348_L7M9_7.jpg",
        validity: "17/07/2022",
        userId: 7,
        id: 1,
      },
      {
        category: "Panificadora",
        name: "Bolo Brownie",
        price: "11.45",
        description: "Bolo em Tira",
        img: "https://static-images.ifood.com.br/image/upload/t_medium/pratos/fcccd87d-0f36-4823-b0d0-668b79827075/202005090846_0mSW_0.jpg",
        validity: "16/07/2022",
        userId: 7,
        id: 2,
      },
      {
        category: "Panificadora",
        name: "Pudim de Leite Condensado",
        price: "22.50",
        description: "Serve 8 pessoas",
        img: "https://img.itdg.com.br/tdg/images/recipes/000/031/593/318825/318825_original.jpg?mode=crop&width=710&height=400",
        validity: "15/07/2022",
        userId: 7,
        id: 3,
      },
    ],
  },
];

const PessoaJuridica5 = [
  {
    email: "obahortifruti@email.com",
    password: "Hortifruti_0ba",
    name: "Oba Hortifruti",
    cpnj: "55.686.795/0001-45",
    category: "Mercado",
    phone: "20242003",
    address: "Rua Manson 258, vila churros, cidade Batata,SP",
    img: "https://iguatemi.com.br/marketplace/sites/marketplace/files/2019-10/oba_.png",
    bio: "Hortifruti e Mini Mercado.",
    id: 8,
    type: "company",
    products: [
      {
        category: "Mercado",
        name: "Batata Inglesa",
        price: "7.45",
        description: "Bandeija com 250g",
        img: "https://superprix.vteximg.com.br/arquivos/ids/178620-600-600/Batata-Especial-1kg.png?v=636857520320030000",
        validity: "18/07/2022",
        userId: 8,
        id: 1,
      },
      {
        category: "Mercado",
        name: "Maracuja Azedo",
        price: "6.99",
        description: "Bandeija com 600g",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/746/397/products/maracuja1-2d546f9511ade610c015221745690678-1024-1024.jpg",
        validity: "17/07/2022",
        userId: 8,
        id: 2,
      },
      {
        category: "Mercado",
        name: "Tomate",
        price: "5.99",
        description: "Bnadeija com 500g",
        img: "https://scfoods.fbitsstatic.net/img/p/tomate-debora-maduro-para-molho-500g-70892/257510.jpg?w=800&h=800&v=no-change&qs=ignore",
        validity: "18/07/2022",
        userId: 8,
        id: 3,
      },
    ],
  },
];