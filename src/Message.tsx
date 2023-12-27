function Message() {
  const name = "Ali Khalif";
  if (name) return <h1 className="lol">Hello {name}</h1>;
  return <h1 className="lol">Hello World</h1>;
}

export default Message;
