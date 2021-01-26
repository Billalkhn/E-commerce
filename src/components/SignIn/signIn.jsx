import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Title = styled.h2``;
const Text = styled.span``;

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({[name]: value})
  };

  render() {
    return (
      <Wrapper>
        <Title>I already have an account </Title>
        <Text>Sign in with your email and password</Text>

        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <label>Email</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label>Password</label>

          <input type="submit" value="Submit Form" />
        </form>
      </Wrapper>
    );
  }
}

export default SignIn;
