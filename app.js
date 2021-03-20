//buat class textedit
class TextEdit{
    
    constructor(){
        this.state = {
            text : 'ubah lagi nih'
        }
    }


    changeText(){

        //dapatkan elemet text
        let mainText = document.getElementById('main_text')

        //inject dengan data state
        mainText.innerHTML = this.state.text

    }

}

const mainText = new TextEdit()
mainText.changeText()
