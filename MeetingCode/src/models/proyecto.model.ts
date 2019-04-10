export class Proyecto {
    public key?: String; //Esto maneja el id de contacto al usar firebase
    public nombre: String;
    public foto: String;
    public descripcion: String;
    public creador:String;
    public tipo:String;
    public creadorID:String;
    public aplicantes?: Array<String> = [];
    public colaboradores?: Array<String> = [];

    constructor() {
        this.key="";
    }
    
}