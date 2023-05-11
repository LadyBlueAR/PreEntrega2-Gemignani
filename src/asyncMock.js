//Import de Imagenes//
import pcRdr2 from './components/assets/img/pc/pc_rdr2.jpg';
import pcDeadS from './components/assets/img/pc/pc_dead_stranding.jpg';
import pcForza from './components/assets/img/pc/pc_forzahorizon_5.jpg';
import pcBt from './components/assets/img/pc/pc_battlefield_2042.jpg';
import pcJedi from './components/assets/img/pc/pc_jedisurvivor.jpg';
import pcTomb from './components/assets/img/pc/pc_tombrider.jpg';
import psDeadI from './components/assets/img/ps/ps_dead_island_2.jpg';
import psFifa from './components/assets/img/ps/ps_fifa23.jpg';
import psGow from './components/assets/img/ps/ps_gow_ragnarok.jpg';
import psHp from './components/assets/img/ps/ps_h_legacy.jpg';
import psSpider from './components/assets/img/ps/ps_spiderman.jpg';
import psTlou from './components/assets/img/ps/ps_tlou2.jpg';
import xboxCod from './components/assets/img/xbox/xbox_cod_mw_remastered.jpg';
import xboxFifa from './components/assets/img/xbox/xbox_fifa23.jpg';
import xboxGtav from './components/assets/img/xbox/xbox_gtav.jpg';
import xboxHp from './components/assets/img/xbox/xbox_h_legacy.jpg';
import xboxJedi from './components/assets/img/xbox/xbox_jedi_survivor.jpg';
import xboxRed from './components/assets/img/xbox/xbox_redfall.jpg';
import swAc from './components/assets/img/switch/sw_ac_new_horizons.jpg';
import swKirbi from './components/assets/img/switch/sw_k_dream_buffet.jpg';
import swMario from './components/assets/img/switch/sw_mp_superstars.jpg';
import swPoke from './components/assets/img/switch/sw_pokemon_scarlet.jpg';
import swXeno from './components/assets/img/switch/sw_xenoblade_chr_3.jpg';
import swZelda from './components/assets/img/switch/sw_ac_new_horizons.jpg';

const productos = [
    //PC//
    {id:'1', name: 'Red Dead Redemption 2', price: 11300, category:'PC', img: pcRdr2 ,stock: 15, description: 'Red Read Redemption 2 Versión PC (Steam Key)' },
    {id:'2', name: 'Dead Stranding', price: 2300, category: 'PC', img: pcDeadS, stock: 5, description: 'Dead Stranding Versión PC (Steam Key)'},
    {id:'3', name: 'Battlefield 2042', price: 6400, category: 'PC', img: pcBt, stock: 10, description: 'Battlefield 2042 Versión PC (Steam Key)'},
    {id:'4', name: 'Forza Horizon 5', price: 3300, category: 'PC', img: pcForza, stock: 18, description: 'Forza Horizon 5 Versión PC (Steam Key)'},
    {id:'5', name: 'STAR WARS Jedi: Survivor', precio: 9000, category: 'PC', img: pcJedi, stock: 8, description: 'STAR WARS Jedi: Survivor Versión PC (Steam Key)'},
    {id:'6', name: 'Tomb Raider', precio: 900, category: 'PC', img:pcTomb, stock: 16, description: 'Tomb Raider Versión PC (Steam Key)'},
    //PS//
    {id:'7', name: 'Dead Island 2', price: 26600, category:'PS', img: psDeadI ,stock: 8, description: 'Dead Island 2 Versión Play Station 5' },
    {id:'8', name: 'Fifa 23', price: 10640, category: 'PS', img: psFifa, stock: 5, description: 'Fifa 23 Edición Estándar Play Station 5'},
    {id:'9', name: 'God Of War Ragnarok', price: 26600, category: 'PS', img: psGow, stock: 6, description: 'God Of War Ragnarok Versión Play Station 5'},
    {id:'10', name: 'Hogwarts Legacy Deluxe', price: 30400, category: 'PS', img: psHp, stock: 4, description: 'Hogwarts Legacy: Edición Deluxe Play Station 5'},
    {id:'11', name: 'Marvel\'s Spider-Man', precio: 15200, category: 'PS', img: psSpider, stock: 12, description: 'Marvel\'s Spider-Man: Game of the Year Edition Play Station 4'},
    {id:'12', name: 'The Last Of Us Part II', precio: 15200, category: 'PS', img: psTlou, stock: 10, description: 'The Last Of US Part II Edición Play Station 4'},
    //XBOX//
    {id:'13', name: 'Call Of Duty: Modern Warfare II', precio: 7000, category: 'XBOX', img: xboxCod, stock: 12, description: 'Call Of Duty: Modern Warfare II Edición Xbox One'},
    {id:'14', name: 'Grand Theft Auto V', precio: 7000, category: 'XBOX', img: xboxGtav, stock: 12, description: 'Grand Theft Auto V Edición Xbox One'},
    {id:'15', name: 'Hogwarts Legacy', precio: 10000, category: 'XBOX', img: xboxHp, stock: 18, description: 'Hogwarts Legacy edición Xbox One - Xbox Series X'},
    {id:'16', name: 'STAR WARS Jedi Survivor', precio: 9000, category: 'XBOX', img: xboxJedi, stock: 6, description: 'STAR WARS Jedi: Survivor Edición Xbox Series X'},
    {id:'17', name: 'Redfall', precio: 9000, category: 'XBOX', img: xboxRed, stock: 16, description: 'Redfall Edición Xbox Series X'},
    {id:'18', name: 'Fifa 23 Xbox', precio: 7000, category: 'XBOX', img: xboxFifa, stock: 18, description: 'Fifa 23 Edición Xbox One'},
    //SWITCH//
    {id:'19', name: 'Animal Crossing: New Horizons', precio: 11500, category: 'SWITCH', img: swAc, stock: 8, description: 'Animal Crossing: New Horizon - Nintendo Switch'},
    {id:'20', name: 'Kirby\'s Dream Buffet', precio: 2900, category: 'SWITCH', img: swKirbi, stock: 6, description: 'Kirby\'s Dream Buffet - Nintendo Switch'},
    {id:'21', name: 'Mario Party Superstars', precio: 11600, category: 'SWITCH', img: swMario, stock: 18, description: 'Mario Party Superstars - Nintendo Switch'},
    {id:'22', name: 'Pokémon Scarlet', precio: 11600, category:'SWITCH', img: swPoke, stock: 12, description: 'Pokémon Scarlet - Nintendo Switch'},
    {id:'23', name: 'Xenoblade Chronicles 3', precio: 11600, category: 'SWITCH', img: swXeno, stock: 10, description: 'Xenoblade Chronicles 3 - Nintendo Switch'},
    {id:'24', name: 'The Legend of Zelda: Breath of the Wild', precio: 11600, category: 'SWITCH', img: swZelda, stock: 4, description: 'The Legend of Zelda: Breath of the Wild - Nintendo Switch'},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}

export const getProductoById = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productoId))
        }, 500)
    })
}

export const getProductoByCategory = (productoCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.category === productoCategory))
        }, 500)
    })
}