export default function Face({value}){

  let face = ""



  switch(value){
    case 1:face = <div className="dice--dot"><i className="fa-solid fa-circle"></i></div>
          break;
    case 2:face = <div><div className="two--first"><div className="dice--dot"><i className="fa-solid fa-circle"></i></div></div><div className="two--second"><div className="dice--dot"><i className="fa-solid fa-circle"></i></div></div></div>
          break;
    case 3:face = <div><div className="three--first"><div className="dice--dot"><i className="fa-solid fa-circle"></i></div></div><div className="three--second"><div className="dice--dot"><i className="fa-solid fa-circle"></i></div></div><div className="three--third"><div className="dice--dot"><i className="fa-solid fa-circle"></i></div></div></div>
          break;
    case 4:face = <div><div className="four--first"><div className="dice--dot"><i className="fa-solid fa-circle"></i></div><div className="dice--dot"><i className="fa-solid fa-circle"></i></div></div><div className="four--second"><div className="dice--dot"><i className="fa-solid fa-circle"></i></div><div className="dice--dot"><i className="fa-solid fa-circle"></i></div></div></div>
          break;
    case 5:face = <div><div className="five--first"><div className="dice--dot"><i className="fa-solid fa-circle"></i></div><div className="dice--dot"><i className="fa-solid fa-circle"></i></div></div><div className="five--second"><div className="dice--dot"><i className="fa-solid fa-circle"></i></div></div><div className="five--third"><div className="dice--dot"><i className="fa-solid fa-circle"></i></div><div className="dice--dot"><i className="fa-solid fa-circle"></i></div></div></div>
          break;
    case 6:face = <div><div className="six--first"><div className="dice--dot"><i className="fa-solid fa-circle"></i></div><div className="dice--dot"><i className="fa-solid fa-circle"></i></div></div><div className="six--second"><div className="dice--dot"><i className="fa-solid fa-circle"></i></div><div className="dice--dot"><i className="fa-solid fa-circle"></i></div></div><div className="six--third"><div className="dice--dot"><i className="fa-solid fa-circle"></i></div><div className="dice--dot"><i className="fa-solid fa-circle"></i></div></div></div>
          break;
    default: break;
  }

  console.log(face)
  return (  
    <div>{face}</div>
  )
}