class Product {
  #url;
  id;
  name;
  price;
  description;
  tag;
  extra;
  extraUrl;

  constructor(object) {
    this.#url = object.url;
    this.id = object.id;
    this.name = object.name;
    this.price = object.price;
    this.description = object.description;
    this.tag = object.tag;
    this.extra = object.extra;
    this.extraUrl = object.extraUrl;
  }

  getUrl() {
    return this.#url;
  }

  getTags() {
    return [
      this.tag.f1,
      this.tag.f2, 
      this.tag.f3
    ].filter(tag => tag);
  }  

  ArrayToString(array) {
    let returning = ''
    array.forEach((item) => {
      returning += `/ <a href="online-store.html"><span> ${item}</span></a>`
    })

    return returning
  }

  getDetails() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      description: this.description,
      tag: this.tag,
      extra: this.extra
    };
  }
}

export const products = [
  {
  url: 'img/products/Tenis_SL_72_OG_Verde_IF1938_01_standard.avif',
  id: '1yq5ys18wwnexclviu',
  name: 'Tenis SL 72 OG',
  price: '2099',
  description: 'Para aquellos que valoran la simplicidad y la comodidad, estos tenis adidas SL 72 OG son la combinación perfecta. La parte superior de corte bajo, confeccionada en nylon con revestimientos de gamuza, y la silueta estilizada ofrecen un estilo retro inspirado en el running. La mediasuela de EVA amortigua tus pasos y la suela de caucho ofrece tracción confiable.',
  tag: {
      f1: 'Mujer Originals',
      f2: '6 colores'
    },
  extra: 'Envio Gratis',
  extraUrl: {
    url1: 'img/products/Tenis_SL_72_OG_Verde_IF1938_02_standard_hover.avif',
    url2: 'img/products/Tenis_SL_72_OG_Verde_IF1938_03_standard.avif',
    url3: 'img/products/Tenis_SL_72_OG_Verde_IF1938_04_standard.avif'
  }
}, 

{
  url: 'img/products/Tenis_Run_72_Blanco_IH8592_01_standard.avif',
  id: '5kfgj5jn6k5clt8kms',
  name: 'Tenis Run 72',
  price: '1349',
  description: 'Estos tenis adidas traen la energía de los 70 a tu look diario. El exterior liviano incorpora un forro interno para mayor comodidad, mientras que la amortiguación Cloudfoam te mantiene en movimiento. Desde salir por un café en la mañana hasta una noche con amigos, estos tenis se adaptan a cualquier outfit y ocasión. Una suela de caucho flexible te permite llevarlos con confianza, no importa a dónde te lleve el día o la noche.',
  tag: {
      f1: 'Hombre Sportswear',
      f2: '8 colores'
    },
  extra: 'Envio Gratis',
  extraUrl: {
    url1: 'img/products/Tenis_SL_72_OG_Verde_IF1938_02_standard_hover.avif',
    url2: 'img/products/Tenis_SL_72_OG_Verde_IF1938_03_standard.avif',
    url3: 'img/products/Tenis_SL_72_OG_Verde_IF1938_04_standard.avif'
  }
}, 

{
  url: 'img/products/Tenis_Forum_Low_CL_Blanco_IH7828_01_standard.avif',
  id: 'jyfa7fr1g7eurbc10',
  name: 'Tenis Forum Low CL',
  price: '2299',
  description: 'Estos tenis adidas Forum Low CL te ofrecen el equilibrio perfecto entre un estilo informal y retro. El exterior de piel prémium y el suave forro textil te ofrecen una comodidad sin límites. Estos tenis versátiles son un básico en cualquier armario.',
  tag: {
      f1: 'Hombre Originals',
      f2: '5 colores'
    },
  extra: 'Envio Gratis',
  extraUrl: {
    url1: 'img/products/Tenis_SL_72_OG_Verde_IF1938_02_standard_hover.avif',
    url2: 'img/products/Tenis_SL_72_OG_Verde_IF1938_03_standard.avif',
    url3: 'img/products/Tenis_SL_72_OG_Verde_IF1938_04_standard.avif'
  }
}, 

{
  url: 'img/products/Tenis_Samba_XLG_OG_Kids_Negro_JH6517_01_standard.avif',
  id: '5dgq56cjf0bo2fb10',
  name: 'Tenis Samba XLG OG Kids',
  price: '1549',
  description: 'Los adidas Samba, inicialmente pensados como un calzado para fútbol de cancha cubierta, se han convertido en un ícono que ha perdurado por más de 70 años. Estos Samba XLG para jóvenes continúan con el legado con una nueva actitud. Los elementos característicos siguen ahí, desde las 3 Franjas dentadas hasta la puntera tipo T-toe. Los detalles gruesos se inspiran en el estilo del skate, con una lengüeta acolchada y una mediasuela de EVA que añade comodidad en cada paso.',
  tag: {
      f1: 'Niño Originals',
      f2: '2 colores'
    },
  extra: 'Envio Gratis',
  extraUrl: {
    url1: 'img/products/Tenis_SL_72_OG_Verde_IF1938_02_standard_hover.avif',
    url2: 'img/products/Tenis_SL_72_OG_Verde_IF1938_03_standard.avif',
    url3: 'img/products/Tenis_SL_72_OG_Verde_IF1938_04_standard.avif'
  }
}, 

{
  url: 'img/products/Tenis_Samba_OG_Blanco_JH8798_01_standard.avif',
  id: 'sphvoisznne4n3b10',
  name: 'Tenis Samba OG',
  price: '2299',
  description: 'Nacidos en las canchas de fútbol, los Samba son un ícono atemporal de la moda urbana. Esta silueta se mantiene fiel a su legado con un discreto y elegante exterior de piel suave, revestimientos de gamuza y una suela de caucho natural, convirtiéndose en un par indispensable para cualquier armario.',
  tag: {
      f1: 'Hombre Originals',
      f2: '2 colores'
    },
  extra: 'Envio Gratis',
  extraUrl: {
    url1: 'img/products/Tenis_SL_72_OG_Verde_IF1938_02_standard_hover.avif',
    url2: 'img/products/Tenis_SL_72_OG_Verde_IF1938_03_standard.avif',
    url3: 'img/products/Tenis_SL_72_OG_Verde_IF1938_04_standard.avif'
  }
},

{
  url: 'img/products/Tenis_100_Thieves_Palos_Hills_Gris_JI4306_01_00_standard.avif',
  id: 'l8lbewnmhus8n4810',
  name: 'Tenis 100 Thieves Palos Hills',
  price: '2199',
  description: 'Luce un estilo de lujo con estos tenis adidas 100 Thieves Palos Hills. El exterior de piel prémium, el forro interno y la plantilla brindan una comodidad y soporte duraderos. Su diseño sencillo y minimalista combina bien con cualquier outfit. El sutil logo de 100 Thieves le agrega un toque sin ser abrumador.',
  tag: {
      f1: 'Hombre Originals',
      f2: '2 colores'
    },
  extra: 'Envio Gratis',
  extraUrl: {
    url1: 'img/products/Tenis_SL_72_OG_Verde_IF1938_02_standard_hover.avif',
    url2: 'img/products/Tenis_SL_72_OG_Verde_IF1938_03_standard.avif',
    url3: 'img/products/Tenis_SL_72_OG_Verde_IF1938_04_standard.avif'
  }
}, 

{
  url: 'img/products/SUPERSTAR_II_Blanco_IH8659_01_standard.avif',
  id: 'zdhmf1786aqv0lu10',
  name: 'SUPERSTAR II',
  price: '2299',
  description: 'Superstar Ii es un nuevo producto para Unisex de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conoces Superstar Ii puedes dejar una reseña abajo; siempre nos encanta conocer tu opinión. Aún estamos trabajando para tener más información de Superstar Ii, así que vuelva pronto. Mientras tanto, toma nota del número de artículo que identifica el producto IH8659 para que lo puedas encontrar de nuevo fácilmente. Está categorizado como: Zapatillas y Tenis',
  tag: {
      f1: 'Originals',
      f2: '3 colores'
    },
  extra: 'Envio Gratis',
  extraUrl: {
    url1: 'img/products/Tenis_SL_72_OG_Verde_IF1938_02_standard_hover.avif',
    url2: 'img/products/Tenis_SL_72_OG_Verde_IF1938_03_standard.avif',
    url3: 'img/products/Tenis_SL_72_OG_Verde_IF1938_04_standard.avif'
  }
}].map((item) => {
  return new Product(item);
});