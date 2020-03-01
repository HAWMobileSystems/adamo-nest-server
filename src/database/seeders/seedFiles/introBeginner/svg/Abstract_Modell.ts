export class Abstract_Modell{

    private svg_de
    private svg_en
    private xml_de
    private xml_en

    constructor(xml_de_input, xml_en_input,svg_de_input, svg_en_input){
        this.svg_de = svg_de_input
        this.svg_en = svg_en_input
        this.xml_de = xml_de_input
        this.xml_en = xml_en_input
    }

    getSVG_EN(){
        return this.svg_en
       }
    getSVG_DE(){
           return this.svg_de
       }
    getXML_EN(){
           return this.xml_de
       }
    getXML_DE(){
           return this.xml_en
       }
}