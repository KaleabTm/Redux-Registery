import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { age, fname, gender, lname, midname, profession } from './store/action/action';

function App() {
  const firstname=useSelector(state=>state.firstName)
  const lastname=useSelector(state=>state.lastName)
  const middlename=useSelector(state=>state.middleName)
  const ages=useSelector(state=>state.Age)
  const genders=useSelector(state=>state.Gender)
  const professions = useSelector(state=>state.Profession)
  //console.log(firstname,lastname,middlename,ages,genders,professions)

  

  const [fnam,setFname]=useState()
  const [lnam,setLname]=useState()
  const [midnam,setMname]=useState()
  const [ Age,setAge]=useState()
  const [Gender,setGender]=useState()
  const [Profession,setProfession]=useState()
  
  const dispatch=useDispatch()

 

  return (
    <div className=" flex flex-col items-center">
     <div className=' border-2 border-cyan-700 border-spacing-8 my-10' >

      <p className='flex text-yellow-500 text-4xl my-7 ml-20 '>Register Here</p>
      <div className=' items-center '>
        <lable className='text-amber-600 mx-4 text-lg' >FIRSTNAME </lable>
        <input className="text-blue-900 text-xl" value={fnam} onChange={(e)=>setFname(e.target.value)}/>
        <button onClick={()=>dispatch(fname(fnam))} className=' mx-2 text-amber-400 text-lg '>Dispatch</button>
        <p className='text-blue-900 p-4 text-lg ml-20 '>Your FirstName :
             <lable className='text-amber-600 mx-4 text-lg ml-20' >{firstname}</lable>
        </p>
        
      </div>

      <div className=' items-center '>
      <lable className='text-amber-600 mx-4 text-lg' >LASTNAME </lable>
        <input className="text-blue-900 text-xl ml-2" value={lnam} onChange={(e)=>setLname(e.target.value)}/>
        <button onClick={()=>dispatch(lname(lnam))} className=' mx-2 text-amber-400 text-lg '>Dispatch</button>
        <p className='text-blue-900 p-4 text-lg ml-20 '>Your LastName is :
             <lable className='text-amber-600 mx-4 text-lg ml-20' >{lastname}</lable>
        </p>
      </div>


      <div className=' items-center '>
      <lable className='text-amber-600 mx-2 text-lg' >MIDDLENAME </lable>
        <input className="text-blue-900 text-xl" value={midnam} onChange={(e)=>setMname(e.target.value)}/>
        <button onClick={()=>dispatch(midname(midnam))} className=' mx-2 text-amber-400 text-lg '>Dispatch</button>
        <p className='text-blue-900 p-4 text-lg ml-20 '>Your MiddleName is :
             <lable className='text-amber-600 mx-4 text-lg ml-20' >{ middlename}</lable>
        </p>
      </div>


      <div className=' items-center '>
      <lable className='text-amber-600 mx-9 text-lg' >AGE </lable>
        <input className="text-blue-900 text-xl ml-6" value={Age} onChange={(e)=>setAge(e.target.value)}/>
        <button onClick={()=>dispatch(age(Age))} className=' mx-2 text-amber-400 text-lg '>Dispatch</button>
        <p className='text-blue-900 p-4 text-lg ml-20'>Your age is :
             <lable className='text-amber-600 mx-4 text-lg ml-20' >{ages}</lable>
        </p>
      </div>

      <div className=' items-center '>
      <lable className='text-amber-600 mx-5 text-lg' >GENDER </lable>
        <input className="text-blue-900 text-xl ml-6" value={Gender} onChange={(e)=>setGender(e.target.value)}/>
        <button onClick={()=>dispatch(gender(Gender))} className=' mx-2 text-amber-400 text-lg '>Dispatch</button>
        <p className='text-blue-900 p-4 text-lg ml-20'>Your Gender :
             <lable className='text-amber-600 mx-4 text-lg ml-20' >{genders}</lable>
        </p>
      </div>

      <div className=' items-center '>
      <lable className='text-amber-600 mx-4 text-lg' >PROFESSION </lable>
        <input className="text-blue-900 text-xl" value={Profession} onChange={(e)=>setProfession(e.target.value)}/>
        <button onClick={()=>dispatch(profession(Profession))} className=' mx-2 text-amber-400 text-lg '>Dispatch</button>
        <p className='text-blue-900 p-4 text-lg ml-20'>Your Profession is :
             <lable className='text-amber-600 mx-4 text-lg ml-20' >{professions}</lable>
        </p>
      </div>
     
     </div>

        
        

     
    </div>
  );
}

export default App;
