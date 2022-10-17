import { Button } from "@mui/material";
import { Professor } from "../../@types/professor";
import { FormatadorService } from "../../services/FormatadorServices";
import { ItemLista, ListaStyled, Foto, Informacoes, Nome, Valor, Descricao, ListaVazia } from "./lista.Style";

// definindo tipagem, importando Professor de @types e definindo
// como a propriedade do item "professores"
interface ListaProps {
  professores: Professor[];
  onSelect: (professor: Professor) => void;
}

const Lista = (props: ListaProps) => {
  return (
    <div>
      {props.professores.length > 0 ? (
        <ListaStyled>
          {props.professores.map((professor) => (
            <ItemLista key={professor.id}>
              <Foto src={professor.foto}></Foto>
              <Informacoes>
                <Nome>{professor.nome}</Nome>
                <Valor>{FormatadorService.valorMonetario(professor.valor_hora)} por hora</Valor>
                <Descricao>{FormatadorService.limitarTexto(professor.descricao, 200)}</Descricao>
                <Button onClick={() => props.onSelect(professor)} sx={{ width: "70%" }}>
                  Marcar Aula com o {professor.nome}
                </Button>
              </Informacoes>
            </ItemLista>
          ))}
        </ListaStyled>
      ) : (
        <ListaVazia> Nenhum professor encontrado</ListaVazia>
      )}
    </div>
  );
};

export default Lista;
