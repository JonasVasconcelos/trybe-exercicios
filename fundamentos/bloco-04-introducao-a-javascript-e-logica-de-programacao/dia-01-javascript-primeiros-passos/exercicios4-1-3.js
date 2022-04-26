let peca = 'rauahsdinha';
peca = peca.toLowerCase()

switch(peca){
    case 'peao':
        console.log("Anda um passo para frente.");
        break;
    case 'torre':
        console.log("Anda quantos passos quiser em linha reta.");
        break;
    case 'bispo':
        console.log("Anda quantos passos quiser em diagonal.");
        break;
    case 'cavalo':
        console.log("Anda em L e pode saltar outras peças.")
        break;
    case 'rainha':
        console.log("Anda como quiser, menos em L e não pode saltar.")
        break;
    case 'rei':
        console.log("Anda um passo em qualquer direção.")
        break;
    default:
        console.log('Erro.')
    }