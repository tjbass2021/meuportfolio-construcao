let valor = 0

function submenu(){
    
    if(valor == 0){
        document.getElementById('oculto').style.display = 'block';
        document.getElementById('oculto').style.position = 'fixed';
        document.getElementById('oculto').style.padding = '10px';
        document.getElementById('oculto').style.borderRadius = '10px';
        document.getElementById('oculto').style.top = '80px';
        document.getElementById('oculto').style.backgroundColor = 'black';
        valor = 1;
    }else if(valor == 1){
        document.getElementById('oculto').style.display = 'none';
        valor = 0;
    }
}

function ocult(){

    if(valor == 1){
        document.getElementById('oculto').style.display = 'none';

        valor = 0;
    }
}