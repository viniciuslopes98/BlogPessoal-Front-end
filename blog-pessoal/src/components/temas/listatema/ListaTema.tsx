import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";

import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Tema from "../../../models/Tema";
import { busca } from "../../../services/Service";

function ListaTema() {
    let navigate = useNavigate();
    const [temas, setTemas] = useState<Tema[]>([]);

    const [token, setToken] = useLocalStorage('token');

    useEffect(()=>{
        if(token === ''){
            alert ('Você precisa estar logado para acessar esta página!')
            navigate('/login')
        }
}, [token])

async function getTemas() {
    await busca('/temas', setTemas,{
        headers:{'Authorization': token}
    })
}

    useEffect(()=>{
        getTemas()
    }, [temas.length])

  return (
    <>
      {temas.map(tema => (
        <Box m={2} key={tema.id}>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
              {tema.descricao}
            </Typography>
          </CardContent>

          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5}>
              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size="small" color="primary">
                    Atualizar
                  </Button>
                </Box>
              </Link>

              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size="small" color="secondary">
                    Deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      }
    </>
  )
}
export default ListaTema;
