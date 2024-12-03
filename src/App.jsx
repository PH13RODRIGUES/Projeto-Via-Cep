import { useState } from "react";

function App() {
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [uf, setUf] = useState("");



  const buscarCep = async () => {
    const url = `https://viacep.com.br/ws/${cep}/json/`

    const response = await fetch(url);
    const endereco = await response.json();
    console.log(endereco);

    setBairro(endereco.bairro)
    setLogradouro(endereco.Logradouro)
    setLocalidade(endereco.localidade)
    setUf(endereco.uf)


  }



  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <img src="./map.jpg" alt="" style={{ width: "100%" }} />
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="CEP" className="form-label">
                    CEP
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="CEP"
                    placeholder="EX: 12345678"
                    onBlur={buscarCep}



                    value={cep}
                    onChange={(element) => setCep(element.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="LOGRADOURO" className="form-label">
                    LOGRADOURO
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="LOGRADOURO"
                    placeholder="EX: Rua, Travessa y, Avenida"
                    value={logradouro}
                    onChange={(element) => setLogradouro(element.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="numero" className="form-label">
                    NÚMERO
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="numero"
                    placeholder="EX: nº 123"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="bairro" className="form-label">
                    BAIRRO
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="bairro"
                    placeholder="EX: Passare"
        
                    value={bairro}
                    onChange={(element) => setBairro(element.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cidade" className="form-label">
                    CIDADE
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cidade"
                    placeholder="EX: Fortaleza"

                    value={localidade}
                    onChange={(element) => setLocalidade(element.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="uf" className="form-label">
                    UF
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="uf"
                    placeholder="EX: CE"

                    value={uf}
                    onChange={(element) => setUf(element.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 