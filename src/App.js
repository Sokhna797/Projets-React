import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function App() {
  return (
    <div className="App">
     <div class="container mb-5 mt-5">
    <div class="row">
        <div class="col">
            <div class="card mt-5 mb-5">
                <div class="card-header">
                    Nouveau Contact
                </div>
                <div class="card-body">
                <form >

                        <div class="form-group">
                          <label htmlfor="nom">Nom</label>
                          <input type="text" name="nom" required id="" class="form-control" placeholder="" aria-describedby="helpId"/>
                          <small id="helpId" class="text-muted">* Champ obligatoire</small>
                        </div>

                        <div class="form-group">
                            <label htmlfor="prenom">Prénom</label>
                            <input type="text" name="prenom" required id="" class="form-control" placeholder="" aria-describedby="helpId"/>
                            <small id="helpId" class="text-muted">* Champ obligatoire</small>
                          </div>

                          <div class="form-group">
                            <label htmlfor="numero">Numéro Téléphone</label>
                            <input type="number" name="numero" required id="" class="form-control" placeholder="" aria-describedby="helpId"/>
                            <small id="helpId" class="text-muted">* Champ obligatoire</small>
                          </div>

                          <div class="form-group">
                            <label htmlfor="adresse">Adresse mail</label>
                            <input type="email" name="email" required id="" class="form-control" placeholder="" aria-describedby="helpId"/>
                            <small id="helpId" class="text-muted">* Champ obligatoire</small>
                          </div>

                          <div class="form-check form-check-inline">
                              <label class="form-check-label">
                                  <input class="form-check-input" type="radio" name="genre" id="" value="masculin"/> Masculin
                              </label>
                          </div>

                          <div class="form-check form-check-inline mb-2">
                              <label class="form-check-label">
                                  <input class="form-check-input" type="radio" name="genre" id="" value="feminin"/> Féminin
                              </label>
                          </div>
                          <br/>
                          <button type="submit" class="btn btn-primary btn-block">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  );
}

export default App;
