import Hamburguesaimg from '../img/hamburguesa-simple.jpg'
import LomitoImg from '../img/lomito.jpg'
import GaseosaImg from '../img/gaseosas.png'
import AguaSaborizadaImg from '../img/agua-saborisada.jpg'
import EnsaladaDeFrutaImg from '../img/ensalada-de-fruta.jpg'
import HeladoImg from '../img/helado.jpg'

const data = [
    {
        id: 1,
        name: "hamburguesa simple",
        desciption: "1 medallon de carne, cebolla, 2 rodajas de tomate y una refrescante lechuga",
        precio: "$300",
        imagen: Hamburguesaimg,
        cantidad: 20,
        categoria: "comida"
    },
    {
        id: 2,
        name: "lomito",
        desciption: "400 gr de lomo filetiado, 150 gr de jamon cocido, 150 gr de queso, 2 huevos, 2/3 lechugas",
        precio: "$400",
        imagen: LomitoImg,
        cantidad: 10,
        categoria: "comida"
    },
    {
        id: 3,
        name: "Gaseosa",
        desciption: "Coca cola, Sprite, Fanta",
        precio: "$150",
        imagen: GaseosaImg,
        cantidad: 30,
        categoria: "bebida"
    },
    {
        id: 4,
        name: "Agua saborizada",
        desciption: "Awafrut, Levite, Twister, Aquarius, H2oh",
        precio: "$100",
        imagen: AguaSaborizadaImg,
        cantidad: 30,
        categoria: "bebida"
    }
]

export default data;