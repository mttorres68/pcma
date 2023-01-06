export function gerarCodigo(){
    const caracters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let gerador = Math.random().toString(36).substring(7);
    return gerador;
}