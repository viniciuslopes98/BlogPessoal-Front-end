import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import "./CadastroUsuario.css";
import { Link, useNavigate } from "react-router-dom";
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";

function CadastroUsuario() {
  let navigate = useNavigate();

  const [confirmarSenha, setConfirmarSenha] = useState<String>("");

  function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(event.target.value);
  }

  const [user, setUser] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  const [userResult, setUserResult] = useState<User>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  function updatedModel(event: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  async function cadastro(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (confirmarSenha === user.senha && user.senha.length >= 8) {
      try {
        await cadastroUsuario("usuarios/cadastrar", user, setUserResult);
        alert("Usuário criado com sucesso. Efetue seu login, por favor.");
      } catch (error) {
        alert("Falha ao cadastrar o usuário. Por favor, confira os campos");
      }
    } else {
      alert(
        "Senhas divergentes, ou menores que 8 caracteres. Por favor, verifique os campos."
      );
    }
  }

  useEffect(() => {
    if (userResult.id !== 0) {
      navigate("/login");
    }
  }, [userResult]);

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6} className="imagem2"></Grid>

      <Grid item xs={6} alignItems="center">
        <Box paddingX={10}>
          <form>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textos2"
            >
              Cadastrar
            </Typography>
            <TextField
              value={user.nome}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updatedModel(event)
              }
              id="nome"
              label="nome"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
            >
              {" "}
            </TextField>
            <TextField
              value={user.usuario}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updatedModel(event)
              }
              id="usuario"
              label="usuario"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            >
              {" "}
            </TextField>
            <TextField
              value={user.senha}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updatedModel(event)
              }
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            >
              {" "}
            </TextField>
            <TextField
              value={confirmarSenha}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(event)
              }
              id="confirmarSenha"
              label="confirmarSenha"
              variant="outlined"
              name="confirmarSenha"
              margin="normal"
              type="password"
              fullWidth
            >
              {" "}
            </TextField>
            <Box marginTop={2} textAlign="center">
              <Link to="/login" className="text-decorator-none">
                <Button
                  variant="contained"
                  color="secondary"
                  className="btnCancelar"
                >
                  Cancelar
                </Button>
              </Link>
              <Button type="submit" variant="contained" color="primary">
                Cadastrar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastroUsuario;
