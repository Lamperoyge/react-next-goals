// import React from "react";
// import Head from "next/head";
// import Link from "next/link";
//
// class Layout extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     static async getInitialProps({ req }) {
//         let pageProps = {};
//         if (Component.getInitialProps) {
//             pageProps = await Component.getInitialProps(ctx);
//         }
//
//         return { pageProps, isAuthenticated };
//     }
//     render() {
//         const { isAuthenticated, children } = this.props;
//         const title = "Welcome to Nextjs";
//         return (
//             <div>
//                 <Head>
//                     <title>{title}</title>
//                     <meta charSet="utf-8" />
//                     <meta
//                         name="viewport"
//                         content="initial-scale=1.0, width=device-width"
//                     />
//                 </Head>
//                 <header>
//                     <span className="navbar navbar-dark bg-dark">
//                         <span>
//                             <Link href="/">
//                                 <a className="navbar-brand">Home</a>
//                             </Link>
//                         </span>
//                         {isAuthenticated ? (
//                             <>
//                                 <span className="ml-auto">
//                   <span style={{ color: "white", marginRight: 30 }}>
//                     {this.props.loggedUser}
//                   </span>
//                                 </span>
//                                 <span>
//                                     <Link href="/">
//                                         <a className="logout" onClick={unsetToken}>
//                                             Logout
//                                         </a>
//                                     </Link>
//                                 </span>
//                             </>
//                         ) : (
//                             <>
//                                 <span className="ml-auto">
//                                     <Link href="/signin">
//                                         <a className="nav-link">Sign In</a>
//                                     </Link>
//                                 </span>
//
//                                 <span>
//                                     <Link href="/signup">
//                                         <a className="nav-link"> Sign Up</a>
//                                     </Link>
//                                 </span>
//                             </>
//                         )}
//                     </span>
//                 </header>
//                 <div>{children}</div>
//             </div>
//         );
//     }
// }
//
// export default defaultPage(Layout);
