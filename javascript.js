document.getElementsByClassName("nomor-hp")[0].onkeyup = function() {kartu()};

    function kartu(){
        const data = document.getElementsByClassName("nomor-hp")[0].value
        let provider =
    {   "Telkomsel":[
            ['1', '1'],
            ['1', '2'],
            ['2', '2'],
            ['2', '1'],
            ['2', '3'],
            ['5', '2'],
            ['5', '3'],
            ['5', '1']
        ],
        'Indosat':[
            ['1', '4'],
            ['1', '5'],
            ['1', '6'],
            ['5', '5'],
            ['5', '6'],
            ['5', '7'],
            ['5', '8']
        ],
        "XL":[
            ['1', '7'],
            ['1', '8'],
            ['1', '9'],
            ['5', '9'],
            ['7', '8']
        ],
        "Three":[
            ['9', '5'],
            ['9', '6'],
            ['9', '7'],
            ['9', '8'],
            ['9', '9']
        ],
        "Axis":[
            ['3', '8'],
            ['3', '1'],
            ['3', '2'],
            ['3', '3']
        ],
        "Smartfren": [
            ['8', '1'],
            ['8', '2'],
            ['8', '3'],
            ['8', '4'],
            ['8', '5'],
            ['8', '6'],
            ['8', '7'],
            ['8', '8'],
            ['8', '9']
        ]
    }
        let output = ""
        if(data.length < 10){
            output = "Nomor Anda kurang"
        }
        if(data.length > 13){
            output = "Nomor kelebihan kak"
        }else if(data.length >= 10 && data.length <=13 && data[0] === '0' && data[1] === '8'){
            for(let key in provider){
                // console.log(provider[key])
                for(let i = 0 ; i <provider[key].length ; i++){
                    // console.log(provider[key][i])
                    let valueProviders = provider[key][i]
                    if(data[2] === valueProviders[0] && data[3] === valueProviders[1]){
                        output = key
                    }
                }
            }
        }
        if(!output){
            output = "Nomor yang anda masukan salah"
        }
        document.getElementsByClassName("provider")[0].innerHTML = output
    }
    
document.getElementsByClassName("jumlah")[0].onkeyup = function(){totalHarga()}
document.getElementById("nominal").addEventListener("change", totalHarga)
function totalHarga(){
    const jumlah = Number(document.getElementsByClassName("jumlah")[0].value)
    const nominal = Number(document.getElementById("nominal").value)
    let diskon = 0
    let output = 0
    let bayar = 0

    if(jumlah >= 10){
        diskon = jumlah * nominal * 0.1
    }
    output = jumlah * nominal
    bayar = output - diskon

    document.getElementsByClassName("hasil")[0].innerHTML = output
    document.getElementsByClassName("diskon")[0].innerHTML = diskon
    document.getElementsByClassName("bayar")[0].innerHTML = bayar
}
