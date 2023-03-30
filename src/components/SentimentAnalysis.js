import {React, useState} from 'react'

const SentimentAnalysis = () => {

    const [inputText, setInputText] = useState('');
    const [message, setMessage] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleInputChange = (event) => {
      setInputText(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setMessage(inputText);
      setFormSubmitted(true);

    };
  
    return (
      <div className="container mt-5">
        <div className="row p-4 shadow p-5">
          <div className="col-sm-12 col-md-6 p-5">
            <h2 className='mb-4'>Enter Your Text</h2>
            <form className='form-group' onSubmit={handleSubmit}>
              <textarea className='form-control mb-5' value={inputText} onChange={handleInputChange} />
              <button className='btn btn-primary' type="submit">Submit</button>
            </form>
          </div>
          <div className="col-sm-12 col-md-6 p-5">
            <h2>Sentiment</h2>
            {formSubmitted && <h1>{message}</h1>}
          </div>
        </div>
      </div>
    )
}

export default SentimentAnalysis
