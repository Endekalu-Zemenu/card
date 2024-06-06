import pic from "../assets/images/profile.jpg"

const Info = (props) => {
  return (
    <div>
      <img src={pic} className={props.img}/>
      <h2 className={props.h2}>Endekalu Zemenu</h2>
      <p className={props.p1}>Backend Developer</p>
      <p className={props.p2}>Loremipsumdolor.com</p>
      <div className={props.buttons}>
        <button className={props.email}><i className="fa-solid fa-envelope"></i>Email</button>
        <button className={props.linkedin} id="linkedin"><i className="fa-brands fa-linkedin"></i>LinkedIn</button>
      </div>
    </div>
  )
}

export default Info;
