import { useEffect, useState } from 'react'
import DogList from '../Components/DogList/DogList'
import Form from '../Components/Form/Form'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [dogsList, setItems] = useState([]);
 ;
  const [input, setNumberOfDogs]= useState(" ")
  //HNA NDIR STATE TJIBLI MN FORM INPUT 
  // You will need to put a state here to save all the dogs data into
  // And you will fetch the data with useEffect;
  useEffect(()=>{

    const url = 'https://dog.ceo/api/breeds/image/random/{input}';

    fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data && data.message) {
        setItems([data.message]); // HNA ERR KANT BLA ARRAY
      }
    })
    .catch(error => console.error('Error:', error));
}, [input]);
  console.log('dogsList:', dogsList); 
   return (
    
    <div className="card">
      {/* When the button is clicked in the form, it should fetch the information. 
          How can we do that by utilizing useState?
      */}
      <Form setNumberOfDogs={setNumberOfDogs}/> {/*HNA B3T STATE BAH NJIB MN FORM */}
      {/* This page should receive the images array */}
  
    
      <DogList dogsList={dogsList}/>
    </div>
  );
}

