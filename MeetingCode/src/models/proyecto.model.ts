export class Proyecto {
    public key?: String;                            //Para manejar el proyecto en firebase
    public nombre: String;
    public foto: String;
    public descripcion: String;
    public creador:String;                          // Nombre del creador
    public tipo:String;
    public creadorID:String;                        //User ID del creador del proyecto
    public aplicantes?: Array<String> = [];
    public colaboradores?: Array<String> = [];

    constructor() {
        this.key="";
    }
    
}