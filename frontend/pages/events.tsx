import Head from 'next/head'
import PostUpperImage from '../components/Events/EventUpperImage'; 

import Navbar from "../components/Navbars/DesktopNavigation";
import Footer from "../components/Footers/Footer";

import { getEvents } from '../lib/api'
import { SITE_NAME } from '../lib/constants'

export default function Reports({allEvents}) {
  const events = allEvents; 

  return (
    //   <></>
    <div style={{background: "#FCFCFC"}} dir="ltr" className="font-dinnextltarabic">
    <Navbar />
      <Head>
        <title>Simple React App {SITE_NAME}</title>
      </Head>
       
        <div className="py-5 container">       
        <section className="section">
            <div className="relative container mx-auto my-5">
                <div className="text-center">
                    <h1 className="text-black text-4xl">Events List</h1>
                </div>
            </div>
            <div className="relative container mx-auto">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <PostUpperImage
                      events = {events.slice(0, 9)}
                  />
              </div>
            </div>
        </section> 
        </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const allEvents = await getEvents();
 
  console.log(allEvents[0]); 

  return {
    props: { allEvents},

  }
}

