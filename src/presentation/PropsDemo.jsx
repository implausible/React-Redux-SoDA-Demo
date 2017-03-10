import React from 'React';

const Header = ({ children }) => <h1>{children}</h1>;

const Content = ({ text }) => <p>{text}</p>;

const PropsDemo = () => {
  const text = 'Components can be called with custom properties';

  return (
    <div className='props-demo'>
      <Header>This is the children property</Header>
      <Content text={text} />
    </div>
  );
};

export default PropsDemo;
