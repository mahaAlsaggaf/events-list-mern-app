import React from "react";
import Link from 'next/link'

export default function EventSquaredImage({
  events
}) {
  return (
    <>
      {events.map((event) => (
        <div key={event.id} className="col">
          <div className="bg-image img-fluid event-bg-overlay h-100" style={{
            background:`linear-gradient(rgba(148, 146, 146, 0.2), rgba(0, 0, 0, 0.5)),url(${event.image})`}}> 
            <div style={{paddingTop: "75%"}} className="card-body">
              <h5 className="card-title">
                <Link href={`/event/${event.id}`}>
                  <a
                    className="text-white hover:underline hover:text-teal"
                    dangerouslySetInnerHTML={{ __html: event.title }}
                  />
                </Link>
              </h5>
              <p className="text-white card-text text-xs my-2"  
                dangerouslySetInnerHTML={{ __html: event.body.substring(3, 100) }}>
              </p>
              <h6 className="text-white card-text text-xs my-2"  
                dangerouslySetInnerHTML={{ __html: event.created_date.substring(0, 16) }}>
              </h6>
            </div>
          </div>
        </div> 
        ))}
       
    </>
  );
}
