//Binary To decimal conversion

let binary = "";


function convertBinaryToDecimal(binary) {

    let toplam = 0;
    let ust = 0;

    for (let i = binary.length - 1; i >= 0; i--) {

        toplam +=Number(binary.charAt(i))*Math.pow(2,ust);
        ust++;

    }

    console.log("Sonuc :"+toplam);
}
convertBinaryToDecimal("111");