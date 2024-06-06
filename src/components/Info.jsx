import pic from "../assets/images/profile.jpg"

const Info = () => {
  return (
    <div>
      <img src={pic} className="rounded-t-md"/>
      <h2 className="text-2xl flex justify-center font-bold p-1 pb-0">Endekalu Zemenu</h2>
      <p className="flex justify-center text-base text-slate-400">Backend Developer</p>
      <p className="flex justify-center text-sm">Loremipsumdolor.com</p>
      <div className="flex justify-around py-2 px-6">
        <button className="flex justify-center items-center w-32 gap-3 text-lg h-10 bg-slate-100 text-black"><i className="fa-solid fa-envelope"></i>Email</button>
        <button className="flex justify-center items-center w-32 gap-3 text-lg bg-sky-700 h-10"><i className="fa-brands fa-linkedin"></i>LinkedIn</button>
      </div>
    </div>
  )
}

export default Info;
