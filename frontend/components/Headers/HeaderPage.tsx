
import {BiHomeAlt} from 'react-icons/bi';
import Link from 'next/link';

export default function HeaderPage({event}) {
    return ( 
      <>
      <section className="bg-image img-fluid post-page-bg-overlay">
        {/* Flex Container */}
        <div className="py-5 container">
          <div className="p-4 p-md-5 mt-5 text-white">
            <div className="row">
                <div className="col d-flex flex-column position-static">
                  <h2 className="mb-0">
                    <Link href={`/event/${event.id}`}>
                      <a
                        className="text-white"
                        dangerouslySetInnerHTML={{ __html: event.title }}
                      />
                    </Link>
                  </h2>
              </div>
            </div>
          </div>
        </div>
      </section>       
    </>
  );
}