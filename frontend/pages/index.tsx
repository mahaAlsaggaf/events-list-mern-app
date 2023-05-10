import Head from 'next/head'; 
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link'
import EventSquaredImage from '../components/Events/EventSquaredImage'; 
import EventSideImage from '../components/Events/EventSideImage'; 
import EventUpperImage from '../components/Events/EventUpperImage'; 
import EventBannerImage from '../components/Events/EventBannerImage'; 
import EventText from '../components/Events/EventText'; 
import Navbar from "../components/Navbars/DesktopNavigation";
import Footer from "../components/Footers/Footer";
import SectionSeparator from '../components/SectionSeparator';
import HeaderHome from '../components/Headers/HeaderHome';
import { getEvents } from '../lib/api'
import { SITE_NAME } from '../lib/constants'

export default function Index({allEvents}) {
  const events = allEvents; 

  return (
    <div style={{background: "#FCFCFC"}} dir="ltr" className="font-dinnextltarabic">
        <div id="page-transition"></div>
        <Navbar />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Simple React App {SITE_NAME}</title>
      </Head>
      <HeaderHome />
      <div className="py-5 container">        
      {/* // the most reading Events // pass three Events values  */}
        <section className="section">
            <div className="container mb-2">
                <div className="d-flex justify-content-between">
                    <h4 className="darkgray text-xl">Recent Events: </h4>
                    <Link href="/events">
                        <a href="/events" className="inline darkgray text-sm active:underline-offset-8 active:underline active:text-teal hover:underline-offset-8 hover:underline hover:text-teal">Explre More <MdKeyboardArrowRight className="teal inline" size='10'/> </a>   
                    </Link>

                </div>
            </div>
            <div className="relative container mx-auto">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                <EventSquaredImage
                    events = {events.slice(0, 3)}
                />
              </div>
            </div>
        </section>
        {/* // second section  */}
        <section className="section">
          <div className="relative container mx-auto">
            <div className="row row-cols-md-2 g-4">
              <EventUpperImage
                events = {events.slice(0, 1)} 
              />
              <div className="cols">
                <EventSideImage 
                    events = {events.slice(0, 3)} 
                />
              </div>
            </div>
          </div>
        </section>
        {/* // section seprator  */}
        <section className="section">
           <div className="relative container mx-auto">
             <div className="row">
                <SectionSeparator/>
             </div>
          </div>
        </section>
        {/* // third section  */}
        <section className="section">
           <div className="relative container mx-auto">
             <div className="row g-4">
                <EventBannerImage
                  events = {events.slice(0, 1)} 
                />
             </div>
          </div>
        </section>
        {/* // fourth section  */}
        <section className="section">
          {/* Flex Container */}
          <div className="relative container mx-auto">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
              <EventUpperImage
                      events = {events.slice(0, 4)} 
                    />
            </div>
          </div>
        </section>
        {/* // fifth section  */}

        <section className="section">
          <div className="relative container mx-auto">
            <div className="row row-cols-md-2">
              <div className="cols">
                <EventText 
                  events = {events.slice(0, 3)} 
                />
              </div>
              <EventSquaredImage
                  events = {events.slice(0, 1)} 
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
    props: {allEvents},

  }
}

