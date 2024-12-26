import './App.css'


const Message =({isLoggedIn}) => {
  // if(isLoggedIn){
  //   return <p>Welcome Back, User!</p>
  // }else{
  //   return <p>Please Login to continue</p>
  // }

  return isLoggedIn ? <p>WelcomeBack, User!</p> : <p>Please Login to continue.</p>
}


//single line componenet
const Greeting = ({isMorning}) => <p>{isMorning ? "Good Morning" : "Good Evening!"}</p>


//show  noti

const ShowNotifcation = ({notification}) =>{
  return <div>{notification && <p>{notification}</p>}</div>
}


const TicketPricing = ({passengerAge}) =>{
  let price = 100
  return (
    <>
      {passengerAge > 60 ? <p>Ticket Price: {price- 0.15*price}</p> : <p>Ticket Price: {price}</p>}
    </>
  )
}


export default function App(){
  return(
    <>
    <Message isLoggedIn={true}/>
      <Greeting isMorning={true} />
      <ShowNotifcation notification="Notification Message" />
      <TicketPricing passengerAge={70} />
    </>
  )
}