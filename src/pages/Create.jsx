import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'flowbite'

const Create = ({ info, setInfo }) => {
  const api = "https://picsum.photos/v2/list?page=";
  const [imgname, setImgName] = useState("");
  const [authorname, setAuthorName] = useState('');
  const [categoty, setCategory] = useState('');
  const [desp, setDesp] = useState('');
  const [imgurl, setImgurl] = useState('');
  const [id,setID] = useState();

  useEffect(() => {
    apiCall();
  },[]);

  const apiCall = async () => {
    const num = Math.floor(Math.random() * 30);
    const data = await fetch(`${api + num}&limit=1`);
    const json = await (data.json());

    setID(num);
    setImgurl(json[0]);
  };

    
  return (
    <section class="bg-white dark:bg-gray-900">
    <div className='flex items-center justify-center py-4 px-4'>
        <img className='w-96' src={imgurl?.download_url} alt="" />
    </div>
  <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add This above Image</h2>
      <form action="#">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Name</label>
                  <input
                    value={imgname} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    onChange={(e)=>{
                        setImgName(e.target.value);
                    }}
                  ></input>
              </div>
              <div class="w-full">
                  <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                  placeholder="Author Name"
                  value={authorname}
                    onChange={(e)=>{
                        setAuthorName(e.target.value);
                    }}
                  />
              </div>
              
              <div>
                  {/* <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label> */}
                  {/* <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Select category</option>
                      <option value="TV" onClick={setCategory("Electronics")}>Electronics</option>
                      <option value="PC" onClick={setCategory("Landscape")} >Landscape</option>
                      <option value="GA" onClick={setCategory("Portrait")}>Portrait</option>
                      <option value="PH" onClick={setCategory("Others")}>Others</option>
                  </select> */}
              </div>
             
              <div class="sm:col-span-2">
                  <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                  placeholder="Your description here"
                  value={desp}
                    onChange={(e)=>{
                        setDesp(e.target.value);
                    }}
                  ></textarea>
              </div>
          </div>
          <Link to='/'>
          <button className="bg-orange-300 inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            onClick={()=>{
                setInfo([...info,{
                    "name":imgname,
                    "author":authorname,
                    "desp":desp,
                    "id":id,
                    "url":imgurl?.download_url
                }])
            }}
          >
              Add product
          </button>
          </Link>
      </form>
  </div>
</section>
  )
}

export default Create