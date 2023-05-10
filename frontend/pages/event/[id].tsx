import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import EventBody from '../../components/EventBody'; 
import HeaderPage from '../../components/Headers/HeaderPage'; 

import Navbar from "../../components/Navbars/DesktopNavigation";
import Footer from "../../components/Footers/Footer";


import { getEventContentByPassingEventId, listallEvents } from '../../lib/api'


export default function Post({ event }) {
  const router = useRouter(); 

  return (
   
    <div style={{background: "#FCFCFC"}} dir="ltr" className="font-dinnextltarabic">
    <div id="page-transition"></div>
    <Navbar />
      <Head>
        <title>Simple React App</title>
      </Head>
        <HeaderPage event={event} /> 
        <div className="py-5 container">
            <EventBody content={event.body} /> 
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const id = params.id; 
  const results = await getEventContentByPassingEventId(id);
  console.log("getStaticProps"); 
  console.log("%%%"); 
  console.log(results[0].body); 
  console.log(results); 
  return {
    props: {
      event: results[0]
    }
  }
}

export async function getStaticPaths() {
  const events = await listallEvents();
  console.log("getStaticPaths"); 
  console.log(events); 
  return {
    paths: events.map(event => {
      const id = event.id;      
      return {
        params: {
          id
        }
        
      }
    }),
    fallback: false
  }
}
