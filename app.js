const predictBtn = document.querySelector('#btnPredict');
const resultContainer = document.querySelector('#resultContainer');

cargarEventListeners();
function cargarEventListeners(){
    predictBtn.addEventListener('onclick',predict);
}

function predict(){
    let safety = document.querySelector('.form .safety select').value;
    let persons = document.querySelector('.form .persons input').value;
    let buying = document.querySelector('.form .buying select').value;
    let doors = document.querySelector('.form .doors input').value;
    let valuePredicted = document.querySelector('#result')

    try{
        persons = parseInt(persons)
        doors = parseInt(doors)

        if (isNaN(persons) || isNaN(doors)) throw "Se esperaba dato numérico";
        if (safety=="none" || doors=="none" ) throw "Datos incompletos";
    }catch(e){
        alert(e)
    }

    console.log(safety,persons,buying,doors);

    result = calc(safety,persons,buying,doors);

    console.log(result);
    valuePredicted.textContent = result;
}

function calc(safety,persons,buying,doors){
    let result='';
    if(safety=='low'){
        result='unacc';
    }else if(safety==='med'){
        if(persons<=3){
            result='unacc';
        }else if(persons>3){
            if(buying==='vhigh'){
                result='unacc';
            }else if(buying==='high'){
                result='unacc';
            }else if(buying==='med'){
                if(doors<=2.5){
                    if(persons<=4.5){
                        result='acc';
                    }else if(persons>4.5){
                        result='unacc';
                    }
                }else if(doors>2.5){
                    result='acc';
                }
            }else if(buying==='low'){
                result='acc';
            }
        }
    }else if(safety==='high'){
        if(persons<=3){
            result='unacc';
        }else if(persons>3){
            if(buying==='vhigh'){
                result='unacc';
            }else if(buying==='high'){
                result='acc';
            }else if(buying==='med'){
                result='acc';
            }else if(buying==='low'){
                if(doors<=2.5){
                    if(persons<=4.5){
                        result='acc';
                    }else if(persons>4.5){
                        result='unacc';
                    }
                }else if(doors>2.5){
                   if(doors<=3.5){
                        if(persons<=4.5){
                            result='acc'
                        }else if(persons>4.5){
                            result='vgood';
                        }
                   }else if(doors>3.5){
                        result='vgood';
                   }
                }
            }
        }
    }
    return result;
}
