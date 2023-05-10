import React from "react";
import Link from 'next/link'


export default function eventBannerImage({events}) {
  return (
    <>
          {events.map((event) => (
          <div key={event.id} className="col">
            <div className="bg-image img-fluid event-bg-overlay" style={{
              background:`linear-gradient(rgba(148, 146, 146, 0.7), rgba(0, 0, 0, 0.9)),url(${event.image})`}}> 
              <div className="container p-lg-5 mx-lg-5">
                <div className="card-body p-lg-5 mx-lg-5">
                  <h2 className="card-title">
                    <Link href={`/event/${event.id}`}>
                      <a
                        className="text-white "
                        dangerouslySetInnerHTML={{ __html: event.title }}
                      />
                    </Link>
                  </h2>
                  <p className="text-white text-lg card-text my-2"  
                    dangerouslySetInnerHTML={{ __html: event.body.substring(3, 100) }}>
                  </p>
                  <h6 className="text-white card-text my-2"  
                    dangerouslySetInnerHTML={{ __html: event.created_date.substring(0, 16) }}>
                  </h6>
                </div>
              </div>
            </div>
          </div> 
          ))}

    </>
  );
}
