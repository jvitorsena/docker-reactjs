import Table from "../components/tarefas/table"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import { useState } from "react"
import { useForm } from 'react-hook-form'
import axios from "axios"
// import  host  from "./host"
import { host } from "../next.config"
// import host2 from "./host2"

export default function Home(props) {

  const { register, handleSubmit } = useForm();
  const [status, setStatus] = useState({
    type: '',
    mensagem: ''
  })

  const [visivel, setVisivel] = useState<'concluidos' | 'pendentes' | 'todasTarefas'>('pendentes')

  const [atr, setAtr] = useState('')

  const arrowFunction = e => {
    e.preventDefault()
    console.log(atr)
  }

  // console.log(host2)

  const handleSignIn = async (data) => {

    const data1 = {...data}


    const headers = {'headers': {'Content-Type': 'application/json'}}
    const tarefas = await axios.create({baseURL: host }) 
    const res = await tarefas.post("/tarefas", data1 , headers)
    .then((response) => {
      setStatus({
        type: 'success',
        mensagem: 'response.data.mensagem'
      })
    }).catch((err) => {
      if(err.response){
        setStatus({
          type: 'error',
          mensagem: err.response.data.mensagem
        });
      }else{
        setStatus({
          type: 'error',
          mensagem: "Erro: Tente mais tarde!"
        });
      }
    })
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Lista de tarefas</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => setVisivel("pendentes")}>Pendentes</Nav.Link>
          <Nav.Link onClick={() => setVisivel("concluidos")}>Concluidos</Nav.Link>
          <Nav.Link onClick={() => setVisivel("todasTarefas")}>Todas tarefas</Nav.Link>
          {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
        </Container>
      </Navbar>

      {visivel == "pendentes" ? <Table data={props.dataPendentes} taskType="pendentes"/> : null }
      {visivel == "concluidos" ? <Table data={props.dataConcluidos} taskType="concluidos" /> : null}
      {visivel == "todasTarefas" ? <Table data={props.dataTodasTarefas} taskType="todasTarefas"/> : null}

      {status.type == 'success' ? <span>Parabens deu certo</span> : null}
      <form onSubmit={handleSubmit(handleSignIn)}>
        <label>Email:</label>
        <input
          className="border-2"
          {...register('descricao')}
          name="descricao"
          type="text"
        />
        <br/>
        <button type="submit">Save</button>
      </form>

    </>
  )
}

export async function getServerSideProps() {
  const dataConcluidos = await (await axios.get(host + '/tarefas/concluidos')).data
  const dataPendentes = await (await axios.get(host + '/tarefas/pendentes')).data
  const dataTodasTarefas = await (await axios.get(host + '/tarefas')).data
  console.log(dataPendentes)

  /* M??todo antigo */
  // const todasTarefas = await fetch('http://localhost:8000/tarefas')
  // const dataTodasTarefas = await todasTarefas.json()

  // console.log(data)

  return { props: {dataConcluidos, dataPendentes, dataTodasTarefas}}
}