const predictBtn = document.querySelector('#btnPredict');

cargarEventListeners();
function cargarEventListeners(){
    predictBtn.addEventListener('onclick',predict);
}



function predict(){
    const safety = document.querySelector('.form .safety select').value;
    const persons = document.querySelector('.form .persons input').value;
    const buying = document.querySelector('.form .buying select').value;
    const doors = document.querySelector('.form .doors input').value;
    const valuePredicted = document.querySelector('#result')

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