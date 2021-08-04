import './App.css';
import { Router,navigate } from '@reach/router';
import React ,{useState}from 'react';
import Update from './views/Update';
import AuthorForm from './components/AuthorForm';
import AuthorsList from './components/AuthorsList';
import axios from 'axios';

export const MyContext = React.createContext()
function App() {
  const [authors, setAuthors] = useState([]);
  const [errors, setErrors] = useState([]); 
  const createAuthor = author => {
    axios.post('http://localhost:5000/api/authors', author)
        .then(res => {
            setAuthors([...authors, res.data]);
            navigate("/")
            setErrors(null);
        })
        .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
  }
const removeFromDom = authorId => {
  setAuthors(authors.filter(author => author._id !== authorId));
}
  return (
    <div className="App">
      <MyContext.Provider value = {{ authors, setAuthors }}>
      <Router>
        <AuthorsList path="/"/>
        <AuthorForm onSubmitProp={createAuthor}  errors={errors} setErrors={setErrors} removeFromDom={removeFromDom} path="/new" />
        <Update setErrors={setErrors} errors={errors} path="/edit/:id"/>
      </Router>
      </MyContext.Provider>

    </div>
  );
}

export default App;
