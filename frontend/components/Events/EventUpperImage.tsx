import React from "react";
import Link from 'next/link'

export default function eventUpperImage({events}) {
  return (
    <>
      {events.map((event) => (
        <div key={event.id} className="col mb-2"> 
          <div className="bg-image card border-0 h-100">
            <Link href={`/event/${event.id}`}>
              <a>
                <img
                  className="bd-placeholder-img card-img-top"
                  src={event.image}
                  alt={event.title}
                  width="100%"
                  height="300px"
                />
              </a>
            </Link>
            <div className="card-body text-start">
              <div>
                <h5 className="card-text">
                  <Link href={`/event/${event.id}`}>
                    <a
                      className="hover:underline hover:text-teal"
                      dangerouslySetInnerHTML={{ __html: event.title }}
                    />
                  </Link>
                </h5>
                <p className="card-text text-lead" 
                    dangerouslySetInnerHTML={{ __html: event.body.substring(3, 100) }}>
                </p>

                <h2 className="small card-text"
                    dangerouslySetInnerHTML={{ __html: event.created_date.substring(0, 16) }}>
                </h2>
              </div>
              
            </div>
          </div>
        </div>
        ))}
    </>


      );
}