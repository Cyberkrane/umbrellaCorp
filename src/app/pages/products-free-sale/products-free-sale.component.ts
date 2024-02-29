import { Component, OnInit } from '@angular/core';
import { ProductFS } from 'src/app/interfaces/product-fs.interface';

@Component({
  selector: 'app-products-free-sale',
  templateUrl: './products-free-sale.component.html',
  styleUrls: ['./products-free-sale.component.scss']
})
export class ProductsFreeSaleComponent implements OnInit {

  title = 'Products Free Sale';

  products: ProductFS[] = [
    {
      id: 1,
      name: 'benadryl',
      posology: 'comprimidos',
      aplications: 'secreción nasal, lagrimeos, estornudos, picazon de ojos y garganta, alergias de la piel.',
      sideEffects: 'En casos extremos Zombismo, solo 2% de los usuarios a sufrido ese efecto.',
      activeIngredients: 'loratadina',
      price: 3500,
      image: '../../../assets/medicamentos/001.png'
    },
    {
        id: 2,
        name: 'loperamida',
        posology: 'tabletas',
        aplications: 'sin info',
        sideEffects: 'sin info',
        activeIngredients: 'clorhidrato de loperamida',
        price: 2485,
        image: '../../../assets/medicamentos/002.jpg'},
    {
        id: 3,
        name: 'allegra',
        posology: 'comprimidos recubiertos',
        aplications: 'sin info',
        sideEffects: 'sin info',
        activeIngredients: 'fexofenadina clorhidrato',
        price: 3750,
        image: '../../../assets/medicamentos/003.webp'
    },
    {
        id: 4,
        name: 'levomine',
        posology: 'comprimidos recubiertos',
        aplications: 'sin info',
        sideEffects: 'sin info',
        activeIngredients: 'diclorhidrato de levocetirizina',
        price: 5200,
        image: '../../../assets/medicamentos/004.jpg'
    },
    {
        id: 5,
        name: 'naprux 750 ap',
        posology: 'comprimidos de accion prolongada',
        aplications: 'andrómaco',
        sideEffects: 'sin info',
        activeIngredients: 'naproxeno',
        price: 4950,
        image: '../../../assets/medicamentos/005.jpg'
    },
    {
        id: 6,
        name: 'mebutar 200',
        posology: 'comprimidos',
        aplications: 'andrómaca',
        sideEffects: 'sin info',
        activeIngredients: 'mebendazol',
        price: 5320,
        image: '../../../assets/medicamentos/006.jpg'
    },
    {
        id: 7,
        name: 'biletan enzimatico',
        posology: 'comprimidos recubiertos',
        aplications: 'sin info',
        sideEffects: 'sin info',
        activeIngredients: 'acido tioctico, pancreatina, simeticona, celulasa',
        price: 4679,
        image: '../../../assets/medicamentos/007.png'
    },
    {
        id: 8,
        name: 'geniol',
        posology: 'solucion oral para gotas',
        aplications: 'analgesico, antipiretico',
        sideEffects: 'solo en 1.98% de los casos hubo combustion expontanea de la piel.', 
        activeIngredients: 'paracetamol 100mg',
        price: 1500,
        image: '../../../assets/medicamentos/008.jpg'
    },
    {
        id: 9,
        name: 'evacare gyno',
        posology: 'capsula dura',
        aplications: 'antimicotico, alivia ardor, picazon, irritacion y dolor',
        sideEffects: 'sin info',
        activeIngredients: 'fluconazol 150mg',
        price: 5999,
        image: '../../../assets/medicamentos/009.png'
    },
    {
        id: 10,
        name: 'ibu-600',
        posology: 'comprimidos recubiertos',
        aplications: '',
        sideEffects: '',
        activeIngredients: 'ibuprofeno 600mg',
        price: 1500,
        image: '../../../assets/medicamentos/010.webp'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
