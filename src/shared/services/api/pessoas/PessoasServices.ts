import { Environments } from "../../../environments";
import { Api } from "../axios-config";

export interface IListagemPessoa {
    id: number;
    nomeCompleto: string;
    email: string;
    cidadeId: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface IDetalhePessoa {
    id: number;
    nomeCompleto: string;
    email: string;
    cidadeId: number;
}

type TPessoaComTotalCount = {
    data : IListagemPessoa[];
    totalCount : number;
}


const getAll = async (page = 1, filter = '' ): Promise<TPessoaComTotalCount | Error> => {
    try {
        const urlRelative = `/pessoas?_page=${page}&_limit=${Environments.LIMITE_LINE}&nomeCompleto_like=${filter}`;
        const { data, headers } = await Api.get(urlRelative);

        if(data){
            return {
                data,
                totalCount: Number(headers['x-total-count'] || Environments.LIMITE_LINE),
            };
        }

        return new Error("Erro ao listar os registros");
    } catch (error) {
        console.error(error);
        return new Error((error as {message: string}).message || "Erro ao listar os registros");
    }
}

const getById = async (id: number): Promise<IDetalhePessoa | Error> => {
    try {
        const { data } = await Api.get(`/pessoas/${id}`);
        
        if(data) return data
            return new Error("Erro ao listar o registro.");

    } catch (error) {
        console.log(error);
        return new Error((error as {message : string}).message || "Erro de listar o registro");
    }
}

const create  = async (dados: Omit<IDetalhePessoa, 'id'>): Promise<number | Error> => {
    try {
        const {data} = await Api.post<IDetalhePessoa>("/pessoas", dados);
        if(data) return data.id;

        return new Error("Erro de realizar cadastro.");

    } catch (error) {
        console.error(error);
        return new Error((error as {message : string}).message || "Erro de realizar cadastro.");
    }
}

const updateById = async (id: number, dados: IDetalhePessoa): Promise<void | Error> => {
    try {
        await Api.put(`/pessoas/${id}`, dados);

        return new Error("Erro de realizar atualização do registro.");
  
    } catch (error) {
        console.error("Erro de realizar atualização dos dados");
        return new Error((error as {message: string}).message || "Erro de realizar atualização do registro");
    }

}

const deleteById = async (id: number): Promise<IDetalhePessoa | Error> => {

    try {
        const {data} = await Api.delete(`/pessoas/${id}`);
        if(data) return data

        return new Error("Erro de realizar remoção do registro.");

    } catch (error) {
        console.error(error)
        return new Error((error as {message: string}).message || "Erro de realizar remoção do registro."); 
    }

}


export const PessoasService = {

    getAll,
    getById,
    create,
    updateById,
    deleteById,
};