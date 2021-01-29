function HeadingComponent(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  const element = <HeadingComponent name="Yer" />;

  ReactDOM.render(
      element, document.getElementById('root')
    );