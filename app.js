const predictBtn = document.querySelector('#btnPredict');
const resultContainer = document.querySelector('#resultContainer');
const clearButton = document.getElementById('clear-button');

cargarEventListeners();
function cargarEventListeners(){
    predictBtn.addEventListener('onclick',predict);
}

function predict(){
    try{
        let persons = document.querySelector('input[name=persons]:checked').value;
        let doors = document.querySelector('input[name=persons]:checked').value;

        let safety = document.querySelector('.form .safety select').value;
        let buying = document.querySelector('.form .buying select').value;
        let valuePredicted = document.querySelector('#result')
    
        try{
            persons = parseInt(persons)
            doors = parseInt(doors)
    
            if (isNaN(persons) || isNaN(doors)) throw "Se esperaba dato numérico";
            if (safety=="none" || doors=="none" || persons == null || doors == null ) throw "Datos incompletos";
        }catch(e){
            alert(e)
        }
    
        console.log(safety,persons,buying,doors);
    
        result = calc(safety,persons,buying,doors);
    
        console.log(result);
        valuePredicted.textContent = result;

    }catch(e){
        alert("Datos incompletos")
    }
}

function calc(safety,persons,buying,doors){
    let result='';
    if(safety=='low'){
        result='NO';
    }else if(safety==='med'){
        if(persons<=3){
            result='NO';
        }else if(persons>3){
            if(buying==='vhigh'){
                result='NO';
            }else if(buying==='high'){
                result='NO';
            }else if(buying==='med'){
                if(doors<=2.5){
                    if(persons<=4.5){
                        result='yes';
                    }else if(persons>4.5){
                        result='NO';
                    }
                }else if(doors>2.5){
                    result='yes';
                }
            }else if(buying==='low'){
                result='yes';
            }
        }
    }else if(safety==='high'){
        if(persons<=3){
            result='NO';
        }else if(persons>3){
            if(buying==='vhigh'){
                result='NO';
            }else if(buying==='high'){
                result='yes';
            }else if(buying==='med'){
                result='yes';
            }else if(buying==='low'){
                if(doors<=2.5){
                    if(persons<=4.5){
                        result='yes';
                    }else if(persons>4.5){
                        result='NO';
                    }
                }else if(doors>2.5){
                   if(doors<=3.5){
                        if(persons<=4.5){
                            result='yes'
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
