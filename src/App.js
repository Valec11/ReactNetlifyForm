


function App() {

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '40px'
  }


  return (
    <div className="App">

      <form style={formStyle} name="contact" action="/contact" method="POST" data-netlify="true" >


        <input type="hidden" name="form-name" value="contact" />
        <input required type="text" name="name" placeholder="Enter Name" />
        <input required type="email" name="email" placeholder="email" />
        <textarea required id="message" name="message" placeholder="message" />
        <button type="submit" id="submit"  >Submit</button>
      </form>


    </div>
  );
}

export default App;
