import React from "react";
import Link from 'next/link'


export default function eventSideImage({events}) {
  return (
    <>
      {events.map((event) => (
        <div key={event.id} className="row g-0 border-0 rounded overflow-hidden mb-2 position-relative">
          <div className="col-auto d-none d-lg-block">
            <Link href={`/event/${event.id}`}>
              <a>
                <img
                  className="bd-placeholder-img h-100" width="200" 
                  src={event.image}
                  alt={event.title}
                />
              </a>
            </Link>
            </div>
            <div className="col p-4 d-flex flex-column position-static">
              <h6 className="d-inline-block mb-2 text-primary">
                <Link href={`/event/${event.id}`}>
                  <a
                    className="hover:underline hover:text-teal"
                    dangerouslySetInnerHTML={{ __html: event.title }}
                  />
                </Link>
              </h6>
              <h5 className="mb-0">
                <Link href={`/event/${event.id}`}>
                  <a
                    className="hover:underline hover:text-teal"
                    dangerouslySetInnerHTML={{ __html: event.title }}
                  />
                </Link>
              </h5>
              <p className="card-text my-2"  
                dangerouslySetInnerHTML={{ __html: event.body.substring(3, 100) }}>
              </p>
              <h6 className="card-text my-2"  
                dangerouslySetInnerHTML={{ __html: event.created_date.substring(0, 16) }}>
              </h6>
            </div>
        </div>
      ))}
    </>
  );
}
