import produtosSchema from '../contracts/add-produtos.contract';
import * as GetProdutos from '../requests/getProdutos.requests';

describe('Get produtos', () =>  {
    it('Listar Usuarios COM sucesso', () => {
         GetProdutos.listar().should((response) => {
            expect (response.status).to.eq(200);
            expect (response.body).to.be.not.null;
         })
    });  
    it('validar o contrato da lista de produtos', () => {
        GetProdutos.listar().should((response) => {
            return produtosSchema.validateAsync(response.body) 
        })
    });
    
});