
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
const api = "https://picsum.photos/v2/list?page=";

const Card = ({ info, setInfo }) => {
  const { id } = useParams();
  const [cardinfo, setCardInfo] = useState();
  const [allcardinfo, setAllCardInfo] = useState();
  const [update, setUpdate] = useState(false);

  const [updatename,setUpdateName] = useState();
  const [updateauthor,setUpdateAuthor] = useState();
  const [updatedesp,setUpdateDesp] = useState();

  useEffect(() => {
    getinfo();
  }, [])

  const getinfo = async () => {
    const data = await JSON.parse(localStorage.getItem('newcards'));
    setAllCardInfo(data);
    data.map((x) => {
      if (x.id == id) {
        setCardInfo(x);
        setUpdateName(x.name);
        setUpdateAuthor(x.author);
        setUpdateDesp(x.desp);
      }
    })
  }

  return cardinfo ?
    (
      <>
        {update ?
          <div className='flex items-center justify-center flex-col gap-6'>
            <input
              value={updatename}
              onChange={(e) => {
                setUpdateName(e.target.value);
              }}
              className='rounded-md text-4xl shadow-xl border-2 border-blue-400 w-80'
            ></input>
            <input
              value={updateauthor}
              onChange={(e) => {
                setUpdateAuthor(e.target.value);
              }}
              className='rounded-md text-4xl shadow-xl border-2 border-blue-400 w-80'
            ></input>
            <input
              value={updatedesp}
              onChange={(e) => {
                setUpdateDesp(e.target.value);
              }}
              className='rounded-md text-4xl shadow-xl border-2 border-blue-400 w-80'
            ></input>
            <button
              className='text-3xl bg-slate-600 w-20'
              onClick={() => {
                  setAllCardInfo(allcardinfo.map((x)=>{
                    if(x.id==id){
                      x.name = updatename;
                      x.author = updateauthor;
                      x.desp = updatedesp;
                    }
                    else{
                      x=x;
                    }
                  }))
                  localStorage.setItem("newcards",JSON.stringify(allcardinfo));
                  setUpdate(false);
              }}
            >done</button>
          </div>
          :
          <div>
            <h1 className='text-4xl' >{cardinfo.name}</h1>
            <h1 className='text-4xl' >{cardinfo.author}</h1>
            <h1 className='text-4xl' >{cardinfo.desp}</h1>
          </div>
        }
        <div>
          <img src={cardinfo.url} alt="" className='w-96' />
        </div>

        <div>
          <h1 className='text-4xl' >Remove the project</h1>
          <Link to='/' >
            <button className='text-4xl bg-gray-600'
              onClick={() => {
                const filtered = (allcardinfo.filter((card) => card.id != cardinfo.id));
                setInfo(filtered);
                localStorage.setItem("newcards", JSON.stringify(filtered));
              }}
            >Remove</button>
          </Link>
        </div>
        <div>
          <h1 className='text-4xl' >want to update the info </h1>
          <button className='text-4xl bg-gray-600'
            onClick={() => {
              setUpdate(true);
            }}
          >Update</button>
        </div>
      </>
    ) : ""
}

export default Card