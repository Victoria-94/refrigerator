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

    let llenado = Refrigeradora("eggs","carrot");
    llenado.addMeal("bread");
    llenado.addVegetable("peper");

    alert(llenado);
    alert(Refrigeradora);
///////////////////////////////////////////////////////////

    class AlimentoRefrigerador {
        constructor(nombre) {
            this.nombre = nombre;
            
        }

        obtenerInformacion() {
            return `Nombre: ${this.nombre}}`;
        }
    }

    let mealRefrigerador = [
        new mealRefrigerador('Manzana'),
        new mealRefrigerador('Leche')
    ];


    let informacionAlimentos = [];


    for (let alimento of mealRefrigerador) {
        informacionAlimentos.push(alimento.obtenerInformacion());
    }

    informacionAlimentos.AlimentoRefrigerador();
    
