class Venda{
    private _codigo: number;
    private _data: number;
    private _cliente: Cliente;
    private _produtos: Produtos[];
    private cont : number;

    get codigo(): number{
        return this._codigo;
    }
    set codigo(codigo: number){
        this._codigo = codigo;
    }
    get data(): number{
        return this._data;
    }
    set data(data: number){
        this._data = data;
    }
    get cliente(): Cliente{
        return this._cliente;
    }
    set cliente(cliente: Cliente){
        this._cliente = cliente;
    }
    get produtos(): Produtos[]{
        return this._produtos;
    }
    set produtos(produtos: Produtos[]){
        this._produtos = produtos;
    }

    calculoTotal(): number{
        for(let i = 0; i < this._produtos.length; i++){ 
            this.cont += i;
        }         
        return this.cont; 
    }
}