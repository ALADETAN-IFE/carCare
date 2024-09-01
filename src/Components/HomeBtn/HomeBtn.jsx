import './homeBtn.css'

const HomeBtn = ({title, runThisFunc, edit}) => {
  return (
    <button className='HomeBtn' onClick={runThisFunc} style={edit} >{title}</button>
  )
}

export default HomeBtn