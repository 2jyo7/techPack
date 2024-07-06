
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';


const Feature = () => {
  const [file, setFile] = useState<any>()
  const [description, setDescription] = useState<any>("")
  const [allRes, setAllRes] = useState<any>([])

  const submit = async (event: any) => {
    event.preventDefault()
  
    const formData = new FormData()
    formData.append("image", file)
    formData.append("description", description)
  
    const result = await axios.post('http://localhost:4000/api/images/postNews', formData, { headers: {'Content-Type': 'multipart/form-data'}})
    console.log(result.data)
    }

  const getData = async () => {
    const allData = await axios.get('http://localhost:4000/api/images/getTech');
  console.log(allData.data);
  return setAllRes(allData.data)
  }

  useEffect(() => {
    getData()
  },[]);
  
console.log(typeof [allRes]);


return (
  <div className='grid grid-cols-2'>
    <div >
    <div className="h-screen w-full flex items-center justify-center  bg-gray-200 dark:bg-gray-800">
  {/* product card */}
  <article className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
     {allRes && allRes.map((res: any )=> {
   <div key={res._id}>
     {/* <div>
      <Image
        className="object-cover h-64 w-full"
        src={res.imageName}
        alt="Converse sneakers"
        width={500}
        height={600}
      />
    </div>
    <div className="flex flex-col gap-1 mt-4 px-4">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50">
        {res.description}
      </h2>
      
    </div> */}
   </div>

     })}
   
   
  </article>
</div>

    </div>
    <div className=' grid w-2/3 items-center justify-center m-20' >
    <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
  <div className="w-full">
    <div className="text-center">
      <h1 className="text-3xl font-semibold text-gray-900">Upload The Image</h1>
      <p className="mt-2 text-gray-500"></p>
    </div>
    <div className="mt-5">
      <form onSubmit={submit}>
        <div className="relative mt-6">
          <input
          className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"

           name={file} 
           onChange={(e: any) => setFile(e.target.files[0])} 
           type="file" 
           accept="image/*"

          />
          <label
            htmlFor="techImg"
            className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
          >
            Tech Images
          </label>
        </div>
        <div className="relative mt-6">
          <input
           onChange={e => setDescription(e.target.value)} 
          type="text"
          className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"

          />
          <label
            htmlFor="techMentions"
            className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
          >
            Mentions About Tech...!
          </label>
        </div>
        <div className="my-6">
          <button
            type="submit"
            className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
        <p className="text-center text-sm text-gray-500">
        Done..!
          <Link
            href="/"
            className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
          >
           Back to home
          </Link>
          .
        </p>
      </form>
    </div>
  </div>
</div>

    </div>
  </div>
)

}




export default Feature