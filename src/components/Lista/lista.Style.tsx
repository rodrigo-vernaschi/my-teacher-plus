import { styled } from "@mui/system";

export const ListaStyled = styled('ul') `
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    /* padronizando o espaçamento em base de 8, o "2" significa que será 8*2 = 16px */
    padding: ${({ theme }) => theme.spacing(10, 2, 10, 2)};

    display: grid;
    /* pega o total da largura e divide em duas frações (fr) */
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing(9)};

    /* definindo comportamento em telas menores usando o "breakpoints" */
    ${({ theme }) => theme.breakpoints.down('md')} {
        grid-template-columns: 1fr;
        gap: ${({ theme }) => theme.spacing(8)}
    }
`

export const ListaVazia = styled('h2')`
    text-align: center;
    padding: ${({ theme }) => theme.spacing(20, 0)}
`

export const ItemLista = styled('li') `
    list-style: none;
`

export const Foto = styled('img') `
    width: 100%;
`

export const Informacoes = styled('div') `
    
`

export const Nome = styled('h3') `
    margin: ${({theme}) => theme.spacing(2, 0, 0, 0)};
`

export const Valor = styled('p') `
    margin: 0;
    font-weight: bold;
    color: ${({theme}) => theme.palette.primary.main};
`

export const Descricao = styled('p') `
    word-break: break-word;
`