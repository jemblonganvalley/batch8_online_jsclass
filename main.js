// javascript class
class Mobil {

    //constructor
    constructor(merek){

        this.state = {
            merek : merek,
            roda : 4,
            bahan_bakar : "bensin",
            tempat_duduk : 5,
            lebar : "2 meter",
            panjang : "4 meter",
            power_stering : true
        }
    }

    //method
    start(){
        console.log(`mesin ${this.state.merek} menyala..`)
    }

    stop(){
        console.log(`mesin ${this.state.merek} berhenti..`)
    }

    info(){
        console.log(this.state)
    }

    setTempatDuduk(num){
        this.state.tempat_duduk = num
        console.log(`tempat duduk xenia adalah ${this.state.tempat_duduk}`)
    }

    setBahanBakar(fuel){
        this.state.bahan_bakar = fuel
        console.log(`Bahan bakar xenia adalah ${this.state.bahan_bakar}`)
        
    }

}

//menggunakan class yang sudah kita buat
let xenia = new Mobil("xenia")

// xenia.start()
// xenia.stop()
// xenia.info()
// xenia.setTempatDuduk(7)
xenia.setBahanBakar('Pertalite')
xenia.info()
