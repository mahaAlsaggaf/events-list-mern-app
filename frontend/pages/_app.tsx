import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import "../styles/custom.css";
import Router from 'next/router';


// TODO Impalmet withou pakcage 
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp