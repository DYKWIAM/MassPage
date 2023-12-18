import login from "./apis/login.js"
import events from "./apis/events.js"
import reservations from "./apis/reservations.js"


export default async function(server, db){
  // connect rest api:s to web server and database
   await login(server, db)  
   await events(server,db)
   await reservations(server, db)

}