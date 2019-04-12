import React, { Component } from 'react';
import Global from './styles';
import api from './services/api';
import Form from './components/Form';
import Card from './components/Card';
import Repor from './components/Repor';

class App extends Component {
  state = {
    user: '',
    repos: [],
    userResult: {},
    error: '',
    loading: false
  }

  handleChange = (e) => {
     this.setState({ user: e.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { user } = this.state;
    try {
      this.setState({ loading: true });
      const res = await api.get(`/users/${user}`);
      const { data:repos } = await api.get(`/users/${user}/repos`);

      // console.log(repos)
      // console.log(res.data);
      this.setState({ userResult: res.data, repos, error: ''  });
    } catch (err) {
      this.setState({ error : 'Usuário não encontrado!', loading: false });
    }
  }

  render() {
    const { user, error, userResult, repos, loading } = this.state;
    return (
      <div className="App">
        <Form user={user} 
        Submit={this.handleSubmit} 
        ChangeUser={this.handleChange} 
        error={error} 
        />
        <div id="card">
            { loading ? <Card result={userResult} /> : ''}
        </div>
        <Global />
        { error ? '' : <Repor repos={repos} /> }
      </div>
    );
  }
}

export default App;
