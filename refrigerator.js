// caracteristicas de refrigeradora
/* iniciamos con un array vacio []
acciones show onfo, capaciti, xon addMeal("meat"), meal. push("meat")
al final mostramos un show meal
*/
/////////CARACTERISTICAS//////////////
class Refrigeradora {
    constructora (vegetables, meal){
        this.meal= meal; 
        this.vegetables = vegetables;
        //this.fruits = fruits;
    }
    addMeal(meal){
        this.meal.push(meal);
        alert(this.meal);
    }
    addVegetable (vegetables){
        this.vegetables.push(vegetables);
        alert(this.vegetables);
    }
    addFruit(fruits){
        this.fruits.push(fruits);
        alert(this.fruits);
    }
    }

    'use strict';

    class AlimentoRefrigerador {
        constructor(nombre, tipo, fechaCaducidad) {
            this.nombre = nombre;
            this.tipo = tipo;
            this.fechaCaducidad = fechaCaducidad;
        }

        obtenerInformacion() {
            return `Nombre: ${this.nombre}, Tipo: ${this.tipo}, Caducidad: ${this.fechaCaducidad}`;
        }
    }

    let alimentosEnRefrigerador = [
        new AlimentoRefrigerador('Manzana', 'Fruta', '2024-02-15'),
        new AlimentoRefrigerador('Leche', 'Lácteo', '2024-02-10')
    ];


    let informacionAlimentos = [];


    for (let alimento of alimentosEnRefrigerador) {
        informacionAlimentos.push(alimento.obtenerInformacion());
    }
