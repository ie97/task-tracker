import Button from "./Button"

const Header = ( {title} ) => {
  const onClick = (e) => {
    console.log(e)
  }
  
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick}/>

    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

// css in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }
//<h1 style={headingStyle}>{title}</h1> 

export default Header

