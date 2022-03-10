import logo from './logo.svg';
// import './App.css';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_DATA} from "./actions/action"
import "./index.css"





function App() {

  const API ="https://reqres.in/api/users?page=2";
  const [idata, setfn] = useState();
  const dispatch = useDispatch();


  const setApiData =(payload)=>{

    

    dispatch(ADD_DATA(payload));
    // displayAvatars();   /// this fucntion to render is only called after data is updated;

    
    
    // console.log(payload);

  }

  // The updated name and count state is rendered with the help of useSelector()
  const appData = useSelector((reduxStore) => {
    return reduxStore.data;
  });


  
  useEffect(() => {
    fetch(API).then((response) => {return response.json();} ).then((data) => {
       setApiData(data.data);
      // console.log(data.data)});
  });
},[]);



useEffect(()=>{ console.log(appData);displayAvatars()},[appData]);           // display function to render is called only when updated 
// const n= useSelector()
// Need to render the 6 objects on the page


// console.log(idata);
const displayAvatars=  ()=>{

 
  // console.log(appData);

  appData.map((item)=>{
    console.log(item.email);
    console.log(item.first_name)
    console.log(item.last_name)
    console.log(item.avatar)


    return (
      <div>
        <div className='img-container'> <img src={item.avatar}></img></div>
        <div className='name'>hello {item.first_name} {item.last_name}</div>
        <div className='mail'>{item.email}</div>
      </div>
    )
  })
}

  return (
    <div className="App">

      {/* {displayAvatars()} */}
    {appData.map((item)=>{
    

    return (
      <div>
        <div className='img-container'> <img src={item.avatar}></img></div>
        <div className='name'>hello {item.first_name} {item.last_name}</div>
        <div className='mail'>{item.email}</div>
      </div>
    )
  })
  }

      
      
      

      
        
      

    


      



   
    </div>
  );
}

export default App;
